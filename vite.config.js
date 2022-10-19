import { defineConfig } from "vite";

import vue from "@vitejs/plugin-vue";

export default defineConfig({
  base: "/vue-template/",
  plugins: [vue()],
  build: {
    assetsDir: "/assets",
  },
});
