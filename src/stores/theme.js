import { defineStore } from "pinia";

export const useThemeStore = defineStore("themeStore", {
  persist: true,

  state: () => {
    return {
      theme: "",
      stages: ["light", "auto", "dark"],
      stageIndex: 1
    };
  },

  getters: {
    currentStage: (state) => state.stages[state.stageIndex]
  }
});
