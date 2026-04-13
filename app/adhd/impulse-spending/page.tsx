import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ADHD and Impulse Spending — DIY Credit Fix',
  description: 'Why ADHD brains are wired for impulsive purchases — and the friction-based systems that actually interrupt the pattern without requiring willpower.',
}

const triggers = [
  {
    trigger: 'Dopamine Deficit Seeking',
    icon: '⚡',
    science: 'The ADHD brain has lower baseline dopamine activity, which creates a constant low-level drive to seek stimulation and reward. A purchase — especially a new, exciting one — delivers an immediate dopamine spike. The brain learns this association fast.',
    pattern: 'Scrolling online stores when bored or understimulated. Buying things that feel exciting in the moment but irrelevant a week later.',
    color: 'purple',
  },
  {
    trigger: 'Emotional Dysregulation',
    icon: '🌊',
    science: 'ADHD impairs emotional regulation, making feelings more intense and harder to manage. Spending becomes a fast, reliable way to shift emotional state — stress, boredom, loneliness, frustration all become purchase triggers.',
    pattern: 'Retail therapy after a hard day. Buying as a reward after completing something difficult. Spending when anxious or overwhelmed.',
    color: 'blue',
  },
  {
    trigger: 'Impaired Impulse Control',
    icon: '🎯',
    science: 'The prefrontal cortex — the brain\'s brake system — is underactive in ADHD. The gap between "I want this" and "I\'m buying this" is dramatically shorter. The rational evaluation that neurotypical brains run automatically simply doesn\'t fire reliably.',
    pattern: 'In-store purchases that weren\'t planned. Adding items to cart during late-night browsing. Saying yes to upsells without thinking.',
    color: 'orange',
  },
  {
    trigger: 'Time Blindness',
    icon: '⏳',
    science: 'ADHD time blindness makes future consequences feel abstract and distant. The credit card bill that arrives in 3 weeks feels less real than the item available right now. This asymmetry — immediate reward vs. distant cost — systematically biases toward spending.',
    pattern: 'Buying on credit because "future you" will deal with it. Ignoring the running balance because it feels theoretical.',
    color: 'red',
  },
  {
    trigger: 'Novelty Bias',
    icon: '✨',
    science: 'ADHD brains are strongly drawn to novelty — new experiences, new objects, new projects. The dopamine hit from a new purchase is higher than from things already owned. This creates a relentless pull toward acquiring rather than using what you already have.',
    pattern: 'Buying hobby equipment for interests that fade quickly. Upgrading before the current version is worn out. Starting new "systems" and buying supplies for them.',
    color: 'green',
  },
]

