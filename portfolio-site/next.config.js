/* eslint @typescript-eslint/no-var-requires: 0 */
const withOffline = require('next-offline')

const nextConfig = {
  workboxOpts: {
    runtimeCaching: [
      {
        urlPattern: new RegExp('^' + 'https://www.ohakutsu.com/' + '.*'),
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: 'ohakutsu-com',
          expiration: {
            maxAgeSeconds: 60 * 60 * 1,
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ],
  },
  webpack(config) {
    config.resolve.alias['~'] = __dirname
    return config
  },
}

module.exports = withOffline(nextConfig)
