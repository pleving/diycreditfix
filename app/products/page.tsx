import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Products — DIYCreditFix',
  description: 'Practical toolkits and letter bundles to help you repair your credit, control your spending, and build lasting financial habits. Instant download.',
}

const disputeBundle = {
  name: 'Dispute Letter Bundle',
  tagline: 'The complete 4-letter system for removing errors from your credit report — written, formatted, and ready to send.',
  price: '$27',
  anchor: 'One-time download. No subscription.',
  badge: 'MOST POPULAR',
  badgeColor: 'bg-brand-600',
  href: '#buy-dispute-bundle',
  includes: [
    { icon: '✉️', title: 'Letter 1 — Credit Bureau Dispute', desc: 'Send to Equifax, Experian, and TransUnion to challenge any inaccurate, unverifiable, or outdated item.' },
    { icon: '🏦', title: 'Letter 2 — Goodwill Deletion Letter', desc: 'Ask a creditor directly to remove a legitimate late payment as an act of goodwill — with compelling framing.' },
    { icon: '📋', title: 'Letter 3 — Debt Validation Request', desc: 'Force collectors to prove the debt is real, that the amount is correct, and that they actually have the legal right to collect it — before you pay a dime.' },
    { icon: '🔍', title: 'Letter 4 — Method of Verification Request', desc: 'Challenge a bureau\'s investigation result when they mark an item "verified" without proper documentation.' },
  ],
  extras: [
    'Step-by-step instructions for each letter',
    'Certified mail tracking guide',
    'Bureau mailing addresses (all 3)',
    'Follow-up timeline reference',
    'Pro tips on what to do — and what to avoid',
  ],
  guarantee: '7-day money-back guarantee. If you\'re not satisfied, email us and we\'ll refund you — no questions asked.',
}

const adhdKit = {
  name: 'ADHD Autopilot Kit',
  tagline: 'Stop fighting your brain. Build a financial system that runs itself — even on your worst days.',
  price: '$17',
  anchor: 'One-time download. No subscription.',
  badge: 'FOR ADHD BRAINS',
  badgeColor: 'bg-purple-600',
  href: '#buy-adhd-kit',
  includes: [
    { icon: '🏦', title: 'Banking Setup Blueprint', desc: 'The 4-account structure that separates income, bills, spending, and savings — so a bad week can\'t accidentally wipe out rent.' },
    { icon: '⚡', title: 'Automation Checklist', desc: '8 critical automations ranked by priority — each with what to set up, when, and why. Includes a printable checklist.' },
    { icon: '🛑', title: 'Impulse Spend Rules Card', desc: '6 friction strategies designed to create a pause between the urge and the purchase — without relying on willpower.' },
    { icon: '📊', title: 'Credit Rebuild Tracker', desc: '12-month scorecard for tracking score, utilization, on-time payments, and open disputes. With milestone guide.' },
    { icon: '🔥', title: 'Streak Tracker', desc: 'Day-by-day grid for tracking impulse-free days — the visual, game-like system that creates its own motivation loop.' },
  ],
  extras: [
    'Bank recommendations with ADHD-fit ratings',
    'Trigger identification exercise',
    'Emergency script for high-pressure moments',
    'Score milestone guide (580 → 800+)',
    'Built-in no-shame reset policy',
  ],
  guarantee: '7-day money-back guarantee. If you\'re not satisfied, email us and we\'ll refund you — no questions asked.',
}

