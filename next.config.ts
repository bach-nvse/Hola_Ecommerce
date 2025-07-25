import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'docs',
  images: {
    unoptimized: true, // Bắt buộc khi export static
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com',
      },
    ],
  },
};

export default nextConfig;
