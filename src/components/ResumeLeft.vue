<template>
  <div class="resume__left">
    <div
      v-if="[DocumentStyle.TypeA, DocumentStyle.TypeC].includes(documentStyle)"
      class="resume__header-container"
    >
      <h1 class="resume__header-name mb-1">Ijay B. Mangili</h1>
      <ContactInfo :document-style="documentStyle" class="mb-2" />
    </div>

    <div class="sections">
      <div class="section section--about">
        <div class="section__header">
          <span class="section__header-icon">
            <IHeroiconsUserCircle16Solid />
          </span>
          <h1 v-if="documentStyle === DocumentStyle.TypeB" class="section__header-title">
            Ijay B. Mangili
          </h1>

          <h2 v-else class="section__header-title">About</h2>
        </div>

        <div class="section__body">
          <div class="section__item">
            <div class="section__item-diamond"></div>
            <ContactInfo
              v-if="documentStyle === DocumentStyle.TypeB"
              :document-style="documentStyle"
              class="flex justify-between text-xs dark:text-neutral-400"
            />
          </div>

          <div class="section__item">
            <div class="section__item-diamond"></div>
            <p class="about-me-content dark:text-neutral-400">
              Full-Stack Web Developer with 4+ years of experience spanning front-end design, API
              development, database design, DevOps, and AWS cloud management. Primarily work with
              Laravel and Vue.
            </p>
          </div>
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
            <div class="section__item-diamond"></div>
            <div class="enumeration">
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
                  <!-- Supported development of new features for a mature project called Blended Services
                  that indicate a tree's maintenance frequency and status in addition to supporting
                  collaborative maintenance of trees -->
                  Contributed features to Blended Services, a tree maintenance platform tracking
                  frequency, status, and collaborative workflows
                </li>
                <li class="enumeration__description-item">
                  <!-- Developer of a Laravel backend API and CMS for LifeStyler, a job-matching platform
                  connecting workers with short-term opportunities in Australia -->
                  Built Laravel backend API and CMS for LifeStyler, a job-matching platform for
                  short-term work in Australia
                </li>
                <li class="enumeration__description-item">
                  Designed and implemented backend APIs and database schemas with Laravel for Solo
                  Alert, a personal safety application that handles complex check-in scheduling and
                  alert systems consumed by an iOS app
                </li>
                <li class="enumeration__description-item">
                  Developed xcursionplanner, a Vue WebApp with integrated APIs used in planning an
                  excursion for Australian schools
                </li>
                <li class="enumeration__description-item">
                  Collaborated with developers (mobile & web), designers and project managers to
                  ensure integration between platforms and development
                </li>
                <li class="enumeration__description-item">
                  Participated in product development lifecycle including design, develpment,
                  testing, and deployment
                </li>
              </ul>
            </div>
          </div>

          <div class="enumeration section__item">
            <div class="section__item-diamond"></div>
            <div class="enumeration">
              <div class="enumeration__row">
                <span class="enumeration__subheading">Intermediate Web Developer</span>
                <span class="enumeration__right-subtitle">Remote (Pasig City, Metro Manila)</span>
              </div>

              <div class="enumeration__row">
                <span class="enumeration__heading">TheChalkboard Inc.</span>
                <span class="enumeration__right-subtitle">Nov 2023 — Jul 2025</span>
              </div>

              <ul class="enumeration__description">
                <li class="enumeration__description-item">
                  Led DevOps and AWS initiatives to enhance existing AWS infrastructure and
                  implement best practices.
                </li>
                <li class="enumeration__description-item">
                  Developed and maintained a QR-based Attendance Monitoring System for real-time
                  token-based attendance tracking.
                </li>
                <li class="enumeration__description-item">
                  Reworked the Learning Management System (LMS) platform to reduce technical debt
                  and enhance functionality.
                </li>
              </ul>
            </div>
          </div>

          <div class="enumeration section__item">
            <div class="section__item-diamond"></div>
            <div class="enumeration">
              <!-- <div class="enumeration__row">
                <span class="enumeration__subheading">
                  Associate Web Developer
                  <span class="enumeration__subheading-sub">| Jun 2021 — Sep 2023</span>
                </span>
              </div> -->

              <div class="enumeration__row">
                <span class="enumeration__subheading">Associate Web Developer</span>
                <span class="enumeration__right-subtitle">Remote (Pasig City, Metro Manila)</span>
              </div>

              <div class="enumeration__row">
                <span class="enumeration__heading">TheChalkboard Inc.</span>
                <span class="enumeration__right-subtitle">Jun 2021 — Sep 2023</span>
              </div>

              <ul class="enumeration__description">
                <!-- <li class="enumeration__description-item">
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
                </li> -->
                <li class="enumeration__description-item">
                  Full-stack development with Vue and Laravel for LMS and Management Portal
                </li>
                <li class="enumeration__description-item">
                  Integrated card payments with geolocation-based localized pricing
                </li>
                <li class="enumeration__description-item">
                  Automated deployments with Bitbucket pipelines and managed cloud infrastructure
                </li>

                <!-- <li class="enumeration__description-item">System administration tasks</li> -->
              </ul>
            </div>
          </div>

          <div class="enumeration section__item">
            <div class="section__item-diamond"></div>
            <div class="enumeration">
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
      </div>

      <div
        v-if="documentStyle === DocumentStyle.TypeB || documentStyle === DocumentStyle.TypeC"
        class="section"
      >
        <div class="section__header">
          <span class="section__header-icon">
            <IGameIconsGraduateCap />
          </span>
          <h2 class="section__header-title">Education</h2>
        </div>

        <div class="section__body">
          <div class="enumeration section__item">
            <div class="section__item-diamond"></div>
            <div class="enumeration">
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
      </div>

      <div v-if="documentStyle === DocumentStyle.TypeC" class="section section--cv-ski">
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
                <span class="font-medium">Skills: </span>
                <span class="text-neutral-700 dark:text-neutral-300">
                  Full-Stack Web Development (Laravel, PHP, Vue, Nuxt, React, React Router, React
                  Native, Vuetify, SASS, Tailwind), Integrations (APIs, SDKs), Database Management,
                  Project Management, Cloud Services (AWS), Containerization (Docker), Deployments,
                  Server Administration
                </span>
              </p>
            </li>

            <li class="enumeration__item">
              <p class="text-sm">
                <span class="font-medium">Certifications: </span>
                <span class="text-neutral-700 dark:text-neutral-300">
                  {{
                    certifications
                      .filter(({ hidden }) => !hidden)
                      .map(
                        ({ title, shortTitle, issuer, monthYear }) =>
                          `${shortTitle || title} (${issuer}, ${monthYear})`
                      )
                      .join(", ")
                  }}
                </span>
              </p>
            </li>

            <li class="enumeration__item">
              <p class="text-sm">
                <span class="font-medium">Interests: </span>
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

    <div v-if="documentStyle !== DocumentStyle.TypeC" class="interests">
      <strong>Interests:</strong>
      Gaming, Media, Guitar, Piano, Violin, Exercise, Computers, Technology, History, Books
    </div>

    <!-- <div
        v-if="documentStyle !== DocumentStyle.TypeC"
        class="invisible absolute bottom-0 w-full py-2 text-xs text-neutral-700 print:hidden"
      >
        <div class="mx-auto w-max text-center">
          For the best viewing experience, visit the web version of this document:
          <br />
          <a href="https://ijay-bm.github.io/resume/" target="_blank" class="text-bronze-500">
            https://ijay-bm.github.io/resume/
          </a>
        </div>
      </div> -->
  </div>
</template>

<script setup lang="ts">
import { type Certification, DocumentStyle, ToolStyle } from "@/types/resume";

import ContactInfo from "./ContactInfo.vue";

const certifications = defineModel<Certification[]>("certifications", {
  required: true
});

defineProps<{
  toolsStyle: ToolStyle;
  documentStyle: DocumentStyle;
}>();
</script>
