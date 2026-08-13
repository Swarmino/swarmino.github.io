import { useState } from 'react'
import './Ticker.css'

const tickerItems = ['Developer', 'Designer', 'Product thinker'] as const

export function Ticker() {
  const [isPaused, setIsPaused] = useState(false)

  return (
    <div className="ticker">
      <p className="visually-hidden">Developer, designer and product thinker</p>
      <button
        className="ticker-control"
        type="button"
        aria-pressed={isPaused}
        onClick={() => setIsPaused((paused) => !paused)}
      >
        {isPaused ? 'Play motion' : 'Pause motion'}
      </button>
      <div className={isPaused ? 'ticker-track is-paused' : 'ticker-track'} aria-hidden="true">
        {[...tickerItems, ...tickerItems].map((item, index) => (
          <span className="ticker-item" key={`${item}-${index}`}>
            <span>{item}</span>
            <i>✦</i>
          </span>
        ))}
      </div>
    </div>
  )
}
