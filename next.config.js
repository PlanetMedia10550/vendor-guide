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
        NEXT_PUBLIC_API_URL: 'http://vendor-guide.codelive.info/api/',
        GOOGLE_MAP_API_KEY: 'AIzaSyB-52FBisv-qbBxEhHmSra_EiijJV2WeEE',
    },
    async redirects() {
        return [
          {
            source: '/manager',
            destination: '/manager/login',
            permanent: true,
          },
          {
            source: '/vendor',
            destination: '/vendor/login',
            permanent: true,
          },
          {
            source: '/company',
            destination: '/company/login',
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
