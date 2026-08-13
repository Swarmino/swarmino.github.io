import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-wave-break',
  templateUrl: './wave-break.html',
  styleUrl: './wave-break.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WaveBreak {}
