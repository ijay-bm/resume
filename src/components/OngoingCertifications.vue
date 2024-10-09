<template>
  <div
    v-if="ongoingCertifications.filter(({ hidden }) => !hidden)?.length"
    class="section section--ongoing-certifications"
  >
    <div class="section__header">
      <span class="section__header-icon">
        <IMdiProgressHelper />
      </span>
      <h2 class="section__header-title">
        {{
          simplified ? "Professional Development" : "Professional Development / Ongoing Learning"
        }}
      </h2>
    </div>

    <div class="section__body">
      <ul
        v-for="(ongoingCertification, index) in ongoingCertifications.filter(
          ({ hidden }) => !hidden
        )"
        :key="index"
        class="section__item enumeration"
      >
        <li class="enumeration__row">
          <p class="text-xs">
            <span class="mr-1">
              {{ simplified ? ongoingCertification.shortTitle : ongoingCertification.title }}
            </span>
            <span class="text-neutral-600 dark:text-neutral-400">
              {{ `(${ongoingCertification.platform}, ${ongoingCertification.description})` }}
            </span>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
defineProps({
  ongoingCertifications: {
    type: Array
  },
  simplified: {
    type: Boolean
  }
});
</script>
