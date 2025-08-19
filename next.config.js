/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/anthanaai-site' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/anthanaai-site/' : '',
}

module.exports = nextConfig
