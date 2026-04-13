import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Budgeting for ADHD Brains — DIY Credit Fix',
  description: 'Why standard budgets fail ADHDers — and which systems work with your brain instead of against it.',
}

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-brand-900 to-brand-700 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/adhd" className="text-brand-300 hover:text-white text-sm font-medium transition-colors mb-4 inline-block">← ADHD Hub</Link>
          <h1 className="text-4xl sm:text-5xl font-black mb-4 leading-tight">Budgeting for ADHD Brains</h1>
          <p className="text-xl text-brand-100">Why standard budgets fail ADHDers — and which systems work with your brain instead of against it.</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <div className="bg-brand-50 border border-brand-200 rounded-2xl p-10">
          <span className="text-4xl mb-4 block">🚧</span>
          <h2 className="text-2xl font-black text-gray-900 mb-3">Full Guide Coming Soon</h2>
          <p className="text-gray-600 mb-6">This article is being written now. Get notified when it goes live — along with the full ADHD Credit Repair Toolkit.</p>
          <Link href="/adhd#toolkit" className="btn-primary">Get the Free ADHD Toolkit →</Link>
        </div>
      </div>
    </div>
  )
}
