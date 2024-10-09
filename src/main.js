import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { createApp } from "vue";
import App from "./App.vue";
import "./assets/sass/main.scss";
import { useThemeStore } from "./stores/theme";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
const app = createApp(App);
app.use(pinia);

const themeStore = useThemeStore();
if (!themeStore.theme && themeStore.currentStage === "auto") {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  themeStore.theme = prefersDark ? "dark" : "light";
}
document.documentElement.classList.add(themeStore.theme);

app.mount("#app");
