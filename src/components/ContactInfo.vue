<template>
  <div class="section section--contact">
    <div class="section__header">
      <span class="section__header-icon">
        <IFluentContactCard32Regular />
      </span>
      <h2 class="section__header-title">Deets</h2>
    </div>

    <h1 v-if="documentStyle === DocumentStyle.TypeC" class="resume__header-name">
      Ijay B. Mangili
    </h1>

    <div class="section__body">
      <ul class="contact-info">
        <li class="contact-info__item section__item">
          <IMiEmail />
          <span>ijaybmangili@gmail.com</span>
        </li>
        <li class="contact-info__item section__item">
          <ISolarLinkBroken />
          <span>
            <a href="https://ijay-bm.github.io/portfolio" target="_blank" title="Portfolio">
              ijay-bm.github.io/portfolio
            </a>
          </span>
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