const frictionStrategies = [
  {
    strategy: 'The 48-Hour Rule',
    icon: '⏰',
    difficulty: 'Easy to set up',
    how: 'Any non-essential purchase over $30 goes on a wish list. You cannot buy it for 48 hours. At the 48-hour mark, revisit the list and decide. Most items will feel less urgent — or you\'ll have forgotten entirely.',
    why_works: 'Inserts a delay between the impulse and the action. The dopamine spike fades. The rational brain has time to catch up. Works best for online shopping where the path to purchase is frictionless.',
    setup: 'Create a note on your phone titled "Want List." Every time you want to buy something non-essential, add it with the date. Check it in 48 hours.',
  },
  {
    strategy: 'Remove Stored Payment Methods',
    icon: '💳',
    difficulty: 'One-time setup',
    how: 'Delete saved credit cards from Amazon, Apple Pay, Google Pay, and every retail site. Force yourself to get up and physically retrieve your card for every online purchase.',
    why_works: 'Frictionless checkout is specifically designed to exploit ADHD impulsivity. Adding 60 seconds of physical friction eliminates the majority of unplanned purchases — the effort interrupts the dopamine loop before purchase.',
    setup: 'Go to Amazon → Account → Payment Methods → delete all saved cards. Repeat for Apple Wallet, Google Pay, and your top 5 shopping sites.',
  },
  {
    strategy: 'The Spending Account Cap',
    icon: '🏦',
    difficulty: 'One-time setup',
    how: 'From the Two-Account System: your day-to-day debit card only has access to your weekly spending allowance. When it\'s gone, it\'s gone. No credit card top-up option.',
    why_works: 'Creates a hard spending limit without requiring tracking or willpower. The account balance is a real-time impulse check — you can see exactly what\'s left before every purchase.',
    setup: 'See the Two-Account System in the Budgeting for ADHD Brains guide for full setup.',
    link: '/adhd/adhd-budgeting',
    linkLabel: 'Read: Budgeting for ADHD Brains →',
  },
  {
    strategy: 'App and Site Blockers',
    icon: '🚫',
    difficulty: 'Easy to set up',
    how: 'Use website blockers (Freedom, Cold Turkey, or iOS Screen Time) to restrict access to shopping sites during high-risk times — evenings, weekends, or whenever you know you browse impulsively.',
    why_works: 'Eliminates the browsing habit before it reaches the purchase stage. Most impulse buying starts with "just looking" — blocking the browsing breaks the chain at the earliest point.',
    setup: 'Set Freedom or Screen Time to block Amazon, ASOS, eBay, and any other frequent shopping sites from 9pm–7am daily. Start there and adjust.',
  },
  {
    strategy: 'The One-In One-Out Rule',
    icon: '🔄',
    difficulty: 'Behavior-based',
    how: 'Before buying anything new in a category (clothes, electronics, books, hobby supplies), one existing item in that category must be sold, donated, or discarded first.',
    why_works: 'Anchors the purchase decision to a concrete action rather than an abstract financial limit. The requirement to get rid of something existing creates real friction and forces evaluation of whether the new item is actually needed.',
    setup: 'Keep a donation box accessible. When you want to buy something, identify what\'s going in the box first. If nothing is worth removing, the new item probably isn\'t needed.',
  },
  {
    strategy: 'Unsubscribe from All Retail Emails',
    icon: '📧',
    difficulty: 'One-time setup',
    how: 'Bulk unsubscribe from every retail, sale, and promotional email. Use Unroll.me or manually unsubscribe from each sender.',
    why_works: 'Sale and "limited time" emails are engineered to trigger ADHD urgency responses. Removing the stimulus removes the trigger. You don\'t miss sales you never see.',
    setup: 'Search your inbox for "unsubscribe" — click through each retail email and unsubscribe. Use Unroll.me to handle the rest in bulk.',
  },
]

const creditImpact = [
  {
    behavior: 'Maxing out credit cards impulsively',
    factor: 'Credit Utilization (30% of score)',
    impact: 'High utilization tanks your score immediately and keeps it down as long as balances stay high',
    fix: 'The Spending Account Cap prevents using credit as a spending overflow',
  },
  {
    behavior: 'Opening new store cards at checkout',
    factor: 'New Inquiries + Credit Mix (10% each)',
    impact: 'Each application is a hard inquiry. Store cards also skew your credit mix unfavorably and average down account age',
    fix: 'The 48-hour rule and removed payment methods interrupt in-store impulse applications',
  },
  {
    behavior: 'Carrying balances month to month',
    factor: 'Credit Utilization (30% of score)',
    impact: 'Interest compounds, balances grow, utilization climbs. A $500 impulse purchase becomes a $650 balance after 6 months of minimums',
    fix: 'Hard spending limits and the one-in one-out rule prevent accumulation',
  },
  {
    behavior: 'Closing accounts after emotional overspending',
    factor: 'Length of History + Utilization (45% combined)',
    impact: 'Closing old accounts shortens credit history and reduces available credit — both hurt the score',
    fix: 'Systems that prevent overspending remove the emotional trigger to close accounts in frustration',
  },
]

const colorBorder: Record<string, string> = {
  purple: 'border-purple-200 bg-purple-50',
  blue: 'border-blue-200 bg-blue-50',
  orange: 'border-orange-200 bg-orange-50',
  red: 'border-red-200 bg-red-50',
  green: 'border-green-200 bg-green-50',
}

