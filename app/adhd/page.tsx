import Link from 'next/link'
import EmailCapture from '@/components/EmailCapture'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ADHD & Credit Repair — DIY Credit Fix',
  description: 'Credit repair strategies built for ADHD brains. Understand why standard financial advice fails you — and what actually works.',
}

const stats = [
  { number: '62%', label: 'of adults with ADHD report severe financial problems — vs. 15% of the general population' },
  { number: '49%', label: 'of ADHDers have forgotten to pay a bill — nearly 3× the neurotypical rate' },
  { number: '48%', label: 'frequently impulse buy — vs. just 12% of those without ADHD' },
  { number: '$2,590', label: 'average extra spending per year from impulsivity and forgetfulness alone' },
]

const adhdArticles = [
  {
    icon: '🧠',
    title: 'How ADHD Destroys Your Credit Score',
    desc: 'The neuroscience behind why ADHD symptoms map directly onto the five credit score factors — and what to do about each one.',
    href: '/adhd/credit-score-impact',
    badge: 'Start Here',
    featured: true,
  },
  {
    icon: '🔁',
    title: 'The ADHD-Proof Banking Setup',
    desc: 'Automate everything. Remove decisions. Set up an account structure that runs on autopilot so your brain never has to remember a due date again.',
    href: '/adhd/banking-setup',
    badge: null,
    featured: false,
  },
  {
    icon: '💳',
    title: 'ADHD and Impulse Spending',
    desc: 'Why ADHD brains are wired for impulsive purchases — and how to create friction, structure, and guardrails that actually work.',
    href: '/adhd/impulse-spending',
    badge: null,
    featured: false,
  },
  {
    icon: '📬',
    title: 'Late Payment Recovery Guide',
    desc: 'How to dispute late payments, write goodwill deletion letters, and set up systems so it never happens again.',
    href: '/adhd/late-payment-recovery',
    badge: null,
    featured: false,
  },
  {
    icon: '🌱',
    title: 'The Root Behaviors Behind Bad Credit',
    desc: 'Poor credit starts one decision before the missed payment. Many of the 10 root behaviors trace directly back to ADHD executive dysfunction.',
    href: '/learn/root-behaviors',
    badge: 'Must Read',
    featured: false,
  },
  {
    icon: '💰',
    title: 'Budgeting for ADHD Brains',
    desc: 'Why the 50/30/20 rule fails most ADHDers — and which budgeting systems work with your brain instead of against it.',
    href: '/adhd/adhd-budgeting',
    badge: null,
    featured: false,
  },
]

const toolkitIncludes = [
  'ADHD credit damage assessment — see exactly which symptoms are hurting your score and by how much',
  '"Set it and forget it" autopay checklist — every account, every bill, step by step',
  'Goodwill deletion letter template — written for ADHD: explain the missed payment honestly and ask for removal',
  'ADHD-friendly banking setup guide — account structure, savings buckets, spending guardrails',
  '30-day ADHD credit action plan — one small task per day, no overwhelm',
]

const whyItFails = [
  {
    icon: '📋',
    myth: '"Just make a budget"',
    reality: 'Standard budgets require daily decision-making and consistent tracking — two things executive dysfunction makes nearly impossible.',
  },
  {
    icon: '⏰',
    myth: '"Set a reminder to pay bills"',
    reality: 'Time blindness means reminders get ignored or dismissed. The fix isn\'t more reminders — it\'s removing the need to remember at all.',
  },
  {
    icon: '🧾',
    myth: '"Track every purchase"',
    reality: 'Manual expense tracking is an ADHD kryptonite. It works for two days, then stops. Automation is the only system that sticks.',
  },
  {
    icon: '💪',
    myth: '"Just be more disciplined"',
    reality: 'Impulse spending isn\'t a character flaw — it\'s dopamine-seeking behavior driven by an underactive reward system. Willpower isn\'t the solution.',
  },
]

