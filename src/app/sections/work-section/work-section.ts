import { ChangeDetectionStrategy, Component } from '@angular/core';

import { disciplines, siteLinks } from '../../content/portfolio';
import { SectionMarker } from '../../shared/section-marker/section-marker';

@Component({
  selector: 'app-work-section',
  imports: [SectionMarker],
  templateUrl: './work-section.html',
  styleUrl: './work-section.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkSection {
  protected readonly disciplines = disciplines;
  protected readonly siteLinks = siteLinks;
}
