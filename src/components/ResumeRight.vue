<template>
  <div v-if="documentStyle !== DocumentStyle.TypeC" class="resume__right">
    <div class="sections">
      <div v-if="documentStyle === DocumentStyle.TypeA" class="section">
        <div class="section__header">
          <span class="section__header-icon">
            <IGameIconsGraduateCap />
          </span>
          <h2 class="section__header-title">Education</h2>
        </div>

        <div class="section__body">
          <div class="skills">
            <div class="skills__item section__item">
              <div class="section__item-disc"></div>
              <div class="section__item-line"></div>
              <div class="skills__name">BS Computer Engineering</div>
              <div class="skills__item-details">
                <ul class="skills__item-sub-skills">
                  <li class="text-xs">Baguio PH (Jun 2013 — May 2020)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section section--skills">
        <div class="section__header">
          <span class="section__header-icon">
            <IMynauiCodeHexagonSolid />
          </span>
          <h2 class="section__header-title">Skills</h2>
        </div>

        <div class="section__body">
          <div class="skills">
            <div
              v-for="(skill, skillIndex) in skills"
              :key="skillIndex"
              class="skills__item section__item"
            >
              <div class="section__item-disc"></div>
              <div class="section__item-line"></div>
              <div class="skills__name">
                {{ skill.name }}
              </div>
              <div class="skills__item-details">
                <ul v-if="skill.subSkills?.length" class="skills__item-sub-skills">
                  <li v-for="(subSkill, subSkillIndex) in skill.subSkills" :key="subSkillIndex">
                    <span class="block text-xs">{{ subSkill.name }}</span>
                    <span
                      class="block text-[0.65rem] text-neutral-600 dark:text-neutral-400"
                      v-if="subSkill.experiences?.length"
                    >
                      {{ subSkill.experiences?.map(({ name }) => name).join(", ") }}
                    </span>
                    <SkillBar :rating="subSkill.rating * 10" />
                  </li>
                </ul>

                <span
                  v-if="skill.experiences?.length"
                  class="block text-[0.65rem] text-neutral-600 dark:text-neutral-400"
                >
                  {{ skill.experiences?.map(({ name }) => name).join(", ") }}
                </span>
              </div>

              <SkillBar v-if="!skill.subSkills?.length" :rating="skill.rating * 10" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="legend">
      <ul class="legend__body">
        <li class="legend__item">
          <span class="legend__metric">1</span>
          <span lass="legend__description">I can pick it up again quickly.</span>
        </li>
        <li class="legend__item">
          <span class="legend__metric">5</span>
          <span lass="legend__description">I have been using it a lot recently</span>
        </li>
        <li class="legend__item">
          <span class="legend__metric">10</span>
          <span lass="legend__description">I have reached enlightenment.</span>
        </li>
      </ul>
    </div>

    <div class="sections">
      <div v-if="toolsStyle === ToolStyle.ToolsA" class="section section--tools">
        <div class="section__header">
          <span class="section__header-icon">
            <IFluentWindowDevTools24Regular />
          </span>
          <h2 class="section__header-title">Competencies</h2>
        </div>

        <div class="section__body">
          <ul class="skills">
            <li
              v-for="({ name, rating }, index) in flattenedSkills"
              :key="index"
              class="skills__item section__item"
            >
              <div class="section__item-disc"></div>
              <div class="section__item-line"></div>
              <span class="skills__name">{{ name }}</span>
              <SkillBar v-if="rating" :rating="rating * 10" />
            </li>
          </ul>
        </div>
      </div>

      <Certifications :certifications="certifications" :simplified="true" />
    </div>

    <div v-if="toolsStyle === 'tools-b'" class="tools">
      <strong>Competencies:</strong>
      <span>
        {{ flattenedSkills.map(({ name }) => name).join(", ") }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type Certification, DocumentStyle, type Skill, ToolStyle } from "@/types/resume";
import type { FlattenedSkill } from "@/types/theme";
import { computed } from "vue";

import Certifications from "./Certifications.vue";
import SkillBar from "./SkillBar.vue";

const certifications = defineModel<Certification[]>("certifications", {
  required: true
});

const props = defineProps<{
  skills: Skill[];
  toolsStyle: ToolStyle;
  documentStyle: DocumentStyle;
}>();

const flattenedSkills = computed<FlattenedSkill[]>(() => {
  return [
    ...props.skills.flatMap(({ name, shortName, rating, subSkills }) => {
      if (subSkills?.length) {
        return [
          {
            name: shortName || name,
            rating
          },
          ...(subSkills?.flatMap(({ name, shortName, rating, experiences }) => {
            if (experiences.length) {
              return [
                {
                  name: shortName || name,
                  rating
                },
                ...(experiences?.flatMap(({ name, shortName, rating }) => ({
                  name: shortName || name,
                  rating
                })) || [])
              ];
            }
            return {
              name: shortName || name,
              rating
            };
          }) || [])
        ];
      }
      return {
        name: shortName || name,
        rating
      };
    }),

    ...props.skills.flatMap(({ experiences }) => {
      return (experiences || []).map(({ name, shortName, rating }) => ({
        name: shortName || name,
        rating
      }));
    })
  ];
});
</script>
