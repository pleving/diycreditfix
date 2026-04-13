import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Budgeting for ADHD Brains — DIY Credit Fix',
  description: 'Why standard budgets fail people with ADHD — and the systems that actually work by removing decisions instead of adding them.',
}

const whyItFails = [
  {
    method: 'Zero-Based Budgeting',
    problem: 'Requires you to assign every dollar a job at the start of each month — then track every transaction. This demands consistent daily attention, which time blindness and task-switching difficulty make nearly impossible to sustain past week two.',
    verdict: 'Too much ongoing effort',
    color: 'red',
  },
  {
    method: 'Spreadsheet Budgeting',
    problem: 'Opening a spreadsheet, categorizing purchases, and updating numbers requires initiating a boring task with no immediate reward. For the ADHD brain, this is the definition of a task that will never happen consistently.',
    verdict: 'Initiation barrier is fatal',
    color: 'red',
  },
  {
    method: 'Envelope Method',
    problem: 'Physically dividing cash into envelopes requires planning, cash withdrawals, and remembering which envelope is for what. ADHD brains lose envelopes, forget the system, and find the friction of cash management makes impulsive spending harder to suppress — not easier.',
    verdict: 'Too much friction in wrong places',
    color: 'orange',
  },
  {
    method: '50/30/20 Rule',
    problem: 'Conceptually simple but still requires categorizing your spending into needs, wants, and savings — which means reviewing transactions regularly. The categories also blur easily, leading to rationalization that ADHD brains exploit.',
    verdict: 'Too much ongoing judgment',
    color: 'orange',
  },
]

const adhdSystems = [
  {
    name: 'The Anti-Budget',
    icon: '🚀',
    creator: 'Paula Pant / Afford Anything',
    adhd_fit: '★★★★★',
    how: 'Pay yourself first (automatic savings transfer the day you get paid), automate all bills, and spend the rest however you want — no tracking, no categories, no guilt.',
    why_adhd: 'Removes all ongoing decisions. Once set up, the system runs itself. You never have to "budget" again — the right money moves before you can spend it impulsively.',
    steps: [
      'Calculate your monthly take-home pay',
      'Decide what % to save (start with 10%, increase over time)',
      'Set an automatic transfer for that amount on payday — before you see it',
      'Set autopay for every fixed bill',
      'Whatever remains in your account is yours to spend freely — no tracking needed',
    ],
  },
  {
    name: 'The Two-Account System',
    icon: '🏦',
    creator: 'ADHD Finance Community',
    adhd_fit: '★★★★★',
    how: 'One account handles all bills (auto-paid, never touched). A second account receives your "spending money" — a weekly or biweekly transfer of what\'s left after bills and savings. This is your only day-to-day account.',
    why_adhd: 'Removes the risk of accidentally overspending your bill money. The spending account acts as a natural limit — when it\'s empty, you\'re done. No budgeting required.',
    steps: [
      'Open a second checking account (free at most banks)',
      'Route all autopay bills through Account 1',
      'Set a recurring transfer to Account 2 on payday for your "spending allowance"',
      'Use Account 2 debit card for all day-to-day purchases',
      'When Account 2 runs low, you naturally slow down — no willpower needed',
    ],
  },
  {
    name: 'YNAB (You Need A Budget)',
    icon: '📊',
    creator: 'ynab.com',
    adhd_fit: '★★★★☆',
    how: 'A budgeting app built with real-time syncing, mobile-first design, and a philosophy of giving every dollar a job. Has a strong ADHD user community and is specifically recommended by ADHD coaches.',
    why_adhd: 'The real-time nature helps with ADHD "out of sight, out of mind" — you can check your budget in 10 seconds on your phone. The gamification keeps ADHD brains engaged longer than any spreadsheet.',
    steps: [
      'Start with the free trial (34 days)',
      'Connect your bank accounts for automatic import',
      'Budget only what you have — not future income',
      'Check the app briefly each time you spend',
      'Use the "Reports" feature to see patterns over time',
    ],
  },
]

const creditConnection = [
  {
    habit: 'Forgetting to save before spending',
    credit_impact: 'No emergency fund means any unexpected expense goes on a credit card — utilization spikes immediately',
    fix: 'Auto-transfer savings on payday before you can spend it',
  },
  {
    habit: 'Overspending because you can\'t track mentally',
    credit_impact: 'Credit card balance grows month to month — utilization climbs, score drops steadily',
    fix: 'The Two-Account System caps your spending without requiring tracking',
  },
  {
    habit: 'Using credit as a "second paycheck"',
    credit_impact: 'Carried balances accumulate interest — minimum payments only, debt never paid off, utilization stays high',
    fix: 'The Anti-Budget reveals exactly how much you actually have before you reach for the card',
  },
]

