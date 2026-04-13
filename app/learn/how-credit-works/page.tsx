import Link from 'next/link'
import EmailCapture from '@/components/EmailCapture'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How Credit Works: A Complete Guide to the Credit System',
  description: 'The five factors of your credit score, how they\'re weighted, what a credit report contains, who the bureaus are, and what actually moves your score.',
}

const factors = [
  { name: 'Payment History', weight: '35%', color: 'bg-red-500', desc: 'Whether you pay bills on time. A single 30-day late payment can drop your score 60–110 points. Conversely, a spotless payment history is your biggest score asset.' },
  { name: 'Amounts Owed (Utilization)', weight: '30%', color: 'bg-orange-500', desc: 'How much of your available credit you\'re using. Keep each card under 30% of its limit; under 10% is ideal. Utilization is calculated both per-card and overall.' },
  { name: 'Length of Credit History', weight: '15%', color: 'bg-yellow-500', desc: 'The age of your oldest account, newest account, and average age across all accounts. This is why closing old cards can hurt your score.' },
  { name: 'Credit Mix', weight: '10%', color: 'bg-blue-500', desc: 'Having different types of credit (credit cards, installment loans, mortgage) shows you can manage multiple forms of debt responsibly.' },
  { name: 'New Credit (Inquiries)', weight: '10%', color: 'bg-purple-500', desc: 'Each hard inquiry from a new credit application temporarily drops your score by 5–10 points. Multiple inquiries for the same type of loan (mortgage, auto) within 14–45 days count as one.' },
]

export default function HowCreditWorksPage() {
  return (
    <div className="bg-white">
      <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/learn" className="text-gray-400 hover:text-white text-sm mb-4 inline-block">← Free Resources</Link>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-brand-600 text-white text-xs font-semibold px-3 py-1 rounded-full">Start Here</span>
            <span className="bg-white/10 text-gray-300 text-xs px-3 py-1 rounded-full">12 min read</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black mb-4">How Credit Works: A Complete Guide</h1>
          <p className="text-xl text-gray-300 max-w-2xl">Before you can improve your credit, you need to understand what it is, how it's calculated, and who controls it. This guide covers everything.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 article-body">

            <h2>What Is Credit?</h2>
            <p>Credit is a measure of your trustworthiness as a borrower — how likely you are to repay money you owe. Lenders use it to decide whether to lend to you and at what interest rate. Landlords use it to decide whether to rent to you. Employers in some industries check it. Insurance companies use it to set premiums. Your credit score quietly affects dozens of financial decisions in your life.</p>

            <h2>The Three Credit Bureaus</h2>
            <p>Three private companies collect and maintain your credit history:</p>
            <ul>
              <li><strong>Equifax</strong> — equifax.com</li>
              <li><strong>Experian</strong> — experian.com</li>
              <li><strong>TransUnion</strong> — transunion.com</li>
            </ul>
            <p>Each bureau collects data independently. Lenders report to some or all three. This means your report — and your score — can differ across bureaus. Always check all three. You're entitled to one free report from each bureau per year at <strong>AnnualCreditReport.com</strong> (the only federally authorized free report source).</p>

            <h2>The Five Factors of Your Credit Score</h2>
            <p>FICO and VantageScore (the two most common scoring models) weigh these five factors differently, but the components are the same:</p>

            <div className="space-y-4 my-8">
              {factors.map(f => (
                <div key={f.name} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-gray-900">{f.name}</h4>
                    <span className="font-bold text-brand-600 text-lg">{f.weight}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                    <div className={`${f.color} h-2 rounded-full`} style={{ width: f.weight }}></div>
                  </div>
                  <p className="text-gray-600 text-sm">{f.desc}</p>
                </div>
              ))}
            </div>

            <h2>What's in Your Credit Report</h2>
            <p>Your credit report is not your credit score — it's the data the score is calculated from. It contains:</p>
            <ul>
              <li><strong>Personal information:</strong> Name, address, Social Security number, date of birth, employer history</li>
              <li><strong>Account information:</strong> All open and closed credit accounts, with balance, limit, payment history, and account status</li>
              <li><strong>Public records:</strong> Bankruptcies (Chapter 7 stays for 10 years, Chapter 13 for 7 years)</li>
              <li><strong>Inquiries:</strong> Hard inquiries from credit applications (stay for 2 years, affect score for 1 year) and soft inquiries from checks you initiate</li>
              <li><strong>Collections:</strong> Accounts sent to third-party debt collectors</li>
            </ul>

            <h2>Credit Score Ranges</h2>
            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-900 text-white">
                    <th className="text-left p-3 rounded-tl-lg">Score Range</th>
                    <th className="text-left p-3">Rating</th>
                    <th className="text-left p-3 rounded-tr-lg">Impact</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['800–850', 'Exceptional', 'Best rates on all products; instant approvals'],
                    ['740–799', 'Very Good', 'Near-best rates; easy approvals'],
                    ['670–739', 'Good', 'Approved for most products; standard rates'],
                    ['580–669', 'Fair', 'Limited options; higher rates; some denials'],
                    ['300–579', 'Poor', 'Mostly denied; secured cards only; very high rates'],
                  ].map(([range, rating, impact], i) => (
                    <tr key={range} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="p-3 font-bold text-gray-900 border-b border-gray-100">{range}</td>
                      <td className="p-3 text-gray-700 border-b border-gray-100">{rating}</td>
                      <td className="p-3 text-gray-600 border-b border-gray-100">{impact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>What Doesn't Affect Your Credit Score</h2>
            <ul>
              <li>Income or net worth</li>
              <li>Bank account balances</li>
              <li>Age, race, gender, or marital status</li>
              <li>Soft inquiries (checking your own credit, pre-approval checks)</li>
              <li>Utility and rent payments (unless reported through a service like Experian Boost)</li>
            </ul>

            <h2>The Fastest Ways to Improve Your Score</h2>
            <ol>
              <li><strong>Pay every bill on time, every month</strong> — set autopay for at least the minimum on every account</li>
              <li><strong>Reduce credit card balances</strong> — get utilization below 30% per card, then below 10%</li>
              <li><strong>Dispute any errors on your report</strong> — 1 in 5 reports contain errors that could be hurting your score</li>
              <li><strong>Don't close old accounts</strong> — length of history matters; keep old cards open even if unused</li>
              <li><strong>Limit new applications</strong> — space them at least 6 months apart when possible</li>
            </ol>

            <EmailCapture title="Get the Free Credit Repair Checklist" subtitle="10 actions you can take this week to start moving your score." />
          </div>

          <div className="space-y-6">
            <EmailCapture variant="sidebar" title="Free Credit Repair Checklist" subtitle="Start repairing your credit this week with our step-by-step guide." />
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">Next Steps</h4>
              <ul className="space-y-2">
                <li><Link href="/learn/credit-scores" className="text-brand-600 hover:text-brand-800 text-sm font-medium">→ Understanding Your Score</Link></li>
                <li><Link href="/learn/root-behaviors" className="text-brand-600 hover:text-brand-800 text-sm font-medium">→ Root Behaviors Behind Bad Credit</Link></li>
                <li><Link href="/learn/dispute-errors" className="text-brand-600 hover:text-brand-800 text-sm font-medium">→ How to Dispute Errors</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
