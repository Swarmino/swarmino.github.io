import { SiteHeader } from './components/layout/SiteHeader'
import { AboutSection } from './components/sections/AboutSection'
import { ContactSection } from './components/sections/ContactSection'
import { HeroSection } from './components/sections/HeroSection'
import { Ticker } from './components/sections/Ticker'
import { ToolkitSection } from './components/sections/ToolkitSection'
import { WaveBreak } from './components/sections/WaveBreak'
import { WorkSection } from './components/sections/WorkSection'

export function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="site-shell">
        <SiteHeader />
        <main id="main-content" tabIndex={-1}>
          <HeroSection />
          <Ticker />
          <AboutSection />
          <WaveBreak />
          <WorkSection />
          <ToolkitSection />
          <ContactSection />
        </main>
      </div>
    </>
  )
}
