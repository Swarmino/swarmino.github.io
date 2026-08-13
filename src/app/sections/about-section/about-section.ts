import { ChangeDetectionStrategy, Component } from '@angular/core';

import { facts } from '../../content/portfolio';
import { SectionMarker } from '../../shared/section-marker/section-marker';

@Component({
  selector: 'app-about-section',
  imports: [SectionMarker],
  templateUrl: './about-section.html',
  styleUrl: './about-section.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutSection {
  protected readonly facts = facts;
}
