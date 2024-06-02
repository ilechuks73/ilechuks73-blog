/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
});

const nextConfig = withPWA({
  reactStrictMode: false,
  images: {
    domains: ["https://res.cloudinary.com"],
    // deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // path: "",
    // loader: "cloudinary",
    // disableStaticImages: true,
    // formats: ["image/avif", "image/webp", "image/jpeg", "image/png"],
  }
});

module.exports = nextConfig;
