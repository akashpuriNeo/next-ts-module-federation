const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['ui'],
  webpack: (config, options) => {
    config.experiments = { ...config.experiments, topLevelAwait: true }
    // webpack configurations
    config.plugins.push(
      new options.webpack.container.ModuleFederationPlugin({
        name: 'main',
        filename: 'static/consumerFile.js',
        remoteType: 'var',
        remotes: {
          headers: options.isServer
            ? path.resolve('../header/build/remoteEntryHeader.js')
            : 'header',
        },
        shared: [
          {
            react: {
              eager: true,
              singleton: true,
              requiredVersion: false,
            },
          },
          {
            'react-dom': {
              eager: true,
              singleton: true,
              requiredVersion: false,
            },
          },
        ],
      })
    )
    return config
  },
}

module.exports = nextConfig
