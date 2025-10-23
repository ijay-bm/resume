<template>
  <div class="relative">
    <div class="absolute right-6 top-6">
      <ThemeSelector />
    </div>

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

        <!-- <div>
          <h4
            class="font-bold"
            :class="[
              {
                'mb-2': certifications.filter(({ hidden }) => hidden).length
              }
            ]"
          >
            Hidden Certificates
          </h4>

          <div class="flex flex-col gap-1 truncate">
            <button
              v-for="(certification, index) in certifications.filter(({ hidden }) => hidden)"
              :key="index"
              type="button"
              class="dark-button w-full justify-start truncate px-2 py-1 text-xs"
              @click="certification.hidden = false"
            >
              <p class="truncate">
                <IFluentMdl2UpdateRestore class="mr-1 inline-block w-3" />
                {{ certification.title }}
              </p>
            </button>
          </div>
        </div> -->

        <!-- <div v-if="documentStyle !== DocumentStyle.TypeC">
          <CheckBoxInput
            class="font-bold"
            id="hide-skill-details"
            text="Hide Skill Details"
            v-model="hideSkillDetails"
            :true-value="true"
            :false-value="false"
          />
        </div>

        <div v-if="documentStyle !== DocumentStyle.TypeC">
          <CheckBoxInput
            class="font-bold"
            id="hide-professional-development"
            text="Hide Professional Development"
            v-model="hideProfessionalDevelopment"
            :true-value="true"
            :false-value="false"
          />
        </div>

        <div v-if="documentStyle !== DocumentStyle.TypeC">
          <h4 class="mb-2 font-bold">Competencies</h4>
          <RadioGroupInput
            :items="[
              { label: 'Style 1', value: ToolStyle.ToolsA },
              { label: 'Style 2', value: ToolStyle.ToolsB },
              { label: 'Hidden', value: ToolStyle.Hidden }
            ]"
            name="tools-style-radio-menu"
            v-model="toolsStyle"
          />
        </div> -->
      </div>
    </Menu>

    <Resume
      v-model:certifications="certifications"
      :skills="skills"
      :toolsStyle="toolsStyle"
      :documentStyle="documentStyle"
      :hideSkillDetails="hideSkillDetails"
      :ongoingCertifications="ongoingCertifications"
      :hideProfessionalDevelopment="hideProfessionalDevelopment"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Certification, Skill, OngoingCertification } from "./types/resume";
import { DocumentStyle, ToolStyle } from "./types/resume";
// import CheckBoxInput from "./components/CheckBoxInput.vue";
import Menu from "./components/Menu.vue";
import RadioGroupInput from "./components/RadioGroupInput.vue";
import Resume from "./components/Resume.vue";
import ThemeSelector from "./components/ThemeSelector.vue";

const documentStyle = ref<DocumentStyle>(DocumentStyle.TypeC);
function onResumeStyleUpdateModelValue(newModelValue: DocumentStyle) {
  document.body.classList.remove(documentStyle.value);
  document.body.classList.add(newModelValue);
  documentStyle.value = newModelValue;
}
onResumeStyleUpdateModelValue(DocumentStyle.TypeC);

