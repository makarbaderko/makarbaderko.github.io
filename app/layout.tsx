import React from 'react';
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | Makar Baderko',
    default: 'Makar Baderko',
  },
  description: '16-year-old Software Engineer specializing in Data Science and Machine Learning',
  icons: {
    icon: [
      { url: '/profile.jpg', sizes: '32x32', type: 'image/jpeg' },
      { url: '/profile.jpg', sizes: '16x16', type: 'image/jpeg' },
      { url: '/profile.jpg', sizes: '180x180', type: 'image/jpeg' },
      { url: '/profile.jpg', sizes: '192x192', type: 'image/jpeg' },
      { url: '/profile.jpg', sizes: '512x512', type: 'image/jpeg' },
    ],
    shortcut: '/profile.jpg',
    apple: '/profile.jpg',
    other: [
      {
        rel: 'apple-touch-icon',
        url: '/profile.jpg',
      },
    ],
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#f4f1eb" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 