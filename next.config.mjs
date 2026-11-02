/** @type {import('next').NextConfig} */
const nextConfig = {
  // "standalone" bundles a minimal Node server (.next/standalone/server.js),
  // which runs on Hostinger's Node.js hosting or any VPS. Vercel ignores it.
  output: "standalone",
  poweredByHeader: false,
  async redirects() {
    // Old Base44 routes kept working.
    return [
      { source: "/love-your-style", destination: "/personal-styling", permanent: true },
      { source: "/love-your-closet", destination: "/closet-organization", permanent: true },
    ];
  },
};

export default nextConfig;
