/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Configure webpack to use proper CSS loaders
  webpack: (config) => {
    return config;
  },
};

module.exports = nextConfig;
