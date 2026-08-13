import './WaveBreak.css'

export function WaveBreak() {
  return (
    <figure className="wave-break">
      <img
        src="/wave-purple.webp"
        alt=""
        width="1536"
        height="1024"
        loading="lazy"
        decoding="async"
      />
      <figcaption>
        <span>Make it useful.</span>
        <span>Make it memorable.</span>
      </figcaption>
    </figure>
  )
}
