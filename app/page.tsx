import Link from 'next/link'
import EmailCapture from '@/components/EmailCapture'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DIY Credit Fix — Repair Your Credit, Change Your Financial Life',
}

const stats = [
  { number: '45M+', label: 'Americans have errors on their credit reports' },
  { number: '100pts', label: 'Average score increase from DIY dispute + habits' },
  { number: '$0', label: 'Cost to dispute errors on your credit report' },
  { number: '30–45', label: 'Days for a bureau to investigate your dispute' },
]

const freeTopics = [
  { icon: '💰', title: 'Budgeting Basics', desc: 'Build a budget that actually works — zero-based, 50/30/20, envelope, and more.', href: '/learn/budgeting', tag: 'Foundation' },
  { icon: '🛡️', title: 'Emergency Savings', desc: 'Why a 3–6 month emergency fund is the most important financial move you can make.', href: '/learn/emergency-savings', tag: 'Foundation' },
  { icon: '📈', title: 'Investing 101', desc: 'Index funds, compound interest, Roth IRAs — demystified for complete beginners.', href: '/learn/investing', tag: 'Building Wealth' },
  { icon: '🏦', title: 'Retirement Planning', desc: '401(k), IRA, Social Security — what you need to know at every age.', href: '/learn/retirement', tag: 'Building Wealth' },
  { icon: '🔐', title: 'Insurance Guide', desc: 'Health, auto, life, renters — what to get, how much, and what to skip.', href: '/learn/insurance', tag: 'Protection' },
  { icon: '🗺️', title: 'Financial Planning', desc: 'Build a complete personal financial plan in 7 steps — even if you\'re starting from zero.', href: '/learn/financial-planning', tag: 'Strategy' },
]

const creditTopics = [
  { icon: '📊', title: 'How Credit Works', desc: 'The five factors that make up your credit score — and exactly how each one is calculated.', href: '/learn/how-credit-works' },
  { icon: '🎯', title: 'Understanding Your Score', desc: 'What 580, 670, 720, and 800+ actually mean — and the fastest paths between them.', href: '/learn/credit-scores' },
  { icon: '🧠', title: 'The Root Behaviors Behind Bad Credit', desc: 'Poor credit starts one decision before the missed payment. We trace all 10 upstream behaviors.', href: '/learn/root-behaviors', featured: true },
  { icon: '✉️', title: 'How to Dispute Credit Report Errors', desc: 'Step-by-step: pull your reports, find errors, write dispute letters, and follow up.', href: '/learn/dispute-errors' },
]

