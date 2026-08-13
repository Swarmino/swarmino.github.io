import { siteLinks, socialLinks } from '../../content/portfolio'
import './ContactSection.css'

export function ContactSection() {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <p className="contact-kicker">Available for good conversations</p>
      <h2 className="display-heading contact-heading" id="contact-title">
        Have an idea<br />with <em>energy?</em>
      </h2>
      <a className="contact-button" href={siteLinks.email}>
        <span>Start a conversation</span>
        <span aria-hidden="true">✉</span>
      </a>
      <footer className="site-footer">
        <p>Victor Falck-Næss · Oslo, Norway</p>
        <nav aria-label="Social links">
          {socialLinks.map((link) => (
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              key={link.label}
            >
              {link.shortLabel}
            </a>
          ))}
        </nav>
        <a href="#top">Back to top ↑</a>
      </footer>
    </section>
  )
}
