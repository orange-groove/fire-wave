import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Render's small instances (512MB) can OOM from Next's image optimizer (sharp)
    // under traffic/bots requesting many sizes. Serve images directly instead.
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Cache optimized images for 1 year (CDN) with 1 week stale-while-revalidate
    minimumCacheTTL: 31536000,
  },
};

export default nextConfig;
