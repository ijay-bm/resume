import { storeToRefs } from "pinia";
import { useThemeStore } from "../stores/theme";

export function useTheme() {
  const themeStore = useThemeStore();

  const { theme, stages, stageIndex, currentStage } = storeToRefs(themeStore);

  return { theme, stages, stageIndex, currentStage };
}
