import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

const TICKER_ITEMS = ['Developer', 'Designer', 'Product thinker'] as const;

@Component({
  selector: 'app-ticker',
  templateUrl: './ticker.html',
  styleUrl: './ticker.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Ticker {
  protected readonly isPaused = signal(false);
  protected readonly tickerItems = [...TICKER_ITEMS, ...TICKER_ITEMS];

  protected toggleMotion(): void {
    this.isPaused.update((isPaused) => !isPaused);
  }
}
