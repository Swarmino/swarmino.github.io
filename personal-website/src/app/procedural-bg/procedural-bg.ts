// procedural-bg.component.ts
import {
  Component,
  OnDestroy,
  AfterViewInit,
  ElementRef,
  ViewChild,
  Input,
  HostListener,
  NgZone,
} from '@angular/core';

export type BgMode    = 'plasma' | 'voronoi' | 'flow' | 'static' | 'wave';
export type BgPalette = 'green' | 'amber' | 'ice' | 'white' | 'spectrum';

interface Pointer {
  /** Column coordinate in ASCII grid space */
  col: number;
  /** Row coordinate in ASCII grid space */
  row: number;
  /** Warp strength: 1 when pressed/touching, decays to 0 */
  strength: number;
  /** True while the pointer is actively down */
  active: boolean;
}

@Component({
  selector: 'procedural-bg',
  templateUrl: './procedural-bg.html',
  host: {
    class: 'fixed inset-0 z-0 block overflow-hidden bg-[#05050a]',
    // Prevent default touch behaviours (scroll, zoom) on the element
    '[style.touch-action]': '"none"',
  },
})
export class ProceduralBgComponent implements AfterViewInit, OnDestroy {
  @ViewChild('bgCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  @Input() mode: BgMode = 'plasma';
  @Input() palette: BgPalette = 'green';

  /** Font size in px — controls ASCII grid density */
  @Input() fontSize = 13;

  /**
   * Warp radius in ASCII grid cells.
   * Pointer influence falls off with a Gaussian of this radius.
   */
  @Input() warpRadius = 18;

  /**
   * Maximum warp displacement in grid cells.
   * Higher = more dramatic distortion under the cursor.
   */
  @Input() warpStrength = 8;

  /** How quickly released pointers fade out (0–1, lower = longer trail) */
  @Input() decayRate = 0.06;

  private ctx!: CanvasRenderingContext2D;
  private animId = 0;
  private t = 0;
  private cols = 0;
  private rows = 0;
  private fontW = 0;

  /** Active pointer map keyed by pointerId */
  private pointers = new Map<number, Pointer>();

  // Perlin
  private perm = new Uint8Array(512);
  private grad = [[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]];

  // Voronoi
  private vPoints: Array<{ x: number; y: number; vx: number; vy: number }> = [];
  private frozenGrid!: Float32Array;

  private readonly CHARSET =
    " .'`^\",:;Il!i><~+_-?][}{1)(|/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$";

  constructor(private zone: NgZone) {
    this.initPerm();
  }

  ngAfterViewInit(): void {
    this.ctx = this.canvasRef.nativeElement.getContext('2d')!;
    this.resize();
    this.initVoronoi();
    // Run animation loop outside Angular's change detection for performance
    this.zone.runOutsideAngular(() => this.loop());
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.animId);
  }

  // ─── Resize ───────────────────────────────────────────────────────────────

  @HostListener('window:resize')
  onResize(): void {
    this.resize();
    if (this.mode === 'voronoi') this.initVoronoi();
  }

  private resize(): void {
    const canvas = this.canvasRef.nativeElement;
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    this.fontW = this.fontSize * 0.6;
    this.cols  = Math.ceil(canvas.width  / this.fontW);
    this.rows  = Math.ceil(canvas.height / this.fontSize);
  }

  // ─── Pointer events (mouse + touch unified via Pointer Events API) ─────────

  @HostListener('pointerdown', ['$event'])
  onPointerDown(e: PointerEvent): void {
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    this.upsertPointer(e, true);
  }

  @HostListener('pointermove', ['$event'])
  onPointerMove(e: PointerEvent): void {
    if (this.pointers.has(e.pointerId)) {
      this.upsertPointer(e, true);
    }
  }

  @HostListener('pointerup', ['$event'])
  @HostListener('pointercancel', ['$event'])
  onPointerUp(e: PointerEvent): void {
    const p = this.pointers.get(e.pointerId);
    if (p) p.active = false;
  }

  private upsertPointer(e: PointerEvent, active: boolean): void {
    const canvas = this.canvasRef.nativeElement;
    const rect   = canvas.getBoundingClientRect();
    const px     = e.clientX - rect.left;
    const py     = e.clientY - rect.top;
    const col    = px / this.fontW;
    const row    = py / this.fontSize;

    const existing = this.pointers.get(e.pointerId);
    if (existing) {
      existing.col    = col;
      existing.row    = row;
      existing.active = active;
      if (active) existing.strength = 1;
    } else {
      this.pointers.set(e.pointerId, { col, row, strength: 1, active });
    }
  }

  // ─── Public API ───────────────────────────────────────────────────────────

  setMode(mode: BgMode): void {
    this.mode = mode;
    if (mode === 'voronoi') this.initVoronoi();
  }

  setPalette(palette: BgPalette): void { this.palette = palette; }

  // ─── Render loop ──────────────────────────────────────────────────────────

