/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['m.media-amazon.com', 'ia.media-imdb.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.omdbapi.com',
      },
    ],
  },
  eslint: {
    // Only run ESLint on build in production
    ignoreDuringBuilds: process.env.NODE_ENV !== 'production',
  },
};

module.exports = nextConfig;