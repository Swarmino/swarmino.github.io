import './App.css'

const links = {
  github: 'https://github.com/Swarmino',
  linkedin: 'https://www.linkedin.com/in/victorfn/',
  itch: 'https://swarmino.itch.io/',
  showreel: 'https://youtu.be/-XIfHc0to2s',
  email: 'mailto:contact@victorfn.com',
}

const disciplines = [
  {
    index: '01',
    title: 'Front-end & UI',
    description:
      'Interfaces with a strong visual point of view, thoughtful interaction and maintainable systems behind them.',
    tools: 'React · Next.js · TypeScript · Figma',
    href: links.github,
    label: 'Explore code',
  },
  {
    index: '02',
    title: 'Mobile products',
    description:
      'Native and cross-platform experiences shaped around the device, the context and the person holding it.',
    tools: 'SwiftUI · Kotlin · React Native',
    href: links.github,
    label: 'See projects',
  },
  {
    index: '03',
    title: 'Games & interaction',
    description:
      'Playful systems, rapid prototypes and digital worlds where code, art direction and feel meet.',
    tools: 'Unity · C# · Godot · Unreal',
    href: links.itch,
    label: 'Play the work',
  },
]

const toolkit = [
  ['Design', 'UI direction, prototyping, design systems, accessibility'],
  ['Build', 'React, Next.js, TypeScript, SwiftUI, Kotlin, C#'],
  ['Lead', 'Product thinking, collaboration, critique, team process'],
]

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Back to top">
          VF<span>/</span>N
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-link" href={links.email}>
          Let&apos;s talk <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow reveal reveal-one">Oslo, Norway · Front-end & UI</p>
            <h1 className="reveal reveal-two">
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
                src="/victory-purple.png"
                alt="Purple halftone study of the Winged Victory of Samothrace"
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

        <div className="ticker" aria-label="Developer, designer and product thinker">
          <div>
            <span>Developer</span><i>✦</i><span>Designer</span><i>✦</i><span>Product thinker</span><i>✦</i>
            <span aria-hidden="true">Developer</span><i aria-hidden="true">✦</i><span aria-hidden="true">Designer</span><i aria-hidden="true">✦</i><span aria-hidden="true">Product thinker</span><i aria-hidden="true">✦</i>
          </div>
        </div>

        <section className="about section-wrap" id="about">
          <div className="section-marker">
            <span>01</span>
            <span>About</span>
          </div>
          <div className="about-grid">
            <h2>Logic in the bones.<br /><em>Feeling</em> on the surface.</h2>
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
                <div><dt>Current focus</dt><dd>Front-end & UI leadership</dd></div>
                <div><dt>Education</dt><dd>Two bachelor&apos;s degrees</dd></div>
                <div><dt>Perspective</dt><dd>Design + engineering</dd></div>
              </dl>
            </div>
          </div>
        </section>

        <section className="wave-break" aria-label="Purple halftone wave artwork">
          <img src="/wave-purple.png" alt="Purple halftone interpretation of a great ocean wave" />
          <p><span>Make it useful.</span><span>Make it memorable.</span></p>
        </section>

        <section className="work section-wrap" id="work">
          <div className="section-marker section-marker-light">
            <span>02</span>
            <span>Selected disciplines</span>
          </div>
          <div className="work-heading">
            <h2>One practice.<br />Many mediums.</h2>
            <p>I move comfortably from direction to detail, keeping the whole experience in view.</p>
          </div>
          <div className="project-grid">
            {disciplines.map((discipline) => (
              <a
                className="project-card"
                href={discipline.href}
                target="_blank"
                rel="noreferrer"
                key={discipline.index}
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
          <div className="work-links">
            <a href={links.github} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
            <a href={links.showreel} target="_blank" rel="noreferrer">Showreel <span aria-hidden="true">↗</span></a>
            <a href={links.itch} target="_blank" rel="noreferrer">Itch.io <span aria-hidden="true">↗</span></a>
          </div>
        </section>

        <section className="toolkit section-wrap">
          <div className="section-marker">
            <span>03</span>
            <span>Toolkit</span>
          </div>
          <h2>How I shape<br />the work.</h2>
          <div className="toolkit-list">
            {toolkit.map(([title, description], index) => (
              <div className="toolkit-row" key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="contact-kicker">Available for good conversations</div>
          <h2>Have an idea<br />with <em>energy?</em></h2>
          <a className="contact-button" href={links.email}>
            <span>Start a conversation</span>
            <span aria-hidden="true">✉</span>
          </a>
          <footer>
            <p>Victor Falck-Næss · Oslo, Norway</p>
            <div>
              <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
              <a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub">gh</a>
              <a href={links.showreel} target="_blank" rel="noreferrer" aria-label="YouTube">yt</a>
            </div>
            <a href="#top">Back to top ↑</a>
          </footer>
        </section>
      </main>
    </div>
  )
}

export default App
