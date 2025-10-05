import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "avatar.vercel.sh",
      },
      {
        hostname: "img.clerk.com",
      },
      {
        hostname: "images.clerk.dev",
      },
    ],
  },
};

export default nextConfig;
