import Link from 'next/link'
import EmailCapture from '@/components/EmailCapture'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Understanding Your Credit Score: What Every Number Means',
  description: 'What scores of 580, 620, 670, 720, and 800+ mean in practice — and the fastest legal paths to move between them.',
}

export default function CreditScoresPage() {
  return (
    <div className="bg-white">
      <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/learn" className="text-gray-400 hover:text-white text-sm mb-4 inline-block">← Free Resources</Link>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">Essential</span>
            <span className="bg-white/10 text-gray-300 text-xs px-3 py-1 rounded-full">10 min read</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black mb-4">Understanding Your Credit Score: What Every Number Means</h1>
          <p className="text-xl text-gray-300 max-w-2xl">Your score is a three-digit number with real financial consequences. Here's what each range means in practice — and the fastest paths to improve it.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 article-body">

            <h2>FICO vs. VantageScore: Two Systems, One Goal</h2>
            <p>Most lenders use FICO scores (created by Fair Isaac Corporation). VantageScore is used by many free credit monitoring services. Both use the same 300–850 range and similar factors. When you're applying for a mortgage or auto loan, ask which score the lender uses — FICO 8 is the most common. Your VantageScore (available free through Credit Karma, Experian, etc.) is a useful tracker even if lenders use a different model.</p>

            <h2>What Your Score Range Actually Means</h2>

            <div className="space-y-4 my-8">
              {[
                { range: '800–850', label: 'Exceptional', color: 'bg-green-600', textColor: 'text-green-800', bgColor: 'bg-green-50 border-green-200',
                  detail: 'You\'ll receive the best available interest rates on mortgages, auto loans, and credit cards. Instant approvals are the norm. You\'re in the top 20% of scorers nationally. If you\'re here, the goal is maintenance.' },
                { range: '740–799', label: 'Very Good', color: 'bg-green-500', textColor: 'text-green-700', bgColor: 'bg-green-50 border-green-100',
                  detail: 'Near-best rates on most lending products. You\'ll qualify for premium credit cards, favorable mortgage terms, and the lowest auto loan rates. Small actions (keeping utilization below 10%) can push you into Exceptional.' },
                { range: '670–739', label: 'Good', color: 'bg-yellow-500', textColor: 'text-yellow-800', bgColor: 'bg-yellow-50 border-yellow-200',
                  detail: 'Approved for most products, but not at the best rates. Improving from this range to Very Good (740+) can save $10,000–$30,000 on a 30-year mortgage. This is where consistent on-time payments and reduced utilization pays off.' },
                { range: '580–669', label: 'Fair', color: 'bg-orange-500', textColor: 'text-orange-800', bgColor: 'bg-orange-50 border-orange-200',
                  detail: 'Limited options and significantly higher interest rates. Some lenders won\'t approve you; others will with high rates. This range is common for people rebuilding after a financial setback. Focus: no new late payments, reduce utilization, dispute any errors.' },
                { range: '300–579', label: 'Poor', color: 'bg-red-500', textColor: 'text-red-800', bgColor: 'bg-red-50 border-red-200',
                  detail: 'Most mainstream lenders will decline applications. Secured credit cards and credit-builder loans become your primary tools. Collections, charge-offs, or bankruptcy typically drive scores here. Recovery is possible but requires consistent positive behavior over 12–24 months.' },
              ].map(score => (
                <div key={score.range} className={`rounded-xl border p-5 ${score.bgColor}`}>
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <span className="font-black text-2xl text-gray-900">{score.range}</span>
                      <span className={`ml-3 font-bold text-sm ${score.textColor}`}>{score.label}</span>
                    </div>
                    <div className={`w-4 h-12 rounded-full ${score.color}`}></div>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{score.detail}</p>
                </div>
              ))}
            </div>

            <h2>How Much Does Each Range Cost You?</h2>
            <p>The difference between a "Fair" and "Good" credit score on a 30-year, $300,000 mortgage can mean paying $50,000–$90,000 more in interest over the life of the loan. On a $35,000 auto loan over 5 years, the difference between a 600 and a 750 score can mean $5,000–$8,000 in extra interest costs. Your credit score is a financial multiplier — it affects the cost of nearly everything you borrow.</p>

            <h2>The Fastest Legal Ways to Improve Your Score</h2>

            <h3>Dispute Errors (Can Work in 30–45 Days)</h3>
            <p>According to the FTC, 1 in 5 consumers has a material error on their credit report — one significant enough to affect their score. Incorrect account information, wrong balances, fraudulent accounts, and outdated negative items (collections older than 7 years, bankruptcies older than 10 years) can all be disputed. How much a successful dispute moves your score depends on how serious the error is and what the rest of your file looks like — but removing a collection account or a high-balance error from an otherwise clean report can have a meaningful impact.</p>

            <h3>Reduce Utilization (Can Work in 30 Days)</h3>
            <p>Credit utilization is recalculated monthly based on your current balance vs. limit on each card. If you pay down a maxed-out card from $4,900 to $500 on a $5,000 limit (98% to 10%), your score can rise significantly within one billing cycle. Paying down balances is the fastest score-improvement lever you control directly.</p>

            <h3>Get Added as an Authorized User</h3>
            <p>If a family member with excellent credit (long history, low utilization, no late payments) adds you as an authorized user on one of their accounts, their positive history on that account can appear on your credit report. You don't need to use the card or even receive it. This can add 10–30 points for someone with thin credit.</p>

            <h3>Get a Secured Credit Card or Credit-Builder Loan</h3>
            <p>For people with poor credit or no credit history, a secured credit card (deposit required) or a credit-builder loan (often through a credit union) provides the on-time payment history needed to build a score. Use the card for one small recurring expense, pay it off in full monthly, and don't carry a balance.</p>

            <h3>Pay Every Bill on Time, Every Month (Long-Term)</h3>
            <p>Payment history is 35% of your score. Every on-time payment is a brick laid. Every late payment is a brick removed — and removed bricks take years to replace. Set up autopay for the minimum on every account to eliminate the possibility of accidental late payments.</p>

            <div className="callout-box">
              <h4>Score Myths to Ignore</h4>
              <p>Carrying a small balance on your credit card does not help your score — it costs you interest and can hurt utilization. Checking your own credit does not lower your score (soft inquiry). Closing a credit card does not help your score — it can hurt it by raising your utilization ratio and shortening your credit history.</p>
            </div>

            <EmailCapture title="Get the Free Credit Score Improvement Plan" subtitle="A 90-day action checklist to start moving your credit score this month." />
          </div>

          <div className="space-y-6">
            <EmailCapture variant="sidebar" title="Free Credit Repair Checklist" subtitle="Start repairing your credit this week." />
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">Related Guides</h4>
              <ul className="space-y-2">
                <li><Link href="/learn/how-credit-works" className="text-brand-600 hover:text-brand-800 text-sm font-medium">→ How Credit Works</Link></li>
                <li><Link href="/learn/dispute-errors" className="text-brand-600 hover:text-brand-800 text-sm font-medium">→ How to Dispute Errors</Link></li>
                <li><Link href="/learn/root-behaviors" className="text-brand-600 hover:text-brand-800 text-sm font-medium">→ Root Behaviors Behind Bad Credit</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
