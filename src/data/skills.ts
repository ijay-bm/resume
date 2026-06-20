import type { Skill } from "@/types/resume";

export const SKILLS: Skill[] = [
  {
    name: "Full-Stack Web Development",
    shortName: "Full-Stack Development",
    rating: 8,
    includeInSummary: true,
    subSkills: [
      {
        name: "Backend Web Development",
        shortName: "Backend Development",
        rating: 8,
        experiences: [
          { name: "Laravel", rating: 8, includeInSummary: true },
          { name: "PHP", rating: 8, includeInSummary: true },
          { name: "Filament", rating: 7, includeInSummary: true },
          // { name: "Bruno", rating: 8 },
          // { name: "Postman", rating: 1 },
          { name: "Unit/Function Tests", rating: 7 },
          {
            name: "Test Driven Development",
            shortName: "Test-Driven Development",
            rating: 7,
            includeInSummary: true
          }
          // { name: "MJML", rating: 1 }
          // { name: "Laravel ORM", rating: 7 },
          // { name: "Laravel Migrations", rating: 7 },
          // { name: "Laravel Blade", rating: 3 },
          // { name: "MySQL/MariaDB", rating: 7 }
        ]
      },
      {
        name: "Frontend Web Development",
        shortName: "Frontend Development",
        rating: 8,
        experiences: [
          { name: "Vue", rating: 7, includeInSummary: true },
          { name: "Vuetify", rating: 2 },
          { name: "Nuxt", rating: 2, includeInSummary: true },
          { name: "React", rating: 2, includeInSummary: true },
          { name: "React Router", rating: 1, includeInSummary: false },
          { name: "React Native", rating: 1, includeInSummary: true },
          { name: "JavaScript", rating: 8, includeInSummary: true },
          { name: "TypeScript", rating: 8, includeInSummary: true },
          { name: "HTML", rating: 7 },
          { name: "CSS/SASS", rating: 8, includeInSummary: true },
          { name: "Tailwind", rating: 7, includeInSummary: true }
          // { name: "Responsive Design", rating: 6 },
          // { name: "BEM", rating: 4 },
          // { name: "Bootstrap", rating: 1 }
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

  {
    name: "Development Tools",
    rating: 7,
    // includeInSummary intentionally omitted: tool chrome (Git, VS Code, etc.)
    // is low-signal in the one-line summary. Claude Code is surfaced separately
    // below as "AI-Assisted Development".
    experiences: [
      { name: "Git", rating: 5 },
      // { name: "Github", rating: 6 }, // more of a platform
      // { name: "Gitlab", rating: 6 }, // more of a platform

      // does anyone care about these
      // { name: "Bitbucket", rating: 1 },
      // { name: "SourceTree", rating: 1 },
      // { name: "Jira", rating: 1 },
      // { name: "ClickUp", rating: 1 },
      // { name: "Coda", rating: 1 },

      // must it be stated at all?
      // { name: "VS Code", rating: 8 },

      // { name: "browser addons/extensions " },
      // { name: "Devolutions RDM", rating: 3 },

      // { name: "DBeaver", rating: 4 }

      { name: "Postman", rating: 1 },
      { name: "Bruno", rating: 1 }
      // { name: "Claude Code", rating: 5 },
      // { name: "General AI Assistance", rating: 5 }
    ]
  },

  {
    name: "Integrations",
    rating: 7,
    includeInSummary: true,
    experiences: [
      { name: "APIs & SDKs", rating: 7, includeInSummary: true },
      // { name: "Google Places", rating: 1 },
      // { name: "Apple In-App Purchases", rating: 1 },
      // { name: "Android In-App Purchases", rating: 1 },
      { name: "Payment Processors - Xendit, DragonPay", rating: 1 },
      { name: "Audio/Video Services - Twilio", rating: 1 },
      { name: "WebSockets - Pusher", rating: 1 },
      { name: "Geolocation Services - MaxMind", rating: 1 }
      // { name: "Google Tag Manager", rating: 1 },
      // {
      //   name: "Document Generation (PDF, XLS, MJML)",
      //   rating: 1
      // }
    ]
  },

  {
    name: "Databases",
    rating: 8,
    includeInSummary: true,
    experiences: [
      { name: "SQL - MySQL/MariaDB", rating: 7, includeInSummary: true }
      // { name: "DBeaver", rating: 3 },
      // { name: "Laravel ORM", rating: 7 },
      // { name: "Laravel Migrations", rating: 7 }
    ]
  },

  // {
  //   name: "Project Management",
  //   rating: 6,
  //   experiences: [
  //     { name: "Atlassian Jira & Bitbucket", rating: 1 },
  //     { name: "Gitlab", rating: 6 },
  //     { name: "ClickUp", rating: 7 },
  //     { name: "Coda", rating: 6 }
  //   ]
  // },

  {
    name: "Cloud Services",
    rating: 5,
    includeInSummary: true,
    experiences: [
      // { name: "AWS EC2 (instances, EBS, ALB, target groups)", shortName: "AWS EC2", rating: 5 },
      { name: "AWS EC2", shortName: "AWS EC2", rating: 5, includeInSummary: true },
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
    includeInSummary: true,
    experiences: [
      { name: "AWS", rating: 2 },
      { name: "Docker", rating: 5, includeInSummary: true },
      // { name: "Kubernetes", rating: 1 },
      // "Bitbucket Pipelines" is your CI/CD — consider shortName: "CI/CD" +
      // includeInSummary if a post asks for CI/CD by name:
      { name: "Bitbucket Pipelines", rating: 1 },
      { name: "Github Actions", rating: 1 },
      { name: "Manual Deployment", rating: 1 },
      { name: "WordPress Deployment", rating: 1 },
      { name: "Microservices Architecture", rating: 1 }
    ]
  },

  {
    name: "Server Administration",
    rating: 3,
    experiences: [
      { name: "Ubuntu", rating: 1 },
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
    rating: 1,
    includeInSummary: true,
    experiences: [
      { name: "API Gateway Pattern", rating: 1 },
      { name: "Service Isolation", rating: 1 },
      { name: "JWT-based Inter-service Auth", rating: 1 }
      // { name: "Docker", rating: 1 }
    ]
  },

  {
    name: "AI-Assisted Development",
    rating: 5,
    includeInSummary: true,
    experiences: [
      { name: "Claude Code", rating: 5, includeInSummary: true }
      // { name: "Cline (VS Code extension)", rating: 7 },
      // { name: "Claude Chat", rating: 7 },
      // { name: "Claude (VS Code extension)", rating: 3 },

      // Gemini
    ]
  }

  // potential skills, or perhaps add them to other skills in the list

  // section for Testing (such as TDD)?

  // missing automation somewhere, a dedicated seciton or somesubsection?
];

const summaryLabel = (exp: { name: string; shortName?: string }): string =>
  exp.shortName ?? exp.name;

function collectSummaryTechs(skill: Skill): string[] {
  const fromSubSkills =
    skill.subSkills?.flatMap(
      (sub) => sub.experiences?.filter((e) => e.includeInSummary).map(summaryLabel) ?? []
    ) ?? [];

  const fromDirect = skill.experiences?.filter((e) => e.includeInSummary).map(summaryLabel) ?? [];

  return [...fromSubSkills, ...fromDirect];
}

export function buildSkillsSummary(skills: Skill[] = SKILLS): string {
  return skills
    .filter((skill) => skill.includeInSummary)
    .map((skill) => {
      const techs = collectSummaryTechs(skill);
      return techs.length ? `${skill.name} (${techs.join(", ")})` : skill.name;
    })
    .join(", ");
}

export const SKILLS_SUMMARY = buildSkillsSummary();