const tools = [
  { name: 'YNAB', desc: 'Best full-featured budgeting app for ADHD. Real-time, mobile-first, strong community.', cost: '$99/year' },
  { name: 'Monarch Money', desc: 'Clean, visual dashboard. Great for seeing the big picture at a glance without deep tracking.', cost: '$99/year' },
  { name: 'Copilot', desc: 'Apple-only, beautifully designed, uses AI to auto-categorize spending. Very low friction.', cost: '$69/year' },
  { name: 'Ally Bank', desc: 'Savings "buckets" built in — perfect for the Two-Account System and labeled savings goals.', cost: 'Free' },
]

const colorMap: Record<string, string> = {
  red: 'border-red-200 bg-red-50',
  orange: 'border-orange-200 bg-orange-50',
}
const verdictColor: Record<string, string> = {
  red: 'bg-red-100 text-red-700',
  orange: 'bg-orange-100 text-orange-700',
}

export default function ADHDBudgetingPage() {
  return (
    <div className="bg-white min-h-screen">

      {/* Header */}
      <div className="bg-gradient-to-br from-brand-900 to-brand-700 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/adhd" className="text-brand-300 hover:text-white text-sm font-medium transition-colors mb-4 inline-block">← ADHD Hub</Link>
          <span className="inline-block bg-white/10 text-brand-200 text-xs font-semibold px-3 py-1 rounded-full mb-4">ADHD Money Series</span>
          <h1 className="text-4xl sm:text-5xl font-black mb-4 leading-tight">
            Budgeting for ADHD Brains
          </h1>
          <p className="text-xl text-brand-100 leading-relaxed">
            Standard budgets were designed for neurotypical brains. They require consistency, daily tracking, and impulse control — the exact things ADHD makes hardest. Here's what actually works.
          </p>
          <div className="flex flex-wrap gap-3 mt-6 text-sm text-brand-200">
            <span>⏱ 12 min read</span>
            <span>·</span>
            <span>3 ADHD-tested systems</span>
            <span>·</span>
            <span>No tracking required</span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12 article-body">
        <div className="callout-box mb-10">
          <p className="font-semibold text-brand-900 mb-1">The goal isn't a perfect budget. It's a system that runs without you.</p>
          <p className="text-brand-700 text-sm leading-relaxed">Every strategy below is built on one principle: remove as many financial decisions as possible, automate everything that can be automated, and leave yourself only the choices you can actually handle in the moment.</p>
        </div>

        <h2>First: Why Every Budget You've Tried Has Failed</h2>
        <p>It's not a discipline problem. Every popular budgeting method has a specific design flaw that makes it incompatible with how ADHD brains work. Understanding the flaw is the first step to finding what actually fits.</p>
      </div>

      {/* Why it fails */}
      <div className="max-w-3xl mx-auto px-4 pb-12 space-y-4">
        {whyItFails.map((item) => (
          <div key={item.method} className={`border rounded-2xl p-6 ${colorMap[item.color]}`}>
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <h3 className="font-bold text-gray-900 text-lg">{item.method}</h3>
              <span className={`text-xs font-bold px-3 py-1 rounded-full ${verdictColor[item.color]}`}>
                ✗ {item.verdict}
              </span>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">{item.problem}</p>
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto px-4 pb-4 article-body">
        <h2>What Actually Works: 3 ADHD-Compatible Systems</h2>
        <p>These systems share one quality: they do most of the work automatically. Setup takes a few hours. After that, they run on autopilot — which is the only kind of system an ADHD brain can sustain long-term.</p>
      </div>

      {/* ADHD systems */}
      <div className="max-w-3xl mx-auto px-4 pb-16 space-y-8">
        {adhdSystems.map((system, i) => (
          <div key={system.name} className="border border-gray-200 rounded-2xl overflow-hidden">
            <div className="bg-brand-50 border-b border-brand-100 px-6 py-5 flex flex-wrap items-center gap-4">
              <span className="text-3xl">{system.icon}</span>
              <div className="flex-1">
                <h3 className="font-black text-xl text-gray-900 mb-1">System {i + 1}: {system.name}</h3>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="text-gray-500">By: <span className="text-gray-700 font-medium">{system.creator}</span></span>
                  <span className="text-gray-500">ADHD fit: <span className="text-brand-600 font-bold">{system.adhd_fit}</span></span>
                </div>
              </div>
            </div>
            <div className="px-6 py-6 space-y-5">
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">How it works</p>
                <p className="text-gray-700 leading-relaxed">{system.how}</p>
              </div>
              <div className="bg-brand-50 border border-brand-100 rounded-xl p-4">
                <p className="text-xs font-bold text-brand-700 uppercase tracking-wider mb-1">Why it works for ADHD</p>
                <p className="text-brand-800 text-sm leading-relaxed">{system.why_adhd}</p>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Setup steps</p>
                <ol className="space-y-2">
                  {system.steps.map((step, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="w-5 h-5 bg-brand-600 text-white rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">{j + 1}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Credit connection */}
      <div className="bg-gray-50 border-t border-b border-gray-200 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">How Budgeting Connects to Your Credit Score</h2>
          <p className="text-gray-600 mb-8">Poor budgeting doesn't just hurt your bank account — it creates the exact conditions that damage your credit. Here's the chain reaction, and how these systems break it.</p>
          <div className="space-y-4">
            {creditConnection.map((item) => (
              <div key={item.habit} className="bg-white border border-gray-200 rounded-2xl p-5">
                <div className="grid sm:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">The habit</p>
                    <p className="text-gray-800 font-medium">{item.habit}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-red-400 uppercase tracking-wider mb-1">Credit impact</p>
                    <p className="text-gray-700">{item.credit_impact}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-brand-600 uppercase tracking-wider mb-1">The fix</p>
                    <p className="text-gray-700">{item.fix}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tools */}
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">Tools Worth Using</h2>
        <p className="text-gray-600 mb-8">These apps have the lowest friction and work best with the systems above. All have free trials.</p>
        <div className="grid sm:grid-cols-2 gap-4">
          {tools.map((tool) => (
            <div key={tool.name} className="border border-gray-200 rounded-2xl p-5 hover:border-brand-300 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-gray-900">{tool.name}</h3>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full font-medium">{tool.cost}</span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{tool.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Putting it together */}
      <div className="max-w-3xl mx-auto px-4 pb-12 article-body">
        <h2>Putting It All Together: Your First Week</h2>
        <p>Don't try to implement everything at once — that's a guaranteed way to overwhelm the ADHD brain and abandon the whole thing. Do one thing per day for five days:</p>
        <ul>
          <li><strong>Day 1:</strong> List every recurring bill and the amount. That's it.</li>
          <li><strong>Day 2:</strong> Set up autopay for every single one through your bank or each biller's website.</li>
          <li><strong>Day 3:</strong> Open a second checking account (or use one you already have but rarely use).</li>
          <li><strong>Day 4:</strong> Set up an automatic savings transfer for payday — even $25 to start.</li>
          <li><strong>Day 5:</strong> Set up a recurring weekly transfer to your spending account. Formula: take-home pay minus bills minus savings = spending money. Divide by 4.</li>
        </ul>
        <p>After five days you'll have a functioning system that requires zero ongoing maintenance. The goal from here: leave it alone and let it run.</p>

        <div className="callout-box mt-8">
          <p className="font-semibold text-brand-900 mb-1">The best budget is the one you never have to think about again.</p>
          <p className="text-brand-700 text-sm">If you find yourself avoiding your budget, opening apps you stopped using, or feeling guilty for not tracking — that's the system failing, not you. Switch to a lower-friction option.</p>
        </div>
      </div>

      {/* Nav between articles */}
      <div className="bg-gray-50 border-t border-gray-200 py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Continue the ADHD series</p>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <Link href="/adhd/credit-score-impact" className="block bg-white border border-gray-200 rounded-2xl p-5 hover:border-brand-300 transition-all group">
              <span className="text-xs text-gray-400 block mb-1">← Previous</span>
              <span className="font-bold text-gray-900 group-hover:text-brand-600 transition-colors">How ADHD Destroys Your Credit Score</span>
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
          <p>DIYCreditFix.net provides educational information only. ADHD-related content is for informational purposes and does not constitute medical advice. Financial information does not constitute legal or financial advice. Tool mentions are informational only and are not paid placements.</p>
        </div>
      </div>
    </div>
  )
}
