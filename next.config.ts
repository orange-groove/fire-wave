import type { NextConfig } from "next";

const cfImagesHostname = process.env.NEXT_PUBLIC_CF_IMAGES_HOSTNAME

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
    remotePatterns: [
      // Cloudflare Images default delivery domain
      { protocol: 'https' as const, hostname: 'imagedelivery.net', pathname: '/**' },
      // Optional custom delivery domain (if you set one)
      ...(cfImagesHostname
        ? [{ protocol: 'https' as const, hostname: cfImagesHostname, pathname: '/**' }]
        : []),
    ],
  },
};

export default nextConfig;
