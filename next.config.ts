import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'docs',
  assetPrefix: '/', // dùng root domain nên để '/'
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // tắt Image Optimization cho static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com',
      },
    ],
  },
};

export default nextConfig;
