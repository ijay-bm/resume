import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/resume/",
  plugins: [vue()]
  // css: {
  //   // postcss: {
  //   //   plugins: [autoprefixer]
  //   // },
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `
  // 				@import "./src/assets/sass/abstracts/_variables.scss";
  // 				@import "./src/assets/sass/abstracts/_mixins.scss";
  // 			`
  //     }
  //   }
  // }
});