const certifications = ref<Certification[]>([
  {
    type: "Certificate of Completion",
    // title: "Complete React Developer (w/ Redux, Hooks, GraphQL)",
    title: "Complete React Developer: Redux, Hooks, GraphQL",
    shortTitle: "Complete React Developer",
    issuer: "Udemy",
    // description: "Partially Completed"
    monthYear: "Oct 2025",
    hidden: false
  },
  {
    type: "Certificate of Completion",
    // title: "Complete React Developer (w/ Redux, Hooks, GraphQL)",
    title: "React Native - The Practical Guide",
    shortTitle: "React Native",
    issuer: "Udemy",
    // description: "Partially Completed"
    monthYear: "Sep 2025",
    hidden: false
  },
  {
    type: "Certificate of Completion",
    monthYear: "July 2024",
    title: "Docker Mastery",
    issuer: "Udemy",
    hidden: false
  },
  {
    type: "Certificate",
    monthYear: "Feb 2024",
    title: "IELTS General Training Band 8",
    issuer: "IELTS",
    hidden: false
  },
  {
    type: "Certificate of Completion",
    monthYear: "Feb 2023",
    title: "Complete Vue Developer",
    issuer: "Udemy",
    hidden: false
  },
  {
    type: "Certificate of Completion",
    monthYear: "Nov 2022",
    title: "Advanced CSS and SASS",
    issuer: "Udemy",
    hidden: true
  },
  {
    type: "Certificate of Completion",
    monthYear: "July 2022",
    title: "Professional Java Developer",
    issuer: "Udemy",
    hidden: true
  },
  // {
  //   type: "",
  //   monthYear: "July 2021",
  //   title: "CSS 3D",
  //   issuer: "Udemy",
  //   hidden: true
  // },
  // {
  //   type: "",
  //   monthYear: "June 2021",
  //   title: "Sass Workflow",
  //   issuer: "Udemy",
  //   hidden: true
  // },
  // {
  //   type: "",
  //   monthYear: "May 2021",
  //   title: "Learn what's new in PHP 7",
  //   issuer: "Udemy",
  //   hidden: true
  // },
  // {
  //   type: "",
  //   monthYear: "Mar 2021",
  //   title: "Javascript Essentials",
  //   issuer: "Udemy",
  //   hidden: true
  // },
  // {
  //   type: "",
  //   monthYear: "September 2020",
  //   title: "Practical PHP: Master the Basics and Code Dynamic Websites",
  //   issuer: "Udemy",
  //   hidden: true
  // },
  // {
  //   type: "Certificate of Completion",
  //   monthYear: "Aug 2020",
  //   title: "Full-Stack Web Developer",
  //   issuer: "Udemy",
  //   hidden: false
  // },
  {
    type: "Certificate of Recognition",
    monthYear: "Mar 2019",
    title: "1st place in Robotics Sumobot Competition",
    issuer: "University of Baguio",
    // description:
    //   "Robotics Sumobot Competition during the 8th Brainwave at the School of Information Technology, University of Baguio.",
    hidden: false
  },
  {
    type: "Certificate of Recognition",
    monthYear: "Mar 2019",
    title: "Champion in Quiz Bee",
    issuer: "University of Baguio",
    // description:
    //   "Regional 2018 Institute of Computer Engineers of the Philippines, Inc. (ICpEP) Challenge Competition",
    hidden: false
  },
  {
    type: "Certificate of Merit",
    monthYear: "Mar 2018",
    title: "Champion in Programming",
    issuer: "University of Baguio",
    // description:
    //   "Regional 2017 Institute of Computer Engineers of the Philippines, Inc. (ICpEP) Challenge Competition",
    hidden: false
  }
]);

