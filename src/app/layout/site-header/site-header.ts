import { ChangeDetectionStrategy, Component } from '@angular/core';

import { siteLinks } from '../../content/portfolio';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.html',
  styleUrl: './site-header.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteHeader {
  protected readonly email = siteLinks.email;
}
