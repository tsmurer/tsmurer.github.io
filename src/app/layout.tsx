import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
import Navigation from './components/navigation/navigation'
import Hero from './components/hero/hero'
import Section from './components/section/section'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'tsmurer | portfolio',
  description: 'Tiago S. Murer is a software developer based in Sao Paulo, Brazil',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation/>
        {children}
        </body>
    </html>
  )
}
