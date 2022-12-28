const isProd = process.env.NODE_ENV === 'production'

/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: !isProd
})

/** @type {import('next').NextConfig} */
const settings = {
  swcMinify: true,
  compiler: {
    styledComponents: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.scdn.co',
      },
    ],
  },

}

module.exports = isProd ? withPWA(settings) : settings
