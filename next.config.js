/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
    domains: [
      'tailwindui.com',
      'images.unsplash.com',
      'lh3.googleusercontent.com',
    ],
  },
};

module.exports = nextConfig;
