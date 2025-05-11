import type { ThemeStage, ThemeState } from "@/types/theme";
import { defineStore } from "pinia";


export const useThemeStore = defineStore("themeStore", {
  persist: true,

  state: (): ThemeState => {
    return {
      theme: "",
      stages: ["light", "auto", "dark"],
      stageIndex: 1
    };
  },

  getters: {
    currentStage: (state): ThemeStage => state.stages[state.stageIndex]
  }
});