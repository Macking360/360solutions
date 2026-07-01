export default function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="360 Solutions home">
        <img src="/assets/marks/360solutions-mark.svg" alt="360 Solutions mark" width={28} height={28} />
        <span>360 Solutions</span>
      </a>
      <nav aria-label="Primary">
        <a href="/#products">Products</a>
        <a href="mailto:support@myagentleadsgenerator.com">Contact</a>
      </nav>
    </header>
  )
}
