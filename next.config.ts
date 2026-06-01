import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bigboyfourways.co.za',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'content.storefront7.co.za',
        port: '',
        pathname: '/stores/za.co.storefront7.samotorcycles/**',
      },
    ],
  },
};

export default nextConfig;
