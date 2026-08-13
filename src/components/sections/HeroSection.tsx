import './HeroSection.css'

export function HeroSection() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow reveal reveal-one">Oslo, Norway · Front-end & UI</p>
        <h1 className="reveal reveal-two" id="hero-title">
          Victor
          <span>Falck-Næss</span>
        </h1>
        <div className="hero-intro reveal reveal-three">
          <p className="hero-statement">I design systems people can feel.</p>
          <div>
            <p>
              Developer, designer and team lead turning ambitious ideas into clear, expressive digital products.
            </p>
            <a className="text-link" href="#work">
              Enter the portfolio <span aria-hidden="true">↘</span>
            </a>
          </div>
        </div>
      </div>

      <figure className="hero-art reveal reveal-four">
        <div className="image-frame">
          <img
            src="/victory-purple.webp"
            alt="Purple halftone study of the Winged Victory of Samothrace"
            width="1036"
            height="1518"
            decoding="async"
            fetchPriority="high"
          />
        </div>
        <figcaption>
          <span>Form / motion / craft</span>
          <span>Portfolio 2026</span>
        </figcaption>
      </figure>

      <div className="hero-orbit" aria-hidden="true">
        <span>DESIGN × CODE × PLAY</span>
      </div>
    </section>
  )
}
