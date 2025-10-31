import vue from "@vitejs/plugin-vue";
import { URL, fileURLToPath } from "node:url";
import IconsResolve from "unplugin-icons/resolver";
import Icons from "unplugin-icons/vite";
import Components from "unplugin-vue-components/vite";
import { defineConfig } from "vite";
import vueDevTools from "vite-plugin-vue-devtools";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/resume/",
  plugins: [
    vue(),
    vueDevTools(),
    Icons(),
    Components({
      resolvers: [IconsResolve()]
    }),
    tailwindcss()
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  }
});
