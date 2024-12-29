import path from "path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "@svgr/rollup";

export default defineConfig({
  plugins: [
    react(),
    svgr({
      exportType: "named",
      ref: true,
      svgo: false,
      dimensions: false,
      typescript: true,
    }),
    
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
