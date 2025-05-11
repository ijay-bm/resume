import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { createApp } from "vue";
import App from "./App.vue";
import "./assets/sass/main.scss";
import { useThemeStore } from "./stores/theme.ts";
import { Theme, ThemeStage } from "./types/theme.ts";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
const app = createApp(App);
app.use(pinia);

const themeStore = useThemeStore();
if (!themeStore.theme && themeStore.currentStage === ThemeStage.Auto) {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  themeStore.theme = prefersDark ? Theme.Dark : Theme.Light;
}
document.documentElement.classList.add(themeStore.theme);

app.mount("#app");
