/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // Block direct browser access to the downloads folder.
        // Files are only served via /api/download which verifies payment first.
        source: '/downloads/:path*',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, nofollow' },
        ],
      },
    ]
  },
  async rewrites() {
    return [
      // Prevent direct URL access to PDFs — redirect to products page
      {
        source: '/downloads/:path*',
        destination: '/products',
      },
    ]
  },
}

module.exports = nextConfig
