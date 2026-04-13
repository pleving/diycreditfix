import { NextRequest, NextResponse } from 'next/server'
import { getStripe } from '@/lib/stripe'
import { PRODUCTS, type ProductId } from '@/lib/products'

export async function POST(req: NextRequest) {
  try {
    const { productId } = await req.json() as { productId: ProductId }
    const product = PRODUCTS[productId]

    if (!product) {
      return NextResponse.json({ error: 'Unknown product' }, { status: 400 })
    }

    if (!product.priceId) {
      return NextResponse.json(
        { error: 'Price not configured for this product. Add STRIPE_PRICE_' + productId.toUpperCase().replace('-', '_') + ' to your environment variables.' },
        { status: 500 }
      )
    }

    const origin = req.headers.get('origin') ?? process.env.NEXT_PUBLIC_SITE_URL ?? 'https://diycreditfix.vercel.app'

    const session = await getStripe().checkout.sessions.create({
      mode: 'payment',
      line_items: [
        {
          price: product.priceId,
          quantity: 1,
        },
      ],
      success_url: `${origin}/thank-you?session_id={CHECKOUT_SESSION_ID}&product=${productId}`,
      cancel_url: `${origin}/products`,
      metadata: {
        productId,
      },
      // Collect billing address for CROA compliance records
      billing_address_collection: 'auto',
      // Allow promo codes
      allow_promotion_codes: true,
    })

    return NextResponse.json({ url: session.url })
  } catch (err) {
    console.error('Checkout error:', err)
    return NextResponse.json({ error: 'Failed to create checkout session' }, { status: 500 })
  }
}
