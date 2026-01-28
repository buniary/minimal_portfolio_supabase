/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  /* https://nextjs.org/docs/messages/next-image-unconfigured-host#any-search-params */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dummyimage.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cxpgaoixeeqjvsrvxwrb.supabase.co',
        port: '',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
