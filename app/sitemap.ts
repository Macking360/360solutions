import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? ''
  return [
    { url: base, lastModified: new Date() },
    { url: `${base}/products/tls-guard`, lastModified: new Date() },
    { url: `${base}/demo-kit`, lastModified: new Date() },
  ]
}
