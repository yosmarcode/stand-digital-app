import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
 images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'supabase.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
  env: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    TITLE_PROJECT: process.env.NEXT_PUBLIC_TITLE_PROJECT,
  }
};

export default nextConfig;
