import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ADHD Late Payment Recovery Guide — DIY Credit Fix',
  description: 'How to dispute late payments, write goodwill deletion letters, and set up systems so missed payments never damage your credit again.',
}

const damageByTime = [
  { timeframe: 'Less than 30 days late', impact: 'No credit impact — lenders don\'t report until 30+ days', severity: 'safe', note: 'You may owe a late fee, but your credit is unaffected. Pay immediately.' },
  { timeframe: '30 days late', impact: 'Reported to bureaus. Score drops 60–110 points depending on your starting score', severity: 'moderate', note: 'The first 30-day mark is the most damaging single moment in the timeline.' },
  { timeframe: '60 days late', impact: 'Additional negative mark. Account may be flagged as delinquent.', severity: 'serious', note: 'Creditor may begin collection calls and increase your interest rate.' },
  { timeframe: '90–120 days late', impact: 'Severe delinquency. Creditor may charge off the debt.', severity: 'severe', note: 'A charge-off stays on your report for 7 years and causes extreme score damage.' },
  { timeframe: '180+ days late', impact: 'Account sold to collections. Both original creditor and collector may appear on report.', severity: 'critical', note: 'Two negative entries for one debt. Hardest to recover from.' },
]

const recoverySteps = [
  {
    step: '01',
    title: 'Bring the Account Current — Today',
    icon: '💳',
    content: 'Before anything else, pay the overdue amount if the account is still open. Nothing else on this list matters if the account keeps accumulating late payments. Even if you can only pay the minimum, pay it now. Every additional month of lateness is another mark on your report.',
    adhd_tip: 'Set a payment in motion before you finish reading this article. Literally open a new tab right now.',
  },
  {
    step: '02',
    title: 'Check if the Late Payment Was Reported',
    icon: '📋',
    content: 'Pull your free credit reports at AnnualCreditReport.com (all three bureaus — Equifax, Experian, TransUnion). Look at the payment history section for the account in question. Lenders report to each bureau independently, so a late payment may appear on one or two but not all three.',
    adhd_tip: 'Screenshot or download the relevant section so you have it for reference when writing your letters.',
  },
  {
    step: '03',
    title: 'Check for Errors First',
    icon: '🔍',
    content: 'Before assuming the late payment was legitimate, verify it\'s accurate. ADHD brains sometimes pay bills and forget they paid — check your bank statements for proof of payment during the period in question. If you find evidence you paid on time, this is a factual error you can dispute directly with the bureau under the FCRA — and the creditor must investigate within 30 days.',
    adhd_tip: 'Check your bank\'s transaction history, not just your memory. Search for the creditor name in your bank\'s search bar.',
  },
  {
    step: '04',
    title: 'Write a Goodwill Deletion Letter',
    icon: '✉️',
    content: 'If the late payment was real and reported, your best tool is a goodwill deletion letter — a direct request to the creditor asking them to remove the negative mark as a gesture of goodwill. This works best when: you have a long history of on-time payments with this creditor, the lateness was a one-time event, and you\'ve since brought the account current. It doesn\'t always work, but it costs nothing and often succeeds for long-term customers.',
    adhd_tip: 'Be honest in your letter. Creditors respond better to genuine explanations than scripted excuses. Saying "I have ADHD and I missed the reminder" is more effective than vague language.',
  },
  {
    step: '05',
    title: 'Call and Follow Up',
    icon: '📞',
    content: 'After sending your letter, call the creditor\'s customer service line to confirm receipt and ask to speak with a supervisor or the goodwill department. A phone call combined with a letter significantly increases success rates. Be polite, be brief, and ask specifically: "Is there any way you can remove the late payment as a goodwill gesture given my payment history?"',
    adhd_tip: 'Script what you\'re going to say before you call. Write it out and keep it in front of you during the call so you don\'t lose track mid-conversation.',
  },
  {
    step: '06',
    title: 'Set Up the Autopay System',
    icon: '🔄',
    content: 'The final step is making sure this never happens again. Set up autopay for the minimum payment on every account — not the full balance, just the minimum. This guarantees you\'re never 30+ days late even during an ADHD crash or a particularly chaotic month. Pay extra manually when you can, but autopay the minimum as a floor.',
    adhd_tip: 'Set up autopay right now, in this session. Don\'t wait until you "get around to it." This single action protects your credit permanently.',
  },
]

