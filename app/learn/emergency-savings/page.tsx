import Link from 'next/link'
import EmailCapture from '@/components/EmailCapture'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Emergency Savings: Why $1,000 Is Not Enough',
  description: 'How much you actually need in an emergency fund, where to keep it, and how to build it even when money is tight.',
}

export default function EmergencySavingsPage() {
  return (
    <div className="bg-white">
      <div className="bg-gradient-to-r from-brand-800 to-brand-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/learn" className="text-brand-200 hover:text-white text-sm mb-4 inline-block">← Free Resources</Link>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">Foundation</span>
            <span className="bg-white/10 text-brand-100 text-xs px-3 py-1 rounded-full">10 min read</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black mb-4">Emergency Savings: Why $1,000 Is Not Enough</h1>
          <p className="text-xl text-brand-100 max-w-2xl">The single most direct connection between savings and credit is simple: people without an emergency fund put emergencies on credit cards they can't pay off. Here's how to break that cycle.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 article-body">

            <h2>The Direct Link Between No Savings and Bad Credit</h2>
            <p>Here is the most common path to a collections account: A person has no savings buffer. An unexpected expense hits — a $900 car repair, a $1,200 medical bill, a broken appliance. They charge it to a credit card. They can't pay it off at the end of the month. The balance grows with interest. After several months, it goes to collections. Their credit score drops 80–120 points.</p>
            <p>The root cause wasn't the credit card. It wasn't even the unexpected expense. It was the absence of a savings buffer that would have made the expense manageable. An emergency fund is credit protection as much as it is financial security.</p>

            <h2>How Much Do You Actually Need?</h2>
            <p>The standard advice is 3–6 months of living expenses. But that range is wide for a reason — the right number depends on your specific situation.</p>
            <ul>
              <li><strong>Stable job, dual income household:</strong> 3 months is generally adequate. Two incomes provide a natural buffer against one job loss.</li>
              <li><strong>Single income, stable job:</strong> 4–5 months. Losing the only income needs more runway.</li>
              <li><strong>Self-employed or variable income:</strong> 6+ months. Income can drop suddenly and stay low during recovery periods.</li>
              <li><strong>Single income with dependents or chronic health issues:</strong> 6–9 months. More responsibilities = more risk exposure.</li>
            </ul>

            <div className="callout-box">
              <h4>Calculate Your Number</h4>
              <p>Add up your essential monthly expenses: rent/mortgage, utilities, groceries, transportation, insurance, and minimum debt payments. Multiply by your target number of months. That is your emergency fund target.</p>
            </div>

            <h2>Where to Keep Your Emergency Fund</h2>
            <p>An emergency fund needs to be two things: safe and accessible. It does not need to be maximally invested or earning high returns — that's not its job. Its job is to be there when you need it.</p>
            <ul>
              <li><strong>High-Yield Savings Account (HYSA):</strong> The gold standard. FDIC insured, accessible within 1–3 business days, earns 4–5% APY as of 2026 from online banks like Ally, Marcus, or SoFi. This is where most people should keep their emergency fund.</li>
              <li><strong>Money Market Account:</strong> Similar to a HYSA with slightly different rules. Good option, especially through a credit union.</li>
              <li><strong>NOT your investment account:</strong> Market investments can drop 30–40% right when you need the money most (during a recession when job losses also spike). Keep emergency funds out of the market.</li>
              <li><strong>NOT your checking account:</strong> Physically separating the fund from your spending account is important — it reduces the temptation to dip into it for non-emergencies.</li>
            </ul>

            <h2>How to Build It When Money Is Tight</h2>
            <p>The most common objection is: "I can't afford to save anything." In almost every case, this is a sequencing problem, not a math problem. The solution is to start very small and make it automatic.</p>

            <h3>The $25/Week Method</h3>
            <p>Set up an automatic transfer of $25 per week to a separate HYSA on the day after each paycheck. $25 per week = $1,300 in one year. Most people won't notice $25/week missing from their checking account. At $50/week, you'd have $2,600 after one year.</p>

            <h3>The "Found Money" Method</h3>
            <p>Any money that arrives unexpectedly — a tax refund, a work bonus, a gift, a side job payment — goes directly and entirely into the emergency fund until the target is reached. This method builds the fund without touching the regular budget at all.</p>

            <h3>The Expense Audit Method</h3>
            <p>Review every subscription and recurring charge. Cancel any you haven't actively used in 60 days. Redirect those savings to the emergency fund automatically. Most people find $30–$100/month in forgotten subscriptions alone.</p>

            <h2>What Counts as an Emergency</h2>
            <p>This matters more than most people realize. An emergency fund gets depleted quickly when it's used for non-emergencies. A strict definition helps:</p>
            <ul>
              <li>✓ <strong>Emergency:</strong> Job loss, medical/dental crisis, essential car repair, urgent home repair (roof, heating)</li>
              <li>✗ <strong>Not an emergency:</strong> Holiday gifts, planned travel, a good sale, a wants-based purchase you didn't budget for</li>
            </ul>
            <p>The discipline to use the fund only for genuine emergencies is what makes it available when a real emergency hits.</p>

            <h2>After the Emergency: Replenish Immediately</h2>
            <p>When you use your emergency fund, replenishing it becomes the top financial priority — ahead of extra debt payments, ahead of investments. Treat it like a bill that's due. The fund is only useful if it's actually funded when the next emergency arrives.</p>

            <div className="callout-box">
              <h4>The Credit Connection</h4>
              <p>Every dollar in your emergency fund is a dollar that won't go on a credit card during a crisis. Building this fund is one of the highest-leverage moves you can make for your long-term credit health.</p>
            </div>

            <EmailCapture title="Get the Free Credit Repair Checklist" subtitle="10 practical steps to start repairing your credit this week." />
          </div>

          <div className="space-y-6">
            <EmailCapture variant="sidebar" title="Free Emergency Fund Tracker" subtitle="A simple spreadsheet to track your progress toward your savings goal." />
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">Related Guides</h4>
              <ul className="space-y-2">
                <li><Link href="/learn/budgeting" className="text-brand-600 hover:text-brand-800 text-sm font-medium">→ Budgeting Basics</Link></li>
                <li><Link href="/learn/root-behaviors" className="text-brand-600 hover:text-brand-800 text-sm font-medium">→ Root Behaviors Behind Bad Credit</Link></li>
                <li><Link href="/learn/financial-planning" className="text-brand-600 hover:text-brand-800 text-sm font-medium">→ Complete Financial Planning</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
