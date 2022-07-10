/** @type {import('next').NextConfig} */
const Images = require('next-images');

const withImages = Images({
  esModule: true,
  webpack(config, options) {
    return config;
  },
});

const nextConfig = {
  reactStrictMode: true,
  withImages,
  api: {
    responseLimit: false,
  },
};

module.exports = nextConfig;
