/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    images: {
        unoptimized: true 
    },
    reactStrictMode: false,
    swcMinify: true,
    env: {
        BASE_API_URL: 'http://vendor-guide.codelive.info/api/',
        NEXT_PUBLIC_API_URL: 'http://vendor-guide.codelive.info/api/',
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
