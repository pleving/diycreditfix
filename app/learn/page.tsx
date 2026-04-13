import Link from 'next/link'
import EmailCapture from '@/components/EmailCapture'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free Financial Education Library',
  description: 'Free guides on credit repair, budgeting, saving, investing, retirement, insurance, and every pillar of personal financial health.',
}

const sections = [
  {
    id: 'credit-repair',
    label: 'Credit Repair',
    color: 'brand',
    description: 'Understand how credit works, why scores drop, and exactly how to fix yours — step by step.',
    articles: [
      { title: 'How Credit Works: A Complete Guide', href: '/learn/how-credit-works', desc: 'The five factors, how they\'re weighted, and what actually moves your score.', time: '12 min read', tag: 'Start Here' },
      { title: 'Understanding Your Credit Score', href: '/learn/credit-scores', desc: 'What 580, 670, 720, and 800+ mean — and the fastest legal paths between them.', time: '10 min read', tag: 'Essential' },
      { title: 'The Root Behaviors Behind Bad Credit', href: '/learn/root-behaviors', desc: 'Poor credit starts before the missed payment. We trace all 10 upstream causes.', time: '18 min read', tag: 'Must Read' },
      { title: 'How to Dispute Credit Report Errors', href: '/learn/dispute-errors', desc: 'Pull your reports, find errors, write dispute letters, and follow up effectively.', time: '15 min read', tag: 'Action Guide' },
    ]
  },
  {
    id: 'personal-finance',
    label: 'Personal Finance Foundations',
    color: 'green',
    description: 'The building blocks of financial health — before credit, before investing, before anything else.',
    articles: [
      { title: 'Budgeting Basics: Build a Budget That Actually Sticks', href: '/learn/budgeting', desc: 'Zero-based, 50/30/20, envelope, and digital budgeting — compared and explained.', time: '14 min read', tag: 'Foundation' },
      { title: 'Emergency Savings: Why $1,000 Isn\'t Enough', href: '/learn/emergency-savings', desc: 'How much you actually need, where to keep it, and how to build it fast.', time: '10 min read', tag: 'Foundation' },
      { title: 'Financial Planning: Build Your Complete Money Map', href: '/learn/financial-planning', desc: 'A 7-step framework to plan your entire financial life — even from zero.', time: '16 min read', tag: 'Strategy' },
    ]
  },
  {
    id: 'building-wealth',
    label: 'Building Wealth',
    color: 'blue',
    description: 'Once the foundation is solid, start building wealth that grows while you sleep.',
    articles: [
      { title: 'Investing 101: Start With $50 and Grow From There', href: '/learn/investing', desc: 'Index funds, compound interest, brokerage vs. IRA — a plain-English primer.', time: '15 min read', tag: 'Beginner' },
      { title: 'Retirement Planning: What You Need to Know at Every Age', href: '/learn/retirement', desc: '401(k), Roth IRA, traditional IRA, Social Security — demystified.', time: '18 min read', tag: 'Long-Term' },
    ]
  },
  {
    id: 'protection',
    label: 'Financial Protection',
    color: 'purple',
    description: 'Insurance and risk management — the defensive side of wealth that most people ignore.',
    articles: [
      { title: 'Insurance Basics: What to Get, What to Skip', href: '/learn/insurance', desc: 'Health, auto, life, renters, disability — coverage you need and what\'s oversold.', time: '12 min read', tag: 'Protection' },
    ]
  },
]

export default function LearnPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-brand-800 to-brand-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-white/20 text-brand-100 text-sm font-semibold px-4 py-1 rounded-full mb-4">Free Resource Library</span>
          <h1 className="text-4xl sm:text-5xl font-black mb-4">Financial Education That Actually Helps</h1>
          <p className="text-xl text-brand-100 max-w-2xl mx-auto">
            Every guide here is free, practical, and written for real people — not finance majors. Start anywhere. Come back often.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {sections.map(section => (
          <div key={section.id} id={section.id} className="mb-20">
            <div className="flex items-start justify-between mb-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">{section.label}</h2>
                <p className="text-gray-600 max-w-xl">{section.description}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {section.articles.map(article => (
                <Link key={article.href} href={article.href}
                  className="group block bg-white border border-gray-200 rounded-2xl p-6 hover:border-brand-300 hover:shadow-md transition-all hover:-translate-y-0.5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-brand-700 bg-brand-50 px-3 py-1 rounded-full">{article.tag}</span>
                    <span className="text-xs text-gray-400">{article.time}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-brand-600 transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{article.desc}</p>
                  <span className="text-sm font-semibold text-brand-600">Read article →</span>
                </Link>
              ))}
            </div>
          </div>
        ))}

        <EmailCapture
          title="Get the Free Credit Repair Checklist"
          subtitle="A concise, step-by-step action plan to start repairing your credit this week."
        />
      </div>
    </div>
  )
}
