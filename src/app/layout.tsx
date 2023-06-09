import { TimeProvider } from '@/components/TimeContext';
import { Metadata } from 'next'
import { Playfair_Display, Abril_Fatface } from 'next/font/google'
import Header from '@/components/Header';
import Image from 'next/image'

import './globals.css'
import '@/styles/globals.scss'

import Background from 'public/images/paper.jpg'


const abril_fatface = Abril_Fatface({
  subsets: ['latin'],
  weight: "400",
  variable: '--font-abril-fatface',
  display: 'swap',
})

const playfair_display = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
  display: 'swap',
})


export const metadata: Metadata = {
  title: {
    template: '%s | Luca Ciampi',
    default: 'Luca Ciampi', // a default is required when creating a template
  },
  description: 'Portfolio de Luca Ciampi'
  // TODO: add default og image
}

interface Props {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <TimeProvider>
        <body className={`${abril_fatface.variable} ${playfair_display.variable}`}>
          <Header />
          {children}
        </body>
      </TimeProvider>
    </html>
  )
}
