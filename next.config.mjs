import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = withSentryConfig(
  {
    output: "export",
    images: {
      unoptimized: true, // Mencegah Next.js mengoptimalkan gambar (dibutuhkan untuk static export)
    },
    basePath: "/portfolio",
    assetPrefix: "/portfolio",
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
  }
);

export default nextConfig;
