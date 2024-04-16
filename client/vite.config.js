import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: resolve(__dirname, "src"),
  build: {
    outDir: "../dist",
  },
  server: {
    port: 3002,
    proxy: {
      '/tchotchke': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      }
    }
  },
});
