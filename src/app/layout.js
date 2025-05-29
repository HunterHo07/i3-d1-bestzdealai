import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BestzDealAi - AI-Powered Reverse Marketplace',
  description: 'Post what you want, let sellers compete for your business. The smartest way to get the best deals with AI-powered matching.',
  keywords: 'marketplace, deals, AI, reverse auction, best prices, local sellers, online shopping',
  authors: [{ name: 'BestzDealAi Team' }],
  creator: 'BestzDealAi',
  publisher: 'BestzDealAi',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://bestzdealaai.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'BestzDealAi - AI-Powered Reverse Marketplace',
    description: 'Post what you want, let sellers compete for your business. The smartest way to get the best deals.',
    url: 'https://bestzdealaai.vercel.app',
    siteName: 'BestzDealAi',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BestzDealAi - AI-Powered Reverse Marketplace',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BestzDealAi - AI-Powered Reverse Marketplace',
    description: 'Post what you want, let sellers compete for your business.',
    images: ['/images/twitter-image.jpg'],
    creator: '@bestzdealaai',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: 'https://raw.githubusercontent.com/HunterHo07/Portfolio_1/refs/heads/main/images/logo.webp',
    shortcut: 'https://raw.githubusercontent.com/HunterHo07/Portfolio_1/refs/heads/main/images/logo.webp',
    apple: 'https://raw.githubusercontent.com/HunterHo07/Portfolio_1/refs/heads/main/images/logo.webp',
  },
  manifest: '/manifest.json',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-dark-bg">
          {children}
        </div>
      </body>
    </html>
  )
}
