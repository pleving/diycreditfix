'use client'
import { useState } from 'react'

interface EmailCaptureProps {
  variant?: 'hero' | 'inline' | 'sidebar'
  title?: string
  subtitle?: string
}

export default function EmailCapture({
  variant = 'inline',
  title = 'Get Your Free Credit Repair Checklist',
  subtitle = 'A step-by-step action plan trusted by thousands of people who\'ve raised their scores by 50–150 points.'
}: EmailCaptureProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    // Simulates API call — will wire to Make.com webhook later
    await new Promise(r => setTimeout(r, 800))
    setStatus('success')
    setEmail('')
  }

  if (variant === 'hero') {
    return (
      <div id="email-capture" className="bg-brand-600 rounded-2xl p-8 text-white">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-brand-100 mb-6">{subtitle}</p>
        {status === 'success' ? (
          <div className="bg-white/20 rounded-xl p-4 text-center">
            <p className="font-semibold text-lg">✓ Check your inbox!</p>
            <p className="text-brand-100 text-sm mt-1">Your checklist is on its way.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white text-base"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-6 py-3 bg-white text-brand-700 font-bold rounded-lg hover:bg-brand-50 transition-colors disabled:opacity-70 whitespace-nowrap"
            >
              {status === 'loading' ? 'Sending...' : 'Send Me the Checklist →'}
            </button>
          </form>
        )}
        <p className="text-brand-200 text-xs mt-4">No spam, ever. Unsubscribe anytime. We respect your inbox.</p>
      </div>
    )
  }

  if (variant === 'sidebar') {
    return (
      <div id="email-capture" className="bg-brand-50 border border-brand-200 rounded-xl p-6">
        <h4 className="font-bold text-gray-900 text-lg mb-2">{title}</h4>
        <p className="text-gray-600 text-sm mb-4">{subtitle}</p>
        {status === 'success' ? (
          <div className="bg-brand-100 rounded-lg p-3 text-center">
            <p className="font-semibold text-brand-800 text-sm">✓ Check your inbox!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="w-full px-3 py-2 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-2 bg-brand-600 text-white font-semibold rounded-lg hover:bg-brand-700 transition-colors text-sm disabled:opacity-70"
            >
              {status === 'loading' ? 'Sending...' : 'Get Free Checklist'}
            </button>
          </form>
        )}
      </div>
    )
  }

  // inline variant (default)
  return (
    <div id="email-capture" className="bg-gray-50 border border-gray-200 rounded-2xl p-8 my-10">
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-100 rounded-full mb-4">
          <svg className="w-6 h-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-6">{subtitle}</p>
        {status === 'success' ? (
          <div className="bg-brand-50 border border-brand-200 rounded-xl p-4">
            <p className="font-semibold text-brand-800">✓ Check your inbox — your checklist is on the way!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn-primary disabled:opacity-70"
            >
              {status === 'loading' ? 'Sending...' : 'Get It Free'}
            </button>
          </form>
        )}
        <p className="text-gray-400 text-xs mt-4">No spam. Unsubscribe anytime.</p>
      </div>
    </div>
  )
}
