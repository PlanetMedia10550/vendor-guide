/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true 
    },
    reactStrictMode: true,
    swcMinify: true,
    env: {
        BASE_API_URL: 'http://127.0.0.1:8000/api/',
    },
    
}

module.exports = nextConfig
