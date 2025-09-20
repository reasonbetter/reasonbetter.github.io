// next.config.js
const isProjectSite = process.env.NEXT_PUBLIC_BASE_PATH?.length > 0;

module.exports = {
  output: 'export',             // puts static site in /out
  images: { unoptimized: true },// required for static export
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',   // set for project sites
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',// set for project sites
};