  private loop = (): void => {
    const ctx    = this.ctx;
    const canvas = this.canvasRef.nativeElement;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font         = `${this.fontSize}px "Courier New", monospace`;
    ctx.textBaseline = 'top';

    if (this.mode === 'voronoi') this.precomputeVoronoi();

    // Decay released pointers; cull fully-faded ones
    for (const [id, p] of this.pointers) {
      if (!p.active) {
        p.strength -= this.decayRate;
        if (p.strength <= 0) { this.pointers.delete(id); continue; }
      }
    }

    const ptrs = [...this.pointers.values()];

    for (let row = 0; row < this.rows; row++) {
      const y = row * this.fontSize;
      for (let col = 0; col < this.cols; col++) {

        // ── Compute warp displacement from all active pointers ─────────────
        let warpCol = col, warpRow = row;
        for (const p of ptrs) {
          const dc   = col - p.col, dr = row - p.row;
          const dist = Math.sqrt(dc * dc + dr * dr);
          if (dist < this.warpRadius * 3) {
            // Gaussian falloff
            const falloff = Math.exp(-(dist * dist) / (2 * this.warpRadius * this.warpRadius));
            const mag     = this.warpStrength * falloff * p.strength;
            // Repel outward from pointer
            if (dist > 0.001) {
              warpCol += (dc / dist) * mag;
              warpRow += (dr / dist) * mag;
            }
          }
        }

        const v  = this.mode === 'voronoi'
          ? this.sampleVoronoiWarped(warpCol, warpRow)
          : this.getVal(warpCol, warpRow);
        const ch = this.valToChar(v);
        if (ch === ' ') continue;

        // Brighten chars close to any pointer for extra pop
        let brightness = 1;
        for (const p of ptrs) {
          const dc   = col - p.col, dr = row - p.row;
          const dist = Math.sqrt(dc * dc + dr * dr);
          const glow = Math.exp(-(dist * dist) / (this.warpRadius * this.warpRadius * 0.5)) * p.strength;
          brightness = Math.max(brightness, 1 + glow * 0.7);
        }

        ctx.fillStyle = this.getColor(Math.min(1, v * brightness), col, row);
        ctx.fillText(ch, col * this.fontW, y);
      }
    }

    this.t += 0.016;
    this.animId = requestAnimationFrame(this.loop);
  };

  // ─── Noise value → char ───────────────────────────────────────────────────

  private valToChar(v: number): string {
    return this.CHARSET[Math.min(this.CHARSET.length - 1, Math.floor(v * this.CHARSET.length))];
  }

  private getColor(v: number, col: number, row: number): string {
    const b = v * 255;
    switch (this.palette) {
      case 'green':    return `rgb(${b * 0.12 | 0},${b | 0},${b * 0.47 | 0})`;
      case 'amber':    return `rgb(${b | 0},${b * 0.63 | 0},${b * 0.08 | 0})`;
      case 'ice':      return `rgb(${b * 0.24 | 0},${b * 0.78 | 0},${b | 0})`;
      case 'white':    return `rgb(${b * 0.86 | 0},${b * 0.86 | 0},${b * 0.9 | 0})`;
      case 'spectrum': return this.hsl((v * 180 + col * 0.3 + row * 0.1 + this.t * 20) % 360, 0.85, 0.4 + v * 0.4);
    }
  }

  private hsl(h: number, s: number, l: number): string {
    h /= 360;
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s, p = 2 * l - q;
    const f = (t: number) => {
      t = ((t % 1) + 1) % 1;
      if (t < 1/6) return p + (q - p) * 6 * t;
      if (t < 1/2) return q;
      if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
    };
    return `rgb(${f(h + 1/3) * 255 | 0},${f(h) * 255 | 0},${f(h - 1/3) * 255 | 0})`;
  }

  // ─── Noise modes ──────────────────────────────────────────────────────────

