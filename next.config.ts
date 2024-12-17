import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination:
          // 'https://w3test.yuantafutures.com.tw/2024StockFuture/api/:path*',
          // 'https://www.yuantafutures.com.tw/2024StockFuture/api/:path*',
          // 'http://192.168.0.216:5000/api/:path*',
          'http://10.211.55.3:5000/api/:path*',
      },
    ];
  },
};

export default nextConfig;
