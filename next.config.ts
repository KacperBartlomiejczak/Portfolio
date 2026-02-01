const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const createNextIntlPlugin = require("next-intl/plugin");
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [25, 50, 60, 75, 80],
  },
  experimental: {
    optimizeCss: true,
  },
};

module.exports = withBundleAnalyzer(withNextIntl(nextConfig));
