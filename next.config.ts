import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Static HTML export -> ./out, for hosting on a plain file server
  // (e.g. cswnindy.cs.purdue.edu / /p/p24/sites/cswnindy).
  output: "export",
  // Emit /about/index.html instead of /about.html so Apache serves
  // clean URLs without extra config.
  trailingSlash: true,
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    // The build-time image optimizer needs a server; disable it for export.
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    // Shared login hosts (e.g. data.cs.purdue.edu) cap per-user processes;
    // a single build worker avoids spawn EAGAIN. Tiny site, so no real cost.
    cpus: 1,
    workerThreads: false,
  },
};

export default nextConfig;
