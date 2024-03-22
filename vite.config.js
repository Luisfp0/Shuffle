import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react";
import svgrPlugin from "vite-plugin-svgr";
import tailwindcss from "tailwindcss";

export default defineConfig({
  base: "/Shuffle",
  build: {
    outDir: "build",
  },
  plugins: [
    reactRefresh(),
    tailwindcss(),
    svgrPlugin({
      svgrOptions: {
        icon: true,
      },
    }),
  ],
});
