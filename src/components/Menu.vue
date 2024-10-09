<template>
  <div
    class="fixed left-4 top-4 z-[2] opacity-10 transition-all duration-300 ease-in-out hover:opacity-80 xl:opacity-100 xl:hover:opacity-100 print:hidden"
  >
    <div
      class="relative rounded p-4 text-neutral-200"
      :class="[{ 'bg-color2-600 dark:bg-color2-900': !transparentBg }]"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  transparentBg: {
    type: Boolean
  }
});
</script>

<style lang="scss" scoped></style>
