import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = withSentryConfig(
  {
    output: "export",
    images: {
      unoptimized: true, // Mencegah Next.js mengoptimalkan gambar (dibutuhkan untuk static export)
    },
    basePath: "/portfolio", // Sesuaikan dengan nama repo GitHub Pages
    assetPrefix: "/portfolio/", // Tambahkan '/' di akhir agar benar
  },
  {
    silent: true,
    org: "javascript-mastery",
    project: "javascript-nextjs",
  },
  {
    widenClientFileUpload: true,
    transpileClientSDK: true,
    hideSourceMaps: true,
    disableLogger: true,
    automaticVercelMonitors: true,
    disableServerWebpackPlugin: true,
    disableClientWebpackPlugin: true,
  }
);

export default nextConfig;
