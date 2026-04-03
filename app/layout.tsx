import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.svg',
  },
  title: 'Ride the Wave AI — Austin AI Meetup',
  description: 'A free monthly AI meetup for Steiner Ranch, Lakeway, River Place, Four Points & Bee Caves. Neighbors helping neighbors navigate AI — together.',
  keywords: ['AI meetup', 'Austin AI', 'Steiner Ranch', 'Lakeway', 'Four Points', 'Bee Caves', 'artificial intelligence', 'community'],
  authors: [{ name: 'Chris Haines' }],
  openGraph: {
    title: 'Ride the Wave AI — Austin AI Meetup',
    description: 'A free monthly AI meetup for Steiner Ranch, Lakeway, River Place, Four Points & Bee Caves. Where community meets competitive advantage.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ride the Wave AI — Austin AI Meetup',
    description: 'Free monthly AI meetup in Austin. Where community meets competitive advantage.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0F172A] text-[#F8FAFC] antialiased">
        {children}
      </body>
    </html>
  )
}
