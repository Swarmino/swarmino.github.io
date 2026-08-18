import { ComponentFixture, TestBed } from '@angular/core/testing';

import { App } from './app';

describe('Portfolio application', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  function renderApp(): ComponentFixture<App> {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    return fixture;
  }

  it('renders the complete page structure and primary calls to action', () => {
    const fixture = renderApp();
    const page = fixture.nativeElement as HTMLElement;

    expect(page.querySelector('h1')?.textContent).toContain('Victor');
    expect(page.querySelector('h1')?.textContent).toContain('Falck-Næss');
    expect(page.querySelector('nav[aria-label="Primary navigation"]')).not.toBeNull();

    const sectionHeadings = [...page.querySelectorAll('h2')].map((heading) =>
      heading.textContent?.replace(/\s+/g, ' ').trim(),
    );
    expect(sectionHeadings).toEqual([
      'Technical depth.Design instinct.Product focus.',
      'Web, mobile,and interactive products.',
      'How I createvalue.',
      'Have a productworth building?',
    ]);

    const contactLink = [...page.querySelectorAll<HTMLAnchorElement>('a')].find((link) =>
      link.textContent?.includes('Talk about a role or project'),
    );
    expect(contactLink?.getAttribute('href')).toBe('mailto:contact@victorfn.com');
  });

  it('renders every discipline and protects links opened in a new tab', () => {
    const fixture = renderApp();
    const page = fixture.nativeElement as HTMLElement;
    const disciplineHeadings = [...page.querySelectorAll('.project-card h3')].map((heading) =>
      heading.textContent?.trim(),
    );

    expect(disciplineHeadings).toEqual([
      'Frontend & systems',
      'Mobile products',
      'Game design & interaction',
    ]);

    const externalLinks = page.querySelectorAll<HTMLAnchorElement>('a[target="_blank"]');
    expect(externalLinks.length).toBeGreaterThan(0);

    for (const link of externalLinks) {
      expect(link.rel).toContain('noopener');
      expect(link.rel).toContain('noreferrer');
    }
  });

  it('lets visitors pause the continuously moving ticker', () => {
    const fixture = renderApp();
    const page = fixture.nativeElement as HTMLElement;
    const pauseButton = page.querySelector<HTMLButtonElement>('.ticker-control');

    expect(pauseButton?.textContent).toContain('Pause motion');
    pauseButton?.click();
    fixture.detectChanges();

    expect(pauseButton?.textContent).toContain('Play motion');
    expect(pauseButton?.getAttribute('aria-pressed')).toBe('true');
    expect(page.querySelector('.ticker-track')?.classList.contains('is-paused')).toBe(true);
  });
});
