import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The ADHD-Proof Banking Setup — DIY Credit Fix',
  description: 'A complete account structure and automation system for ADHD adults — built to run on autopilot so your brain never has to remember, resist, or stay consistent on its own.',
}

const accountStructure = [
  {
    number: '01',
    name: 'The Bills Account',
    type: 'Checking',
    icon: '🏛️',
    purpose: 'This account exists for one purpose: paying fixed bills automatically. Nothing else goes in or out.',
    what_goes_in: 'Your paycheck (full direct deposit), or a scheduled transfer from your main account on payday',
    what_goes_out: 'Every recurring fixed bill on autopay — rent/mortgage, utilities, subscriptions, insurance, minimum debt payments',
    rule: 'Never use this account for day-to-day spending. No debit card attached to it if possible.',
    why: 'Separating bills from spending removes the risk of accidentally spending your rent money. Bills are paid before you ever see the money.',
    recommended: 'Any checking account with no monthly fee. Ally, Schwab, or your existing bank works fine.',
  },
  {
    number: '02',
    name: 'The Savings Account',
    type: 'High-Yield Savings',
    icon: '💰',
    purpose: 'Emergency fund + savings goals. Automatic transfers happen on payday before you can spend the money.',
    what_goes_in: 'Automatic transfer from Bills Account on payday (set your % — start with 10%)',
    what_goes_out: 'Only for genuine emergencies or a planned goal you\'ve hit the target for',
    rule: 'No debit card. Transfers back to checking take 1-2 business days — that friction is intentional.',
    why: 'The delay prevents impulse raiding of savings. "Out of sight, out of mind" works in your favor here.',
    recommended: 'Ally Bank (4.5%+ APY, savings buckets), Marcus by Goldman Sachs, or SoFi',
  },
  {
    number: '03',
    name: 'The Spending Account',
    type: 'Checking',
    icon: '💳',
    purpose: 'Your only day-to-day account. Receives a weekly spending allowance transfer. When it\'s empty, you\'re done.',
    what_goes_in: 'Weekly automatic transfer of your spending allowance (take-home minus bills minus savings, divided by 4)',
    what_goes_out: 'Everything else — groceries, gas, dining, entertainment, personal spending',
    rule: 'This is your only active debit card. Do not keep credit cards in your digital wallet.',
    why: 'The weekly cadence resets your mental accounting each week. Running out of money in this account is a feature — it\'s your spending limit made real.',
    recommended: 'Chime (no overdraft fees), Schwab (no ATM fees worldwide), or a second account at your existing bank',
  },
  {
    number: '04',
    name: 'The Credit Card',
    type: 'Credit — Autopay Only',
    icon: '🔒',
    purpose: 'Builds credit history and earns rewards — but is used only for one fixed, recurring charge. Not for spending.',
    what_goes_in: 'One small recurring charge (e.g., a $15/month streaming service)',
    what_goes_out: 'Full balance, automatically, every month — set up autopay for the statement balance',
    rule: 'Remove this card from all digital wallets and physical wallet. Set it and forget it.',
    why: 'Keeps the account active and in good standing (building payment history and utilization) without any risk of overspending.',
    recommended: 'Any card you already have with no annual fee, or a secured card if you\'re rebuilding',
  },
]

