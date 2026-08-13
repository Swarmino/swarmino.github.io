import type { ReactNode } from 'react'

type SectionMarkerProps = Readonly<{
  children: ReactNode
  index: string
  tone?: 'dark' | 'light'
}>

export function SectionMarker({ children, index, tone = 'dark' }: SectionMarkerProps) {
  const className = tone === 'light' ? 'section-marker section-marker-light' : 'section-marker'

  return (
    <div className={className} aria-hidden="true">
      <span>{index}</span>
      <span>{children}</span>
    </div>
  )
}
