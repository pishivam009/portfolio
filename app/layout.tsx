import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import './globals.css'
import { siteConfig } from '@/lib/data'

export const metadata: Metadata = {
  metadataBase: new URL('https://piyush-shivam.github.io'),
  title: {
    default: `${siteConfig.name} — ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'Implementation Engineer',
    'FinTech',
    'Bank Connectivity',
    'SaaS Operations',
    'Python Automation',
    'AWS',
    'OpenSearch',
    'Grafana',
    'ISO 20022',
    'SWIFT',
    'Bengaluru',
    'Piyush Shivam',
    'ION Group',
    'TechOps',
    'Enterprise Migrations',
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://piyush-shivam.github.io',
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.description,
    siteName: `${siteConfig.name} Portfolio`,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: siteConfig.name,
  jobTitle: 'Implementation Engineer',
  description: siteConfig.description,
  url: 'https://piyush-shivam.github.io',
  email: siteConfig.email,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bengaluru',
    addressCountry: 'India',
  },
  sameAs: [siteConfig.linkedin],
  knowsAbout: [
    'FinTech SaaS',
    'Bank Connectivity',
    'Python Automation',
    'AWS OpenSearch',
    'Grafana',
    'ISO 20022',
    'Enterprise Software Implementation',
    'SaaS Operations',
  ],
  worksFor: {
    '@type': 'Organization',
    name: 'ION Group',
    url: 'https://iongroup.com',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="canonical" href="https://piyush-shivam.github.io" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
