'use client';

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/Dashy',
  assetPrefix: '/Dashy/',
  trailingSlash: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;