<template>
  <div class="relative">
    <Menu class="absolute left-[unset] right-4 w-min-content">
      <ThemeSelector />
    </Menu>

    <Menu class="max-w-80">
      <div class="space-y-8">
        <div>
          <h4 class="mb-2 font-bold">Document Type</h4>
          <RadioGroupInput
            :items="[
              { label: 'Type A', value: DocumentStyle.TypeA },
              { label: 'Type B', value: DocumentStyle.TypeB },
              { label: 'Type C', value: DocumentStyle.TypeC }
            ]"
            name="resume-style-radio-menu"
            :modelValue="documentStyle"
            @update:modelValue="onResumeStyleUpdateModelValue"
          />
        </div>
      </div>
    </Menu>

    <Resume
      v-model:certifications="certifications"
      :skills="skills"
      :toolsStyle="toolsStyle"
      :documentStyle="documentStyle"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import Menu from "./components/Menu.vue";
import RadioGroupInput from "./components/RadioGroupInput.vue";
import Resume from "./components/Resume.vue";
import ThemeSelector from "./components/ThemeSelector.vue";
import { CERTIFICATIONS } from "./data/certifications";
import { SKILLS } from "./data/skills";
import type { Certification, Skill } from "./types/resume";
import { DocumentStyle, ToolStyle } from "./types/resume";

const documentStyle = ref<DocumentStyle>(DocumentStyle.TypeC);
function onResumeStyleUpdateModelValue(newModelValue: DocumentStyle) {
  document.body.classList.remove(documentStyle.value);
  document.body.classList.add(newModelValue);
  documentStyle.value = newModelValue;
}
onResumeStyleUpdateModelValue(DocumentStyle.TypeC);

const certifications = ref<Certification[]>(CERTIFICATIONS);

const skills = ref<Skill[]>(SKILLS);

const toolsStyle = ref<ToolStyle>(ToolStyle.Hidden);
</script>
