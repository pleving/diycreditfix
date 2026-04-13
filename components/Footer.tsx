'use client'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <span className="font-bold text-xl text-white">DIY<span className="text-brand-400">CreditFix</span></span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Real information. Real strategies. No gimmicks. We help everyday people understand, repair, and build their credit — for free.
            </p>
          </div>

          {/* Free Resources */}
          <div>
            <h4 className="font-semibold text-white mb-4">Personal Finance</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/learn/budgeting" className="hover:text-brand-400 transition-colors">Budgeting Basics</Link></li>
              <li><Link href="/learn/emergency-savings" className="hover:text-brand-400 transition-colors">Emergency Savings</Link></li>
              <li><Link href="/learn/retirement" className="hover:text-brand-400 transition-colors">Retirement Planning</Link></li>
              <li><Link href="/learn/investing" className="hover:text-brand-400 transition-colors">Investing 101</Link></li>
              <li><Link href="/learn/insurance" className="hover:text-brand-400 transition-colors">Insurance Basics</Link></li>
              <li><Link href="/learn/financial-planning" className="hover:text-brand-400 transition-colors">Financial Planning</Link></li>
            </ul>
          </div>

          {/* Credit Repair */}
          <div>
            <h4 className="font-semibold text-white mb-4">Credit Repair</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/learn/how-credit-works" className="hover:text-brand-400 transition-colors">How Credit Works</Link></li>
              <li><Link href="/learn/credit-scores" className="hover:text-brand-400 transition-colors">Understanding Your Score</Link></li>
              <li><Link href="/learn/root-behaviors" className="hover:text-brand-400 transition-colors">Root Behaviors Behind Bad Credit</Link></li>
              <li><Link href="/learn/dispute-errors" className="hover:text-brand-400 transition-colors">How to Dispute Errors</Link></li>
              <li><Link href="/learn" className="hover:text-brand-400 transition-colors">All Resources →</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-white mb-4">Free Credit Guide</h4>
            <p className="text-sm text-gray-400 mb-4">Get our free 10-step credit repair checklist delivered to your inbox.</p>
            <form className="space-y-3" onSubmit={e => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
              />
              <button type="submit" className="w-full btn-primary text-sm py-2">
                Send Me the Guide
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© 2026 DIYCreditFix.net · All rights reserved</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-gray-300">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-300">Terms of Use</Link>
            <Link href="/disclaimer" className="hover:text-gray-300">Disclaimer</Link>
          </div>
          <p className="text-xs text-gray-600 text-center md:text-right max-w-sm">
            DIYCreditFix.net is for educational purposes only and is not a substitute for professional financial or legal advice.
          </p>
        </div>
      </div>
    </footer>
  )
}
