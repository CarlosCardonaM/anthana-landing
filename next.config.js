/** @type {import('next').NextConfig} */
const nextConfig = {
  // Solo exportar estáticamente en producción
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Solo aplicar basePath en producción
  basePath: process.env.NODE_ENV === 'production' ? '/anthana-landing' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/anthana-landing' : '',
}

module.exports = nextConfig
