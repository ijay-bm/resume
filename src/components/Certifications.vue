<template>
  <div
    v-if="certifications.filter(({ hidden }) => !hidden)?.length"
    class="section section--certifications"
  >
    <div class="section__header">
      <span class="section__header-icon">
        <ITokenScroll />
      </span>
      <h2 class="section__header-title">Certifications</h2>
    </div>

    <ul class="section__body">
      <li
        v-for="(certification, index) in certifications.filter(({ hidden }) => !hidden)"
        :key="index"
        class="enumeration section__item relative"
        :class="{
          'pl-0': simplified
        }"
      >
        <button
          class="dark-button absolute -left-6 top-[-2px] size-5 rounded-full p-1 opacity-5 hover:opacity-100 print:hidden"
          @click="certification.hidden = true"
        >
          <IMdiRemoveBold />
        </button>

        <p class="gap-1 text-xs">
          <span class="mr-1">
            {{ certification.title }}
          </span>
          <span class="text-neutral-600 dark:text-neutral-400">
            {{ `(${certification.issuer}, ${certification.monthYear})` }}
          </span>
        </p>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  certifications: {
    type: Array
  },
  simplified: {
    type: Boolean
  }
});
</script>