const colorBadge: Record<string, string> = {
  purple: 'bg-purple-100 text-purple-700',
  blue: 'bg-blue-100 text-blue-700',
  orange: 'bg-orange-100 text-orange-700',
  red: 'bg-red-100 text-red-700',
  green: 'bg-green-100 text-green-700',
}

export default function ImpulseSpendingPage() {
  return (
    <div className="bg-white min-h-screen">

      {/* Header */}
      <div className="bg-gradient-to-br from-brand-900 to-brand-700 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/adhd" className="text-brand-300 hover:text-white text-sm font-medium transition-colors mb-4 inline-block">← ADHD Hub</Link>
          <span className="inline-block bg-white/10 text-brand-200 text-xs font-semibold px-3 py-1 rounded-full mb-4">ADHD Money Series</span>
          <h1 className="text-4xl sm:text-5xl font-black mb-4 leading-tight">
            ADHD and Impulse Spending
          </h1>
          <p className="text-xl text-brand-100 leading-relaxed">
            Impulse spending with ADHD isn't a character flaw — it's a neurological pattern driven by dopamine, emotional dysregulation, and impaired impulse control. Here's the science, and six friction-based systems that actually interrupt it.
          </p>
          <div className="flex flex-wrap gap-3 mt-6 text-sm text-brand-200">
            <span>⏱ 13 min read</span>
            <span>·</span>
            <span>5 ADHD triggers explained</span>
            <span>·</span>
            <span>6 friction strategies</span>
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="max-w-3xl mx-auto px-4 py-12 article-body">
        <div className="callout-box mb-8">
          <p className="font-semibold text-brand-900 mb-1">Willpower is not the solution.</p>
          <p className="text-brand-700 text-sm leading-relaxed">Every strategy in this guide works by adding friction between the impulse and the purchase — not by relying on you to resist in the moment. Resistance fails. Systems succeed.</p>
        </div>

        <p>Adults with ADHD spend an estimated <strong>$2,590 more per year</strong> than their neurotypical peers due to impulse buying and forgetfulness. Nearly half (48%) report frequent impulse purchases, compared to just 12% of people without ADHD. This isn't a personal failing — it's a predictable output of how the ADHD brain is wired.</p>

        <p>Understanding the specific triggers that drive impulse spending is the first step. Once you know which mechanism is driving the behavior, the right friction strategy becomes obvious.</p>

        <h2>The 5 Neurological Triggers Behind ADHD Impulse Spending</h2>
      </div>

      {/* Triggers */}
      <div className="max-w-3xl mx-auto px-4 pb-16 space-y-5">
        {triggers.map((t) => (
          <div key={t.trigger} className={`border rounded-2xl p-6 ${colorBorder[t.color]}`}>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-2xl">{t.icon}</span>
              <h3 className="font-black text-xl text-gray-900">{t.trigger}</h3>
              <span className={`text-xs font-bold px-2 py-1 rounded-full ${colorBadge[t.color]}`}>Trigger</span>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">The science</p>
                <p className="text-gray-700 text-sm leading-relaxed">{t.science}</p>
              </div>
              <div className="bg-white/60 rounded-xl p-4">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">What it looks like</p>
                <p className="text-gray-600 text-sm leading-relaxed italic">{t.pattern}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Friction strategies */}
      <div className="bg-gray-50 border-t border-gray-200 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3">6 Friction Strategies That Actually Work</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Each strategy works by inserting a gap between the impulse and the purchase. You don't need all six — pick two or three that match your most common spending patterns and implement them this week.</p>
          </div>
          <div className="space-y-6">
            {frictionStrategies.map((s, i) => (
              <div key={s.strategy} className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
                <div className="border-b border-gray-100 px-6 py-4 flex flex-wrap items-center gap-3">
                  <span className="text-2xl">{s.icon}</span>
                  <div className="flex-1">
                    <h3 className="font-black text-lg text-gray-900">{i + 1}. {s.strategy}</h3>
                  </div>
                  <span className="text-xs bg-brand-100 text-brand-700 font-semibold px-3 py-1 rounded-full">{s.difficulty}</span>
                </div>
                <div className="px-6 py-5 space-y-4">
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">How it works</p>
                    <p className="text-gray-700 text-sm leading-relaxed">{s.how}</p>
                  </div>
                  <div className="bg-brand-50 border border-brand-100 rounded-xl p-4">
                    <p className="text-xs font-bold text-brand-700 uppercase tracking-wider mb-1">Why it works for ADHD</p>
                    <p className="text-brand-800 text-sm leading-relaxed">{s.why_works}</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Do this now</p>
                    <p className="text-gray-700 text-sm leading-relaxed">{s.setup}</p>
                    {s.link && (
                      <Link href={s.link} className="inline-block mt-2 text-sm font-semibold text-brand-600 hover:underline">{s.linkLabel}</Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Credit impact */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">How Impulse Spending Damages Your Credit</h2>
          <p className="text-gray-600 mb-8">The credit score consequences of ADHD impulse spending are specific and measurable. Here's exactly which behaviors cause which damage — and how friction strategies break the chain.</p>
          <div className="space-y-4">
            {creditImpact.map((item) => (
              <div key={item.behavior} className="border border-gray-200 rounded-2xl p-5">
                <div className="grid sm:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">The behavior</p>
                    <p className="text-gray-800 font-medium">{item.behavior}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-red-400 uppercase tracking-wider mb-1">Score factor hit</p>
                    <p className="text-gray-700 font-medium text-xs mb-1">{item.factor}</p>
                    <p className="text-gray-600 text-xs">{item.impact}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-brand-600 uppercase tracking-wider mb-1">System fix</p>
                    <p className="text-gray-700 text-xs">{item.fix}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Honest note */}
      <div className="bg-brand-900 py-14 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-3xl block mb-4">🧠</span>
          <h2 className="text-2xl font-black text-white mb-4">A Note on Shame</h2>
          <p className="text-brand-200 leading-relaxed mb-4">If you've spent years feeling ashamed of impulsive purchases — like you're broken or weak — that shame is misdirected. You were handed a neurotypical financial system with a neurodivergent brain and told to just try harder. That's not a fair setup.</p>
          <p className="text-brand-200 leading-relaxed">The goal of this guide isn't to make you feel worse about past spending. It's to give you systems that remove the need for willpower entirely — so the next version of your financial life doesn't depend on something your brain isn't wired to sustain.</p>
        </div>
      </div>

      {/* Nav between articles */}
      <div className="bg-white border-t border-gray-200 py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Continue the ADHD series</p>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <Link href="/adhd/adhd-budgeting" className="block bg-white border border-gray-200 rounded-2xl p-5 hover:border-brand-300 transition-all group">
              <span className="text-xs text-gray-400 block mb-1">← Previous</span>
              <span className="font-bold text-gray-900 group-hover:text-brand-600 transition-colors">Budgeting for ADHD Brains</span>
            </Link>
            <Link href="/adhd/late-payment-recovery" className="block bg-white border border-gray-200 rounded-2xl p-5 hover:border-brand-300 transition-all group">
              <span className="text-xs text-gray-400 block mb-1">Next →</span>
              <span className="font-bold text-gray-900 group-hover:text-brand-600 transition-colors">Late Payment Recovery Guide</span>
            </Link>
          </div>
          <div className="text-center">
            <Link href="/adhd#toolkit" className="btn-primary">Get the Free ADHD Credit Repair Toolkit →</Link>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="py-8 px-4 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center text-xs text-gray-400">
          <p>DIYCreditFix.net provides educational information only. ADHD-related content is for informational purposes and does not constitute medical advice or diagnosis. Financial information does not constitute legal or financial advice.</p>
        </div>
      </div>
    </div>
  )
}
