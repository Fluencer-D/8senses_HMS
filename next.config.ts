/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  basePath: "/hms",
  // assetPrefix: "/hms",
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
