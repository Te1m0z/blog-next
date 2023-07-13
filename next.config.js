//const withOffline = require('next-offline')
//const path = require('path')

const env = {
  FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
  FIREBASE_DATABASE_URL: process.env.FIREBASE_DATABASE_URL,
  FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
  FIREBASE_PUBLIC_API_KEY: process.env.FIREBASE_PUBLIC_API_KEY,
  FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGEING_SENDER_ID: process.env.FIREBASE_MESSAGEING_SENDER_ID,
  FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
  FIREBASE_CLIENT_EMAIL: process.env.FIREBASE_CLIENT_EMAIL,
  //SC_ATTR: true,
}

const nextConfig = {
  env,
  //output: 'standalone',
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  swcMinify: false,
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ]
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          publicPath: '/_next',
          name: 'static/fonts/[name].[hash].[ext]',
          limit: 5000, // Adjust the limit as needed
          fallback: 'file-loader',
        },
      },
    })

    return config
  },
}

module.exports = nextConfig
