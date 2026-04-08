import type { ProjectItem, ProjectLinkKind } from "@/content/types";

export const projectsSectionCopy = {
  eyebrow: "Projects",
  title: "A curated view of Salma's front-end project work.",
  description:
    "Each project stays grounded in the CV, with GitHub repositories shown where they are directly listed and unverified links intentionally omitted.",
  linkedLabel: "Repository linked",
  listedLabel: "CV listed",
} as const;

export const projectLinkMeta: { key: ProjectLinkKind; label: string }[] = [
  { key: "github", label: "GitHub" },
  { key: "caseStudy", label: "Case Study" },
  { key: "liveDemo", label: "Live Demo" },
];

export const projectCategoryOrder = ["Angular Projects", "Vue / Nuxt Projects"] as const;

export const projectCategoryDescriptions: Record<(typeof projectCategoryOrder)[number], string> = {
  "Angular Projects":
    "Angular-led front-end work centered on responsive layouts, structured styling, and practical application flows.",
  "Vue / Nuxt Projects":
    "Project work across Vue.js and Nuxt 3 covering e-commerce behavior, admin dashboards, routing, and state handling.",
};

export const projects: ProjectItem[] = [
  {
    name: "Future Mind",
    category: "Angular Projects",
    description:
      "Responsive Angular web application built as a focused front-end project with an emphasis on layout clarity and clean presentation.",
    role: "Front-End Developer",
    platforms: ["Web"],
    stack: ["Angular", "Bootstrap", "CSS"],
    projectContext: [
      "Listed in the CV as a May 2024 Angular project.",
      "Centered on responsive web application work using Angular, Bootstrap, and CSS.",
    ],
    contributions: [
      "Built a responsive Angular interface for the project.",
      "Used Bootstrap and CSS to shape layout and presentation.",
    ],
    links: {},
    featured: true,
  },
  {
    name: "Foodieland",
    category: "Angular Projects",
    description:
      "Angular web project styled with SCSS and supported by Firebase services for authentication and database functionality.",
    role: "Front-End Developer",
    platforms: ["Web"],
    stack: ["Angular", "SCSS", "Firebase Authentication", "Firestore"],
    projectContext: [
      "Listed in the CV as a November 2024 project.",
      "Combines Angular front-end work with Firebase Authentication and Firestore.",
    ],
    contributions: [
      "Built the interface using Angular and SCSS.",
      "Integrated Firebase Authentication and Firestore into the project flow.",
    ],
    links: {
      github: "https://github.com/salmaadel2000/Foodieland",
    },
    featured: true,
  },
  {
    name: "Online Shop",
    category: "Vue / Nuxt Projects",
    description:
      "Vue.js-based e-commerce web application built around shopping flows, API integration, and front-end state handling.",
    role: "Front-End Developer",
    platforms: ["Web"],
    stack: ["Vue.js", "HTML", "CSS", "Pinia", "API Integration", "Git/GitHub"],
    projectContext: [
      "Listed in the CV as a June 2024 project.",
      "Built as an e-commerce web application using Vue.js with supporting API integration.",
    ],
    contributions: [
      "Developed the front-end with Vue.js, HTML, and CSS.",
      "Used Pinia for state handling and supported API integration.",
      "Managed project code with Git and GitHub.",
    ],
    links: {
      github: "https://github.com/salmaadel2000/Online-Shopping",
    },
    featured: true,
  },
  {
    name: "Movie App",
    category: "Vue / Nuxt Projects",
    description:
      "Nuxt 3 movie management project built around role-based administration, user registration, responsive design, and routing.",
    role: "Front-End Developer",
    platforms: ["Web"],
    stack: ["Nuxt 3", "Tailwind CSS", "Git/GitHub", "Routing", "Role-Based Admin"],
    projectContext: [
      "Listed in the CV as a June 2024 project.",
      "Focused on admin-panel behavior, registration flows, responsive design, and efficient routing.",
    ],
    contributions: [
      "Built a Nuxt 3 admin experience with role-based movie management.",
      "Implemented user registration, responsive design, and routing behavior.",
      "Managed project code with Git and GitHub.",
    ],
    links: {
      github: "https://github.com/salmaadel2000/movie-app",
    },
    featured: true,
  },
];
