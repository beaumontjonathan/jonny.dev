import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Unfonts from "unplugin-fonts/vite";
import stylexVitePlugin from "unplugin-stylex/vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    stylexVitePlugin({ dev: mode === "development" }),
    Unfonts({
      google: {
        families: [{ name: "Overpass Mono", styles: "wght@300..700" }],
      },
    }),
  ],
  server: {
    port: 3999,
  },
}));
