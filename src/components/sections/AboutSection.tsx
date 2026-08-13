import { facts } from '../../content/portfolio'
import { SectionMarker } from '../shared/SectionMarker'
import './AboutSection.css'

export function AboutSection() {
  return (
    <section className="about section-wrap" id="about" aria-labelledby="about-title">
      <SectionMarker index="01">About</SectionMarker>
      <div className="about-grid">
        <h2 className="display-heading" id="about-title">
          Logic in the bones.<br /><em>Feeling</em> on the surface.
        </h2>
        <div className="about-copy">
          <p>
            My work lives in the space between design and engineering. I care about how an experience looks,
            how it behaves, and whether the system behind it helps the next person do their best work.
          </p>
          <p>
            With backgrounds in game design and front-end & mobile development, I bring a multidisciplinary
            eye to product teams—from the first sketch to production code.
          </p>
          <dl className="facts">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
