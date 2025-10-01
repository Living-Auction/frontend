import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* mockup 이미지 삽입을 위한 config */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
};

export default nextConfig;
