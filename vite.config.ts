import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: Number(process.env.PORT) || 5005,
    host: "0.0.0.0",
    strictPort: true,
  },
  build: {
    outDir: "dist",
  },
});
