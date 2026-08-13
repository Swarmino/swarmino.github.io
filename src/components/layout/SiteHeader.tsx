import { siteLinks } from '../../content/portfolio'
import './SiteHeader.css'

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Back to top">
        VF<span>/</span>N
      </a>
      <nav aria-label="Primary navigation">
        <a href="#about">About</a>
        <a href="#work">Work</a>
        <a href="#contact">Contact</a>
      </nav>
      <a className="header-link" href={siteLinks.email}>
        <span><span className="header-link-prefix">Let&apos;s </span>talk</span>
        <span aria-hidden="true">↗</span>
      </a>
    </header>
  )
}
