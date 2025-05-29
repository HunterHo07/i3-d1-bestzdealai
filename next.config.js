/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'unsplash.com',
      'images.unsplash.com',
      'pexels.com',
      'pixabay.com',
      'raw.githubusercontent.com',
    ],
    formats: ['image/webp', 'image/avif'],
  },
  webpack: (config, { isServer }) => {
    // Handle GSAP and Three.js
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        os: false,
      };
    }
    
    // Handle canvas for Phaser
    config.externals = config.externals || [];
    config.externals.push({
      canvas: 'canvas',
    });

    return config;
  },
  // Enable static optimization
  output: 'standalone',
  
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  
  // Environment variables
  env: {
    CUSTOM_KEY: 'bestzdealaai',
  },
}

module.exports = nextConfig
