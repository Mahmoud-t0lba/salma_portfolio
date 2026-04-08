import type { SkillGroup, SkillSpotlight } from "@/content/types";

export const techStackSectionCopy = {
  eyebrow: "Tech Stack",
  title: "A structured view of Salma's front-end toolkit.",
  description:
    "Organized around the technologies and practical responsibilities that appear across the CV and project work.",
} as const;

export const skillSpotlights: SkillSpotlight[] = [
  {
    title: "Angular Delivery",
    description:
      "Front-end implementation centered on responsive Angular interfaces, readable structure, and practical delivery.",
  },
  {
    title: "Responsive Styling",
    description:
      "HTML, CSS, SCSS, and Bootstrap used to shape user-friendly layouts that stay consistent across screens.",
  },
  {
    title: "Cross-Framework Practice",
    description:
      "Hands-on project work across Angular, Vue.js, and Nuxt 3 that reinforces adaptable front-end thinking.",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Core Markup & Styling",
    items: ["HTML5", "CSS3", "SCSS", "SASS", "Bootstrap"],
  },
  {
    title: "Languages & Frameworks",
    items: [
      "JavaScript (ES6)",
      "TypeScript",
      "Angular",
      "Vue.js",
      "Nuxt 3",
    ],
  },
  {
    title: "Interface Quality",
    items: ["Responsive Design", "UI/UX Assessment", "User-Friendly Layouts", "Clean UI Implementation"],
  },
  {
    title: "Workflow & Project Tools",
    items: ["Git", "GitHub", "Firebase Authentication", "Firestore", "API Integration", "Pinia"],
  },
];
