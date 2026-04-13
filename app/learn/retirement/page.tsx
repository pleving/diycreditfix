import Link from 'next/link'
import EmailCapture from '@/components/EmailCapture'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Retirement Planning: What You Need to Know at Every Age',
  description: '401(k), Roth IRA, Traditional IRA, Social Security — what each one is, how they work, and what you should be doing at every decade of your life.',
}

export default function RetirementPage() {
  return (
    <div className="bg-white">
      <div className="bg-gradient-to-r from-brand-800 to-brand-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/learn" className="text-brand-200 hover:text-white text-sm mb-4 inline-block">← Free Resources</Link>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">Building Wealth</span>
            <span className="bg-white/10 text-brand-100 text-xs px-3 py-1 rounded-full">18 min read</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black mb-4">Retirement Planning: What You Need to Know at Every Age</h1>
          <p className="text-xl text-brand-100 max-w-2xl">The earlier you understand these accounts, the more compound interest does the work for you. Here's a plain-English guide to the retirement system.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 article-body">

            <h2>The Core Retirement Accounts</h2>

            <h3>401(k) — The Employer Plan</h3>
            <p>A 401(k) is a retirement savings account offered through your employer. Contributions come directly from your paycheck before taxes (traditional) or after taxes (Roth 401k). The 2026 contribution limit is $23,000 per year ($30,500 if you're 50+).</p>
            <p>The most important feature: the employer match. Many employers match 50–100% of your contributions up to a certain percentage of your salary. If your employer matches 100% up to 3% of salary and you earn $60,000, that's a guaranteed $1,800 in free money each year. Never leave this on the table.</p>

            <h3>Roth IRA — Tax-Free Growth</h3>
            <p>You contribute after-tax dollars. Your money grows completely tax-free. Qualified withdrawals in retirement are also tax-free. You can withdraw contributions (not earnings) at any time without penalty. The 2026 limit is $7,000/year ($8,000 if 50+). Income limits apply — for 2026, the phase-out begins at $146,000 (single) or $230,000 (married).</p>
            <p>Best for: younger workers and anyone who expects to be in a higher tax bracket in retirement than they are today. When in doubt, Roth is usually the better choice for people under 40.</p>

            <h3>Traditional IRA — Tax-Deferred Growth</h3>
            <p>You contribute pre-tax dollars (if you meet income requirements). Your money grows tax-deferred. You pay ordinary income taxes on withdrawals in retirement. Required minimum distributions (RMDs) begin at age 73. Best for: people who expect to be in a significantly lower tax bracket in retirement.</p>

            <h3>Social Security — The Floor</h3>
            <p>Social Security is not a savings account — it's a pay-as-you-go government benefit funded by current workers. Your benefit is calculated based on your 35 highest-earning years. You can claim as early as age 62 (reduced benefit) or as late as age 70 (maximum benefit — 32% higher than claiming at 67). For most people who can afford to wait, delaying to 70 is mathematically advantageous, especially for the higher earner in a couple.</p>

            <h2>What to Do at Every Decade</h2>

            <h3>In Your 20s</h3>
            <ul>
              <li>Contribute enough to your 401(k) to get the full employer match — minimum</li>
              <li>Open a Roth IRA and contribute what you can, even $25/month</li>
              <li>Invest in broad market index funds — you have time to ride out volatility</li>
              <li>Avoid cashing out your 401(k) if you change jobs — roll it over instead</li>
            </ul>

            <h3>In Your 30s</h3>
            <ul>
              <li>Aim to have 1x your annual salary saved by age 30, 2x by 35</li>
              <li>Increase 401(k) contributions as income grows — avoid lifestyle inflation</li>
              <li>Max out the Roth IRA annually ($7,000) if income allows</li>
              <li>Consider a taxable brokerage account if you've maxed tax-advantaged accounts</li>
            </ul>

            <h3>In Your 40s</h3>
            <ul>
              <li>Aim to have 3x your salary saved by 40, 4x by 45</li>
              <li>Shift some focus to debt elimination — enter retirement debt-free if possible</li>
              <li>Investigate whether a backdoor Roth conversion applies (if income exceeds Roth limits)</li>
              <li>Rebalance your portfolio annually — consider shifting slightly toward bonds</li>
            </ul>

            <h3>In Your 50s</h3>
            <ul>
              <li>Take advantage of catch-up contributions: $30,500/year in 401(k), $8,000 in IRA</li>
              <li>Aim to have 6x your salary saved by 50, 7x by 55</li>
              <li>Create a Social Security claiming strategy — use SSA.gov's calculator</li>
              <li>Plan healthcare: Medicare begins at 65, so plan for the gap years</li>
            </ul>

            <div className="callout-box">
              <h4>The Power of Starting Early</h4>
              <p>Someone who invests $200/month from age 25–35 and then stops completely will have more money at 65 than someone who invests $200/month from age 35–65. Starting early matters more than investing for a long time.</p>
            </div>

            <h2>The Retirement-Credit Connection</h2>
            <p>Poor credit costs you money at every stage of life — in higher interest rates, higher insurance premiums, and restricted access to housing. But in retirement, the stakes are different. Your credit score matters less when you're not borrowing, but the debt that damaged your credit often follows you into retirement, eating into your fixed income.</p>
            <p>Entering retirement debt-free — including a paid-off mortgage — dramatically reduces the income you need from retirement accounts. Repairing your credit now and eliminating debt before retirement is one of the most powerful retirement planning moves available to you.</p>

            <EmailCapture title="Get the Free Financial Planning Checklist" subtitle="Credit, savings, debt payoff, investing, and retirement — organized by priority." />
          </div>

          <div className="space-y-6">
            <EmailCapture variant="sidebar" title="Free Credit Repair Guide" subtitle="Start repairing your credit this week." />
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">Related Guides</h4>
              <ul className="space-y-2">
                <li><Link href="/learn/investing" className="text-brand-600 hover:text-brand-800 text-sm font-medium">→ Investing 101</Link></li>
                <li><Link href="/learn/financial-planning" className="text-brand-600 hover:text-brand-800 text-sm font-medium">→ Complete Financial Planning</Link></li>
                <li><Link href="/learn/budgeting" className="text-brand-600 hover:text-brand-800 text-sm font-medium">→ Budgeting Basics</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
