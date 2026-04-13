import Link from 'next/link'
import EmailCapture from '@/components/EmailCapture'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Budgeting Basics: Build a Budget That Actually Sticks',
  description: 'Learn the most effective budgeting methods — zero-based, 50/30/20, envelope, and digital. Build a system that works for your real life.',
}

export default function BudgetingPage() {
  return (
    <div className="bg-white">
      <div className="bg-gradient-to-r from-brand-800 to-brand-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/learn" className="text-brand-200 hover:text-white text-sm mb-4 inline-block">← Free Resources</Link>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">Foundation</span>
            <span className="bg-white/10 text-brand-100 text-xs px-3 py-1 rounded-full">14 min read</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black mb-4">Budgeting Basics: Build a Budget That Actually Sticks</h1>
          <p className="text-xl text-brand-100 max-w-2xl">Most budgets fail not because budgeting is hard — but because the method doesn't fit the person. Here's how to find the one that works for you.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 article-body">
            <h2>Why Most Budgets Fail</h2>
            <p>The most common reason a budget fails isn't willpower — it's design. A budget that doesn't account for your irregular income, your actual spending patterns, or your personality will break down the moment life doesn't cooperate. And life never cooperates.</p>
            <p>The goal of a budget isn't restriction. It's intention. A budget is simply a plan for where your money goes before it arrives. Every dollar gets a job. Nothing leaks out unaccounted for.</p>

            <h2>Step 1: Know Your Numbers</h2>
            <p>Before choosing a method, you need two numbers: what comes in and what goes out. Pull three months of bank and credit card statements and categorize every transaction. Most people are genuinely surprised — both by how much they spend in specific categories and by recurring charges they forgot existed.</p>
            <ul>
              <li><strong>Fixed expenses:</strong> Rent, car payment, insurance, subscriptions — same amount every month</li>
              <li><strong>Variable expenses:</strong> Groceries, gas, dining out, entertainment — fluctuate monthly</li>
              <li><strong>Irregular expenses:</strong> Annual subscriptions, car registration, holiday gifts — predictable but not monthly</li>
              <li><strong>Savings and debt payments:</strong> These go here as intentional allocations, not leftovers</li>
            </ul>

            <h2>The Four Main Budgeting Methods</h2>

            <h3>1. The 50/30/20 Budget</h3>
            <p>Divide your after-tax income into three buckets:</p>
            <ul>
              <li><strong>50% — Needs:</strong> Housing, utilities, groceries, transportation, insurance, minimum debt payments</li>
              <li><strong>30% — Wants:</strong> Dining out, entertainment, shopping, subscriptions, travel</li>
              <li><strong>20% — Savings and debt repayment:</strong> Emergency fund, retirement contributions, extra debt payments</li>
            </ul>
            <p><strong>Best for:</strong> People new to budgeting who want simplicity. It's flexible enough to accommodate most lifestyles and doesn't require tracking every dollar.</p>
            <p><strong>Limitation:</strong> The 50/30/20 split assumes a relatively stable income and moderate cost-of-living. In high-cost cities, 50% for needs alone may be impossible.</p>

            <h3>2. Zero-Based Budgeting</h3>
            <p>Every dollar of your income gets assigned to a category until you reach zero. Income minus allocations = $0. This doesn't mean you spend everything — "savings" and "investments" are also categories. The point is that no money is unaccounted for.</p>
            <p><strong>Best for:</strong> People who want full control and are willing to invest 30–60 minutes per month in detailed planning. Also excellent for people with variable incomes who need to make deliberate decisions each pay period.</p>
            <p><strong>Limitation:</strong> More time-intensive. Requires revisiting the budget when irregular expenses appear.</p>

            <h3>3. The Envelope Method (Cash Stuffing)</h3>
            <p>Withdraw physical cash for variable spending categories (groceries, dining, entertainment, personal care) and put the allocated amount into labeled envelopes. When the envelope is empty, spending in that category stops for the month.</p>
            <p><strong>Best for:</strong> People who overspend in specific categories and need a physical, tangible boundary. The act of handling cash creates a psychological friction that cards — especially credit cards — don't.</p>
            <p><strong>Limitation:</strong> Impractical for online purchases or travel. Many people now use a digital version with separate accounts or budget app sub-categories.</p>

            <h3>4. Pay Yourself First (Reverse Budgeting)</h3>
            <p>On payday, immediately transfer a fixed amount to savings and retirement accounts. Then spend the remainder however you choose — no detailed tracking required. The savings happen automatically before the spending does.</p>
            <p><strong>Best for:</strong> High earners or organized spenders who don't need micro-level control but want to ensure savings goals are met. Also great for people who find detailed budgeting exhausting.</p>
            <p><strong>Limitation:</strong> Doesn't address overspending on credit or debt payoff. Requires honest self-assessment that the "spend freely" portion actually stays within bounds.</p>

            <h2>How to Build Your Budget: A Step-by-Step Process</h2>
            <ol className="list-decimal pl-6 space-y-3 mb-6">
              <li className="text-gray-700 text-lg"><strong>Calculate your monthly take-home income</strong> — after taxes, 401(k) contributions, and any automatic deductions.</li>
              <li className="text-gray-700 text-lg"><strong>List all fixed expenses</strong> — rent, utilities, car payment, insurance premiums, minimum debt payments.</li>
              <li className="text-gray-700 text-lg"><strong>Estimate variable expenses</strong> using your last 3 months of statements as a baseline.</li>
              <li className="text-gray-700 text-lg"><strong>Identify irregular expenses</strong> (annual subscriptions, car registration, gifts) and divide by 12 to create a monthly sinking fund.</li>
              <li className="text-gray-700 text-lg"><strong>Allocate savings first</strong> — emergency fund, retirement, and debt payoff are not what's "left over." They're planned line items.</li>
              <li className="text-gray-700 text-lg"><strong>Compare income vs. total allocations</strong>. If you're over, cut from discretionary categories first. If under, put the surplus toward savings goals.</li>
              <li className="text-gray-700 text-lg"><strong>Review and adjust monthly</strong> — no budget is perfect in month one. Iteration is the process.</li>
            </ol>

            <h2>The Connection Between Budgeting and Credit</h2>
            <p>Missed payments — the single biggest factor in credit scores — are almost always traceable to not having a budgeting system. When you don't track what's owed and when, bills compete invisibly with daily spending. The payment doesn't get missed because you didn't care — it gets missed because you didn't have a system that made it impossible to forget.</p>
            <p>A functioning budget doesn't just improve your finances — it directly protects and improves your credit score by eliminating the most damaging behavior: missed payments.</p>

            <div className="callout-box">
              <h4>Key Takeaway</h4>
              <p>The best budget is the one you'll actually use. Start simple — even just tracking your spending for one month without changing anything. Awareness precedes change.</p>
            </div>

            <h2>Free Budgeting Tools</h2>
            <ul>
              <li><strong>YNAB (You Need a Budget)</strong> — The gold standard for zero-based budgeting. Paid, but worth it for serious budgeters.</li>
              <li><strong>Mint / Credit Karma</strong> — Free, automatic transaction categorization, good for passive tracking.</li>
              <li><strong>Google Sheets / Excel</strong> — Maximum flexibility with zero cost. Hundreds of free templates available.</li>
              <li><strong>EveryDollar</strong> — Ramsey's free zero-based budgeting app. Clean and simple.</li>
            </ul>

            <EmailCapture variant="inline" title="Get the Free Budget Template" subtitle="A simple, ready-to-use monthly budget spreadsheet — no signup required." />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <EmailCapture variant="sidebar" title="Free Credit Repair Checklist" subtitle="The 10 steps to start repairing your credit this week." />
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">Related Guides</h4>
              <ul className="space-y-2">
                <li><Link href="/learn/emergency-savings" className="text-brand-600 hover:text-brand-800 text-sm font-medium">→ Building an Emergency Fund</Link></li>
                <li><Link href="/learn/root-behaviors" className="text-brand-600 hover:text-brand-800 text-sm font-medium">→ Root Behaviors Behind Bad Credit</Link></li>
                <li><Link href="/learn/financial-planning" className="text-brand-600 hover:text-brand-800 text-sm font-medium">→ Complete Financial Planning Guide</Link></li>
                <li><Link href="/learn/debt-payoff" className="text-brand-600 hover:text-brand-800 text-sm font-medium">→ Debt Payoff Strategies</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
