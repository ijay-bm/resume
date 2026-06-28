import type { SkillNode } from "@/types/resume";

export const SKILLS: SkillNode[] = [
  {
    name: "Full-Stack Web Development",
    // shortName: "Full-Stack Development",
    rating: 8,
    includeInSummary: true,
    children: [
      {
        name: "Backend Web Development",
        // shortName: "Backend Development",
        rating: 8,
        includeInSummary: true,
        children: [
          { name: "Laravel", rating: 8, includeInSummary: true },
          { name: "PHP", rating: 8, includeInSummary: true },
          { name: "Filament", rating: 7, includeInSummary: true },
          { name: "REST APIs", rating: 7, includeInSummary: true },
          // { name: "Bruno", rating: 8 },
          // { name: "Postman", rating: 1 },
          { name: "Unit/Function Tests", rating: 7 },
          {
            name: "Test Driven Development",
            shortName: "Test-Driven Development",
            rating: 7,
            includeInSummary: true
          },
          {
            name: "Load Testing",
            rating: 1,
            includeInSummary: true,
            children: [{ name: "k6", rating: 1, includeInSummary: true }]
          },
          {
            name: "Node.js - Express.js",
            rating: 2,
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
        // shortName: "Frontend Development",
        rating: 8,
        includeInSummary: true,
        children: [
          { name: "Vue.js", rating: 7, includeInSummary: true },
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
    // children: [
    //   { name: "Principles (OOP, SOLID, DRY)", rating: 7 },
    //   { name: "Patterns (Service, DTO)", rating: 7 },
    //   { name: "Version Control (Git, Bitbucket)", rating: 7 }
    // ]
  },

  // {
  //   name: "API Development",
  //   rating: 7,
  //   children: [
  //     { name: "RESTful API Design", rating: 7 },
  //     { name: "Resource-Oriented API Design", rating: 7 },
  //     { name: "Laravel MVC API development", rating: 7 }
  //   ]
  // },

  {
    name: "Development Tools",
    rating: 7,
    // includeInSummary intentionally omitted: tool chrome (Git, VS Code, etc.)
    // is low-signal in the one-line summary. Claude Code is surfaced separately
    // below as "AI-Assisted Development".
    children: [
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

      { name: "Postman", rating: 7 },
      { name: "Bruno", rating: 7 }
      // { name: "Claude Code", rating: 5 },
      // { name: "General AI Assistance", rating: 5 }
    ]
  },

  {
    name: "Integrations",
    rating: 7,
    includeInSummary: true,
    // experiences: [
    //   // { name: "Apple In-App Purchases", rating: 1 },
    //   // { name: "Android In-App Purchases", rating: 1 },
    //   { name: "Audio/Video Services - Twilio", rating: 1 },
    //   { name: "WebSockets - Pusher", rating: 1 },
    //   { name: "Geolocation Services - MaxMind", rating: 1 }
    //   // { name: "Google Tag Manager", rating: 1 },
    children: [
      {
        name: "Payment Processors",
        rating: 7,
        includeInSummary: true,
        children: [
          { name: "Stripe", rating: 1, includeInSummary: true },
          { name: "Xendit", rating: 6, includeInSummary: true },
          { name: "DragonPay", rating: 6, includeInSummary: true }
        ]
      },
      {
        name: "Communications",
        shortName: "Comms (Audio, Video, SMS, Email)",
        rating: 6,
        includeInSummary: true,
        children: [
          { name: "Twilio", rating: 1, includeInSummary: true },
          { name: "AWS SNS / SES", rating: 1, includeInSummary: true },
          { name: "GoDaddy SMTP", rating: 1, includeInSummary: false }
        ]
      },
      {
        name: "WebSockets",
        rating: 6,
        includeInSummary: true,
        children: [{ name: "Pusher", rating: 1, includeInSummary: true }]
      },
      {
        name: "Geolocation",
        rating: 5,
        includeInSummary: true,
        children: [{ name: "MaxMind", rating: 6, includeInSummary: true }]
      },
      {
        name: "Google",
        rating: 1,
        includeInSummary: false,
        children: [
          { name: "Tag Manager", rating: 1, includeInSummary: false },
          { name: "Places", rating: 1, includeInSummary: false },
          { name: "Analytics", rating: 1, includeInSummary: false },
          { name: "Firebase", rating: 1, includeInSummary: false }
        ]
      }
      // { name: "Maps & Places", children: [{ name: "Google Places", rating: 4 }] },
      // { name: "In-App Purchases", children: [
      //   { name: "Apple IAP", rating: 3 },
      //   { name: "Google Play Billing", rating: 3 }
      // ] },
      // { name: "Analytics", children: [{ name: "Google Tag Manager", rating: 3 }] },
      //   // {
      //   //   name: "Document Generation (PDF, XLS, MJML)",
      //   //   rating: 1
      //   // }
    ]
  },

  {
    name: "Databases",
    rating: 8,
    includeInSummary: true,
    children: [
      { name: "SQL - MySQL/MariaDB", rating: 7, includeInSummary: true }
      // { name: "DBeaver", rating: 3 },
      // { name: "Laravel ORM", rating: 7 },
      // { name: "Laravel Migrations", rating: 7 }
    ]
  },

  // {
  //   name: "Project Management",
  //   rating: 6,
  //   children: [
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
    children: [
      {
        name: "AWS",
        rating: 3,
        includeInSummary: true,
        children: [
          { name: "EC2", rating: 6 },
          { name: "SES", rating: 3 },
          { name: "SNS", rating: 3 },
          { name: "CodeDeploy", rating: 1 },
          { name: "Parameter Store", rating: 1 },
          { name: "IAM", rating: 1 },
          { name: "Route 53", rating: 1 },
          { name: "Certificate Manager", rating: 1 },
          { name: "S3", rating: 1 },
          { name: "RDS", rating: 1 }
        ]
      }
      // {
      //   name: "Digital Ocean",
      //   rating: 5,
      //   children: [{ name: "Droplets", rating: 5 }]
      // },
      // {
      //   name: "Google Cloud Platform",
      //   rating: 1
      // }
    ]
  },

  {
    name: "Containerization and Deployments",
    rating: 5,
    includeInSummary: true,
    children: [
      // { name: "AWS", rating: 2 },
      { name: "Docker", rating: 5, includeInSummary: true },
      // { name: "Kubernetes", rating: 1 },
      { name: "Bitbucket Pipelines", rating: 1 },
      { name: "Github Actions", rating: 1 },
      { name: "Manual Deployment", rating: 1 },
      { name: "WordPress Deployment", rating: 1 }
      // { name: "Microservices Architecture", rating: 1 }
    ]
  },

  {
    name: "Server Administration",
    rating: 3,
    children: [
      { name: "Ubuntu", rating: 1 },
      { name: "Amazon Linux 2023", rating: 1 }
      // { name: "RDM (tool)", rating: 1 }
    ]
    // children: ["cron", "supervisor", "httpd"]
  },

  // {
  //   name: "Others",
  //   children: [
  //     { name: "VS Code", rating: 8 }
  //   ]
  // }

  {
    name: "Microservices Architecture",
    shortName: "Microservices",
    rating: 1,
    includeInSummary: true,
    children: [
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
    children: [
      { name: "Claude Code", rating: 5, includeInSummary: true },
      { name: "Cline ", rating: 1 }
      // { name: "Claude Chat", rating: 7 },
      // Gemini
      // ChatGPT
    ]
  }

  // potential skills, or perhaps add them to other skills in the list

  // section for Testing (such as TDD)?

  // missing automation somewhere, a dedicated section or some subsection?

  // Hosting?
  // GoDaddy DNS
  // CLoudfare DNS
  // AWS Route 53
  // AWS Certificate Manager
  // ssl2buy
];

const summaryLabel = (node: SkillNode): string => node.shortName ?? node.name;

const summaryChildren = (node: SkillNode): SkillNode[] =>
  node.children?.filter(({ includeInSummary }) => includeInSummary) ?? [];

const isSummaryLeaf = (node: SkillNode): boolean => summaryChildren(node).length === 0;

function summarizeNode(node: SkillNode): string[] {
  const children = summaryChildren(node);
  if (children.length === 0) {
    return [summaryLabel(node)];
  }
  if (children.every(isSummaryLeaf)) {
    return [`${summaryLabel(node)} - ${children.map(summaryLabel).join(", ")}`];
  }
  return [summaryLabel(node), ...children.flatMap(summarizeNode)];
}

export type SkillSummaryGroup = { label: string; items: string[] };

function collectLeafLabels(node: SkillNode): string[] {
  const children = summaryChildren(node);
  return children.length === 0 ? [summaryLabel(node)] : children.flatMap(collectLeafLabels);
}

export function buildSkillsSummaryGroups(skills: SkillNode[] = SKILLS): SkillSummaryGroup[] {
  return skills
    .filter((skill) => skill.includeInSummary)
    .map((skill) => ({
      label: summaryLabel(skill),
      items: summaryChildren(skill).flatMap(collectLeafLabels)
    }));
}

export function buildSkillsSummary(skills: SkillNode[] = SKILLS): string {
  return skills
    .filter((skill) => skill.includeInSummary)
    .map((skill) => {
      const techs = summaryChildren(skill).flatMap(summarizeNode);
      return techs.length ? `${skill.name} (${techs.join(", ")})` : skill.name;
    })
    .join(", ");
}

export const SKILLS_SUMMARY = buildSkillsSummary();
