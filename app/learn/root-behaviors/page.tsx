import Link from 'next/link'
import EmailCapture from '@/components/EmailCapture'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Root Behaviors Behind Poor Credit',
  description: 'Poor credit doesn\'t start with a missed payment. It starts one decision earlier. We trace all 10 upstream behaviors that lead to damaged credit — and how to change them.',
}

const behaviors = [
  {
    number: 1,
    behavior: 'Living Without a Budget',
    leadsTo: 'Late / Missed Payments',
    color: 'red',
    content: `The most direct upstream cause of missed payments is simply not knowing how much money you have versus what you owe. Without a budget, payment due dates compete invisibly against daily spending, and bills get overlooked — not from negligence, but from a lack of any system.

Research shows that people without budgets consistently underestimate their monthly obligations and overestimate available cash. The missed payment isn't the choice; failing to build a tracking system is.`,
    fix: 'Start with a simple two-column list: income vs. fixed obligations. Set calendar reminders 5 days before each bill is due. Then graduate to a full budget system.',
    fixLink: '/learn/budgeting',
    fixLabel: 'Read: Budgeting Basics →',
  },
  {
    number: 2,
    behavior: 'Spending to Your Income Ceiling (or Beyond It)',
    leadsTo: 'High Credit Utilization',
    color: 'orange',
    content: `Lifestyle inflation — the tendency to increase spending every time income increases — is one of the most common upstream behaviors behind chronically high balances. When someone earns more and immediately adjusts their standard of living upward, there's no buffer for the credit card balance to come down.

The spending is real, the income supports it month-to-month, but the utilization ratio stays high because credit is being used as a cash flow tool rather than a convenience. The root behavior is treating credit limits as income rather than as a safety margin.`,
    fix: 'Keep your credit utilization under 30% of each card\'s limit — ideally under 10%. Pay cards down to zero twice a month if needed.',
    fixLink: '/learn/how-credit-works',
    fixLabel: 'Read: How Credit Utilization Works →',
  },
  {
    number: 3,
    behavior: 'Impulse Buying and Emotional Spending',
    leadsTo: 'Maxed-Out Cards',
    color: 'yellow',
    content: `Emotional spending — purchasing in response to stress, boredom, low self-esteem, or social pressure — is the dominant root cause of maxed-out credit cards. The brain treats a purchase as a reward, releasing dopamine, which temporarily relieves emotional discomfort.

Because credit cards remove the immediate pain of spending (no physical cash leaves your hand), they make impulse buying far easier. The root behavior isn't the spending itself — it's using shopping as a coping mechanism for emotional states rather than addressing those states directly.`,
    fix: 'Implement a 48-hour rule: add items to a wish list and wait 48 hours before purchasing anything over $30. In that window, the emotional trigger usually passes.',
    fixLink: '/learn/budgeting',
    fixLabel: 'Read: Building Spending Controls →',
  },
  {
    number: 4,
    behavior: 'Not Understanding How Credit Inquiries Work',
    leadsTo: 'Too Many Hard Inquiries',
    color: 'blue',
    content: `Most people who apply for multiple credit cards in a short window aren't being reckless — they simply don't know that each application triggers a hard inquiry that temporarily drops their score. The root behavior is a lack of financial literacy: applying for every pre-approval offer that arrives, or chasing sign-up bonuses without understanding the scoring mechanics behind it.

Research consistently shows that many consumers grow up with no formal education about how credit scoring works.`,
    fix: 'Limit new credit applications to 1–2 per year unless you\'re rate-shopping for a mortgage or car loan (multiple inquiries in 14–45 days count as one for those).',
    fixLink: '/learn/credit-scores',
    fixLabel: 'Read: How Inquiries Affect Your Score →',
  },
  {
    number: 5,
    behavior: 'Ignoring Account Statements',
    leadsTo: 'Closing Old Accounts (Unintentionally Shortening Credit History)',
    color: 'purple',
    content: `People often close old accounts either because they forgot the account existed or because they feel overwhelmed by managing multiple cards and want to simplify. The root behavior is passive account management — not reviewing statements regularly, not maintaining a clear inventory of what accounts you hold.

This same inattention leads to closing a card out of frustration without understanding that it will shorten credit history and increase utilization simultaneously.`,
    fix: 'Keep a simple spreadsheet of every account you own: issuer, last 4 digits, credit limit, and payment due date. Review each statement monthly — even if you set it to autopay.',
    fixLink: '/learn/how-credit-works',
    fixLabel: 'Read: Why Credit History Length Matters →',
  },
  {
    number: 6,
    behavior: 'Avoiding Financial Reality (Debt Avoidance)',
    leadsTo: 'Minimum Payments Only — Debt That Never Shrinks',
    color: 'red',
    content: `A key psychological finding from debt research is that people facing mounting debt often respond with avoidance — they look away from statements, stop opening bills, and psychologically minimize the problem. Paying only the minimum is the financial expression of this avoidance: it feels like "handling it" without actually confronting the balance.

Research on late payment behavior found that financial fear → avoidance → minimum/late payments is a documented cycle, and the cycle begins with the avoidance behavior, not the payment decision.`,
    fix: 'Face the numbers head-on. Write every balance on paper. Calculate how long it takes to pay off each debt at minimum payments (there are free calculators for this). The reality is jarring — but it\'s the catalyst that breaks the avoidance cycle.',
    fixLink: '/learn/financial-planning',
    fixLabel: 'Read: Debt Payoff Strategies →',
  },
  {
    number: 7,
    behavior: 'No Financial Monitoring Routine',
    leadsTo: 'Undetected Credit Report Errors and Identity Theft',
    color: 'orange',
    content: `The root behavior here is the absence of a habit — never setting aside time to review accounts, statements, or credit reports. Most people who have errors on their credit reports aren't hiding from the information; they've simply never built a routine of checking.

Without a scheduled review cadence, months or years can pass before a fraudulent account, incorrect balance, or identity theft is discovered. The behavior that needs to change is reactive financial management replacing proactive monitoring.`,
    fix: 'Schedule a 30-minute "money date" monthly. Pull one free credit report (rotate between Equifax, Experian, TransUnion across the year) and review it. Set up free credit monitoring alerts.',
    fixLink: '/learn/dispute-errors',
    fixLabel: 'Read: How to Monitor Your Credit Report →',
  },
  {
    number: 8,
    behavior: 'Prioritizing Relationships Over Financial Boundaries',
    leadsTo: 'Co-Signing Debt — Damaged Credit From Someone Else\'s Choices',
    color: 'yellow',
    content: `Co-signing a loan is almost always an emotionally-driven decision: a parent wanting to help a child, a friend helping someone in need, a partner supporting a spouse. The root behavior is failing to separate emotional loyalty from financial liability — a decision made from the heart without running the numbers or contemplating the worst case.

The problem compounds because the same social pressure that led to co-signing often prevents frank conversations when the primary borrower starts struggling.`,
    fix: 'Before co-signing anything, ask: "If this person stops paying tomorrow, am I fully prepared to make every payment myself?" If the answer is no, offer other forms of help — a cash gift, helping them apply for a secured card, coaching them through the process.',
    fixLink: '/learn/how-credit-works',
    fixLabel: 'Read: Understanding Joint and Co-Signed Accounts →',
  },
  {
    number: 9,
    behavior: 'Living Paycheck-to-Paycheck Without an Emergency Fund',
    leadsTo: 'Collections Accounts From Unexpected Expenses',
    color: 'red',
    content: `The single most common path to a collections account is a financial emergency — a medical bill, a car breakdown, a job loss — that hits someone with no savings buffer. The root behavior is not building an emergency fund before extending credit obligations.

When an unexpected $800 car repair hits, someone with no savings charges it, can't pay it off, and eventually the balance escalates past their ability to manage. Medical bills in particular frequently go to collections because the recipient had no financial cushion and no plan for handling unexpected health costs.`,
    fix: 'Build a $1,000 emergency fund before paying off anything other than minimums. Then grow it to 3–6 months of expenses. Keep it in a high-yield savings account, separate from your checking.',
    fixLink: '/learn/emergency-savings',
    fixLabel: 'Read: How to Build an Emergency Fund →',
  },
  {
    number: 10,
    behavior: 'Never Being Taught About Credit',
    leadsTo: 'No Credit History ("Credit Invisible")',
    color: 'blue',
    content: `Being "credit invisible" is overwhelmingly the result of never being taught how credit works — not a deliberate choice to avoid it. Many people in this situation were raised in households that operated entirely on cash, had parents who distrusted or couldn't access credit, or immigrated from countries with different financial systems.

Without exposure to the concept that credit must be built intentionally, and that it requires active participation in the credit system, people arrive at adulthood with no score simply because it never occurred to them to start.`,
    fix: 'Start with a secured credit card — you deposit $200–$500 and that becomes your limit. Use it for one recurring bill. Pay it off in full each month. After 12 months, you\'ll have a score and a foundation to build on.',
    fixLink: '/learn/how-credit-works',
    fixLabel: 'Read: How to Build Credit From Scratch →',
  },
]