const steps = [
  { step: '01', title: 'Pull Your Reports', desc: 'Get all three free credit reports at AnnualCreditReport.com. Review every line.' },
  { step: '02', title: 'Identify Errors', desc: 'Look for incorrect accounts, wrong balances, fraudulent entries, and outdated information.' },
  { step: '03', title: 'File Disputes', desc: 'Send dispute letters to Equifax, Experian, and TransUnion. Use our free templates.' },
  { step: '04', title: 'Change the Habits', desc: 'The score follows the behavior. Learn the root causes and change the upstream decisions.' },
  { step: '05', title: 'Build & Monitor', desc: 'Open the right accounts, keep utilization low, and monitor monthly for changes.' },
]

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 text-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6 text-sm font-medium text-brand-100">
            <span className="w-2 h-2 bg-brand-300 rounded-full animate-pulse"></span>
            100% Free · No Sales Pitch · No Gimmicks
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            Fix Your Credit.<br />
            <span className="text-brand-300">Change Your Financial Life.</span>
          </h1>
          <p className="text-xl text-brand-100 max-w-3xl mx-auto mb-10 leading-relaxed">
            Real information on how credit works, why it breaks, and how to repair it — plus free guides on budgeting, saving, investing, and every other pillar of personal finance. No credit repair company needed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/learn/root-behaviors" className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-700 font-bold text-lg rounded-xl hover:bg-brand-50 transition-colors">
              Start: The Root Causes of Bad Credit →
            </Link>
            <Link href="/learn" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/40 text-white font-semibold text-lg rounded-xl hover:bg-white/10 transition-colors">
              Browse All Free Resources
            </Link>
          </div>
          {/* Trust stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {stats.map(s => (
              <div key={s.number} className="bg-white/10 rounded-xl p-4">
                <div className="text-2xl sm:text-3xl font-black text-brand-300 mb-1">{s.number}</div>
                <div className="text-xs sm:text-sm text-brand-100">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">The DIY Credit Repair Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Five steps. No expensive service required. You can do every single one of these yourself — for free.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {steps.map((s, i) => (
              <div key={s.step} className="relative">
                <div className="bg-brand-50 border border-brand-100 rounded-2xl p-6 h-full">
                  <div className="text-4xl font-black text-brand-200 mb-3">{s.step}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 -right-3 text-brand-300 text-xl z-10">→</div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/learn/how-credit-works" className="btn-primary text-base px-8 py-3">
              Start Learning: How Credit Works →
            </Link>
          </div>
        </div>
      </section>

      {/* Credit Topics */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block bg-brand-100 text-brand-700 font-semibold text-sm px-4 py-1 rounded-full mb-4">Credit Repair</span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">Everything You Need to Know About Credit</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">From how your score is calculated to what habits are actually destroying it.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {creditTopics.map(topic => (
              <Link key={topic.href} href={topic.href}
                className={`group block rounded-2xl p-8 border transition-all hover:-translate-y-1 hover:shadow-md ${
                  topic.featured
                    ? 'bg-brand-600 border-brand-500 text-white'
                    : 'bg-white border-gray-200 hover:border-brand-300'
                }`}>
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{topic.icon}</span>
                  <div>
                    <h3 className={`font-bold text-xl mb-2 group-hover:text-brand-600 transition-colors ${topic.featured ? 'text-white group-hover:text-brand-200' : 'text-gray-900'}`}>
                      {topic.title}
                      {topic.featured && <span className="ml-2 text-xs bg-white/20 text-white px-2 py-0.5 rounded-full font-normal">Must Read</span>}
                    </h3>
                    <p className={`leading-relaxed ${topic.featured ? 'text-brand-100' : 'text-gray-600'}`}>{topic.desc}</p>
                    <span className={`inline-block mt-4 text-sm font-semibold ${topic.featured ? 'text-brand-200' : 'text-brand-600'}`}>
                      Read now →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Finance Topics */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block bg-green-100 text-green-700 font-semibold text-sm px-4 py-1 rounded-full mb-4">Personal Finance Library</span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">Free Guides on Every Pillar of Financial Health</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Credit is just one piece. Build the whole foundation.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {freeTopics.map(topic => (
              <Link key={topic.href} href={topic.href}
                className="group block bg-white border border-gray-200 rounded-2xl p-6 hover:border-brand-300 hover:shadow-md transition-all hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{topic.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-medium text-brand-600 bg-brand-50 px-2 py-0.5 rounded-full">{topic.tag}</span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-brand-600 transition-colors">{topic.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{topic.desc}</p>
                    <span className="inline-block mt-3 text-sm font-semibold text-brand-600">Read guide →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/learn" className="btn-secondary">
              View All Free Resources →
            </Link>
          </div>
        </div>
      </section>

      {/* Email Capture */}
      <section className="py-20 px-4 bg-brand-900">
        <div className="max-w-3xl mx-auto">
          <EmailCapture
            variant="hero"
            title="Get Your Free 10-Step Credit Repair Checklist"
            subtitle="Thousands of people have used this checklist to raise their scores by 50–150 points. It's free, practical, and it works."
          />
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 px-4 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center text-xs text-gray-400">
          <p>DIYCreditFix.net provides educational information only. We are not a credit repair organization, law firm, or financial advisor. This content does not constitute legal or financial advice. Results vary. Always verify information with official sources including the Consumer Financial Protection Bureau (CFPB) at consumerfinance.gov.</p>
        </div>
      </section>
    </div>
  )
}
