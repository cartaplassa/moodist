import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import astroPWAConfig from "./astroPWA.config.mjs"

export default defineConfig({
  site: "https://cartaplassa.github.io",
  base: "/moodist",
  trailingSlash: "ignore",
  outDir: "dist",
  build: {
    format: "directory",
  },
  integrations: [
    react(),
    astroPWAConfig
  ]
});
