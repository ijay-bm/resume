<template>
  <button class="dark-button size-10 rounded-full p-2 print:hidden" @click="setTheme">
    <span
      v-if="currentStage === ThemeStage.Light"
      class="flex items-center justify-center text-bronze-500"
    >
      <ILineMdSunnyLoop />
    </span>

    <span
      v-else-if="currentStage === ThemeStage.Auto"
      class="theme-auto relative block h-full w-full text-bronze-500"
    >
      <ILineMdSunnyLoop class="theme-auto__sun" />
      <ILineMdMoonTwotoneLoop class="theme-auto__moon" />
    </span>

    <span
      v-else-if="currentStage === ThemeStage.Dark"
      class="flex items-center justify-center text-bronze-500"
    >
      <ILineMdMoonTwotoneLoop />
    </span>
  </button>
</template>

<script setup lang="ts">
import { useTheme } from "../composables/useTheme.ts";
import { Theme, ThemeStage } from "../types/theme";

const { theme, stages, stageIndex, currentStage } = useTheme();

function setTheme() {
  if (stageIndex.value === 2) {
    stageIndex.value = 0;
  } else {
    stageIndex.value += 1;
  }
  const newStage = stages.value[stageIndex.value];

  if (theme.value) {
    document.documentElement.classList.remove(theme.value);
  }
  if (newStage === ThemeStage.Auto) {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    theme.value = prefersDark ? Theme.Dark : Theme.Light;
  } else {
    theme.value = newStage === ThemeStage.Light ? Theme.Light : Theme.Dark;
  }
  document.documentElement.classList.add(theme.value);
}
</script>

<style scoped>
.theme-auto__sun,
.theme-auto__moon {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.theme-auto__sun {
  clip-path: polygon(0 0, calc(100% - 1px) 0, 0 calc(100% - 1px));
}

.theme-auto__moon {
  clip-path: polygon(100% 1px, 100% 100%, 1px 100%);
}
</style>
