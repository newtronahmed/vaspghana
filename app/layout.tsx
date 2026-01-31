import React from "react"
import type { Metadata } from 'next'
import { Outfit, Plus_Jakarta_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import '../styles/globals.css'

const outfit = Outfit({
  subsets: ["latin"],
  variable: '--font-outfit',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: '--font-jakarta',
});

export const metadata: Metadata = {
  title: 'VASP Ghana',
  description: 'Virtual Asset Service Provider Management System for Ghana',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${jakarta.variable}`}>
      <body className={`font-jakarta antialiased bg-[#e8eef4] text-[#1e3a5f]`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
