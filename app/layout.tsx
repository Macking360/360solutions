import type { Metadata } from 'next'
import './globals.css'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://macking360.github.io/360solutions'),
  title: {
    template: '%s | 360 Solutions',
    default: '360 Solutions | Operator-grade assurance tools',
  },
  description: '360 Solutions builds operator-grade assurance tools for managed service teams. TLS Guard is available now, with more products coming soon.',
  icons: { icon: '/assets/favicon.svg' },
  openGraph: {
    images: ['/assets/og.svg'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/assets/og.svg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}
