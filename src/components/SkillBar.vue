<template>
  <div class="relative">
    <div
      class="block h-[1px] scale-y-[1.1] bg-gradient-to-r from-transparent to-neutral-300
        dark:to-neutral-800 print:bg-neutral-300 print:bg-none print:dark:bg-neutral-800"
    ></div>
    <div
      class="to-bronze-500 dark:to-bronze-700 print:bg-bronze-500 print:dark:bg-bronze-700 absolute
        top-0 left-0 block h-[1px] scale-y-[1.1] bg-gradient-to-r from-transparent"
      :style="`width: ${rating}%;`"
    ></div>
    <div
      class="border-bronze-500 dark:border-bronze-700 bg-bronze-600/20 absolute top-[-3px] top-0
        block h-[7px] w-[7px] rounded-full border border-[2px]"
      :style="`left: ${rating}%;`"
    ></div>
  </div>
</template>

<script setup lang="ts">
const { rating } = defineProps<{
  rating: Number;
}>();
</script>

<style lang="scss" scoped></style>