const goodwillTemplate = `Subject: Goodwill Adjustment Request — Account #[YOUR ACCOUNT NUMBER]

Dear [CREDITOR NAME] Customer Relations Team,

I am writing to request a goodwill adjustment to remove a late payment from my credit report on account #[YOUR ACCOUNT NUMBER].

I have been a customer since [YEAR] and have maintained a strong payment history throughout our relationship. On [DATE OF LATE PAYMENT], I missed a payment due to [BRIEF, HONEST EXPLANATION — e.g., "a disruption caused by my ADHD diagnosis" or "a medical issue" or "a family emergency"]. This was not representative of how I manage this account.

I have since brought the account fully current and have set up automatic payments to ensure this does not happen again. My intention is to continue this relationship and maintain a perfect payment record going forward.

I am aware that you are not obligated to make this adjustment, and I deeply appreciate any consideration you can give my request. Even a single late mark has had a significant impact on my credit score and my ability to achieve [a mortgage / lower interest rates / financial stability].

If you are willing to make this goodwill adjustment, I would be incredibly grateful. If you need any additional information, please contact me at [YOUR PHONE / EMAIL].

Thank you sincerely for your time and consideration.

Sincerely,
[YOUR FULL NAME]
[YOUR ADDRESS]
[YOUR PHONE NUMBER]
[YOUR EMAIL]`

const autopayChecklist = [
  { item: 'Rent or mortgage', note: 'Set up through your bank\'s bill pay if your landlord doesn\'t accept autopay' },
  { item: 'All credit card minimum payments', note: 'Set to minimum — pay extra manually, but minimum is automatic' },
  { item: 'Car loan', note: 'Most lenders offer autopay discounts (0.25% rate reduction is common)' },
  { item: 'Student loans', note: 'Federal loans offer 0.25% rate reduction for autopay' },
  { item: 'Utilities (electric, gas, water)', note: 'Set to full balance — these are usually predictable' },
  { item: 'Phone bill', note: 'Full balance — fixed monthly amount' },
  { item: 'Subscriptions (Netflix, gym, etc.)', note: 'Already auto-charged — verify the card on file is active' },
  { item: 'Insurance premiums', note: 'Monthly or annual — set a calendar reminder for annual renewals' },
]

const severityColor: Record<string, string> = {
  safe: 'bg-green-50 border-green-200',
  moderate: 'bg-yellow-50 border-yellow-200',
  serious: 'bg-orange-50 border-orange-200',
  severe: 'bg-red-50 border-red-200',
  critical: 'bg-red-100 border-red-300',
}

const severityBadge: Record<string, string> = {
  safe: 'bg-green-100 text-green-700',
  moderate: 'bg-yellow-100 text-yellow-700',
  serious: 'bg-orange-100 text-orange-700',
  severe: 'bg-red-100 text-red-700',
  critical: 'bg-red-200 text-red-800',
}

