// Import the next-videos plugin
const withVideos = require('next-videos');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Any other configurations you have...
};

// Export the configuration with next-videos plugin applied
module.exports = withVideos(nextConfig);