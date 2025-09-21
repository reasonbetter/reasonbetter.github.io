
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  // Add the following lines
  basePath: '/reasonbetter.github.io',
  assetPrefix: '/reasonbetter.github.io',
};

module.exports = nextConfig;