export default function LatePaymentRecoveryPage() {
  return (
    <div className="bg-white min-h-screen">

      {/* Header */}
      <div className="bg-gradient-to-br from-brand-900 to-brand-700 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/adhd" className="text-brand-300 hover:text-white text-sm font-medium transition-colors mb-4 inline-block">← ADHD Hub</Link>
          <span className="inline-block bg-white/10 text-brand-200 text-xs font-semibold px-3 py-1 rounded-full mb-4">ADHD Money Series</span>
          <h1 className="text-4xl sm:text-5xl font-black mb-4 leading-tight">
            Late Payment Recovery Guide
          </h1>
          <p className="text-xl text-brand-100 leading-relaxed">
            Missed a payment? Here's exactly what to do — from minimizing the damage right now, to removing the mark from your credit report, to making sure it never happens again.
          </p>
          <div className="flex flex-wrap gap-3 mt-6 text-sm text-brand-200">
            <span>⏱ 14 min read</span>
            <span>·</span>
            <span>Goodwill letter template included</span>
            <span>·</span>
            <span>Full autopay checklist</span>
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="max-w-3xl mx-auto px-4 py-12 article-body">
        <div className="callout-box mb-8">
          <p className="font-semibold text-brand-900 mb-1">If you just missed a payment: stop reading and pay it right now.</p>
          <p className="text-brand-700 text-sm leading-relaxed">If your payment is less than 30 days late, it hasn't been reported to the credit bureaus yet. Pay it immediately and the damage is zero. Every hour matters. Come back to this guide after you've paid.</p>
        </div>

        <p>Late payments are the single biggest source of credit score damage for adults with ADHD — and for good reason. Payment history makes up 35% of your FICO score, and the ADHD brain's time blindness and task avoidance make forgetting bills almost inevitable without the right systems in place.</p>
        <p>This guide has two parts: how to recover from late payments that are already on your report, and how to make sure it never happens again.</p>
      </div>

      {/* Damage timeline */}
      <div className="bg-gray-50 border-t border-b border-gray-200 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">The Late Payment Damage Timeline</h2>
          <p className="text-gray-600 mb-8">How bad the damage is depends entirely on how late you are. Here's what happens at each stage.</p>
          <div className="space-y-3">
            {damageByTime.map((row) => (
              <div key={row.timeframe} className={`border rounded-2xl p-5 ${severityColor[row.severity]}`}>
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="font-bold text-gray-900">{row.timeframe}</h3>
                  <span className={`text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide ${severityBadge[row.severity]}`}>
                    {row.severity}
                  </span>
                </div>
                <p className="text-gray-800 font-medium text-sm mb-1">{row.impact}</p>
                <p className="text-gray-600 text-xs">{row.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 6-step recovery */}
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">The 6-Step Recovery Plan</h2>
        <p className="text-gray-600 mb-10">Follow these in order. Don't skip ahead to the goodwill letter before you've completed steps 1–3.</p>
        <div className="space-y-6">
          {recoverySteps.map((s) => (
            <div key={s.step} className="border border-gray-200 rounded-2xl overflow-hidden">
              <div className="bg-gray-50 border-b border-gray-200 px-6 py-4 flex items-center gap-4">
                <span className="text-3xl font-black text-brand-200">{s.step}</span>
                <div className="flex items-center gap-3">
                  <span className="text-xl">{s.icon}</span>
                  <h3 className="font-bold text-gray-900 text-lg">{s.title}</h3>
                </div>
              </div>
              <div className="px-6 py-5 space-y-4">
                <p className="text-gray-700 leading-relaxed">{s.content}</p>
                <div className="bg-brand-50 border border-brand-100 rounded-xl p-4 flex gap-3">
                  <span className="text-lg flex-shrink-0">🧠</span>
                  <div>
                    <p className="text-xs font-bold text-brand-700 uppercase tracking-wider mb-1">ADHD tip</p>
                    <p className="text-brand-800 text-sm leading-relaxed">{s.adhd_tip}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Goodwill letter template */}
      <div className="bg-brand-900 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">✉️</span>
            <div>
              <span className="inline-block bg-brand-700 text-brand-200 text-xs font-semibold px-3 py-1 rounded-full mb-1">Free Template</span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">Goodwill Deletion Letter</h2>
            </div>
          </div>
          <p className="text-brand-200 mb-6 text-sm leading-relaxed">
            Copy this template and customize the bracketed sections. Send via certified mail to the creditor's customer service address (found on your statement), and follow up by phone 7–10 days later. Success rates are highest for customers with long account history and a single isolated late payment.
          </p>
          <div className="bg-white rounded-2xl p-6 font-mono text-sm text-gray-800 leading-relaxed whitespace-pre-wrap border border-gray-200">
            {goodwillTemplate}
          </div>
          <div className="mt-4 bg-brand-800 rounded-xl p-4">
            <p className="text-brand-200 text-xs leading-relaxed">
              <span className="font-bold text-brand-100">Important:</span> Mention your ADHD honestly if it's relevant to your situation. Creditors are not legally required to make goodwill adjustments, but genuine, specific explanations outperform generic templates. Send to each bureau separately if the mark appears on multiple reports.
            </p>
          </div>
        </div>
      </div>

      {/* Autopay checklist */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">The Complete Autopay Checklist</h2>
          <p className="text-gray-600 mb-8">Set up autopay for every item on this list. If a creditor doesn't offer autopay, use your bank's bill pay feature to schedule automatic payments. This single setup session protects your credit permanently.</p>
          <div className="space-y-3">
            {autopayChecklist.map((item, i) => (
              <div key={i} className="flex items-start gap-4 border border-gray-200 rounded-xl p-4 hover:border-brand-300 transition-colors">
                <div className="w-5 h-5 border-2 border-brand-400 rounded flex-shrink-0 mt-0.5"></div>
                <div>
                  <p className="font-semibold text-gray-900">{item.item}</p>
                  <p className="text-sm text-gray-500 mt-0.5">{item.note}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-brand-50 border border-brand-200 rounded-2xl p-5">
            <p className="font-bold text-brand-900 mb-1">One more thing: set card expiration reminders.</p>
            <p className="text-brand-700 text-sm leading-relaxed">Autopay fails silently when your card expires. Add a calendar reminder 60 days before each card's expiration date to update payment info before it causes a missed payment cascade.</p>
          </div>
        </div>
      </div>

      {/* How long do late payments stay */}
      <div className="bg-gray-50 border-t border-gray-200 py-12 px-4">
        <div className="max-w-3xl mx-auto article-body">
          <h2>How Long Does a Late Payment Stay on Your Report?</h2>
          <p>Late payments remain on your credit report for <strong>7 years</strong> from the date of the first missed payment. That sounds bleak — but the impact diminishes significantly over time. A late payment from 4 years ago matters far less than one from 6 months ago.</p>
          <p>The fastest way to reduce the long-term impact is to build a strong track record of on-time payments around it. Lenders look at patterns, not just individual marks. Six months of perfect payment history after a late payment begins to offset the damage meaningfully.</p>
          <p>If a goodwill deletion letter doesn't work, your best strategy is simply time plus consistency. Don't close the account, don't stop using it — just make every payment on time from here forward, automatically.</p>
        </div>
      </div>

      {/* Nav between articles */}
      <div className="bg-white border-t border-gray-200 py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Continue the ADHD series</p>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <Link href="/adhd/impulse-spending" className="block bg-white border border-gray-200 rounded-2xl p-5 hover:border-brand-300 transition-all group">
              <span className="text-xs text-gray-400 block mb-1">← Previous</span>
              <span className="font-bold text-gray-900 group-hover:text-brand-600 transition-colors">ADHD and Impulse Spending</span>
            </Link>
            <Link href="/adhd/banking-setup" className="block bg-white border border-gray-200 rounded-2xl p-5 hover:border-brand-300 transition-all group">
              <span className="text-xs text-gray-400 block mb-1">Next →</span>
              <span className="font-bold text-gray-900 group-hover:text-brand-600 transition-colors">The ADHD-Proof Banking Setup</span>
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
          <p>DIYCreditFix.net provides educational information only. This content does not constitute legal or financial advice. The goodwill letter template is provided for informational purposes — results vary and creditors are not obligated to remove accurate negative information. ADHD-related content does not constitute medical advice.</p>
        </div>
      </div>
    </div>
  )
}
