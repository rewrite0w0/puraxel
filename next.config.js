/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    scrollRestoration: true,
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "kr"],
  },
};

module.exports = nextConfig;
