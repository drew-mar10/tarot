/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  images: {
    domains: ["https://api.projectgamesapi.xyz/v1/tarot"]
  }
}

module.exports = nextConfig
