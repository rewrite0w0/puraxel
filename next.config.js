/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";
const debug = process.env.NODE_ENV !== "production";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // experimental: {
  //   scrollRestoration: true,
  //   images: {
  //     unoptimized: true,
  //   },
  // },
  // i18n: {
  //   defaultLocale: "en",
  //   locales: ["en", "kr"],
  // },
  // images: {
  //   loader: "akamai",
  //   path: "",
  // },
  // basePath: "/puraxel",

  // assetPrefix: isProd ? "/puraxel/" : "",
};

module.exports = nextConfig;