const skills = ref<Skill[]>([
  {
    name: "Full-Stack Web Development",
    shortName: "Full-Stack Development",
    rating: 8,
    subSkills: [
      {
        name: "Frontend Web Development",
        shortName: "Frontend Development",
        rating: 8,
        experiences: [
          { name: "Vue", rating: 7 },
          { name: "Vuetify", rating: 7 },
          { name: "Nuxt", rating: 7 },
          { name: "React", rating: 5 },
          { name: "React Router", rating: 5 },
          { name: "React Native", rating: 4 },
          { name: "JavaScript", rating: 8 },
          { name: "HTML", rating: 7 },
          { name: "CSS/SASS", rating: 8 },
          { name: "Tailwind", rating: 7 },
          { name: "Responsive Design", rating: 6 },
          // { name: "BEM", rating: 4 },
          { name: "Bootstrap", rating: 1 }
        ]
      },
      {
        name: "Backend Web Development",
        shortName: "Backend Development",
        rating: 8,
        experiences: [
          { name: "Laravel", rating: 8 },
          { name: "PHP", rating: 7 },
          { name: "Filament", rating: 7 },
          { name: "Bruno", rating: 7 },
          { name: "Postman", rating: 1 },
          { name: "MJML", rating: 1 }
          // { name: "Laravel ORM", rating: 7 },
          // { name: "Laravel Migrations", rating: 7 },
          // { name: "Laravel Blade", rating: 3 },
          // { name: "MySQL/MariaDB", rating: 7 }
        ]
      }
      // {
      //   name: "Package Managers (NPM, Composer)",
      //   rating: 7
      // },
    ]
    // experiences: [
    //   { name: "Principles (OOP, SOLID, DRY)", rating: 7 },
    //   { name: "Patterns (Service, DTO)", rating: 7 },
    //   { name: "Version Control (Git, Bitbucket)", rating: 7 }
    // ]
  },
  // {
  //   name: "API Development",
  //   rating: 7,
  //   experiences: [
  //     { name: "RESTful API Design", rating: 7 },
  //     { name: "Resource-Oriented API Design", rating: 7 },
  //     { name: "Laravel MVC API development", rating: 7 }
  //   ]
  // },
  // { name: "Static Site Generation (SSG)", rating: 1 },
  // { name: "Server-Side Rendering (SSR)", rating: 1 },
  // {
  //   name: "Source Control",
  //   rating: 7,
  //   experiences: [
  //     { name: "Git", rating: 5 },
  //     { name: "Bitbucket", rating: 5 },
  //     { name: "SourceTree", rating: 2 }
  //   ]
  // }
  // {
  //   name: "Development Approach",
  //   rating: 7,
  //   experiences: [
  //     { name: "Principles (SOLID, DRY)", rating: 7 },
  //     { name: "Patterns (Service, DTO,  MVC)", rating: 7 },
  //     { name: "FE Methodologies (Atomic, BEM, Flat, Modules, 7-1 SASS Pattern)", rating: 6 }
  //   ]
  // },

  // {
  //   name: "Development Tools",
  //   rating: 7,
  //   experiences: [
  //     { name: "Git", rating: 5 },
  //     { name: "Bitbucket", rating: 5 },
  //     { name: "SourceTree", rating: 2 },
  //     { name: "Jira", rating: 5 },
  //     { name: "VS Code", rating: 8 },
  //     { name: "browser addons" },
  //     { name: "Devolutions RDM", rating: 3 },
  //     { name: "Postman" },
  //     { name: "DBeaver", rating: 4 }
  //   ]
  // },

  {
    name: "Integrations",
    rating: 7,
    experiences: [
      { name: "APIs & SDKs", rating: 7 },
      { name: "Google Places", rating: 1 },
      // { name: "iOS In-App Purchases", rating: 1 },
      { name: "Payment Processors", rating: 1 },
      { name: "Audio/Video Services", rating: 1 },
      { name: "WebSockets", rating: 1 },
      { name: "Geolocation Services", rating: 1 },
      {
        name: "Document Generation (PDF, XLS, MJML Email)",
        rating: 1
      }
    ]
  },

  {
    name: "Database Management",
    rating: 8,
    experiences: [
      { name: "DBeaver", rating: 3 },
      { name: "SQL (MySQL/MariaDB)", rating: 7 },
      { name: "Laravel ORM", rating: 7 },
      { name: "Laravel Migrations", rating: 7 }
    ]
  },

  {
    name: "Project Management",
    rating: 6,
    experiences: [
      { name: "Atlassian Jira & Bitbucket", rating: 1 },
      { name: "Gitlab", rating: 6 },
      { name: "ClickUp", rating: 7 },
      { name: "Coda", rating: 6 }
    ]
  },
  {
    name: "Cloud Services",
    rating: 5,
    experiences: [
      { name: "AWS EC2 (instances, EBS, ALB, target groups)", shortName: "AWS EC2", rating: 5 },
      { name: "AWS SES", rating: 5 },
      { name: "AWS SNS", rating: 3 },
      { name: "AWS CodeDeploy", rating: 1 },
      { name: "AWS Parameter Store", rating: 1 },
      { name: "AWS IAM", rating: 1 },
      { name: "AWS Route 53", rating: 1 },
      { name: "AWS Certificate Manager", rating: 1 },
      { name: "AWS S3", rating: 1 },
      { name: "AWS RDS", rating: 1 }
    ]
  },
  {
    name: "Containerization and Deployments",
    rating: 5,
    experiences: [
      { name: "Docker", rating: 5 },
      { name: "AWS", rating: 5 },
      { name: "Kubernetes", rating: 1 },
      { name: "Bitbucket Pipelines", rating: 1 },
      { name: "Manual Deployment", rating: 1 },
      { name: "WordPress Deployment", rating: 1 }
    ]
  },

  {
    name: "Server Administration",
    rating: 3,
    experiences: [
      { name: "Ubuntu", rating: 4 },
      { name: "Amazon Linux 2023", rating: 1 },
      { name: "RDM (tool)", rating: 1 }
    ]
    // experiences: ["cron", "supervisor", "httpd"]
  }

  // {
  //   name: "Others",
  //   experiences: [
  //     { name: "VS Code", rating: 8 }
  //   ]
  // }
]);

const toolsStyle = ref<ToolStyle>(ToolStyle.Hidden);

const hideSkillDetails = ref(false);

const hideProfessionalDevelopment = ref(true);
const ongoingCertifications = ref<OngoingCertification[]>([
  {
    // title: "Ultimate AWS Certified Solutions Architect Associate SAA-C03",
    title: "AWS Certified Solutions Architect Associate SAA-C03",
    shortTitle: "AWS Solutions Architect Associate SAA-C03",
    platform: "Udemy",
    description: "Need To Know"
  },
  {
    // title: "The Ultimate React Course 2024: React, Next.js, Redux & More",
    title: "React Course 2024: Next.js, Redux & More",
    shortTitle: "React Course 2024",
    platform: "Udemy",
    description: "Ongoing"
  }
]);
</script>