const automations = [
  {
    automation: 'Direct Deposit Split',
    when: 'Payday',
    how: 'Ask your employer\'s payroll to split your direct deposit — X% to Bills Account, remainder to Spending Account. If your employer doesn\'t allow splits, set an automatic transfer from Bills Account to Spending Account on payday.',
    priority: 'Critical',
  },
  {
    automation: 'Savings Transfer',
    when: 'Same day as payday',
    how: 'Automatic transfer from Bills Account to Savings Account for your savings % (10%+ recommended). Schedule this for the same day as your paycheck lands.',
    priority: 'Critical',
  },
  {
    automation: 'All Bill Autopays',
    when: 'Due date of each bill',
    how: 'Set up autopay through each biller\'s website or your bank\'s bill pay. Use the minimum payment for credit cards, full balance for utilities. Stagger due dates if possible so you\'re not hit with everything at once.',
    priority: 'Critical',
  },
  {
    automation: 'Weekly Spending Allowance',
    when: 'Every Monday (or payday)',
    how: 'Recurring transfer from Bills Account to Spending Account of your weekly allowance. Amount = (monthly take-home − total bills − savings) ÷ 4.',
    priority: 'Critical',
  },
  {
    automation: 'Credit Card Autopay',
    when: 'Statement due date',
    how: 'Set autopay to "Statement Balance" (not minimum, not fixed amount). This pays your full balance every month automatically — no interest, no missed payments.',
    priority: 'Critical',
  },
  {
    automation: 'Low Balance Alerts',
    when: 'Real-time',
    how: 'Set text or push notification alerts for when your Spending Account drops below $50 (or whatever your "slow down" threshold is). This replaces the need to check your balance manually.',
    priority: 'Recommended',
  },
  {
    automation: 'Card Expiration Reminders',
    when: '60 days before card expiry',
    how: 'Add a recurring calendar event for 60 days before each credit/debit card expiration date. Use it to update autopay payment info before the card expires and autopay fails silently.',
    priority: 'Recommended',
  },
  {
    automation: 'Monthly Statement Review',
    when: 'First of each month',
    how: 'A 10-minute recurring calendar event to scan your credit card statement for unexpected charges, check your credit score in your monitoring app, and verify all autopays processed correctly.',
    priority: 'Recommended',
  },
]

const bankingTools = [
  {
    name: 'Ally Bank',
    type: 'Savings',
    best_for: 'Savings buckets — label separate "buckets" for emergency fund, vacation, car repair, etc. within one account. Excellent HYSA rate.',
    fee: 'No fees',
    adhd_score: '★★★★★',
  },
  {
    name: 'Chime',
    type: 'Checking (Spending)',
    best_for: 'No overdraft fees, no minimum balance, SpotMe feature, early direct deposit. ADHD-friendly because mistakes don\'t cascade into overdraft chains.',
    fee: 'No fees',
    adhd_score: '★★★★★',
  },
  {
    name: 'Charles Schwab',
    type: 'Checking (Spending)',
    best_for: 'Reimburses all ATM fees worldwide. Good if you use cash frequently or travel. Competitive interest rate.',
    fee: 'No fees',
    adhd_score: '★★★★☆',
  },
  {
    name: 'Marcus by Goldman Sachs',
    type: 'Savings',
    best_for: 'High APY, simple interface, no complexity. Good for people who want a straightforward HYSA without the features of Ally.',
    fee: 'No fees',
    adhd_score: '★★★★☆',
  },
  {
    name: 'Discover Online Savings',
    type: 'Savings',
    best_for: 'Strong customer service, competitive rates, no fees. Easy to link to any external checking account.',
    fee: 'No fees',
    adhd_score: '★★★★☆',
  },
]

const setupSchedule = [
  { day: 'Day 1', task: 'Open your Savings Account (Ally or Marcus recommended)', time: '20 min', note: 'Have your SSN and a routing/account number ready for the initial deposit link' },
  { day: 'Day 2', task: 'Open your Spending Account if needed (Chime or Schwab)', time: '15 min', note: 'Or designate an existing account you barely use' },
  { day: 'Day 3', task: 'List every recurring bill, its amount, and due date', time: '20 min', note: 'Check your last 3 bank statements to catch everything' },
  { day: 'Day 4', task: 'Set up autopay for every bill on the list', time: '45 min', note: 'Do it for each biller\'s website, not just your bank — more reliable' },
  { day: 'Day 5', task: 'Set up automatic savings transfer on payday date', time: '5 min', note: 'Start at 10% even if it feels too low — you can increase later' },
  { day: 'Day 6', task: 'Set up weekly spending allowance transfer to Spending Account', time: '5 min', note: 'Calculate: (take-home − bills − savings) ÷ 4' },
  { day: 'Day 7', task: 'Set low balance alerts and monthly review calendar event', time: '10 min', note: 'These are your passive monitoring systems — 10 minutes of setup, ongoing protection' },
]

