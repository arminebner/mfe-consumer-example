import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  plugins: [
    vue(),
    federation({
      name: "app",
      remotes: {
        remoteApp: "https://storage.googleapis.com/host-files-bucket/assets/remoteEntry.js",
      },
      shared: ["vue"],
    }),
  ],
});
