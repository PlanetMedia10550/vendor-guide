/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    images: {
        unoptimized: true 
    },
    // dynamicParams: false,
    reactStrictMode: false,
    swcMinify: true,
    env: {
        BASE_API_URL: 'http://vendor-guide.codelive.info/api/',
        BASE_LARAVEL_URL: 'http://vendor-guide.codelive.info/',
        NEXT_PUBLIC_API_URL: 'http://vendor-guide.codelive.info/api/',
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
    
}

module.exports = nextConfig
