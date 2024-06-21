import AstroPWA from '@vite-pwa/astro'
import manifest from './manifest.mjs';

const workbox = {
  globDirectory: "dist/",
  globPatterns: ["**/*"],
  swDest: "dist/sw.js",
  maximumFileSizeToCacheInBytes: 5242880,
  navigateFallback: null,
};

const astroPWAConfig = AstroPWA({
  registerType: "autoUpdate",
  strategies: "networkFirst",
  outDir: "dist",
  includeAssets: ["**/*"],
  devOptions: {
    enabled: true,
    type: "module",
  },
  manifest,
  workbox,
  experimental: {
    directoryAndTrailingSlashHandler: true,
  }
});

export default astroPWAConfig;