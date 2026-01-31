import type { Metadata } from 'next'
import { Libre_Baskerville, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-libre-baskerville',
  display: 'swap',
})

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Catherine Dunn | PR Professional',
  description: 'Public Relations professional specializing in digital strategy, media relations, and brand storytelling.',
  keywords: ['PR', 'Public Relations', 'Digital Strategy', 'Media Relations', 'Brand Communications'],
  authors: [{ name: 'Catherine Dunn' }],
  openGraph: {
    title: 'Catherine Dunn | PR Professional',
    description: 'Public Relations professional specializing in digital strategy, media relations, and brand storytelling.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${libreBaskerville.variable} ${cormorantGaramond.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
