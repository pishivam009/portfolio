import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import './globals.css'
import { siteConfig } from '@/lib/data'

export const metadata: Metadata = {
  metadataBase: new URL('https://pishivam009.github.io'),
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
    'Treasury Technology',
    'TMS Integration',
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pishivam009.github.io/portfolio',
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
  url: 'https://pishivam009.github.io/portfolio',
  email: siteConfig.email,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bengaluru',
    addressCountry: 'India',
  },
  sameAs: [siteConfig.linkedin, siteConfig.github],
  knowsAbout: [
    'FinTech SaaS',
    'Bank Connectivity',
    'Python Automation',
    'AWS OpenSearch',
    'Grafana',
    'ISO 20022',
    'Enterprise Software Implementation',
    'SaaS Operations',
    'Treasury Management Systems',
    'Payment Formats',
  ],
  worksFor: {
    '@type': 'Organization',
    name: 'ION Group',
    url: 'https://iongroup.com',
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'VIT University',
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
        <link rel="canonical" href="https://pishivam009.github.io/portfolio" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
