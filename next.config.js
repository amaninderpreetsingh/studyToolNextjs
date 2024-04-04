/** @type {import('next/dist/server/config').NextConfig} */
// next.config.js or entry point of your application
require("dotenv").config();

const nextConfig = {
  // Add your experimental configurations here if needed
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      "img.clerk.com",
      "images.clerk.dev",
      "uploadthing.com",
      "placehold.co",
    ],
  },
};

module.exports = nextConfig;
