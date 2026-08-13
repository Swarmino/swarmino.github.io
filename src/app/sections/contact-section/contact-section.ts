import { ChangeDetectionStrategy, Component } from '@angular/core';

import { siteLinks, socialLinks } from '../../content/portfolio';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactSection {
  protected readonly email = siteLinks.email;
  protected readonly socialLinks = socialLinks;
}
