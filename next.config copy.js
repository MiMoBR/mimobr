/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  env: {
    customKey: 'my-value',
    gtmID: `${process.env.GTM_ID}`
  },
}

module.exports = nextConfig
