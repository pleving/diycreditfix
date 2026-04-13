'use client'

import { useState } from 'react'

interface BuyButtonProps {
  productId: string
  label?: string
  featured?: boolean
}

export default function BuyButton({ productId, label = 'Get Instant Access →', featured = false }: BuyButtonProps) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleClick = async () => {
    setLoading(true)
    setError(null)

    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId }),
      })

      const data = await res.json() as { url?: string; error?: string }

      if (!res.ok || !data.url) {
        setError(data.error ?? 'Something went wrong. Please try again.')
        setLoading(false)
        return
      }

      // Redirect to Stripe Checkout
      window.location.href = data.url
    } catch {
      setError('Network error. Please check your connection and try again.')
      setLoading(false)
    }
  }

  return (
    <div className="w-full">
      <button
        onClick={handleClick}
        disabled={loading}
        className={`w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-bold text-lg transition-all ${
          featured
            ? 'bg-brand-600 hover:bg-brand-700 disabled:bg-brand-400 text-white shadow-lg shadow-brand-200'
            : 'bg-gray-900 hover:bg-gray-800 disabled:bg-gray-500 text-white'
        }`}
      >
        {loading ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Redirecting to checkout…
          </>
        ) : (
          label
        )}
      </button>
      {error && (
        <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
      )}
    </div>
  )
}