  private getVal(col: number, row: number): number {
    const nx = col * 0.06, ny = row * 0.12, tt = this.t;
    switch (this.mode) {

      case 'plasma': {
        const n1 = this.fbm(nx * 0.5 + tt * 0.07, ny * 0.5 + tt * 0.04, 5);
        const n2 = this.fbm(nx * 0.5 + n1 * 2 + 1.7 + tt * 0.05, ny * 0.5 + n1 * 2 + 9.2 - tt * 0.06, 4);
        return (this.fbm(nx * 0.5 + n2 * 2, ny * 0.5 + n2 * 2, 3) + 1) * 0.5;
      }

      case 'flow': {
        const angle = (this.fbm(nx * 0.7 + tt * 0.08, ny * 0.7 + tt * 0.06, 4) + 0.5) * Math.PI * 4;
        const flow  = Math.sin(angle + this.fbm(nx * 1.4 + 1.3, ny * 1.4) * Math.PI * 2);
        const speed = this.fbm(nx * 0.7 + 10, ny * 0.7 + 10, 3);
        return Math.abs(Math.sin(flow * 6 + tt * 0.5)) * (0.5 + speed * 0.5);
      }

      case 'wave': {
        const cx = col / this.cols * 2 - 1, cy = row / this.rows * 2 - 1;
        const srcs: [number, number][] = [
          [ 0.3 + Math.sin(tt * 0.20) * 0.2,  0.3 + Math.cos(tt * 0.15) * 0.2],
          [-0.3 + Math.cos(tt * 0.17) * 0.2, -0.2 + Math.sin(tt * 0.22) * 0.2],
          [ 0.0 + Math.sin(tt * 0.13) * 0.3,  0.4 + Math.cos(tt * 0.19) * 0.15],
        ];
        let v = 0;
        for (const [sx, sy] of srcs) {
          const d = Math.sqrt((cx - sx) ** 2 + (cy - sy) ** 2);
          v += Math.sin(d * 20 - tt * 3) * Math.exp(-d * 2);
        }
        return Math.min(1, Math.max(0, (v / 3 + this.fbm(nx * 0.5 + tt * 0.04, ny * 0.5 + tt * 0.03, 4) * 0.5 + 1) * 0.5));
      }

      case 'static': {
        const tt2 = tt * 2;
        const n1  = this.noise2D(nx * 4 + tt2 * 0.7, ny * 4 + tt2 * 0.5);
        const n2  = this.noise2D(nx * 8 + tt2,        ny * 8 + tt2 * 0.8);
        const n3  = this.fbm(nx + tt2 * 0.08, ny + tt2 * 0.05, 6);
        return Math.min(1, Math.max(0, (n1 * 0.3 + n2 * 0.2 + n3 * 0.5 + 1) * 0.5 + Math.sin(row * 0.3 + tt * 3) * 0.06));
      }

      default: return 0;
    }
  }

  // ─── Voronoi ──────────────────────────────────────────────────────────────

  private initVoronoi(): void {
    this.vPoints = Array.from({ length: 10 }, () => ({
      x: Math.random() * this.cols, y: Math.random() * this.rows,
      vx: (Math.random() - 0.5) * 0.03,
      vy: (Math.random() - 0.5) * 0.03,
    }));
    this.frozenGrid = new Float32Array(this.rows * this.cols);
  }

  private precomputeVoronoi(): void {
    for (const p of this.vPoints) {
      p.x += p.vx; if (p.x < 0 || p.x > this.cols) p.vx *= -1;
      p.y += p.vy; if (p.y < 0 || p.y > this.rows) p.vy *= -1;
    }
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols; col++) {
        this.frozenGrid[row * this.cols + col] = this.sampleVoronoiWarped(col, row);
      }
    }
  }

  private sampleVoronoiWarped(col: number, row: number): number {
    let d1 = 1e9, d2 = 1e9;
    for (const p of this.vPoints) {
      const d = (col - p.x) ** 2 + (row - p.y) ** 2;
      if (d < d1) { d2 = d1; d1 = d; } else if (d < d2) d2 = d;
    }
    const edge = Math.sqrt(d2) - Math.sqrt(d1);
    const nx = col * 0.06, ny = row * 0.12;
    return Math.min(1, Math.exp(-edge * 0.4) + this.fbm(nx * 0.5 + this.t * 0.02, ny * 0.5 + this.t * 0.02) * 0.25);
  }

  // ─── Perlin noise ─────────────────────────────────────────────────────────

  private initPerm(): void {
    const p = new Uint8Array(256);
    for (let i = 0; i < 256; i++) p[i] = i;
    for (let i = 255; i > 0; i--) {
      const j = (Math.random() * (i + 1)) | 0;
      [p[i], p[j]] = [p[j], p[i]];
    }
    for (let i = 0; i < 512; i++) this.perm[i] = p[i & 255];
  }

  private fade(t: number): number { return t * t * t * (t * (t * 6 - 15) + 10); }
  private lerp(a: number, b: number, t: number): number { return a + (b - a) * t; }

  private noise2D(x: number, y: number): number {
    const xi = Math.floor(x) & 255, yi = Math.floor(y) & 255;
    const xf = x - Math.floor(x),   yf = y - Math.floor(y);
    const u  = this.fade(xf),        v  = this.fade(yf);
    const p  = this.perm,             g  = this.grad;
    const dot = (h: number, dx: number, dy: number) => g[h & 7][0] * dx + g[h & 7][1] * dy;
    return this.lerp(
      this.lerp(dot(p[p[xi]     + yi],     xf,     yf),     dot(p[p[xi + 1] + yi],     xf - 1, yf),     u),
      this.lerp(dot(p[p[xi]     + yi + 1], xf,     yf - 1), dot(p[p[xi + 1] + yi + 1], xf - 1, yf - 1), u),
      v
    );
  }

  private fbm(x: number, y: number, oct = 4): number {
    let v = 0, amp = 0.5, freq = 1, max = 0;
    for (let i = 0; i < oct; i++) {
      v += this.noise2D(x * freq, y * freq) * amp;
      max += amp; amp *= 0.5; freq *= 2;
    }
    return v / max;
  }
}