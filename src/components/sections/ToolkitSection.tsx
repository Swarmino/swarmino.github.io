import { toolkit } from '../../content/portfolio'
import { SectionMarker } from '../shared/SectionMarker'
import './ToolkitSection.css'

export function ToolkitSection() {
  return (
    <section className="toolkit section-wrap" aria-labelledby="toolkit-title">
      <SectionMarker index="03">Toolkit</SectionMarker>
      <h2 className="display-heading" id="toolkit-title">
        How I shape<br />the work.
      </h2>
      <div className="toolkit-list">
        {toolkit.map((item) => (
          <article className="toolkit-row" key={item.id}>
            <span aria-hidden="true">{item.id}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
