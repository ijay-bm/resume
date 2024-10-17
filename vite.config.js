import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Icons from "unplugin-icons/vite";
import IconsResolve from "unplugin-icons/resolver";
import Components from "unplugin-vue-components/vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/resume/",
  plugins: [
    vue(),
    Icons(),
    Components({
      resolvers: [IconsResolve()]
    })
  ]
});
