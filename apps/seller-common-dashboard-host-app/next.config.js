/** @type {import('next').NextConfig} */

const { NextFederationPlugin } = require('@module-federation/nextjs-mf')

module.exports = {
  webpack(config, options) {
    config.experiments = { ...config.experiments, topLevelAwait: true }
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: 'hostseller',
          remotes: {
            brokerpartnerapp:
              'brokerpartnerapp@http://localhost:3004/_next/static/chunks/remoteEntry.js',
            developerpartnerapp:
              'developerpartnerapp@http://localhost:3005/_next/static/chunks/remoteEntry.js',
            individualsellerapp:
              'individualsellerapp@http://localhost:3006/_next/static/chunks/remoteEntry.js',
          },
          filename: 'static/chunks/remoteEntry.js',
        }),
      )
    }

    return config
  },
}
