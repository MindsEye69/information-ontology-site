/** @type {import('next').NextConfig} */
const nextConfig = {
  // Serve the frozen site under https://www.informationontology.org/archive
  basePath: "/archive",
  assetPrefix: "/archive/",
  // Produce a static export suitable for copying into /site/public/archive
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
