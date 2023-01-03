const isProd = process.env.NODE_ENV === 'production'

/* eslint-disable @typescript-eslint/no-var-requires */
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    reExportDataFetching: true
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  experimental: {
    mdxRs: true
  }
})

/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: !isProd
})

/** @type {import('next').NextConfig} */
const settings = {
  swcMinify: true,
  experimental: {
    forceSwcTransforms: true
  },
  compiler: {
    styledComponents: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.scdn.co'
      }
    ]
  }
}

module.exports = isProd ? withPWA(withMDX(settings)) : withMDX(settings)
