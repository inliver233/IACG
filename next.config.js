const path = require('path');

module.exports = {
  reactStrictMode: true,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['localhost'],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/images/',
            outputPath: 'static/images/',
            name: '[name].[ext]',
          },
        },
      ],
    });
    return config;
  },
}
