import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The requested page was not found. Return to the 360 Solutions homepage.',
}

export default function NotFound() {
  return (
    <main>
      <section className="hero">
        <p className="eyebrow">404</p>
        <h1>Page not found.</h1>
        <p className="subhead">The page you requested is not available. Return to the homepage to continue.</p>
        <div className="cta-row">
          <a className="btn btn-primary" href="/">Return Home</a>
        </div>
      </section>
    </main>
  )
}
