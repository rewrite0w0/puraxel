/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";
const debug = process.env.NODE_ENV !== "production";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  extends: "next",
  rules: {
    "react/no-unescaped-entities": "off",
    "@next/next/no-page-custom-font": "off",
  },

  experimental: {
    scrollRestoration: true,
    images: {
      unoptimized: true,
    },
  },

  // i18n: {
  //   defaultLocale: "en",
  //   locales: ["en", "kr"],
  // },
  // images: {
  //   loader: "akamai",
  //   path: "",
  // },
  // basePath: "/puraxel",

  // assetPrefix: isProd ? "/puraxel" : "",
  // exportPathMap: async function (
  //   defaultPathMap,
  //   { dev, dir, outDir, distDir, buildId }
  // ) {
  //   return {
  //     "/": { page: "/" },
  //   };
  // },
};

module.exports = nextConfig;
