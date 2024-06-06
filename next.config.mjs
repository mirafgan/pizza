/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.papajohns.az',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'imageproxy.wolt.com',
                port: '',
            },
        ],
    },
};

export default nextConfig;
