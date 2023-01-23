import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    hmr: true,
    strictPort: true,
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:8080/api",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  resolve: {
    alias: {
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@helpers": path.resolve(__dirname, "./src/helpers"),
      "@context": path.resolve(__dirname, "./src/context"),
      "@store": path.resolve(__dirname, "./src/store"),
    },
  },
  build: {
    minify: "esbuild",
  },
});