const colorMap: Record<string, string> = {
  red:    'bg-red-50 border-red-200',
  orange: 'bg-orange-50 border-orange-200',
  yellow: 'bg-yellow-50 border-yellow-200',
  blue:   'bg-blue-50 border-blue-200',
  purple: 'bg-purple-50 border-purple-200',
}
const badgeColorMap: Record<string, string> = {
  red:    'bg-red-100 text-red-700',
  orange: 'bg-orange-100 text-orange-700',
  yellow: 'bg-yellow-100 text-yellow-700',
  blue:   'bg-blue-100 text-blue-700',
  purple: 'bg-purple-100 text-purple-700',
}
const numberColorMap: Record<string, string> = {
  red:    'text-red-300',
  orange: 'text-orange-300',
  yellow: 'text-yellow-300',
  blue:   'text-blue-300',
  purple: 'text-purple-300',
}

export default function RootBehaviorsPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/learn" className="text-gray-400 hover:text-white text-sm transition-colors">← Free Resources</Link>
            <span className="text-gray-600">/</span>
            <span className="text-gray-400 text-sm">Credit Repair</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-brand-600 text-white text-xs font-semibold px-3 py-1 rounded-full">Must Read</span>
            <span className="bg-white/10 text-gray-300 text-xs px-3 py-1 rounded-full">18 min read</span>
            <span className="bg-white/10 text-gray-300 text-xs px-3 py-1 rounded-full">100% Free</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black mb-6 leading-tight">
            The Root Behaviors Behind Poor Credit
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            Poor credit doesn't start with a missed payment or a maxed-out card — those are <em>symptoms</em>. The real damage begins one decision earlier, with a pattern of behavior, belief, or habit that makes the credit-damaging outcome almost inevitable. This guide traces each of the 10 common credit mistakes back to the upstream behavior that caused it.
          </p>
        </div>
      </div>

      {/* Overview box */}
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="bg-brand-50 border border-brand-200 rounded-2xl p-8 mb-12">
          <h2 className="text-xl font-bold text-brand-900 mb-4">Why This Matters More Than Dispute Letters</h2>
          <p className="text-brand-800 leading-relaxed mb-4">
            Disputing errors is important — but it only fixes errors. If the habits that damaged your score in the first place don't change, your score will drop again. Understanding the root cause of each credit problem is the difference between a temporary fix and a permanent transformation.
          </p>
          <p className="text-brand-800 leading-relaxed">
            Read through each behavior below. Be honest with yourself about which ones apply. Then use the action steps and linked guides to address them at the source.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-12">
          <h3 className="font-bold text-gray-900 mb-4 text-lg">The 10 Root Behaviors</h3>
          <ol className="space-y-2">
            {behaviors.map(b => (
              <li key={b.number}>
                <a href={`#behavior-${b.number}`} className="text-brand-700 hover:text-brand-900 text-sm flex items-start gap-3 hover:underline">
                  <span className="font-bold text-gray-400 w-6 flex-shrink-0">{b.number}.</span>
                  <span><strong>{b.behavior}</strong> → Leads to: {b.leadsTo}</span>
                </a>
              </li>
            ))}
          </ol>
        </div>

        {/* Behaviors */}
        <div className="space-y-10">
          {behaviors.map(b => (
            <div key={b.number} id={`behavior-${b.number}`} className={`rounded-2xl border p-8 scroll-mt-20 ${colorMap[b.color]}`}>
              <div className="flex items-start gap-6">
                <div className={`text-6xl font-black leading-none flex-shrink-0 ${numberColorMap[b.color]}`}>
                  {b.number}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h2 className="text-xl sm:text-2xl font-black text-gray-900">{b.behavior}</h2>
                  </div>
                  <div className={`inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full mb-5 ${badgeColorMap[b.color]}`}>
                    <span>→ Leads to:</span>
                    <span>{b.leadsTo}</span>
                  </div>
                  <div className="text-gray-700 leading-relaxed mb-6 space-y-4">
                    {b.content.split('\n\n').map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                  <div className="bg-white rounded-xl p-5 border border-white shadow-sm">
                    <p className="text-xs font-bold text-brand-600 uppercase tracking-wider mb-2">How to Fix This</p>
                    <p className="text-gray-700 text-sm leading-relaxed mb-3">{b.fix}</p>
                    <Link href={b.fixLink} className="text-brand-600 text-sm font-semibold hover:text-brand-800 hover:underline">
                      {b.fixLabel}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Conclusion */}
        <div className="mt-16 bg-gray-900 text-white rounded-2xl p-10">
          <h2 className="text-3xl font-black mb-4">The Common Thread</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-5">
            Looking across all 10 behaviors, one theme is consistent: the problem almost never begins with a bad intention. It begins with a lack of information, a missing system, an emotional response, or a habit that was never installed in the first place.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-5">
            That's actually good news. It means most credit damage isn't a character flaw — it's a knowledge and systems gap. And those can be fixed.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Your next step is to identify which 2–3 of these behaviors are most active in your current financial life, address the upstream behavior first, and then work on the credit score as a result.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/learn/budgeting" className="btn-primary">
              Start: Build Your Budget →
            </Link>
            <Link href="/learn/dispute-errors" className="inline-flex items-center justify-center px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
              Next: Dispute Report Errors →
            </Link>
          </div>
        </div>

        <div className="mt-12">
          <EmailCapture
            title="Get the Free Credit Behavior Change Checklist"
            subtitle="We distilled all 10 root behaviors into a single printable action checklist. Free, forever."
          />
        </div>
      </div>
    </div>
  )
}
