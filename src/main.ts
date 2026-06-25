import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { ViteSSG } from "vite-ssg/single-page";
import App from "./App.vue";
import "./assets/css/main.css";
import { useThemeStore } from "./stores/theme.ts";
import { Theme, ThemeStage } from "./types/theme.ts";

// vite-ssg renders this app to static HTML in Node at build time, then
// hydrates it in the browser. The setup fn runs on both the server and the
// client, so anything that touches the DOM is gated behind `isClient`.
export const createApp = ViteSSG(App, ({ app, isClient }) => {
  const pinia = createPinia();
  // Persistence reads localStorage, which only exists in the browser.
  if (isClient) {
    pinia.use(piniaPluginPersistedstate);
  }
  app.use(pinia);

  if (isClient) {
    const themeStore = useThemeStore(pinia);
    if (!themeStore.theme && themeStore.currentStage === ThemeStage.Auto) {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      themeStore.theme = prefersDark ? Theme.Dark : Theme.Light;
    }
    if (themeStore.theme) {
      document.documentElement.classList.add(themeStore.theme);
    }
  }
});
