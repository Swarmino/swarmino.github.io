import { disciplines, siteLinks } from '../../content/portfolio'
import { SectionMarker } from '../shared/SectionMarker'
import './WorkSection.css'

export function WorkSection() {
  return (
    <section className="work section-wrap" id="work" aria-labelledby="work-title">
      <SectionMarker index="02" tone="light">Selected disciplines</SectionMarker>
      <div className="work-heading">
        <h2 className="display-heading display-heading-light" id="work-title">
          One practice.<br />Many mediums.
        </h2>
        <p>I move comfortably from direction to detail, keeping the whole experience in view.</p>
      </div>
      <div className="project-grid">
        {disciplines.map((discipline) => (
          <a
            className="project-card"
            href={discipline.href}
            target="_blank"
            rel="noopener noreferrer"
            key={discipline.id}
          >
            <div className="card-topline">
              <span>{discipline.index}</span>
              <span className="card-arrow" aria-hidden="true">↗</span>
            </div>
            <div>
              <h3>{discipline.title}</h3>
              <p>{discipline.description}</p>
            </div>
            <div className="card-footer">
              <span>{discipline.tools}</span>
              <strong>{discipline.label}</strong>
            </div>
          </a>
        ))}
      </div>
      <nav className="work-links" aria-label="More work">
        <a href={siteLinks.github} target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>
        <a href={siteLinks.showreel} target="_blank" rel="noopener noreferrer">Showreel <span aria-hidden="true">↗</span></a>
        <a href={siteLinks.itch} target="_blank" rel="noopener noreferrer">Itch.io <span aria-hidden="true">↗</span></a>
      </nav>
    </section>
  )
}
