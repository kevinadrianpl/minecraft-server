const { withMDX } = require('@next/mdx')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["vanilla.tvpmc.co.za"],
  }
}

module.exports = withMDX({ extension: /.mdx?$/ })(nextConfig)
