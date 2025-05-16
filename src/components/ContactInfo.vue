<template>
  <div class="section section--contact">
    <div class="section__header">
      <span class="section__header-icon">
        <IFluentContactCard32Regular />
      </span>
      <h2 class="section__header-title">Deets</h2>
    </div>

    <h1 v-if="documentStyle === DocumentStyle.CurriculumVitaeA" class="resume__header-name">
      Ijay B. Mangili
    </h1>

    <div class="section__body">
      <ul class="contact-info">
        <li class="contact-info__item section__item">
          <IMiEmail />
          <span>ijaybmangili@gmail.com</span>
        </li>
        <li class="contact-info__item section__item">
          <ILineMdPhoneCallLoop />
          <span>+63 948 513 1144</span>
        </li>
        <li class="contact-info__item section__item">
          <IMdiLocation />
          <span>Philippines</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { DocumentStyle } from "@/types/resume";

defineProps<{
  documentStyle: DocumentStyle;
}>();
</script>
