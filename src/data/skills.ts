import type { Skill } from "@/types/resume";

export const SKILLS: Skill[] = [
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
          { name: "Vuetify", rating: 3 },
          { name: "Nuxt", rating: 3 },
          { name: "React", rating: 5 },
          { name: "React Router", rating: 5 },
          { name: "React Native", rating: 4 },
          { name: "JavaScript", rating: 8 },
          { name: "HTML", rating: 7 },
          { name: "CSS/SASS", rating: 8 },
          { name: "Tailwind", rating: 7 }
          // { name: "Responsive Design", rating: 6 },
          // { name: "BEM", rating: 4 },
          // { name: "Bootstrap", rating: 1 }
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
        // name: "Document Generation (PDF, XLS, MJML Email)",
        name: "Document Generation (PDF, XLS, MJML)",
        rating: 1
      }
    ]
  },

  // {
  //   name: "Database Management",
  //   rating: 8,
  //   experiences: [
  //     { name: "DBeaver", rating: 3 },
  //     { name: "SQL (MySQL/MariaDB)", rating: 7 },
  //     { name: "Laravel ORM", rating: 7 },
  //     { name: "Laravel Migrations", rating: 7 }
  //   ]
  // },

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
      // { name: "AWS EC2 (instances, EBS, ALB, target groups)", shortName: "AWS EC2", rating: 5 },
      { name: "AWS EC2", shortName: "AWS EC2", rating: 5 },
      { name: "AWS SES", rating: 3 },
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
      { name: "AWS", rating: 5 },
      { name: "Docker", rating: 1 },
      { name: "Kubernetes", rating: 1 },
      { name: "Bitbucket Pipelines", rating: 1 },
      { name: "Manual Deployment", rating: 1 },
      { name: "WordPress Deployment", rating: 1 },
      { name: "Microservices Architecture", rating: 2 }
    ]
  },

  {
    name: "Server Administration",
    rating: 3,
    experiences: [
      { name: "Ubuntu", rating: 4 },
      { name: "Amazon Linux 2023", rating: 1 }
      // { name: "RDM (tool)", rating: 1 }
    ]
    // experiences: ["cron", "supervisor", "httpd"]
  },

  // {
  //   name: "Others",
  //   experiences: [
  //     { name: "VS Code", rating: 8 }
  //   ]
  // }
  {
    name: "Microservices Architecture",
    rating: 2,
    experiences: [
      { name: "API Gateway Pattern", rating: 2 },
      { name: "Service Isolation", rating: 2 },
      { name: "JWT-based Inter-service Auth", rating: 2 },
      { name: "Docker", rating: 1 }
    ]
  }
];
