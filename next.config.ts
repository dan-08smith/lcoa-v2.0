import { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "standalone", // Enables standalone mode for optimized builds
  images: {
    domains: ["example.com"], // Add any external image domains if needed
  },
};

export default nextConfig;
