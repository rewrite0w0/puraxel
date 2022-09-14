/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";
const debug = process.env.NODE_ENV !== "production";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // extends: "next",
  // rules: {
  //   "react/no-unescaped-entities": "off",
  //   "@next/next/no-page-custom-font": "off",
  // },
  // images: {
  //   unoptimized: false,
  // },

  // experimental: {
  //   scrollRestoration: true,
  //   images: {
  //     unoptimized: true,
  //   },
  // },

  // webpack: (
  //   config,
  //   { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  // ) => {
  //   // Important: return the modified config
  //   return config;
  // },
  // env: {
  //   customKey: "my-value",
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
