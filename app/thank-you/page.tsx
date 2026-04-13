'use client'

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

interface VerifyResult {
  verified: boolean
  productName: string
  headline: string
  subtitle: string
  downloadUrl: string
  customerEmail: string | null
}

type Status = 'loading' | 'verified' | 'error'

function ThankYouContent() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const productId = searchParams.get('product')

  const [status, setStatus] = useState<Status>('loading')
  const [data, setData] = useState<VerifyResult | null>(null)
  const [downloading, setDownloading] = useState(false)

  useEffect(() => {
    if (!sessionId || !productId) {
      setStatus('error')
      return
    }

    fetch(`/api/verify-session?session_id=${sessionId}&product=${productId}`)
      .then(res => res.json())
      .then((result: VerifyResult & { error?: string }) => {
        if (result.verified) {
          setData(result)
          setStatus('verified')
        } else {
          setStatus('error')
        }
      })
      .catch(() => setStatus('error'))
  }, [sessionId, productId])

  const handleDownload = async () => {
    if (!data) return
    setDownloading(true)
    // Open the download route in a new tab — the route streams the PDF
    window.open(data.downloadUrl, '_blank')
    setTimeout(() => setDownloading(false), 2000)
  }

  // ── Loading ───────────────────────────────────────────────────────────────
  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-brand-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-500 font-medium">Verifying your purchase…</p>
        </div>
      </div>
    )
  }

  // ── Error ─────────────────────────────────────────────────────────────────
  if (status === 'error') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-center">
          <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-5">
            <span className="text-2xl">⚠️</span>
          </div>
          <h1 className="text-xl font-black text-gray-900 mb-3">We couldn't verify your purchase</h1>
          <p className="text-gray-500 mb-6 leading-relaxed">
            This can happen if the page was refreshed or the link expired.
            Your payment was still processed — please check your email for a receipt.
          </p>
          <p className="text-gray-500 text-sm mb-6">
            If you need help accessing your download, email us at{' '}
            <a href="mailto:support@diycreditfix.net" className="text-brand-600 underline">
              support@diycreditfix.net
            </a>{' '}
            with your order confirmation and we'll get it to you right away.
          </p>
          <Link href="/products" className="text-brand-600 font-semibold hover:underline text-sm">
            ← Back to Products
          </Link>
        </div>
      </div>
    )
  }

  // ── Verified ──────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-xl mx-auto">

        {/* Success card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-6">

          {/* Green top bar */}
          <div className="bg-brand-700 px-8 py-6 text-center">
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-brand-200 text-sm font-semibold uppercase tracking-widest mb-1">Purchase Complete</p>
            <h1 className="text-2xl font-black text-white">{data!.headline}</h1>
          </div>

          <div className="p-8">
            <p className="text-gray-600 leading-relaxed mb-8 text-center">{data!.subtitle}</p>

            {/* Download button */}
            <button
              onClick={handleDownload}
              disabled={downloading}
              className="w-full flex items-center justify-center gap-3 bg-brand-600 hover:bg-brand-700 disabled:bg-brand-400 text-white font-bold text-lg py-4 px-6 rounded-xl transition-colors shadow-lg shadow-brand-100"
            >
              {downloading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Opening download…
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  </svg>
                  Download {data!.productName} (PDF)
                </>
              )}
            </button>

            {data!.customerEmail && (
              <p className="text-center text-sm text-gray-400 mt-3">
                Receipt sent to {data!.customerEmail}
              </p>
            )}

            <div className="border-t border-gray-100 mt-8 pt-6">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">What to do now</p>
              {productId === 'dispute-bundle' ? (
                <ol className="space-y-2">
                  {[
                    'Pull your free credit reports at AnnualCreditReport.com',
                    'Open Letter 1 and identify the specific item you\'re disputing',
                    'Send via certified mail — instructions are inside the PDF',
                    'Mark your calendar 30 days out to follow up',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="w-5 h-5 rounded-full bg-brand-100 text-brand-700 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              ) : (
                <ol className="space-y-2">
                  {[
                    'Open Section 2 and set up the Critical automations first (30 min)',
                    'Set up the 4-account banking structure this week',
                    'Screenshot the Impulse Spend Rules Card for your phone lock screen',
                    'Open Section 4, find today\'s date, and write "Day 1"',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="w-5 h-5 rounded-full bg-brand-100 text-brand-700 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              )}
            </div>
          </div>
        </div>

        {/* Keep reading card */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center">
          <p className="text-sm text-gray-500 mb-3">Everything else on the site is free</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/learn/dispute-errors"
              className="text-sm font-semibold text-brand-600 hover:text-brand-800 transition-colors">
              Free Dispute Guide →
            </Link>
            <Link href="/adhd"
              className="text-sm font-semibold text-brand-600 hover:text-brand-800 transition-colors">
              ADHD & Credit Hub →
            </Link>
            <Link href="/learn/root-behaviors"
              className="text-sm font-semibold text-brand-600 hover:text-brand-800 transition-colors">
              Root Behaviors →
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-brand-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-500 font-medium">Loading…</p>
        </div>
      </div>
    }>
      <ThankYouContent />
    </Suspense>
  )
}
