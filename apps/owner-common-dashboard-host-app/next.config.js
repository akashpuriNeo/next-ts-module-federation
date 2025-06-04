/** @type {import('next').NextConfig} */

const { NextFederationPlugin } = require('@module-federation/nextjs-mf')

module.exports = {
  webpack(config, options) {
    config.experiments = { ...config.experiments, topLevelAwait: true }
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: 'hostowner',
          remotes: {
            coownershipapp:
              'coownershipapp@http://localhost:3007/_next/static/chunks/remoteEntry.js',
            fractionalinvestapp:
              'fractionalinvestapp@http://localhost:3008/_next/static/chunks/remoteEntry.js',
            rentallandlordapp:
              'rentallandlordapp@http://localhost:3009/_next/static/chunks/remoteEntry.js',
          },
          filename: 'static/chunks/remoteEntry.js',
        }),
      )
    }
    return config
  },
}
