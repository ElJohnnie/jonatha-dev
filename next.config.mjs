import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/locale/index.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { serverActions: true },
  images: {
    remotePatterns: [],
    domains: [
      'tailwindui.com',
      'images.unsplash.com',
      'lh3.googleusercontent.com',
      'prod-files-secure.s3.us-west-2.amazonaws.com',
    ],
  },
};

export default withNextIntl(nextConfig);