const priorityColor: Record<string, string> = {
  Critical: 'bg-red-100 text-red-700',
  Recommended: 'bg-blue-100 text-blue-700',
}

export default function BankingSetupPage() {
  return (
    <div className="bg-white min-h-screen">

      {/* Header */}
      <div className="bg-gradient-to-br from-brand-900 to-brand-700 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/adhd" className="text-brand-300 hover:text-white text-sm font-medium transition-colors mb-4 inline-block">← ADHD Hub</Link>
          <span className="inline-block bg-white/10 text-brand-200 text-xs font-semibold px-3 py-1 rounded-full mb-4">ADHD Money Series</span>
          <h1 className="text-4xl sm:text-5xl font-black mb-4 leading-tight">
            The ADHD-Proof Banking Setup
          </h1>
          <p className="text-xl text-brand-100 leading-relaxed">
            A complete account structure and automation system designed to run on autopilot — so your brain never has to remember a due date, resist an impulse, or stay consistent on its own.
          </p>
          <div className="flex flex-wrap gap-3 mt-6 text-sm text-brand-200">
            <span>⏱ 15 min read</span>
            <span>·</span>
            <span>4-account structure</span>
            <span>·</span>
            <span>8 automations</span>
            <span>·</span>
            <span>7-day setup plan</span>
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="max-w-3xl mx-auto px-4 py-12 article-body">
        <div className="callout-box mb-8">
          <p className="font-semibold text-brand-900 mb-1">The goal of this system: make every important financial action automatic.</p>
          <p className="text-brand-700 text-sm leading-relaxed">Savings happen automatically. Bills get paid automatically. Spending has a natural limit built in. What's left is yours, guilt-free, with no tracking required. Setup takes about 2 hours across 7 days. After that, it runs indefinitely without your involvement.</p>
        </div>

        <p>Most banking setups assume you'll check your balance daily, remember due dates, and make disciplined spending decisions in the moment. For an ADHD brain, that assumption fails at every step. This setup removes those assumptions entirely.</p>
        <p>The system has four accounts, eight automations, and a 7-day setup schedule. You don't need to implement everything at once — but each piece you add makes the system more robust.</p>

        <h2>The 4-Account Structure</h2>
        <p>Each account has a single, clearly defined purpose. The separation between them is what makes the system work — money flows automatically between them so you never have to make allocation decisions manually.</p>
      </div>

      {/* Account structure */}
      <div className="max-w-3xl mx-auto px-4 pb-16 space-y-6">
        {accountStructure.map((acct) => (
          <div key={acct.number} className="border border-gray-200 rounded-2xl overflow-hidden">
            <div className="bg-brand-50 border-b border-brand-100 px-6 py-5">
              <div className="flex items-center gap-4">
                <span className="text-3xl font-black text-brand-200">{acct.number}</span>
                <span className="text-3xl">{acct.icon}</span>
                <div>
                  <h3 className="font-black text-xl text-gray-900">{acct.name}</h3>
                  <span className="text-xs font-semibold text-brand-600 bg-brand-100 px-2 py-0.5 rounded-full">{acct.type}</span>
                </div>
              </div>
            </div>
            <div className="px-6 py-6 space-y-4">
              <p className="text-gray-800 font-medium">{acct.purpose}</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                  <p className="text-xs font-bold text-green-700 uppercase tracking-wider mb-1">Money in</p>
                  <p className="text-gray-700 text-sm">{acct.what_goes_in}</p>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <p className="text-xs font-bold text-red-600 uppercase tracking-wider mb-1">Money out</p>
                  <p className="text-gray-700 text-sm">{acct.what_goes_out}</p>
                </div>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                <p className="text-xs font-bold text-yellow-700 uppercase tracking-wider mb-1">The rule</p>
                <p className="text-gray-700 text-sm font-medium">{acct.rule}</p>
              </div>
              <div className="bg-brand-50 border border-brand-100 rounded-xl p-4">
                <p className="text-xs font-bold text-brand-700 uppercase tracking-wider mb-1">Why it works for ADHD</p>
                <p className="text-brand-800 text-sm">{acct.why}</p>
              </div>
              <p className="text-xs text-gray-500"><span className="font-semibold">Recommended:</span> {acct.recommended}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Flow diagram callout */}
      <div className="bg-gray-50 border-t border-b border-gray-200 py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-black text-gray-900 mb-6 text-center">How Money Flows Through the System</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-center flex-wrap">
            {[
              { label: 'Paycheck', sub: 'Direct deposit', color: 'bg-gray-800 text-white' },
              { arrow: true },
              { label: 'Bills Account', sub: 'Hub account', color: 'bg-brand-600 text-white' },
              { arrow: true },
              { label: 'Bills autopaid', sub: 'All on schedule', color: 'bg-red-100 text-red-800' },
            ].map((item, i) =>
              (item as any).arrow ? (
                <span key={i} className="text-2xl text-gray-400 hidden sm:block">→</span>
              ) : (
                <div key={i} className={`rounded-xl px-4 py-3 text-sm font-bold ${(item as any).color}`}>
                  {(item as any).label}
                  <div className="text-xs font-normal opacity-75 mt-0.5">{(item as any).sub}</div>
                </div>
              )
            )}
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-center flex-wrap mt-2">
            {[
              { label: 'Bills Account', sub: 'Hub account', color: 'bg-brand-600 text-white' },
              { arrow: true },
              { label: 'Savings Account', sub: '10%+ on payday', color: 'bg-green-600 text-white' },
            ].map((item, i) =>
              (item as any).arrow ? (
                <span key={i} className="text-2xl text-gray-400 hidden sm:block">→</span>
              ) : (
                <div key={i} className={`rounded-xl px-4 py-3 text-sm font-bold ${(item as any).color}`}>
                  {(item as any).label}
                  <div className="text-xs font-normal opacity-75 mt-0.5">{(item as any).sub}</div>
                </div>
              )
            )}
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-center flex-wrap mt-2">
            {[
              { label: 'Bills Account', sub: 'Hub account', color: 'bg-brand-600 text-white' },
              { arrow: true },
              { label: 'Spending Account', sub: 'Weekly allowance', color: 'bg-blue-600 text-white' },
              { arrow: true },
              { label: 'Spend freely', sub: 'No tracking needed', color: 'bg-blue-100 text-blue-800' },
            ].map((item, i) =>
              (item as any).arrow ? (
                <span key={i} className="text-2xl text-gray-400 hidden sm:block">→</span>
              ) : (
                <div key={i} className={`rounded-xl px-4 py-3 text-sm font-bold ${(item as any).color}`}>
                  {(item as any).label}
                  <div className="text-xs font-normal opacity-75 mt-0.5">{(item as any).sub}</div>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Automations */}
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">The 8 Automations</h2>
        <p className="text-gray-600 mb-8">Set these up once in the order listed. The first five are critical — the system doesn't work without them. The last three are your passive monitoring layer.</p>
        <div className="space-y-4">
          {automations.map((a, i) => (
            <div key={a.automation} className="border border-gray-200 rounded-2xl p-5">
              <div className="flex flex-wrap items-start gap-3 mb-3">
                <span className="w-7 h-7 bg-brand-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">{i + 1}</span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-bold text-gray-900">{a.automation}</h3>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${priorityColor[a.priority]}`}>{a.priority}</span>
                  </div>
                  <p className="text-xs text-gray-400 font-medium">Triggers: {a.when}</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed pl-10">{a.how}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended banks */}
      <div className="bg-gray-50 border-t border-gray-200 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">Recommended Banks for This System</h2>
          <p className="text-gray-600 mb-8">All of these are online banks with no monthly fees. Online banks are better for this system because they make automated transfers easier and don't nickel-and-dime with fees that disrupt your math.</p>
          <div className="space-y-4">
            {bankingTools.map((bank) => (
              <div key={bank.name} className="bg-white border border-gray-200 rounded-2xl p-5 hover:border-brand-300 transition-colors">
                <div className="flex flex-wrap items-start gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="font-bold text-gray-900">{bank.name}</h3>
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{bank.type}</span>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">{bank.fee}</span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{bank.best_for}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-xs text-gray-400 mb-0.5">ADHD fit</p>
                    <p className="text-brand-600 font-bold text-sm">{bank.adhd_score}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 7-day setup schedule */}
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">7-Day Setup Schedule</h2>
        <p className="text-gray-600 mb-8">One task per day. None of these take more than 45 minutes. By day 7 the system is fully operational.</p>
        <div className="space-y-3">
          {setupSchedule.map((s) => (
            <div key={s.day} className="border border-gray-200 rounded-2xl p-5 hover:border-brand-300 transition-colors">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 text-center">
                  <span className="text-xs font-bold text-brand-600 block">{s.day}</span>
                  <span className="text-xs text-gray-400">{s.time}</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">{s.task}</p>
                  <p className="text-xs text-gray-500">{s.note}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Closing note */}
      <div className="bg-brand-900 py-14 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-3xl block mb-4">🎯</span>
          <h2 className="text-2xl font-black text-white mb-4">After Setup: Leave It Alone</h2>
          <p className="text-brand-200 leading-relaxed mb-4">The biggest mistake after building this system is over-managing it. The whole point is that it runs without you. Resist the urge to tweak, adjust, or check it daily — that's the neurotypical budgeting habit sneaking back in.</p>
          <p className="text-brand-200 leading-relaxed mb-6">Check in once a month for 10 minutes. Verify autopays processed. Glance at your credit score. Otherwise: let it run.</p>
          <Link href="/adhd#toolkit" className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-700 font-bold text-lg rounded-xl hover:bg-brand-50 transition-colors">
            Get the Free ADHD Credit Repair Toolkit →
          </Link>
        </div>
      </div>

      {/* Nav */}
      <div className="bg-white border-t border-gray-200 py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Continue the ADHD series</p>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <Link href="/adhd/credit-score-impact" className="block bg-white border border-gray-200 rounded-2xl p-5 hover:border-brand-300 transition-all group">
              <span className="text-xs text-gray-400 block mb-1">← Start here</span>
              <span className="font-bold text-gray-900 group-hover:text-brand-600 transition-colors">How ADHD Destroys Your Credit Score</span>
            </Link>
            <Link href="/adhd/impulse-spending" className="block bg-white border border-gray-200 rounded-2xl p-5 hover:border-brand-300 transition-all group">
              <span className="text-xs text-gray-400 block mb-1">Also read →</span>
              <span className="font-bold text-gray-900 group-hover:text-brand-600 transition-colors">ADHD and Impulse Spending</span>
            </Link>
          </div>
          <div className="text-center">
            <Link href="/adhd" className="btn-secondary">← Back to ADHD Hub</Link>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="py-8 px-4 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center text-xs text-gray-400">
          <p>DIYCreditFix.net provides educational information only. Bank and product mentions are for informational purposes and are not paid placements or endorsements. ADHD-related content does not constitute medical advice. Financial information does not constitute legal or financial advice. Rates and features of financial products mentioned may change — verify current terms directly with each institution.</p>
        </div>
      </div>
    </div>
  )
}
