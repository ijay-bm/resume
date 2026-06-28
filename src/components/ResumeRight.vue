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
                  <li class="text-xs">University of Baguio, PH (Jun 2013 — May 2020)</li>
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
                <ul v-if="hasBranchChildren(skill)" class="skills__item-sub-skills">
                  <li v-for="(child, childIndex) in skill.children" :key="childIndex">
                    <span class="block text-xs">{{ child.name }}</span>
                    <span
                      class="block text-[0.65rem] text-neutral-600 dark:text-neutral-400"
                      v-if="child.children?.length"
                    >
                      {{ flattenChildren(child.children) }}
                    </span>
                    <SkillBar :rating="child.rating * 10" />
                  </li>
                </ul>

                <span
                  v-else-if="skill.children?.length"
                  class="block text-[0.65rem] text-neutral-600 dark:text-neutral-400"
                >
                  {{ flattenChildren(skill.children) }}
                </span>
              </div>

              <SkillBar v-if="!hasBranchChildren(skill)" :rating="skill.rating * 10" />
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
import { type Certification, DocumentStyle, type SkillNode, ToolStyle } from "@/types/resume";
import type { FlattenedSkill } from "@/types/theme";
import { computed } from "vue";

import Certifications from "./Certifications.vue";
import SkillBar from "./SkillBar.vue";

const certifications = defineModel<Certification[]>("certifications", {
  required: true
});

const props = defineProps<{
  skills: SkillNode[];
  toolsStyle: ToolStyle;
  documentStyle: DocumentStyle;
}>();

function hasBranchChildren(skill: SkillNode): boolean {
  return skill.children?.some((child) => child.children?.length) ?? false;
}

function flattenChildren(children: SkillNode[]): string {
  return children
    .map((child) =>
      child.children?.length
        ? `${child.name} - ${child.children.map(({ name }) => name).join(", ")}`
        : child.name
    )
    .join(", ");
}

function flattenSkillTree(nodes: SkillNode[]): FlattenedSkill[] {
  return nodes.flatMap(({ name, shortName, rating, children }) => [
    { name: shortName || name, rating },
    ...(children ? flattenSkillTree(children) : [])
  ]);
}

const flattenedSkills = computed<FlattenedSkill[]>(() => flattenSkillTree(props.skills));
</script>
