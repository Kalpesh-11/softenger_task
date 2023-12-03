/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  i18n: {
    locales: ["en", "my"],
    defaultLocale: "en",
    domains: [
      {
        domain: "kalpeshbhagat.com",
        defaultLocale: "en-US",
      },
      {
        domain: "kalpeshbhagat.my",
        defaultLocale: "en-MY",
      },
    ],
  },
};

module.exports = nextConfig;
