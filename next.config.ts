import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Bỏ qua check ESLint khi build
  },
  typescript: {
    // Bỏ qua toàn bộ lỗi type khi build
    ignoreBuildErrors: true,
  },
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
