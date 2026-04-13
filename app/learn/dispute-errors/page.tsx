import Link from 'next/link'
import EmailCapture from '@/components/EmailCapture'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Dispute Credit Report Errors: A Step-by-Step Guide',
  description: 'Pull your free credit reports, identify errors, write effective dispute letters, and follow up. Everything you need to remove inaccurate negative items from your credit report.',
}

export default function DisputeErrorsPage() {
  return (
    <div className="bg-white">
      <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/learn" className="text-gray-400 hover:text-white text-sm mb-4 inline-block">← Free Resources</Link>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-brand-600 text-white text-xs font-semibold px-3 py-1 rounded-full">Action Guide</span>
            <span className="bg-white/10 text-gray-300 text-xs px-3 py-1 rounded-full">15 min read</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black mb-4">How to Dispute Credit Report Errors: Step-by-Step</h1>
          <p className="text-xl text-gray-300 max-w-2xl">About 1 in 5 Americans has a material error on their credit report. Removing errors is free, legally protected, and one of the fastest ways to raise your score. Here's exactly how to do it.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 article-body">

            <div className="callout-box">
              <h4>Your Legal Rights Under the FCRA</h4>
              <p>The Fair Credit Reporting Act (FCRA) gives you the legal right to dispute any information on your credit report that you believe is inaccurate, incomplete, or unverifiable. Credit bureaus are legally required to investigate disputes within 30 days (sometimes 45). If an item can't be verified, it must be removed. These rights are free to exercise — no company needed.</p>
            </div>

            <h2>Step 1: Pull All Three Credit Reports</h2>
            <p>Go to <strong>AnnualCreditReport.com</strong> — the only federally authorized source for free reports. Pull all three: Equifax, Experian, and TransUnion. Do not pull your reports from the bureaus' own sites or third-party sites first (save those for after the dispute process so you can verify removal).</p>
            <p>Download or print each report. You'll be reviewing them carefully, and having physical or saved copies is important for your records.</p>

            <h2>Step 2: Review Each Report Line by Line</h2>
            <p>Go through each section of each report systematically. Look for:</p>

            <h3>Personal Information Errors</h3>
            <ul>
              <li>Wrong name, address, or Social Security number — these can indicate mixed files (your report containing another person's data)</li>
              <li>Employer information errors (less impactful but worth noting)</li>
            </ul>

            <h3>Account Errors</h3>
            <ul>
              <li><strong>Accounts that aren't yours</strong> — potential fraud or mixed file</li>
              <li><strong>Wrong balance or credit limit</strong> — affects your utilization ratio</li>
              <li><strong>Incorrect payment status</strong> — showing late when you paid on time</li>
              <li><strong>Duplicate accounts</strong> — same debt appearing twice</li>
              <li><strong>Closed accounts showing as open</strong> (or vice versa)</li>
              <li><strong>Wrong date of first delinquency</strong> — this determines when a negative item must be removed</li>
            </ul>

            <h3>Outdated Items</h3>
            <ul>
              <li>Collections older than 7 years from the date of first delinquency</li>
              <li>Chapter 7 bankruptcy older than 10 years</li>
              <li>Chapter 13 bankruptcy older than 7 years</li>
              <li>Hard inquiries older than 2 years</li>
            </ul>

            <h2>Step 3: Gather Supporting Documentation</h2>
            <p>For each error you plan to dispute, gather any documentation that supports your claim:</p>
            <ul>
              <li>Bank statements showing on-time payments</li>
              <li>Letters showing an account was closed or settled</li>
              <li>Payment receipts or confirmation emails</li>
              <li>Identity theft report (if applicable) from IdentityTheft.gov</li>
            </ul>
            <p>You don't need documentation for every dispute — you can dispute based on the information being unverifiable — but documentation strengthens your case.</p>

            <h2>Step 4: Write Your Dispute Letters</h2>
            <p>Dispute with each bureau that shows the error. You can do this online (fastest) or by certified mail (best paper trail). Send separate disputes to each bureau — they operate independently.</p>

            <h3>What to Include in Your Dispute Letter</h3>
            <ul>
              <li>Your full name, address, date of birth, and Social Security number (last 4 digits only is fine)</li>
              <li>The specific item you're disputing and its account number</li>
              <li>A clear explanation of why the information is wrong</li>
              <li>What correction you want made</li>
              <li>List of attached documents (keep copies of everything)</li>
            </ul>

            <h3>Sample Dispute Language</h3>
            <blockquote>
              <p>I am writing to dispute the following information in my credit report. The account listed below is inaccurate. [Account Name, Account #]. This account shows a balance of $X, however the balance was paid in full on [date]. I am requesting that this item be corrected to show a $0 balance and "Paid" status, or removed if it cannot be verified. I have enclosed [documentation] to support this claim.</p>
            </blockquote>

            <h2>Step 5: Submit Disputes Online or by Mail</h2>
            <p>Online submission is fastest and tracked automatically:</p>
            <ul>
              <li><strong>Equifax:</strong> equifax.com/personal/credit-report-services/credit-dispute</li>
              <li><strong>Experian:</strong> experian.com/disputes/main.html</li>
              <li><strong>TransUnion:</strong> transunion.com/credit-disputes</li>
            </ul>
            <p>If sending by mail, use certified mail with return receipt so you have proof of receipt. Send to each bureau's dispute address (listed on your credit report).</p>

            <h2>Step 6: Follow Up and Track Results</h2>
            <p>Bureaus have 30 days to investigate (45 if you submit additional documentation after the initial dispute). After investigation, they must:</p>
            <ul>
              <li>Remove the item if it cannot be verified</li>
              <li>Correct the item if it's inaccurate</li>
              <li>Notify you in writing of the result</li>
            </ul>
            <p>Keep all correspondence. If the bureau confirms the item and you still believe it's wrong, you can request that the original creditor provide verification documents, escalate to the CFPB (consumerfinance.gov/complaint), or consult a consumer law attorney.</p>

            <h2>Disputing Directly With the Creditor</h2>
            <p>Under the FCRA, you can also dispute directly with the company that reported the information (the original creditor or collection agency). This is called disputing with the "furnisher." If the furnisher cannot verify the information, they are required to correct or remove it from all three bureaus. This is sometimes more effective than disputing with the bureau, especially for complex errors.</p>

            <h2>What Legitimate Dispute Services Can and Can't Do</h2>
            <p>No company — no matter what they charge — can legally remove accurate, verified negative information from your credit report before its legal expiration date. Any service claiming otherwise is making a false promise. The dispute process described in this guide is exactly what legitimate credit repair companies do — on your behalf, at a markup. You can do every step yourself, for free.</p>

            <EmailCapture title="Get the Free Dispute Letter Templates" subtitle="Ready-to-use dispute letter templates for all three bureaus — free to download." />
          </div>

          <div className="space-y-6">
            <EmailCapture variant="sidebar" title="Free Credit Repair Checklist" subtitle="The complete 10-step credit repair action plan." />
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">Official Resources</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>📋 AnnualCreditReport.com — Free reports</li>
                <li>🏦 CFPB: consumerfinance.gov — File complaints</li>
                <li>🔒 IdentityTheft.gov — Report identity theft</li>
                <li>⚖️ FTC.gov — Federal consumer protection</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">Next Steps</h4>
              <ul className="space-y-2">
                <li><Link href="/learn/root-behaviors" className="text-brand-600 hover:text-brand-800 text-sm font-medium">→ Change the Behaviors Behind Bad Credit</Link></li>
                <li><Link href="/learn/credit-scores" className="text-brand-600 hover:text-brand-800 text-sm font-medium">→ How to Improve Your Score</Link></li>
                <li><Link href="/learn/how-credit-works" className="text-brand-600 hover:text-brand-800 text-sm font-medium">→ How Credit Works</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
