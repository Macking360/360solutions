import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TLS Guard',
  description: 'TLS Guard gives MSP and agency operators assurance checks, renewal timelines, and defensible evidence packs.',
  openGraph: {
    title: 'TLS Guard | 360 Solutions',
    description: 'TLS Drift and Certificate Assurance with practical evidence outputs for authorized endpoints.',
  },
}

export default function TlsGuardPage() {
  return (
    <main>
      <section className="hero">
        <img className="hero-product-logo" src="/assets/marks/tls-guard-logo.png" alt="TLS Guard logo" width={108} height={108} />
        <p className="eyebrow">TLS Drift and Certificate Assurance</p>
        <h1>Keep certificate changes visible before they become outages.</h1>
        <p className="subhead">TLS Guard gives MSP and agency operators assurance checks, renewal timelines, and defensible evidence packs.</p>
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
      </section>

      <section id="problem">
        <h2>Problem → Outcome</h2>
        <ul>
          <li>Prevent renewal failures by tracking expiry windows before certificates go critical.</li>
          <li>Prevent TLS drift surprises by surfacing protocol, cipher, and certificate changes between runs.</li>
          <li>Prevent compliance gaps with evidence artifacts and immutable hash manifests.</li>
        </ul>
      </section>

      <section id="deliverables">
        <h2>What You Get</h2>
        <ul className="grid-list">
          <li><code>REPORT.html</code></li>
          <li><code>EXEC_SUMMARY.txt</code></li>
          <li><code>ALERTS.txt</code> and <code>ALERTS.eml</code></li>
          <li><code>RENEWALS.csv</code> and <code>RENEWALS.ics</code></li>
          <li>Per-endpoint JSON evidence files</li>
          <li>Evidence pack zip plus JSON manifests</li>
        </ul>
      </section>

      <section id="how">
        <h2>How It Works</h2>
        <ol>
          <li><strong>Configure:</strong> define authorized endpoints in YAML.</li>
          <li><strong>Run assurance:</strong> execute low-impact TLS assurance checks.</li>
          <li><strong>Export artifacts:</strong> deliver reports, alerts, and evidence packs.</li>
        </ol>
      </section>

      <section id="pricing">
        <h2>Pricing</h2>
        <div className="cards">
          <article className="card">
            <h3>Foundation</h3>
            <p className="price">CA$39.99<span>/mo</span></p>
            <p className="meta">3 seats (operators)</p>
            <p className="tier-note">Built for small teams that need reliable TLS assurance outputs without extra platform overhead.</p>
          </article>
          <article className="card card-accent">
            <h3>Pro</h3>
            <p className="price">CA$79.99<span>/mo</span></p>
            <p className="meta">10 seats (operators)</p>
            <p className="tier-note">Designed for multi-client operations that need more deployment flexibility and repeatable evidence delivery.</p>
          </article>
        </div>
        <p>Seats are human operators (not endpoints). Endpoints are configured in YAML.</p>
      </section>

      <section id="why-not-expiry-only">
        <h2>Why Not Just Expiry Alerts?</h2>
        <ul>
          <li>Detect configuration drift between runs</li>
          <li>Generate defensible evidence artifacts automatically</li>
          <li>Provide renewal calendar exports for planning</li>
          <li>Produce executive-safe summaries without rewriting</li>
        </ul>
        <p>One missed renewal can cost more than a year of assurance tooling.</p>
      </section>

      <section id="outage-coverage">
        <h2>What One Prevented Outage Covers</h2>
        <p>A single prevented outage can offset support spikes, reduce reputation impact, and ease SLA pressure during high-visibility service windows.</p>
      </section>

      <section id="comparison">
        <h2>Basic Expiry Monitor vs TLS Guard</h2>
        <div className="table-wrap">
          <table className="compare-table">
            <thead>
              <tr>
                <th>Capability</th>
                <th>Basic Expiry Monitor</th>
                <th>TLS Guard</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Expiry alerts</td><td>Yes</td><td>Yes</td></tr>
              <tr><td>TLS version confirmation</td><td>Limited</td><td>Yes</td></tr>
              <tr><td>Drift detection</td><td>No</td><td>Yes</td></tr>
              <tr><td>Evidence pack</td><td>No</td><td>Yes</td></tr>
              <tr><td>ICS export</td><td>No</td><td>Yes</td></tr>
              <tr><td>Executive summary</td><td>No</td><td>Yes</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="msp-resale">
        <h2>Built for MSP Resale</h2>
        <ul>
          <li><code>REPORT.html</code></li>
          <li><code>EXEC_SUMMARY.txt</code></li>
          <li>Evidence pack zip</li>
          <li>Renewal ICS exports</li>
        </ul>
        <p>Use internally or bundle into managed services.</p>
      </section>

      <section id="workflows">
        <h2>Fits MSP Workflows</h2>
        <ul>
          <li>Email-to-ticket compatible alerts and advisories.</li>
          <li>ICS renewal reminders for team calendars.</li>
          <li>CSV export for monthly reporting and QBRs.</li>
        </ul>
      </section>

      <section id="scope">
        <h2>Safety and Scope</h2>
        <ul>
          <li>Authorized endpoints only</li>
          <li>Verification-focused checks</li>
          <li>Read-only verification; no exploitation attempted.</li>
          <li>Not a pentest</li>
          <li>No agents</li>
        </ul>
      </section>

      <section id="faq">
        <h2>FAQ</h2>
        <details>
          <summary>Is TLS Guard cross-platform?</summary>
          <p>Yes. The core CLI is Python-based and runs on Windows, macOS, and Linux.</p>
        </details>
        <details>
          <summary>How do seats work?</summary>
          <p>Each subscription tier includes a fixed number of seats for operator use under your license terms.</p>
        </details>
        <details>
          <summary>What does it monitor?</summary>
          <p>TLS handshake metadata, certificate details, verification state, and expiry windows for configured endpoints.</p>
        </details>
        <details>
          <summary>What outputs are generated?</summary>
          <p>Run folders include HTML reports, executive summaries, alerts or digests, evidence JSON, and manifests.</p>
        </details>
        <details>
          <summary>Do I get renewal calendar files?</summary>
          <p>Yes. Renewal reminders are exported as CSV and ICS artifacts.</p>
        </details>
        <details>
          <summary>How is licensing handled?</summary>
          <p>Licensing is proprietary and documented in the included LICENSE and LICENSING files.</p>
        </details>
      </section>
    </main>
  )
}
