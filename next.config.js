/** @type {import('next').NextConfig} */

// const webpack = require("webpack");

const nextConfig = {
    // output: 'export',


    images: {
        unoptimized: true 
    },
    // dynamicParams: false,
    reactStrictMode: false,
   
  //   webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) =>
  //    {
  //     config.plugins.push(
  //      new webpack.ProvidePlugin({
  //      $: 'jquery',
  //      jQuery: 'jquery',
  //      'window.jQuery': 'jquery',
  //   }));
  //  return config;},
  
    swcMinify: true,
    env: {
      BASE_API_URL: 'https://demo.vendorguideusa.com/api/',
      BASE_LARAVEL_URL: 'https://demo.vendorguideusa.com/',
      NEXT_PUBLIC_API_URL: 'https://demo.vendorguideusa.com/api/',
      GOOGLE_MAP_API_KEY: 'AIzaSyB-52FBisv-qbBxEhHmSra_EiijJV2WeEE',
      NEXT_PUBLIC_STRIPE_PUBLIC_KEY:'pk_test_51HD2bgHFZYAuYDw1kf3xS6rQbV0cnei6ggqB6OTjfuWWYODN2kfX8dEuJBtentqIMfG4y6N9LPXFuLxYjZO1ETCe00MSuqop00',
      SITE_NAME: 'Vendor Guide',
      SITE_ID: 'Vendor Guide'
  },
    async redirects() {
        return [
          {
            source: '/manager',
            destination: '/login',
            permanent: true,
          },
          {
            source: '/vendor',
            destination: '/login',
            permanent: true,
          },
          {
            source: '/company',
            destination: '/login',
            permanent: true,
          },
        ]
    },
    eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'https://demo.vendorguideusa.com/:path*',
        },
      ];
    },
    async headers() {
      return [
        {
          // matching all API routes
          // https://vercel.com/guides/how-to-enable-cors
          source: "/api/:path*",
          headers: [
            { key: "Access-Control-Allow-Credentials", value: "true" },
            { key: "Access-Control-Allow-Origin", value: "*" },
            {
              key: "Access-Control-Allow-Methods",
              value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
            },
            {
              key: "Access-Control-Allow-Headers",
              value:
                "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
            },
          ],
        },
      ];
    },




    
}

module.exports = nextConfig
