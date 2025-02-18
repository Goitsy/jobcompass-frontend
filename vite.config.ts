import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true, // Enable source maps for easier debugging

    chunkSizeWarningLimit: 1000,
  },
});
