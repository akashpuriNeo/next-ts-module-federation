/** @type {import('next').NextConfig} */
const { NextFederationPlugin } = require('@module-federation/nextjs-mf')

module.exports = {
  reactStrictMode: true,
  transpilePackages: ['ui'],
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: 'brokerpartnerapp',
          exposes: {
            './BrokerHome': './pages/index.jsx',
          },
          filename: 'static/chunks/remoteEntry.js',
        }),
      )
    }

    return config
  },
}