function ProductCard({ product, featured }: { product: typeof disputeBundle; featured?: boolean }) {
  return (
    <div className={`relative rounded-2xl border-2 flex flex-col ${
      featured
        ? 'border-brand-500 shadow-2xl shadow-brand-100'
        : 'border-gray-200 shadow-lg'
    }`}>
      {/* Badge */}
      <div className="absolute -top-4 left-6">
        <span className={`${product.badgeColor} text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide`}>
          {product.badge}
        </span>
      </div>

      <div className="p-8 pt-10 flex flex-col flex-1">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-black text-gray-900 mb-2">{product.name}</h2>
          <p className="text-gray-600 leading-relaxed">{product.tagline}</p>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-6">
          <span className="text-5xl font-black text-brand-700">{product.price}</span>
          <span className="text-gray-400 text-sm">{product.anchor}</span>
        </div>

        {/* CTA */}
        <a
          href={product.href}
          className={`block w-full text-center py-4 px-6 rounded-xl font-bold text-lg transition-all mb-8 ${
            featured
              ? 'bg-brand-600 hover:bg-brand-700 text-white shadow-lg shadow-brand-200'
              : 'bg-gray-900 hover:bg-gray-800 text-white'
          }`}
        >
          Get Instant Access →
        </a>

        {/* What's inside */}
        <div className="mb-6">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">What&apos;s Inside</p>
          <div className="space-y-4">
            {product.includes.map((item) => (
              <div key={item.title} className="flex gap-3">
                <span className="text-2xl flex-shrink-0 mt-0.5">{item.icon}</span>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{item.title}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Extras */}
        <div className="bg-gray-50 rounded-xl p-4 mb-6">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Also Includes</p>
          <ul className="space-y-1.5">
            {product.extras.map((extra) => (
              <li key={extra} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-brand-500 font-bold flex-shrink-0">✓</span>
                {extra}
              </li>
            ))}
          </ul>
        </div>

        {/* Guarantee */}
        <div className="mt-auto flex items-start gap-2 text-sm text-gray-500">
          <span className="text-green-500 flex-shrink-0 mt-0.5">🛡️</span>
          <span>{product.guarantee}</span>
        </div>
      </div>
    </div>
  )
}

export default function ProductsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6 text-sm font-medium text-brand-100">
            <span className="w-2 h-2 bg-brand-300 rounded-full"></span>
            Instant PDF Downloads · No Subscription · 7-Day Guarantee
          </div>
          <h1 className="text-4xl sm:text-5xl font-black mb-4 leading-tight">
            Tools That Actually Move the Needle
          </h1>
          <p className="text-xl text-brand-100 max-w-2xl mx-auto leading-relaxed">
            Every free article on this site teaches you the why. These kits give you the exact
            templates, checklists, and systems to do the work — starting today.
          </p>
        </div>
      </section>

      {/* CROA Brand Statement */}
      <section className="py-12 px-4 bg-brand-50 border-b border-brand-100">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold text-brand-600 uppercase tracking-widest mb-4 text-center">A Note Before You Buy</p>
          <div className="bg-white rounded-2xl border border-brand-200 shadow-sm p-8">
            <p className="text-gray-800 leading-relaxed mb-4">
              We built this site on a single belief: the credit repair industry charges people for things
              they can legally do themselves for free. That&apos;s not cynicism — it&apos;s federal law.
            </p>
            <p className="text-gray-800 leading-relaxed mb-4">
              Before you spend a dollar here, you should know:{' '}
              <strong>you have the legal right to dispute any inaccurate information on your credit
              report directly with the bureaus, at no cost.</strong> Everything in these products,
              you could do on your own without buying anything. What you&apos;re paying for is the
              research, the formatting, and the time we&apos;ve already spent so you don&apos;t have to.
            </p>
            <p className="text-gray-800 leading-relaxed mb-6">
              If you&apos;d rather do it from scratch, start with the free guides. We mean that.
            </p>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">— The DIYCreditFix Team</p>
            <div className="border-t border-gray-100 mt-6 pt-5">
              <p className="text-xs text-gray-400 leading-relaxed italic">
                <strong className="not-italic text-gray-500">Consumer Credit File Rights Under State and Federal Law:</strong>{' '}
                You have a right to dispute inaccurate information in your credit report by contacting
                the credit bureau directly. There is no fee or charge for this. Anything a credit repair
                company can do legally, you also have the right to do for yourself for free. You have
                the right to sue a credit repair organization that violates the Credit Repair
                Organizations Act. This right is not affected by any agreement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 mt-4">
            <ProductCard product={disputeBundle} featured={true} />
            <ProductCard product={adhdKit} />
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-10 px-4 bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {[
              { icon: '⚡', title: 'Instant Download', desc: 'Your files arrive the moment you purchase. No waiting, no shipping.' },
              { icon: '🛡️', title: '7-Day Guarantee', desc: 'Not happy? Email us within 7 days and we\'ll refund you, no questions asked.' },
              { icon: '📄', title: 'Grounded in Federal Law', desc: 'Every letter is built on rights Congress already gave you — the bureau and collector are legally required to respond.' },
            ].map(item => (
              <div key={item.title} className="flex flex-col items-center gap-2">
                <span className="text-3xl">{item.icon}</span>
                <p className="font-bold text-gray-900">{item.title}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 mb-10 text-center">Common Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: 'Do I need the Dispute Letter Bundle or the ADHD Autopilot Kit?',
                a: 'They solve different problems. The Dispute Letter Bundle is for removing errors from your credit report — it\'s a legal tool. The ADHD Autopilot Kit is about building the financial system so errors don\'t pile up in the first place. Most people benefit from both, but if you have specific errors on your report right now, start with the Bundle.',
              },
              {
                q: 'Are these templates legal to use?',
                a: 'Yes. Federal law gives you the right to dispute inaccurate information on your credit report, and requires bureaus to investigate within 30 days. Federal law also gives you the right to demand that collectors prove a debt is valid before you pay. These letters are designed to exercise those rights in a way bureaus and collectors are legally required to respond to.',
              },
              {
                q: 'What format are the downloads?',
                a: 'Both products are delivered as a single PDF file. You can print them, fill them out digitally, or use them as a reference on your phone or computer. No special software required.',
              },
              {
                q: 'Will this actually improve my credit score?',
                a: 'If there are errors on your report, disputing them can result in those items being removed — which directly improves your score. The ADHD Autopilot Kit addresses the behavioral and systemic causes of credit damage (late payments, high utilization) which, over time, have an even larger impact. Neither product makes guarantees, but both address the root causes of credit damage.',
              },
              {
                q: 'What if I don\'t have ADHD — is the Autopilot Kit still useful?',
                a: 'Yes. The banking structure, automation checklist, and impulse spend rules work for any brain. The kit was designed with ADHD in mind — meaning it assumes limited working memory, variable motivation, and susceptibility to impulse — but those are useful design constraints for anyone who finds traditional budgeting systems unsustainable.',
              },
            ].map(item => (
              <div key={item.q} className="border-b border-gray-100 pb-6 last:border-0">
                <p className="font-bold text-gray-900 mb-2">{item.q}</p>
                <p className="text-gray-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-4 bg-brand-900 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-brand-300 text-sm font-semibold uppercase tracking-widest mb-4">Still on the fence?</p>
          <h2 className="text-3xl font-black mb-4">Everything else on this site is free.</h2>
          <p className="text-brand-100 mb-8 leading-relaxed">
            Read every article, use every guide, dispute errors on your own. These products exist
            for people who want the work already done for them — not because you need them to get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/learn/dispute-errors"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-semibold transition-colors">
              Read the Free Dispute Guide →
            </Link>
            <Link href="/adhd"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-semibold transition-colors">
              Explore the ADHD Hub →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
