import type { NextConfig } from "next";

const allowedDomains = [
  "api.escuelajs.co",
  "api.lorem.space",
  "placeimg.com",
  "picsum.photos",
  "i.imgur.com",
  "encrypted-tbn0.gstatic.com",
  "stickeryouwant.com.ua",
  "lh3.googleusercontent.com"
];

const nextConfig: NextConfig = {
  images: {
    domains: allowedDomains,
  },
  env: {
    NEXT_PUBLIC_ALLOWED_DOMAINS: allowedDomains.join(","),
  },
};

export default nextConfig;
