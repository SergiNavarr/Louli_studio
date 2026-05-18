import React from "react"
import type { Metadata } from 'next'
import { Quicksand, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const quicksand = Quicksand({ subsets: ["latin"], variable: '--font-quicksand' });
const playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: {
    default: 'Louli Studio | Estética y Bienestar en Corrientes',
    template: '%s | Louli Studio'
  },
  description: 'Especialista en perfilado de cejas, lifting de pestañas y diseño de uñas en Corrientes. Un espacio de paz para resaltar tu mejor versión con atención personalizada.',
  keywords: ['estética Corrientes', 'perfilado de cejas Corrientes', 'lifting de pestañas', 'uñas esculpidas', 'bienestar', 'Lourdes estética'],
  authors: [{ name: 'Lourdes' }],
  creator: 'NavArrow',
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://louli.com.ar',
    title: 'Louli Studio | Estética y Bienestar en Corrientes',
    description: 'Tratamientos de estética personalizados en el corazón de Corrientes. ¡Agendá tu cita por WhatsApp!',
    siteName: 'Louli Studio',
    images: [{
      url: '/og-image.jpg', // Debes crear esta imagen de 1200x630
      width: 1200,
      height: 630,
      alt: 'Louli Studio - Estética y Bienestar'
    }],
  },
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
    <html lang="es">
      <body className={`${quicksand.variable} ${playfair.variable} font-sans antialiased overflow-x-hidden`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BeautySalon",
              "name": "Louli Studio",
              "image": "https://louli.com.ar/estudio.png",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Corrientes",
                "addressCountry": "AR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "-27.4692",
                "longitude": "-58.8306"
              },
              "telephone": "+5493795131914",
              "url": "https://louli.com.ar"
            })
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
