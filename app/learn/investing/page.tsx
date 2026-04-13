import Link from 'next/link'
import EmailCapture from '@/components/EmailCapture'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Investing 101: Start With $50 and Grow From There',
  description: 'Index funds, compound interest, Roth IRA vs brokerage accounts — a plain-English guide to investing for complete beginners.',
}

export default function InvestingPage() {
  return (
    <div className="bg-white">
      <div className="bg-gradient-to-r from-brand-800 to-brand-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/learn" className="text-brand-200 hover:text-white text-sm mb-4 inline-block">← Free Resources</Link>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">Building Wealth</span>
            <span className="bg-white/10 text-brand-100 text-xs px-3 py-1 rounded-full">15 min read</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black mb-4">Investing 101: Start With $50 and Grow From There</h1>
          <p className="text-xl text-brand-100 max-w-2xl">You don't need thousands of dollars to start investing. You need a Roth IRA, an index fund, and 20 minutes to set it up. Here's everything you need to know.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 article-body">

            <h2>Why Investing Matters for Your Financial Health</h2>
            <p>Saving money keeps you stable. Investing money makes you wealthy over time. The difference is compound interest — your returns generating their own returns, year after year. A one-time $5,000 investment at age 25 in a broad index fund grows to approximately $80,000 by retirement at a historical 7% real return. The same $5,000 invested at age 45 grows to only about $20,000. Time is the most valuable variable.</p>

            <h2>The Order of Operations</h2>
            <p>Before you invest, make sure you've completed these steps in order:</p>
            <ol>
              <li>Build a $1,000 emergency starter fund</li>
              <li>Pay off high-interest debt (anything above 7–8%)</li>
              <li>Contribute enough to your 401(k) to get the full employer match (this is a guaranteed 50–100% return)</li>
              <li>Fully fund an emergency fund (3–6 months of expenses)</li>
              <li>Max out a Roth IRA ($7,000/year in 2026)</li>
              <li>Return to the 401(k) or open a taxable brokerage account</li>
            </ol>

            <h2>Understanding Index Funds</h2>
            <p>An index fund is a type of investment fund that tracks a market index — most commonly the S&P 500 (the 500 largest U.S. companies). Instead of a fund manager picking stocks, the fund automatically holds every company in the index in proportion to its size.</p>
            <p>This approach has two massive advantages:</p>
            <ul>
              <li><strong>Low fees:</strong> No active manager to pay. Index funds from Vanguard, Fidelity, or Schwab charge as little as 0.03% per year. Active funds often charge 1–2%, which sounds small but destroys long-term returns.</li>
              <li><strong>Consistent performance:</strong> Over any 20-year period in U.S. history, the S&P 500 has delivered positive returns. Over most 10-year periods, index funds outperform actively managed funds.</li>
            </ul>

            <div className="callout-box">
              <h4>The Best Investment for Most People</h4>
              <p>A single total market index fund — like Vanguard's VTSAX, Fidelity's FZROX (zero expense ratio), or a target-date fund — inside a Roth IRA is the best investment strategy for the vast majority of working Americans. No stock picking required.</p>
            </div>

            <h2>Account Types Explained</h2>

            <h3>Roth IRA</h3>
            <p>You contribute after-tax dollars. Your money grows tax-free. You pay zero taxes on withdrawals in retirement. You can also withdraw your contributions (not earnings) at any time penalty-free, making it a flexible account. Best for: most people under 50 who expect their tax rate to be equal or higher in retirement. Contribution limit: $7,000/year in 2026.</p>

            <h3>Traditional IRA</h3>
            <p>You contribute pre-tax dollars (deductible if you meet income requirements). Your money grows tax-deferred. You pay income taxes on withdrawals in retirement. Best for: people who expect to be in a lower tax bracket in retirement than they are now. Same contribution limit as Roth.</p>

            <h3>401(k)</h3>
            <p>Offered through employers. Contribute pre-tax dollars (traditional) or post-tax (Roth 401k). Higher contribution limits ($23,000/year in 2026). Always contribute at least enough to get the full employer match — it's free money and an instant return on your investment.</p>

            <h3>Taxable Brokerage Account</h3>
            <p>No contribution limits. No tax advantages. Pay capital gains taxes on earnings when you sell. Best for: investing beyond IRA and 401(k) contribution limits, or for goals before retirement age (since retirement accounts have restrictions on early withdrawal).</p>

            <h2>How to Start Investing in 5 Steps</h2>
            <ol>
              <li><strong>Open a Roth IRA</strong> with Fidelity, Vanguard, or Schwab. All three are excellent. Fidelity has $0 minimums and zero-expense-ratio index funds.</li>
              <li><strong>Connect your bank account</strong> and set up a monthly automatic contribution — even $50 to start.</li>
              <li><strong>Choose your investment</strong> — for simplicity, pick a target-date retirement fund (e.g., "Target Date 2055 Fund"). It automatically adjusts its stock/bond mix as you age.</li>
              <li><strong>Set it and leave it alone</strong> — don't check it daily. Don't sell when the market drops. The worst investing mistake is selling during a downturn and missing the recovery.</li>
              <li><strong>Increase your contribution</strong> by 1% of income each year. Most people don't notice the difference in take-home pay, but over a career, it compounds dramatically.</li>
            </ol>

            <h2>The Relationship Between Investing and Credit</h2>
            <p>Investing and credit repair aren't opposites — they run in parallel. As you pay down debt and repair your credit, you free up cash flow for investing. As your credit score improves, you qualify for lower interest rates on any future borrowing, which also frees up cash for investing. The two processes reinforce each other.</p>

            <EmailCapture title="Get the Free Financial Starter Checklist" subtitle="A complete checklist covering credit, savings, debt payoff, and your first investment — in the right order." />
          </div>

          <div className="space-y-6">
            <EmailCapture variant="sidebar" title="Free Credit Repair Guide" subtitle="Start repairing your credit this week with our step-by-step checklist." />
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">Related Guides</h4>
              <ul className="space-y-2">
                <li><Link href="/learn/retirement" className="text-brand-600 hover:text-brand-800 text-sm font-medium">→ Retirement Planning Guide</Link></li>
                <li><Link href="/learn/budgeting" className="text-brand-600 hover:text-brand-800 text-sm font-medium">→ Budgeting Basics</Link></li>
                <li><Link href="/learn/financial-planning" className="text-brand-600 hover:text-brand-800 text-sm font-medium">→ Complete Financial Plan</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
