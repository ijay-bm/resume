<template>
  <div class="resume">
    <!-- start of resume__left -->
    <div class="resume__left">
      <h1 v-if="documentStyle === DocumentStyle.ResumeA" class="resume__header-name">
        Ijay B. Mangili
      </h1>

      <div class="sections">
        <ContactInfo :document-style="documentStyle" />

        <div class="section section--about">
          <div class="section__header">
            <span class="section__header-icon">
              <IHeroiconsUserCircle16Solid />
            </span>
            <h1 v-if="documentStyle === DocumentStyle.ResumeB" class="section__header-title">
              Ijay B. Mangili
            </h1>
            <h2 v-else class="section__header-title">About</h2>
          </div>

          <div class="section__body section__item">
            <p class="about-me-content">
              Full-Stack Web Developer with 4+ years of experience spanning front-end design,
              API development, database design, DevOps, and AWS cloud management. Primarily work
              with Laravel and Vue.
            </p>
          </div>
        </div>

        <div class="section section--work">
          <div class="section__header">
            <span class="section__header-icon">
              <IBxsBriefcase />
            </span>
            <h2 class="section__header-title">Work Experience</h2>
          </div>

          <div class="section__body">
            <div class="enumeration section__item">
              <div class="enumeration__row">
                <span class="enumeration__subheading">Web Developer</span>
                <span class="enumeration__right-subtitle">Remote (Richmond, Australia)</span>
              </div>

              <div class="enumeration__row">
                <span class="enumeration__heading">Appetiser Apps</span>
                <span class="enumeration__right-subtitle">Nov 2024 — Present</span>
              </div>

              <ul class="enumeration__description">
                <li class="enumeration__description-item">
                  Designed and implemented backend APIs and database schemas with Laravel for a
                  personal safety application that handles complex check-in scheduling and alert
                  systems consumed by an iOS app
                </li>
                <li class="enumeration__description-item">
                  Vue WebApp Development and API Integration for an excursion planning platform
                </li>
                <li class="enumeration__description-item">
                  Collaborated with FE/BE developers, iOS developers, designers and project managers
                  to ensure seamless integration between frontend, backend and mobile platforms, and
                  seamless development
                </li>
                <li class="enumeration__description-item">
                  Participated in full product development lifecycle including planning, design
                  reviews, implementation, and deployment
                </li>
              </ul>
            </div>

            <div class="enumeration section__item section__item--extended">
              <div class="enumeration__row">
                <span class="enumeration__subheading">Intermediate Web Developer</span>
                <span class="enumeration__right-subtitle">Remote (Pasig City, Metro Manila)</span>
              </div>

              <div class="enumeration__row">
                <span class="enumeration__heading">TheChalkboard Inc.</span>
                <span class="enumeration__right-subtitle">Nov 2023 — Present</span>
              </div>

              <ul class="enumeration__description">
                <li class="enumeration__description-item">
                  Led DevOps and AWS Cloud Management initiatives to enhance existing AWS
                  infrastructure and implement best practices.
                </li>
                <li class="enumeration__description-item">
                  Developed and maintained a QR code-based Attendance Monitoring System (AMS) for
                  real-time token-based attendance tracking.
                </li>
                <li class="enumeration__description-item">
                  Upgraded and refactored the Learning Management System (LMS) platform to reduce
                  technical debt and enhance functionality.
                </li>
              </ul>
            </div>

            <div class="enumeration section__item section__item--extension">
              <div class="enumeration__row">
                <span class="enumeration__subheading">
                  Associate Web Developer
                  <span class="enumeration__subheading-sub">| Jun 2021 — Sep 2023</span>
                </span>
              </div>

              <ul class="enumeration__description">
                <li class="enumeration__description-item">
                  Full-stack development with Vue and Laravel for a comprehensive LMS and Management
                  Portal.
                </li>
                <li class="enumeration__description-item">
                  Integrated card payments and localized pricing using geolocation for better user
                  experience.
                </li>
                <li class="enumeration__description-item">
                  Revamped user authentication systems, improving security and user onboarding.
                </li>
                <li class="enumeration__description-item">
                  Developed, deployed and maintained a Management Portal for the LMS.
                </li>
                <li class="enumeration__description-item">
                  Optimized database performance and wrote custom scripts in Laravel.
                </li>
                <li class="enumeration__description-item">
                  Automated deployments with Bitbucket pipelines, enhancing team productivity.
                </li>
                <li class="enumeration__description-item">
                  Managed cloud infrastructure for deployments of Vue, Laravel, and WordPress
                  stacks.
                </li>
                <!-- <li class="enumeration__description-item">System administration tasks</li> -->
              </ul>
            </div>

            <div class="enumeration section__item">
              <div class="enumeration__row">
                <span class="enumeration__subheading">On-The-Job Trainee</span>
                <span class="enumeration__right-subtitle">Baguio, Philippines</span>
              </div>

              <div class="enumeration__row">
                <span class="enumeration__heading">PLDT</span>
                <span class="enumeration__right-subtitle">Jan 2020 — Mar 2020</span>
              </div>

              <ul class="enumeration__description">
                <li class="enumeration__description-item">
                  My experience here can be summed up into
                  <i>customer experience</i>
                  and
                  <i>service technician.</i>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="section">
          <div class="section__header">
            <span class="section__header-icon">
              <IGameIconsGraduateCap />
            </span>
            <h2 class="section__header-title">Education</h2>
          </div>

          <div class="section__body">
            <div class="enumeration section__item">
              <div class="enumeration__row">
                <span class="enumeration__subheading">BS Computer Engineering</span>
                <span class="enumeration__right-subtitle">Baguio, Philippines</span>
              </div>

              <div class="enumeration__row">
                <span class="enumeration__heading">University of Baguio</span>
                <span class="enumeration__right-subtitle">May 2020 (2013 — 2020)</span>
              </div>
            </div>
          </div>
        </div>

        <!-- v-if="documentStyle === DocumentStyle.ResumeB" -->
        <Certifications :certifications="certifications" :simplified="true" />
        <!-- documentStyle === DocumentStyle.ResumeB &&  -->
        <OngoingCertifications
          v-if="documentStyle === DocumentStyle.ResumeB && !hideProfessionalDevelopment"
          :ongoingCertifications="ongoingCertifications"
        />

        <div
          v-if="documentStyle === DocumentStyle.CurriculumVitaeA"
          class="section section--cv-ski"
        >
          <div class="section__header">
            <span class="section__header-icon">
              <ITokenScroll />
            </span>
            <h2 class="section__header-title">Certifications, Skills & Interests</h2>
          </div>

          <div class="section__body">
            <ul class="enumeration">
              <li class="enumeration__item">
                <p class="text-sm">
                  <span class="text-sm font-medium">Skills:</span>
                  <span class="text-neutral-700 dark:text-neutral-300">
                    Full-Stack Web Development (Vue, Laravel), Principles (OOP, SOLID, DRY), API
                    Development (REST, Resource), Integrations (APIs, SDKs, Payment Processors,
                    Video Infrastructures), Cloud Services (AWS), Containerization (Docker), Version
                    Control (Git, Bitbucket, Gitlab), CICD pipelines, Deployments
                  </span>
                </p>
              </li>

              <li class="enumeration__item">
                <p class="text-sm">
                  <span class="text-sm font-medium">Certifications:</span>
                  <span class="text-neutral-700 dark:text-neutral-300">
                    {{
                      certifications
                        .filter(({ hidden }) => !hidden)
                        .map(({ title, issuer, monthYear }) => `${title} (${issuer}, ${monthYear})`)
                        .join(", ")
                    }}
                  </span>
                </p>
              </li>

              <li class="enumeration__item">
                <p class="text-sm">
                  <span class="text-sm font-medium">Interests:</span>
                  <span class="text-neutral-700 dark:text-neutral-300">
                    Guitar, Piano, Violin, Technology, Computers, Exercise, Media, History, Books,
                    Gaming
                  </span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- end of sections -->

      <div v-if="documentStyle !== DocumentStyle.CurriculumVitaeA" class="interests">
        <strong>Interests:</strong>
        Guitar, Piano, Violin, Technology, Computers, Exercise, Media, History, Books, Gaming
      </div>

      <div
        v-if="documentStyle !== DocumentStyle.CurriculumVitaeA"
        class="invisible absolute bottom-0 w-full py-2 text-xs text-neutral-700 print:hidden"
      >
        <div class="mx-auto w-max text-center">
          For the best viewing experience, visit the web version of this document:
          <br />
          <a href="https://ijay-bm.github.io/resume/" target="_blank" class="text-gold-500">
            https://ijay-bm.github.io/resume/
          </a>
        </div>
      </div>
    </div>
    <!-- end of resume__left -->

    <div
      v-if="documentStyle === DocumentStyle.CurriculumVitaeA"
      class="invisible absolute bottom-0 w-full py-2 text-xs text-neutral-700 print:hidden"
    >
      <div class="mx-auto w-max text-center">
        For the best viewing experience, visit the web version of this document:
        <br />
        <a href="https://ijay-bm.github.io/resume/" target="_blank" class="text-gold-500">
          https://ijay-bm.github.io/resume/
        </a>
      </div>
    </div>

    <!-- start of resume__right -->
    <div v-if="documentStyle !== DocumentStyle.CurriculumVitaeA" class="resume__right">
      <h1 class="resume__header-name">
        {{ "Ijay B. Mangili" }}
      </h1>

      <!-- start of sections -->
      <div class="sections">
        <ContactInfo
          v-if="documentStyle === DocumentStyle.ResumeB"
          :documentStyle="documentStyle"
        />

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
                <div class="skills__name">
                  {{ skill.name }}
                </div>
                <div class="skills__item-details">
                  <ul
                    v-if="skill.subSkills?.length && !hideSkillDetails"
                    class="skills__item-sub-skills"
                  >
                    <li v-for="(subSkill, subSkillIndex) in skill.subSkills" :key="subSkillIndex">
                      <span class="block text-xs">{{ subSkill.name }}</span>
                      <span
                        class="block text-[0.65rem] text-neutral-600 dark:text-neutral-400"
                        v-if="subSkill.experiences?.length"
                      >
                        {{ subSkill.experiences?.map(({ name }) => name).join(", ") }}
                      </span>
                      <span
                        class="skills__bar mt-[1px]"
                        :class="[
                          {
                            'mb-2': subSkillIndex < skill.subSkills?.length - 1
                          }
                        ]"
                        :data-percent="subSkill.rating * 10"
                      >
                        <span class="skills__percentage"></span>
                      </span>
                    </li>
                  </ul>

                  <span
                    v-if="skill.experiences?.length && !hideSkillDetails"
                    class="block text-[0.65rem] text-neutral-600 dark:text-neutral-400"
                  >
                    {{ skill.experiences?.map(({ name }) => name).join(", ") }}
                  </span>
                </div>

                <span
                  v-if="!skill.subSkills?.length"
                  class="skills__bar mt-[1px]"
                  :data-percent="skill.rating * 10"
                >
                  <span class="skills__percentage"></span>
                </span>
              </div>
            </div>
          </div>
        </div>

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
                <span class="skills__name">{{ name }}</span>
                <span v-if="rating" class="skills__bar" :data-percent="rating * 10">
                  <span class="skills__percentage"></span>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <!-- end of sections -->
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

      <div v-if="toolsStyle === 'tools-b'" class="tools">
        <strong>Competencies:</strong>
        <span>
          {{ flattenedSkills.map(({ name }) => name).join(", ") }}
        </span>
      </div>

      <div class="sections">
        <OngoingCertifications
          v-if="documentStyle !== DocumentStyle.ResumeB && !hideProfessionalDevelopment"
          :ongoingCertifications="ongoingCertifications"
          simplified
        />
      </div>
    </div>
    <!-- end of resume__right -->
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import Certifications from "./Certifications.vue";
import ContactInfo from "./ContactInfo.vue";
import {
  DocumentStyle,
  ToolStyle,
  type Certification,
  type OngoingCertification,
  type Skill
} from "@/types/resume";
import OngoingCertifications from "./OngoingCertifications.vue";

const certifications = defineModel<Certification[]>("certifications", {
  required: true
});

const props = withDefaults(
  defineProps<{
    skills: Skill[];
    toolsStyle: ToolStyle;
    documentStyle: DocumentStyle;
    hideSkillDetails: boolean;
    ongoingCertifications: OngoingCertification[];
    hideProfessionalDevelopment: boolean;
  }>(),
  {
    hideSkillDetails: false,
    hideProfessionalDevelopment: true
  }
);

export type FlattendSkill = {
  name: string;
  rating: number;
};

const flattenedSkills = computed<FlattendSkill[]>(() => {
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
