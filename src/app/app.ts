import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SiteHeader } from './layout/site-header/site-header';
import { AboutSection } from './sections/about-section/about-section';
import { ContactSection } from './sections/contact-section/contact-section';
import { HeroSection } from './sections/hero-section/hero-section';
import { Ticker } from './sections/ticker/ticker';
import { ToolkitSection } from './sections/toolkit-section/toolkit-section';
import { WaveBreak } from './sections/wave-break/wave-break';
import { WorkSection } from './sections/work-section/work-section';

@Component({
  selector: 'app-root',
  imports: [
    SiteHeader,
    HeroSection,
    Ticker,
    AboutSection,
    WaveBreak,
    WorkSection,
    ToolkitSection,
    ContactSection,
  ],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
