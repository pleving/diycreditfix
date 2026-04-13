// Central product catalog — one place to update prices, names, and file slugs.
// priceId: set these to your actual Stripe Price IDs after creating products in the dashboard.

export const PRODUCTS = {
  'dispute-bundle': {
    id: 'dispute-bundle',
    name: 'Dispute Letter Bundle',
    description: 'The complete 4-letter system for removing errors from your credit report.',
    price: 2700,           // cents — $27.00
    priceId: process.env.STRIPE_PRICE_DISPUTE_BUNDLE ?? '',
    file: 'DIYCreditFix_Dispute_Letter_Bundle.pdf',
    thankYouHeadline: 'Your Dispute Letter Bundle is ready.',
    thankYouSubtitle: 'Download your PDF below. You\'ll also find all four letters, instructions, and the bureau mailing addresses inside.',
  },
  'adhd-kit': {
    id: 'adhd-kit',
    name: 'ADHD Autopilot Kit',
    description: 'Build a financial system that runs itself — even on your worst days.',
    price: 1700,           // cents — $17.00
    priceId: process.env.STRIPE_PRICE_ADHD_KIT ?? '',
    file: 'DIYCreditFix_ADHD_Autopilot_Kit.pdf',
    thankYouHeadline: 'Your ADHD Autopilot Kit is ready.',
    thankYouSubtitle: 'Download your PDF below. Start with Section 2 — setting up the critical automations takes about 30 minutes and protects your credit immediately.',
  },
} as const

export type ProductId = keyof typeof PRODUCTS
