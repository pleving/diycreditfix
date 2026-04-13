import Link from 'next/link'
import EmailCapture from '@/components/EmailCapture'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Financial Planning: Build Your Complete Money Map in 7 Steps',
  description: 'A practical 7-step framework for building a complete personal financial plan — even if you\'re starting from zero with debt and a damaged credit score.',
}

export default function FinancialPlanningPage() {
  return (
    <div className="bg-white">
      <div className="bg-gradient-to-r from-brand-800 to-brand-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/learn" className="text-brand-200 hover:text-white text-sm mb-4 inline-block">← Free Resources</Link>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">Strategy</span>
            <span className="bg-white/10 text-brand-100 text-xs px-3 py-1 rounded-full">16 min read</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black mb-4">Financial Planning: Build Your Complete Money Map in 7 Steps</h1>
          <p className="text-xl text-brand-100 max-w-2xl">You don't need a financial advisor to build a solid financial plan. You need clarity on where you are, where you're going, and the right order of operations to get there.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 article-body">

            <h2>What Financial Planning Actually Is</h2>
            <p>Financial planning is not a spreadsheet. It's not an investment portfolio. It's a conscious set of decisions about how you earn, spend, save, protect, and grow your money — in that order. Most people who struggle financially aren't doing the wrong things; they're doing the right things in the wrong order.</p>

            <h2>The 7-Step Financial Plan</h2>

            <h3>Step 1: Get a Complete Picture of Where You Stand</h3>
            <p>Before making any financial decisions, you need an honest accounting of your current situation. This means:</p>
            <ul>
              <li>Every debt: balance, interest rate, minimum payment, and creditor</li>
              <li>Every asset: checking, savings, retirement accounts, property</li>
              <li>Monthly take-home income (after all taxes and deductions)</li>
              <li>Monthly fixed and variable expenses</li>
              <li>Your credit score and credit report (free at AnnualCreditReport.com)</li>
            </ul>
            <p>Net worth = assets minus liabilities. Most people are surprised by their actual number. Write it down. It's the starting line, not a judgment.</p>

            <h3>Step 2: Build a Starter Emergency Fund ($1,000)</h3>
            <p>Before paying extra on any debt or making any investment, build a $1,000 cash buffer. This prevents the cycle of taking two steps forward with debt payments and one step back every time an unexpected expense hits. It also means the emergency goes on cash, not on a high-interest credit card.</p>

            <h3>Step 3: Pay Off High-Interest Debt</h3>
            <p>Any debt above 7–8% interest is destroying your financial progress. Credit cards at 20–29% APR are a financial emergency. There are two proven methods:</p>
            <ul>
              <li><strong>Debt Avalanche:</strong> Pay minimums on all debts, put every extra dollar toward the highest-interest debt first. Mathematically optimal — saves the most in interest.</li>
              <li><strong>Debt Snowball:</strong> Pay minimums on all debts, attack the smallest balance first regardless of interest rate. Psychologically powerful — early wins build momentum.</li>
            </ul>
            <p>Choose the one you'll actually stick with. For most people in serious debt, the Snowball provides the behavioral momentum needed to stay the course.</p>

            <h3>Step 4: Build Your Full Emergency Fund (3–6 Months)</h3>
            <p>Now that high-interest debt is gone, grow your emergency fund to 3–6 months of essential expenses in a high-yield savings account. This is your financial immune system — it keeps every other plan from falling apart when life happens.</p>

            <h3>Step 5: Invest for Retirement</h3>
            <p>Once the emergency fund is complete, direct money toward retirement accounts in this order:</p>
            <ol>
              <li>401(k) up to the full employer match</li>
              <li>Max out a Roth IRA ($7,000/year in 2026)</li>
              <li>Return to the 401(k) up to the contribution limit</li>
              <li>Taxable brokerage account if still saving beyond those limits</li>
            </ol>

            <h3>Step 6: Other Financial Goals</h3>
            <p>With retirement funded, address other goals: saving for a home down payment, paying off a mortgage early, college savings for children (529 plans), or building taxable investment wealth. Prioritize based on your specific values and timeline.</p>

            <h3>Step 7: Protect What You've Built</h3>
            <p>As your net worth grows, protection becomes more important. This means having adequate insurance (health, auto, life, disability, umbrella), having a will and beneficiary designations up to date, and having a plan for what happens to your assets if something happens to you.</p>

            <div className="callout-box">
              <h4>Where Does Credit Fit?</h4>
              <p>Credit repair runs in parallel with Steps 1–3. While you're building your starter fund and paying off debt, you're simultaneously disputing errors, changing the behaviors that damaged your score, and watching your score rise. A repaired credit score saves you money on insurance, reduces interest rates, and expands your financial options — all of which accelerate every other step.</p>
            </div>

            <h2>The Net Worth Statement: Your Annual Review</h2>
            <p>Once a year, update your net worth statement. List every asset and every liability. Calculate the difference. Track the trend. A net worth that grows by even $5,000 per year compounds dramatically over a career. The goal isn't any particular number — it's directional movement.</p>

            <h2>When to Hire a Financial Advisor</h2>
            <p>A fee-only fiduciary financial advisor (one who is legally required to act in your best interest) is worth consulting when: your financial situation becomes complex (business ownership, estate planning, inheritance), you're within 5 years of retirement, you're navigating a major life transition, or your investment accounts exceed $500,000 and you want a professional review. For the majority of people doing the basics, the 7 steps above — executed consistently — work without a paid advisor.</p>

            <EmailCapture title="Get the Free 7-Step Financial Checklist" subtitle="A printable version of this complete financial planning framework — to follow at your own pace." />
          </div>

          <div className="space-y-6">
            <EmailCapture variant="sidebar" title="Free Credit Repair Guide" subtitle="Start repairing your credit this week." />
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">Related Guides</h4>
              <ul className="space-y-2">
                <li><Link href="/learn/budgeting" className="text-brand-600 hover:text-brand-800 text-sm font-medium">→ Budgeting Basics</Link></li>
                <li><Link href="/learn/emergency-savings" className="text-brand-600 hover:text-brand-800 text-sm font-medium">→ Emergency Savings</Link></li>
                <li><Link href="/learn/investing" className="text-brand-600 hover:text-brand-800 text-sm font-medium">→ Investing 101</Link></li>
                <li><Link href="/learn/root-behaviors" className="text-brand-600 hover:text-brand-800 text-sm font-medium">→ Root Behaviors Behind Bad Credit</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
