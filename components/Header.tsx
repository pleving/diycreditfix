'use client'
import Link from 'next/link'
import { useState } from 'react'

const navLinks = [
  {
    label: 'Free Resources',
    href: '/learn',
    children: [
      { label: 'All Resources', href: '/learn' },
      { label: 'Budgeting Basics', href: '/learn/budgeting' },
      { label: 'Emergency Savings', href: '/learn/emergency-savings' },
      { label: 'Retirement Planning', href: '/learn/retirement' },
      { label: 'Investing 101', href: '/learn/investing' },
      { label: 'Insurance Guide', href: '/learn/insurance' },
      { label: 'Financial Planning', href: '/learn/financial-planning' },
    ]
  },
  {
    label: 'Credit Repair',
    href: '/learn/how-credit-works',
    children: [
      { label: 'How Credit Works', href: '/learn/how-credit-works' },
      { label: 'Understanding Your Score', href: '/learn/credit-scores' },
      { label: 'Root Behaviors Behind Bad Credit', href: '/learn/root-behaviors' },
      { label: 'How to Dispute Errors', href: '/learn/dispute-errors' },
    ]
  },
  {
    label: 'ADHD & Credit',
    href: '/adhd',
    children: [
      { label: '🧠 ADHD Hub — Overview', href: '/adhd' },
      { label: 'How ADHD Hurts Your Score', href: '/adhd/credit-score-impact' },
      { label: 'ADHD-Proof Banking Setup', href: '/adhd/banking-setup' },
      { label: 'ADHD & Impulse Spending', href: '/adhd/impulse-spending' },
      { label: 'Late Payment Recovery', href: '/adhd/late-payment-recovery' },
      { label: 'Budgeting for ADHD Brains', href: '/adhd/adhd-budgeting' },
    ]
  },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <span className="font-bold text-xl text-gray-900">DIY<span className="text-brand-600">CreditFix</span></span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map(link => (
              <div key={link.label} className="relative group">
                <button
                  className="flex items-center gap-1 text-gray-700 hover:text-brand-600 font-medium transition-colors"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {link.label}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === link.label && (
                  <div
                    className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50"
                    onMouseEnter={() => setOpenDropdown(link.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {link.children.map(child => (
                      <Link key={child.href} href={child.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-50 hover:text-brand-700 transition-colors">
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="#email-capture" className="btn-primary text-sm px-4 py-2">
              Get Free Credit Guide
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 space-y-1">
            {navLinks.map(link => (
              <div key={link.label}>
                <p className="px-3 py-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">{link.label}</p>
                {link.children.map(child => (
                  <Link key={child.href} href={child.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-50 hover:text-brand-700 rounded-lg">
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
            <div className="pt-3 px-3">
              <Link href="#email-capture" onClick={() => setMobileOpen(false)} className="btn-primary w-full text-sm">
                Get Free Credit Guide
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
