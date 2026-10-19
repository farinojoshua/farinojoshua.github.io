import type { NextConfig } from "next";

// Static export so GitHub Pages can serve the `out/` folder as-is.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
