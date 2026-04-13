import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How ADHD Destroys Your Credit Score — DIY Credit Fix',
  description: 'The neuroscience behind why ADHD symptoms map directly onto credit score factors — and exactly what to do about each one.',
}

const impacts = [
  {
    factor: 'Payment History',
    weight: '35%',
    adhdLink: 'Time blindness + task avoidance',
    color: 'red',
    detail: 'ADHD brains struggle to perceive time accurately and often avoid tasks that feel overwhelming. A bill that\'s "not due yet" disappears from working memory — until it\'s overdue. Nearly 49% of people with ADHD report forgetting to pay bills, nearly 3× the neurotypical rate. This single factor is the biggest driver of credit score damage for ADHD adults.',
    fix: 'Set up autopay for every recurring bill — no exceptions. Remove the memory requirement entirely.',
  },
  {
    factor: 'Credit Utilization',
    weight: '30%',
    adhdLink: 'Impulse spending + dopamine-seeking',
    color: 'orange',
    detail: 'The ADHD brain\'s reward system is underactive, which drives dopamine-seeking behaviors — including impulsive purchases. Research shows 48% of adults with ADHD frequently buy things on impulse vs. just 12% of neurotypical adults. High utilization signals risk to lenders and tanks your score quickly.',
    fix: 'Set credit card spending alerts at 20% of your limit. Move credit cards out of your digital wallets so purchases require friction.',
  },
  {
    factor: 'Length of Credit History',
    weight: '15%',
    adhdLink: 'Impulsivity + poor planning',
    detail: 'Impulsively opening new accounts (chasing rewards, responding to in-store offers) shortens average account age. Impulsively closing old cards when frustrated does the same. Both are common ADHD patterns.',
    color: 'yellow',
    fix: 'Keep your oldest cards open and on autopay with a small recurring charge. Never close an old account impulsively.',
  },
  {
    factor: 'New Credit Inquiries',
    weight: '10%',
    adhdLink: 'Impulsive applications',
    detail: 'Applying for credit in the moment — at checkout, responding to a mail offer, shopping around without strategy — adds hard inquiries that each ding your score. ADHD makes it harder to pause and evaluate before acting.',
    color: 'blue',
    fix: 'Create a 48-hour rule: you cannot apply for any credit card or loan without waiting 48 hours first.',
  },
  {
    factor: 'Credit Mix',
    weight: '10%',
    adhdLink: 'Avoidance of complexity',
    detail: 'Managing multiple account types (credit cards, installment loans, etc.) requires organization ADHD often disrupts. Many ADHD adults avoid complexity and end up with a thin or unbalanced credit mix.',
    color: 'purple',
    fix: 'A single credit card + one installment loan (even a small credit-builder loan) covers this factor adequately.',
  },
]

const colorMap: Record<string, string> = {
  red: 'bg-red-50 border-red-200 text-red-700',
  orange: 'bg-orange-50 border-orange-200 text-orange-700',
  yellow: 'bg-yellow-50 border-yellow-200 text-yellow-700',
  blue: 'bg-blue-50 border-blue-200 text-blue-700',
  purple: 'bg-purple-50 border-purple-200 text-purple-700',
}

export default function ADHDCreditScoreImpactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-brand-900 to-brand-700 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/adhd" className="text-brand-300 hover:text-white text-sm font-medium transition-colors">← ADHD Hub</Link>
          </div>
          <span className="inline-block bg-white/10 text-brand-200 font-semibold text-sm px-3 py-1 rounded-full mb-4">Start Here</span>
          <h1 className="text-4xl sm:text-5xl font-black mb-4 leading-tight">
            How ADHD Destroys Your Credit Score
          </h1>
          <p className="text-xl text-brand-100 leading-relaxed">
            Every credit score factor has a corresponding ADHD symptom that damages it. Understanding the exact mechanism is the first step to fixing it — because the solution is never "try harder."
          </p>
        </div>
      </div>

      {/* Intro */}
      <div className="max-w-3xl mx-auto px-4 py-12 article-body">
        <div className="callout-box mb-8">
          <p className="font-semibold text-brand-800 mb-1">This is not about willpower.</p>
          <p className="text-brand-700 text-sm">ADHD affects the prefrontal cortex — the part of the brain responsible for planning, impulse control, working memory, and time perception. These are also the exact skills required to manage credit successfully. The overlap isn't a coincidence.</p>
        </div>

        <p>Your credit score is calculated across five factors. Below, we map each factor to the specific ADHD symptoms that damage it — and give you the fix that works with your brain, not against it.</p>
      </div>

      {/* Factor breakdowns */}
      <div className="max-w-3xl mx-auto px-4 pb-16 space-y-8">
        {impacts.map((item, i) => (
          <div key={item.factor} className="border border-gray-200 rounded-2xl overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 flex flex-wrap items-center gap-4 border-b border-gray-200">
              <div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Factor {i + 1}</span>
                <h2 className="text-xl font-black text-gray-900">{item.factor}</h2>
              </div>
              <div className="ml-auto flex items-center gap-3">
                <span className="text-sm font-bold text-gray-500">Score weight:</span>
                <span className="text-2xl font-black text-brand-600">{item.weight}</span>
              </div>
            </div>
            <div className="px-6 py-6 space-y-4">
              <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border text-sm font-semibold ${colorMap[item.color]}`}>
                🧠 ADHD connection: {item.adhdLink}
              </div>
              <p className="text-gray-700 leading-relaxed">{item.detail}</p>
              <div className="bg-brand-50 border border-brand-200 rounded-xl p-4">
                <span className="text-xs font-bold text-brand-700 uppercase tracking-wider block mb-1">The Fix</span>
                <p className="text-brand-800 font-medium">{item.fix}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Next steps */}
      <div className="bg-gray-50 border-t border-gray-200 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-black text-gray-900 mb-4">Now That You Know the Why — Build the System</h2>
          <p className="text-gray-600 mb-8">Understanding how ADHD damages your score is step one. Step two is setting up a structure that removes the need to remember, resist, or stay consistent manually.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/adhd/banking-setup" className="btn-primary">ADHD-Proof Banking Setup →</Link>
            <Link href="/adhd" className="btn-secondary">Back to ADHD Hub</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
