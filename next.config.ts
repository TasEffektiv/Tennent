import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root: a stray package-lock.json in the parent
  // Downloads folder (outside this git repo) otherwise confuses Turbopack's
  // auto-detected root, which breaks internal module resolution (e.g. the
  // next/font/google virtual module) in `next dev`.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
