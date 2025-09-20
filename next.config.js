/** @type {import('next').NextConfig} */
module.exports = {
  output: 'export',               // puts the static site in ./out
  images: { unoptimized: true },  // required for static export
};
