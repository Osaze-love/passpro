/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3-alpha-sig.figma.com',
        pathname: '/img/**', // Matches paths under /img
      },
      {
        protocol: 'https',
        hostname: 'sub.passpro.africa',
        pathname: '/**', // Matches all paths
      },
    ],
  },
};
export default nextConfig;
