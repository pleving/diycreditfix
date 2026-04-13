import { NextRequest, NextResponse } from 'next/server'
import { getStripe } from '@/lib/stripe'
import { PRODUCTS, type ProductId } from '@/lib/products'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const sessionId = searchParams.get('session_id')
  const productId = searchParams.get('product') as ProductId | null

  if (!sessionId || !productId) {
    return NextResponse.json({ error: 'Missing parameters' }, { status: 400 })
  }

  const product = PRODUCTS[productId]
  if (!product) {
    return NextResponse.json({ error: 'Unknown product' }, { status: 400 })
  }

  try {
    const session = await getStripe().checkout.sessions.retrieve(sessionId)

    if (session.payment_status !== 'paid') {
      return NextResponse.json({ error: 'Payment not completed' }, { status: 402 })
    }

    // Confirm the session is for this product
    if (session.metadata?.productId !== productId) {
      return NextResponse.json({ error: 'Session product mismatch' }, { status: 403 })
    }

    return NextResponse.json({
      verified: true,
      productName: product.name,
      headline: product.thankYouHeadline,
      subtitle: product.thankYouSubtitle,
      downloadUrl: `/api/download?session_id=${sessionId}&product=${productId}`,
      customerEmail: session.customer_details?.email ?? null,
    })
  } catch (err) {
    console.error('Verify session error:', err)
    return NextResponse.json({ error: 'Could not verify session' }, { status: 500 })
  }
}
