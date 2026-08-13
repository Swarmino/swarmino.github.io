import { ChangeDetectionStrategy, Component } from '@angular/core';

import { toolkit } from '../../content/portfolio';
import { SectionMarker } from '../../shared/section-marker/section-marker';

@Component({
  selector: 'app-toolkit-section',
  imports: [SectionMarker],
  templateUrl: './toolkit-section.html',
  styleUrl: './toolkit-section.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolkitSection {
  protected readonly toolkit = toolkit;
}
