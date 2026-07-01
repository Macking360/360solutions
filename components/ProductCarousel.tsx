'use client'

import { useState, useRef, useEffect } from 'react'

interface Slide {
  logoSrc: string
  logoAlt: string
  title: string
  description: string
  link: string
}

export default function ProductCarousel({ slides }: { slides: Slide[] }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)

  function goTo(nextIndex: number) {
    setActiveIndex((nextIndex + slides.length) % slides.length)
  }

  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${activeIndex * -100}%)`
    }
  }, [activeIndex])

  return (
    <>
      <div className="carousel">
        <button className="carousel-arrow" onClick={() => goTo(activeIndex - 1)} aria-label="Previous product">
          &#8592;
        </button>
        <div
          className="carousel-track"
          ref={trackRef}
          tabIndex={0}
          aria-label="Products carousel"
          onKeyDown={(e) => {
            if (e.key === 'ArrowLeft') { e.preventDefault(); goTo(activeIndex - 1) }
            if (e.key === 'ArrowRight') { e.preventDefault(); goTo(activeIndex + 1) }
          }}
        >
          {slides.map((slide, i) => (
            <article
              key={i}
              className={`product-card${i === activeIndex ? ' is-active' : ''}`}
              aria-hidden={i !== activeIndex}
            >
              <img className="card-product-logo" src={slide.logoSrc} alt={slide.logoAlt} width={72} height={72} />
              <h3>{slide.title}</h3>
              <p>{slide.description}</p>
              <a className="text-link" href={slide.link}>Open product page</a>
            </article>
          ))}
        </div>
        <button className="carousel-arrow" onClick={() => goTo(activeIndex + 1)} aria-label="Next product">
          &#8594;
        </button>
      </div>
      <div className="carousel-dots" role="tablist" aria-label="Select product slide">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-label={`Go to product ${i + 1}`}
            aria-selected={i === activeIndex}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </>
  )
}
