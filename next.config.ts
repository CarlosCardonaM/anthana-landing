import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Solo usar export para GitHub Pages, no para Vercel
  ...(process.env.VERCEL !== '1' && {
    output: 'export',
    trailingSlash: true,
    images: {
      unoptimized: true
    },
    basePath: process.env.NODE_ENV === 'production' ? '/anthana-landing' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/anthana-landing' : '',
  }),
  // Para Vercel, usar configuración estándar
  ...(process.env.VERCEL === '1' && {
    images: {
      domains: ['vercel.app'],
      unoptimized: false,
    },
  }),
};

export default nextConfig;
