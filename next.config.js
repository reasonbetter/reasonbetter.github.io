/** @type {import('next').NextConfig} */
module.exports = {
  output: 'export',               // produce static HTML files into ./out
  images: { unoptimized: true },  // required for static export
  // IMPORTANT for user sites:
  // Do NOT add basePath or assetPrefix here.
};
