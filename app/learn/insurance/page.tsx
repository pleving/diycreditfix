import Link from 'next/link'
import EmailCapture from '@/components/EmailCapture'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Insurance Basics: What to Get, What to Skip',
  description: 'Health, auto, life, renters, disability — the insurance you genuinely need, what is oversold, and how insurance connects to your credit score.',
}

export default function InsurancePage() {
  return (
    <div className="bg-white">
      <div className="bg-gradient-to-r from-brand-800 to-brand-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/learn" className="text-brand-200 hover:text-white text-sm mb-4 inline-block">← Free Resources</Link>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">Protection</span>
            <span className="bg-white/10 text-brand-100 text-xs px-3 py-1 rounded-full">12 min read</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black mb-4">Insurance Basics: What to Get, What to Skip</h1>
          <p className="text-xl text-brand-100 max-w-2xl">Insurance is the defensive side of financial health. Getting it wrong — either too little or too much — has direct consequences for your financial stability and, indirectly, your credit.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 article-body">

            <h2>Why Insurance Matters for Your Credit</h2>
            <p>Medical bills are the number one cause of bankruptcy in the United States and one of the top sources of collections accounts on credit reports. A single hospitalization without adequate insurance can generate tens of thousands of dollars in bills that, if unpaid, will end up in collections and devastate a credit score. Insurance isn't just protection against catastrophe — it's credit protection.</p>

            <h2>Health Insurance</h2>
            <p>Non-negotiable. This is the most critical insurance coverage most Americans need. A single emergency room visit without insurance can cost $3,000–$30,000+. A hospitalization can cost $100,000+. Even the most basic health insurance plan puts a ceiling on your out-of-pocket risk.</p>

            <h3>Key Terms You Need to Know</h3>
            <ul>
              <li><strong>Premium:</strong> The monthly amount you pay for coverage, regardless of whether you use it</li>
              <li><strong>Deductible:</strong> The amount you pay out-of-pocket before insurance begins covering costs</li>
              <li><strong>Out-of-pocket maximum:</strong> The most you'll pay in a year — after this, insurance covers 100%</li>
              <li><strong>Copay:</strong> Fixed amount you pay per visit or service</li>
              <li><strong>Coinsurance:</strong> Percentage you pay after meeting your deductible</li>
            </ul>

            <h3>Choosing a Plan</h3>
            <p>If you're young and healthy: a high-deductible health plan (HDHP) with a lower premium is often the right choice. Pair it with a Health Savings Account (HSA) — tax-advantaged savings for medical expenses that rolls over year to year. If you have chronic conditions or expect significant medical use, a lower-deductible plan with higher premiums may cost less overall.</p>

            <h2>Auto Insurance</h2>
            <p>Required by law in nearly every state. Most states mandate liability coverage — this pays for damage you cause to others. Comprehensive and collision coverage protect your vehicle and are usually required if you have a car loan.</p>

            <h3>What You Actually Need</h3>
            <ul>
              <li><strong>Liability:</strong> Minimum required by your state, but higher limits (100/300/100) are worth the small extra cost</li>
              <li><strong>Collision:</strong> Required if you have a car loan; optional on older paid-off vehicles worth less than $5,000</li>
              <li><strong>Comprehensive:</strong> Covers theft, weather, and non-collision damage — often worth it for newer vehicles</li>
              <li><strong>Uninsured/underinsured motorist:</strong> Strongly recommended — covers you when the other driver doesn't have adequate insurance</li>
            </ul>

            <div className="callout-box">
              <h4>Auto Insurance and Your Credit</h4>
              <p>In most states, insurers use your credit score to set your premium. A better credit score = a lower auto insurance rate. Repairing your credit directly reduces this cost — often by $200–$800 per year.</p>
            </div>

            <h2>Renters Insurance</h2>
            <p>Dramatically underutilized and inexpensive — typically $15–$30/month. Covers your personal belongings against theft, fire, and water damage, and provides liability coverage if someone is injured in your home. If you rent, this is an easy yes.</p>

            <h2>Life Insurance</h2>
            <p>Only needed if other people depend on your income. If you're single with no dependents, you likely don't need life insurance yet. If you have a spouse, children, or others who rely on your income, you do.</p>
            <p><strong>Term life insurance</strong> is almost always the right choice for most people — it provides coverage for a fixed period (10, 20, or 30 years) at a low cost. A healthy 30-year-old can get $500,000 of 20-year term coverage for $25–$35/month.</p>
            <p><strong>Whole life and universal life</strong> insurance are significantly more expensive and sold aggressively, but for most people they are not the right product. Avoid unless you have a specific estate planning need.</p>

            <h2>Disability Insurance</h2>
            <p>Often called the most overlooked coverage. A 35-year-old has a 1-in-4 chance of becoming disabled before retirement. Short-term disability (usually through your employer) covers 60–80% of salary for 3–6 months. Long-term disability covers you beyond that — critical if your savings couldn't sustain 6+ months without income.</p>

            <h2>What to Skip</h2>
            <ul>
              <li><strong>Extended warranties on small electronics</strong> — the math rarely works in your favor</li>
              <li><strong>Credit card payment protection insurance</strong> — expensive for the coverage provided; an emergency fund is better</li>
              <li><strong>Accidental death and dismemberment (AD&D) as a standalone policy</strong> — often sold as a supplement to life insurance; term life covers death regardless of cause</li>
              <li><strong>Mortgage life insurance</strong> — usually much more expensive per dollar of coverage than term life</li>
            </ul>

            <EmailCapture title="Get the Free Financial Checklist" subtitle="Insurance, credit, savings, and investing — organized by priority order." />
          </div>

          <div className="space-y-6">
            <EmailCapture variant="sidebar" title="Free Credit Repair Guide" subtitle="Start repairing your credit this week with our step-by-step checklist." />
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">Related Guides</h4>
              <ul className="space-y-2">
                <li><Link href="/learn/emergency-savings" className="text-brand-600 hover:text-brand-800 text-sm font-medium">→ Emergency Savings Guide</Link></li>
                <li><Link href="/learn/financial-planning" className="text-brand-600 hover:text-brand-800 text-sm font-medium">→ Complete Financial Planning</Link></li>
                <li><Link href="/learn/root-behaviors" className="text-brand-600 hover:text-brand-800 text-sm font-medium">→ Root Behaviors Behind Bad Credit</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
