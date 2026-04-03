import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.svg',
  },
  title: 'Ride the Wave AI — Northwest Austin AI Meetup',
  description: 'A free monthly AI meetup for Steiner Ranch, Lakeway, River Place & Four Points. Neighbors helping neighbors navigate AI — practically, together.',
  keywords: ['AI meetup', 'Austin AI', 'northwest Austin', 'Steiner Ranch', 'Lakeway', 'artificial intelligence', 'community'],
  authors: [{ name: 'Chris Haines', url: 'https://forgeagency.ai' }],
  openGraph: {
    title: 'Ride the Wave AI — Northwest Austin AI Meetup',
    description: 'A free monthly AI meetup for neighbors in northwest Austin. No jargon. No sales pitches. Just practical AI you can use Monday morning.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ride the Wave AI — Northwest Austin AI Meetup',
    description: 'Free monthly AI meetup in northwest Austin. Neighbors helping neighbors navigate AI.',
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
