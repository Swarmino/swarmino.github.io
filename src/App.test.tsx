import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('portfolio', () => {
  it('renders the complete page structure and primary calls to action', () => {
    render(<App />)

    expect(screen.getByRole('heading', { level: 1, name: /Victor Falck-Næss/i })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: /primary navigation/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /logic in the bones/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /one practice/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /how I shape/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /have an idea/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /start a conversation/i })).toHaveAttribute(
      'href',
      'mailto:contact@victorfn.com',
    )
  })

  it('renders every discipline and protects links opened in a new tab', () => {
    render(<App />)

    expect(screen.getByRole('heading', { level: 3, name: 'Front-end & UI' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Mobile products' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Games & interaction' })).toBeInTheDocument()

    const externalLinks = document.querySelectorAll<HTMLAnchorElement>('a[target="_blank"]')
    expect(externalLinks.length).toBeGreaterThan(0)

    for (const link of externalLinks) {
      expect(link.rel).toContain('noopener')
      expect(link.rel).toContain('noreferrer')
    }
  })

  it('lets visitors pause the continuously moving ticker', () => {
    render(<App />)

    const pauseButton = screen.getByRole('button', { name: /pause motion/i })
    fireEvent.click(pauseButton)

    expect(screen.getByRole('button', { name: /play motion/i })).toHaveAttribute('aria-pressed', 'true')
  })
})
