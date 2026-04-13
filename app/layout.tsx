import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: { default: 'DIY Credit Fix — Repair Your Credit, Change Your Financial Life', template: '%s | DIY Credit Fix' },
  description: 'Free credit repair resources, personal finance guides, and proven strategies to raise your credit score and build lasting financial health.',
  keywords: ['credit repair', 'fix credit score', 'credit report errors', 'improve credit', 'personal finance', 'budgeting', 'debt payoff'],
  openGraph: {
    type: 'website',
    siteName: 'DIY Credit Fix',
    title: 'DIY Credit Fix — Repair Your Credit, Change Your Financial Life',
    description: 'Free credit repair resources and proven strategies to raise your credit score.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
