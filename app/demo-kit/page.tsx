import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Demo Kit',
  description: 'Request access to the TLS Guard demo kit from 360 Solutions.',
  openGraph: {
    title: 'Demo Kit | 360 Solutions',
    description: 'Demo kit is being finalized. Request access via support@myagentleadsgenerator.com.',
  },
}

export default function DemoKitPage() {
  return (
    <main>
      <section className="hero">
        <p className="eyebrow">Demo Kit</p>
        <h1>Demo kit is being finalized.</h1>
        <p className="subhead">Request access via support@myagentleadsgenerator.com and we will share the latest package.</p>
        <div className="cta-row">
          <a className="btn btn-primary" href="mailto:support@myagentleadsgenerator.com?subject=Demo%20Kit%20Request">
            <svg className="btn-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7 6h12l-1 10H8L7 6Zm2-3h8l1 2H8l1-2Zm-3 3H3v2h2l1 11h14l1-11h2V6h-3" />
            </svg>
            Request Demo Kit
          </a>
        </div>
      </section>
    </main>
  )
}
