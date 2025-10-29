<template>
  <div class="resume">
    <ResumeLeft
      v-model:certifications="certifications"
      :toolsStyle="toolsStyle"
      :documentStyle="documentStyle"
    />

    <ResumeRight
      v-model:certifications="certifications"
      :skills="skills"
      :toolsStyle="toolsStyle"
      :documentStyle="documentStyle"
    />
  </div>
</template>

<script setup lang="ts">
import { type Certification, DocumentStyle, type Skill, ToolStyle } from "@/types/resume";

import ResumeLeft from "./ResumeLeft.vue";
import ResumeRight from "./ResumeRight.vue";

const certifications = defineModel<Certification[]>("certifications", {
  required: true
});

defineProps<{
  skills: Skill[];
  toolsStyle: ToolStyle;
  documentStyle: DocumentStyle;
}>();
</script>
