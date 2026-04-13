import { NextRequest, NextResponse } from 'next/server'
import { getStripe } from '@/lib/stripe'
import { PRODUCTS, type ProductId } from '@/lib/products'
import { readFile } from 'fs/promises'
import path from 'path'

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

  // Re-verify payment before every download — prevents link sharing
  try {
    const session = await getStripe().checkout.sessions.retrieve(sessionId)

    if (session.payment_status !== 'paid') {
      return new NextResponse('Payment required', { status: 402 })
    }

    if (session.metadata?.productId !== productId) {
      return new NextResponse('Forbidden', { status: 403 })
    }
  } catch {
    return new NextResponse('Could not verify payment', { status: 500 })
  }

  // Serve the PDF from /public/downloads/
  try {
    const filePath = path.join(process.cwd(), 'public', 'downloads', product.file)
    const fileBuffer = await readFile(filePath)

    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${product.file}"`,
        'Cache-Control': 'no-store',
      },
    })
  } catch {
    return new NextResponse('File not found', { status: 404 })
  }
}
