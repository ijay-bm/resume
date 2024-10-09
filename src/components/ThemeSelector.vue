<template>
  <button
    class="dark-button absolute -left-10 -top-1 size-10 rounded-full bg-transparent p-2 print:hidden"
    @click="setTheme"
  >
    <span v-if="currentStage === 'light'" class="flex items-center justify-center text-gold-500">
      <ILineMdSunnyLoop />
    </span>

    <span
      v-else-if="currentStage === 'auto'"
      class="flex items-center justify-center text-gold-500"
    >
      <ILineMdSunnyLoop />
      <ILineMdMoonTwotoneLoop />
    </span>

    <span
      v-else-if="currentStage === 'dark'"
      class="flex items-center justify-center text-gold-500"
    >
      <ILineMdMoonTwotoneLoop />
    </span>
  </button>
</template>

<script setup>
import { useTheme } from "../composables/useTheme";

const { theme, stages, stageIndex, currentStage } = useTheme();

function setTheme() {
  if (stageIndex.value === 2) {
    stageIndex.value = 0;
  } else {
    stageIndex.value += 1;
  }
  const newStage = stages.value[stageIndex.value];

  document.documentElement.classList.remove(theme.value);
  if (newStage === "auto") {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    theme.value = prefersDark ? "dark" : "light";
  } else {
    theme.value = newStage;
  }
  document.documentElement.classList.add(theme.value);
}
</script>
