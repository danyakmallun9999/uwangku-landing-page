import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root so Next stops warning about the parent-folder lockfile
  // and doesn't accidentally crawl files outside this project during dev compile.
  turbopack: {
    root: __dirname,
  },
  experimental: {
    // These 3D libraries are huge barrel packages (hundreds/thousands of
    // modules). Without this, the dev compiler tries to process the entire
    // package on the first request, which spikes memory and can hang a
    // low-RAM machine before compilation finishes. This makes the compiler
    // load only the modules actually used.
    optimizePackageImports: [
      "three",
      "@react-three/fiber",
      "@react-three/drei",
      "framer-motion",
      "lucide-react",
    ],
  },
};

export default nextConfig;
