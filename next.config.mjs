import { withSentryConfig } from "@sentry/nextjs";
/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withSentryConfig(nextConfig, {
  org: "kamran-baloch",
  project: "health-care",
  silent: !process.env.CI,

  // Upload a larger set of source maps for prettier stack traces (increases build time)
  widenClientFileUpload: true,

  hideSourceMaps: true,

  disableLogger: true,

  automaticVercelMonitors: true,
});
