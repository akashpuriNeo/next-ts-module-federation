/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['ui'],
  webpack: (config, options) => {
    // webpack configurations
    config.plugins.push(
      new options.webpack.container.ModuleFederationPlugin({
        name: 'header',
        filename: 'remoteEntryHeader.js', // remote file name which will used later
        remoteType: 'var',
        exposes: {
          // expose all component here.
          './header': './pages',
          './utils': './utils',
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
