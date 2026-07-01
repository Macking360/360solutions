import type { Metadata } from 'next'
import ProductCarousel from '@/components/ProductCarousel'
import WaitlistForm from '@/components/WaitlistForm'

export const metadata: Metadata = {
  title: '360 Solutions | Operator-grade assurance tools',
  description: '360 Solutions builds operator-grade assurance tools for managed service teams. TLS Guard is available now, with more products coming soon.',
  openGraph: {
    title: '360 Solutions | Operator-grade assurance tools',
    description: 'Explore assurance products for MSP and agency operators. Start with TLS Guard today.',
  },
}

const slides = [
  {
    logoSrc: '/assets/marks/tls-guard-logo.png',
    logoAlt: 'TLS Guard logo',
    title: 'TLS Guard',
    description: 'TLS Drift and Certificate Assurance with evidence-ready outputs for authorized endpoints.',
    link: '/products/tls-guard',
  },
  {
    logoSrc: '/assets/marks/tls-guard-logo.png',
    logoAlt: 'TLS Guard logo',
    title: 'TLS Guard - Operations',
    description: 'Quiet defaults, Digest and Alert outputs, and renewal visibility built for daily operator workflows.',
    link: '/products/tls-guard',
  },
  {
    logoSrc: '/assets/marks/tls-guard-logo.png',
    logoAlt: 'TLS Guard logo',
    title: 'TLS Guard - Assurance',
    description: 'Evidence Pack artifacts, manifest integrity, and executive-safe reporting for client handoff.',
    link: '/products/tls-guard',
  },
]

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <img className="hero-product-logo" src="/assets/marks/tls-guard-logo.png" alt="TLS Guard logo" width={108} height={108} />
        <p className="eyebrow">BC, Canada</p>
        <h1>Operator-grade assurance tools.</h1>
        <p className="subhead">360 Solutions builds calm, practical products for teams that need reliable assurance outputs without operational noise.</p>
        <p className="status-note">Status: Store approval in progress.</p>
        <div className="cta-row">
          <a className="btn btn-primary" href="mailto:support@myagentleadsgenerator.com?subject=TLS%20Guard%20Waitlist">
            <svg className="btn-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7 6h12l-1 10H8L7 6Zm2-3h8l1 2H8l1-2Zm-3 3H3v2h2l1 11h14l1-11h2V6h-3" />
            </svg>
            Join waitlist
          </a>
          <a className="btn btn-secondary" href="/demo-kit">
            <svg className="btn-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7 6h12l-1 10H8L7 6Zm2-3h8l1 2H8l1-2Zm-3 3H3v2h2l1 11h14l1-11h2V6h-3" />
            </svg>
            View Demo Kit
          </a>
        </div>
        <WaitlistForm />
      </section>

      <section id="products" className="products-section" aria-labelledby="products-title">
        <div className="section-head">
          <h2 id="products-title">Products</h2>
          <p>Browse TLS Guard views while additional products are in development.</p>
        </div>
        <ProductCarousel slides={slides} />
      </section>

      <section id="roadmap">
        <h2>Roadmap</h2>
        <div className="cards">
          <article className="card">
            <h3>Endpoint Inventory</h3>
            <p className="tier-note">Planned visibility layer to map endpoint ownership and assurance coverage.</p>
          </article>
          <article className="card">
            <h3>Portfolio Reporting</h3>
            <p className="tier-note">Planned cross-client rollups for monthly assurance reporting and trend review.</p>
          </article>
          <article className="card">
            <h3>Evidence Pack Portal</h3>
            <p className="tier-note">Planned secure access view for historical Evidence Packs and renewal timelines.</p>
          </article>
        </div>
      </section>
    </main>
  )
}
