import { ThemeStage, type ThemeState } from "@/types/theme";
import { defineStore } from "pinia";

export const useThemeStore = defineStore("themeStore", {
  persist: true,

  state: (): ThemeState => {
    return {
      theme: null,
      stages: [ThemeStage.Light, ThemeStage.Auto, ThemeStage.Dark],
      stageIndex: 1
    };
  },

  getters: {
    currentStage: (state): ThemeStage => state.stages[state.stageIndex]
  }
});