export default function ADHDHubPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6 text-sm font-medium text-brand-100">
            <span className="text-lg">🧠</span>
            Built for Neurodivergent Brains
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            You're not bad with money.<br />
            <span className="text-brand-300">Your brain is wired differently.</span>
          </h1>
          <p className="text-xl text-brand-100 max-w-3xl mx-auto mb-8 leading-relaxed">
            If you have ADHD, your credit struggles aren't a willpower problem — they're a neuroscience problem. Impulsivity, time blindness, and executive dysfunction make the standard financial system nearly impossible to navigate. We've built this section specifically for you.
          </p>
          <p className="text-brand-200 text-base mb-10 font-medium">
            No judgment. No "just pay your bills on time." Real strategies that work <em>with</em> your brain.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#toolkit" className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-700 font-bold text-lg rounded-xl hover:bg-brand-50 transition-colors">
              Get the Free ADHD Toolkit →
            </a>
            <Link href="/adhd/credit-score-impact" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/40 text-white font-semibold text-lg rounded-xl hover:bg-white/10 transition-colors">
              How ADHD Hurts Your Score
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-sm font-semibold text-brand-600 uppercase tracking-wider mb-8">The Research Is Clear</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.number} className="bg-brand-50 border border-brand-100 rounded-2xl p-6 text-center">
                <div className="text-3xl sm:text-4xl font-black text-brand-600 mb-3">{s.number}</div>
                <p className="text-sm text-gray-600 leading-relaxed">{s.label}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-6">
            Sources: ADDA, CHADD, PMC research studies on ADHD and financial outcomes
          </p>
        </div>
      </section>

      {/* Why Standard Advice Fails */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-red-100 text-red-700 font-semibold text-sm px-4 py-1 rounded-full mb-4">The Problem</span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">Why Standard Financial Advice Fails ADHD Brains</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Most money advice was written for neurotypical brains. Here's what that looks like in practice — and why it doesn't work for you.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyItFails.map((item) => (
              <div key={item.myth} className="bg-white rounded-2xl p-6 border border-gray-200">
                <div className="flex items-start gap-4">
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <div className="inline-block bg-red-50 text-red-700 text-sm font-semibold px-3 py-1 rounded-lg mb-3">
                      They say: {item.myth}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      <span className="font-semibold text-gray-900">The reality: </span>{item.reality}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 bg-brand-50 border border-brand-200 rounded-2xl p-6 text-center max-w-2xl mx-auto">
            <p className="text-brand-800 font-semibold text-lg mb-2">The fix isn't trying harder.</p>
            <p className="text-brand-700">It's building a system that runs on autopilot — so your brain never has to remember, resist, or stay consistent on its own.</p>
          </div>
        </div>
      </section>

      {/* Article Cards */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-brand-100 text-brand-700 font-semibold text-sm px-4 py-1 rounded-full mb-4">ADHD Resource Hub</span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">Everything Built for Your Brain</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Start with "How ADHD Destroys Your Credit Score" — then work through each section at your own pace.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {adhdArticles.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className={`group block rounded-2xl p-7 border transition-all hover:-translate-y-1 hover:shadow-md ${
                  article.featured
                    ? 'bg-brand-600 border-brand-500 text-white'
                    : 'bg-white border-gray-200 hover:border-brand-300'
                }`}
              >
                <div className="flex items-start gap-3 mb-4">
                  <span className="text-3xl">{article.icon}</span>
                  {article.badge && (
                    <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                      article.featured ? 'bg-white/20 text-white' : 'bg-brand-100 text-brand-700'
                    }`}>
                      {article.badge}
                    </span>
                  )}
                </div>
                <h3 className={`font-bold text-lg mb-2 group-hover:opacity-90 transition-opacity ${
                  article.featured ? 'text-white' : 'text-gray-900 group-hover:text-brand-600'
                }`}>
                  {article.title}
                </h3>
                <p className={`text-sm leading-relaxed mb-4 ${
                  article.featured ? 'text-brand-100' : 'text-gray-600'
                }`}>
                  {article.desc}
                </p>
                <span className={`text-sm font-semibold ${
                  article.featured ? 'text-brand-200' : 'text-brand-600'
                }`}>
                  Read now →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Toolkit Email Capture */}
      <section id="toolkit" className="py-20 px-4 bg-brand-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block bg-brand-700 text-brand-200 font-semibold text-sm px-4 py-1 rounded-full mb-4">Free Download</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">The ADHD Credit Repair Toolkit</h2>
            <p className="text-xl text-brand-200 max-w-2xl mx-auto mb-8">
              A done-for-you system: checklists, templates, and a 30-day action plan built specifically for ADHD brains.
            </p>
            {/* What's inside */}
            <div className="bg-white/10 rounded-2xl p-6 text-left max-w-xl mx-auto mb-10">
              <p className="text-brand-200 font-semibold text-sm uppercase tracking-wider mb-4">What's inside:</p>
              <ul className="space-y-3">
                {toolkitIncludes.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-brand-100">
                    <span className="text-brand-400 font-bold flex-shrink-0 mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <EmailCapture
            variant="hero"
            title="Get the Free ADHD Credit Repair Toolkit"
            subtitle="Join thousands of neurodivergent adults taking control of their credit — on their own terms."
          />
        </div>
      </section>

      {/* Bottom CTA bridge */}
      <section className="py-12 px-4 bg-gray-50 border-t border-gray-200">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-700 font-semibold mb-2">Not sure where to start?</p>
          <p className="text-gray-500 text-sm mb-6">The Root Behaviors article connects ADHD executive dysfunction directly to the 10 most common causes of bad credit. It's the fastest way to understand exactly what's happening to your score.</p>
          <Link href="/learn/root-behaviors" className="btn-primary">
            Read: The 10 Root Behaviors Behind Poor Credit →
          </Link>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 px-4 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center text-xs text-gray-400">
          <p>DIYCreditFix.net provides educational information only and is not a medical resource. ADHD-related content is for informational purposes and does not constitute medical advice or diagnosis. Please consult a qualified healthcare professional regarding ADHD diagnosis and treatment. Financial information does not constitute legal or financial advice.</p>
        </div>
      </section>
    </div>
  )
}
