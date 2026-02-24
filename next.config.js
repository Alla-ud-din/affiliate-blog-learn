/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Add any external image domains you'll use here
    domains: ['images.unsplash.com', 'm.media-amazon.com'],
    // Allows relative/local images by default
  },
}

module.exports = nextConfig
