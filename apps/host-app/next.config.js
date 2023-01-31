/** @type {import('next').NextConfig} */

const { NextFederationPlugin } = require('@module-federation/nextjs-mf')

module.exports = {
  webpack(config, options) {
    config.experiments = { ...config.experiments, topLevelAwait: true }
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: 'host',
          remotes: {
            // The following is when running remote at Vercel
            // remote:
            //   'remote@https://blabla.foo.bar/_next/static/chunks/remoteEntry.js',
            // reactremote:
            //   'reactremote@blabla.foo.bar/remote.js',
            // The following is when running locally
            remote:
              'remote@http://localhost:3001/_next/static/chunks/remoteEntry.js',
            reactremote: 'reactremote@http://localhost:3003/remote.js',
          },
          filename: 'static/chunks/remoteEntry.js',
        })
      )
    }

    return config
  },
}
