import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-section-marker',
  templateUrl: './section-marker.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionMarker {
  readonly index = input.required<string>();
  readonly tone = input<'dark' | 'light'>('dark');
}
