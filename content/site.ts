import type {
  CertificationItem,
  EducationItem,
  ExpertiseItem,
  HeroHighlight,
  NavItem,
  SnapshotItem,
  SocialLink,
} from "@/content/types";

export const siteConfig = {
  name: "Salma Adel",
  firstName: "Salma",
  role: "Front End Dev",
  headline: "Front End Dev building responsive Angular interfaces and polished web experiences.",
  heroIntro:
    "I am a Front End Dev specializing in Angular and responsive web interfaces. My work focuses on clear implementation, user-friendly layouts, and maintainable front-end code using HTML, CSS, SCSS, Bootstrap, JavaScript, and TypeScript.",
  professionalSummary:
    "Salma Adel is a Front End Dev focused on Angular and responsive UI implementation. Her background combines professional delivery, freelance website work, an ITI diploma in Open-Source Application Development, and a Computer Science degree from Mansoura University.",
  about: [
    "Salma specializes in building responsive web interfaces that stay clear, structured, and easy to work with as products grow. She is especially comfortable with Angular-based front-end delivery and the styling foundations that make polished interfaces feel reliable.",
    "Her profile is grounded in hands-on front-end implementation across professional roles, freelance work, and structured training. Alongside Angular, she has project experience with Vue.js and Nuxt 3, giving her a practical understanding of modern web workflows.",
  ],
  status: "Currently working as a UI Developer at Alqemam / QTech",
  location: "Mansoura, Egypt",
  email: "salma.adel.fathy77@gmail.com",
  phone: "+20 109 046 0937",
  cvDownloadHref: "/cv/salma-adel-cv.pdf",
  metaDescription:
    "Front End Dev specializing in Angular, responsive UI, and maintainable web interfaces across modern web stacks.",
  contactStatement:
    "If you are hiring a front-end developer for responsive Angular delivery, polished UI implementation, or modern web interface work, let’s connect.",
  footerNote: "Built to present front-end work with clarity and polish.",
  keywords: [
    "Salma Adel",
    "Front End Dev",
    "Angular Developer",
    "Responsive UI",
    "TypeScript Portfolio",
    "HTML CSS SCSS",
    "Vue.js Developer",
    "Nuxt 3",
  ],
  profileImageSrc: "/images/salma-profile.jpeg" as string | null,
  profileImageAlt: "Portrait of Salma Adel",
} as const;

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Stack", href: "#tech-stack" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Snapshot", href: "#resume" },
  { label: "Education", href: "#credentials" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "Email", href: "mailto:salma.adel.fathy77@gmail.com" },
  { label: "GitHub", href: "https://github.com/salmaadel2000" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/salma-adel2000" },
];

export const headerContactLinks: SocialLink[] = [
  { label: "Email", href: "mailto:salma.adel.fathy77@gmail.com" },
  { label: "GitHub", href: "https://github.com/salmaadel2000" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/salma-adel2000" },
  { label: "Phone", href: "tel:+201090460937" },
];

export const heroHighlights: HeroHighlight[] = [
  { label: "Current role", value: "UI Developer at Alqemam / QTech" },
  { label: "Primary stack", value: "Angular, TypeScript, SCSS" },
  { label: "Additional stack", value: "Vue.js and Nuxt 3" },
  { label: "Strength", value: "Responsive interface delivery" },
];

export const heroPanelContent = {
  eyebrow: "At a glance",
  title: "Front-end developer focused on responsive, maintainable web interfaces.",
  badge: "Angular",
  recruiterTitle: "What recruiters see fast",
  recruiterHighlights: [
    "Front End Dev specializing in responsive Angular interfaces and polished front-end implementation.",
    "Comfortable with HTML, CSS, SCSS, Bootstrap, JavaScript, and TypeScript across real project work.",
    "Backed by professional experience, freelance website delivery, and ITI training in open-source application development.",
  ],
  tags: ["Angular", "Responsive UI", "TypeScript", "Vue / Nuxt"],
  mediaEyebrow: "Profile Ready",
  mediaDescription:
    "A profile photo can be added later without changing the layout. Until then, the hero stays text-led and recruiter-friendly.",
} as const;

export const aboutSectionCopy = {
  eyebrow: "About",
  title: "Responsive interfaces, clean implementation, and front-end foundations built to last.",
  description: siteConfig.professionalSummary,
} as const;

export const aboutPrinciples = [
  {
    title: "Responsive UI thinking",
    description:
      "Interfaces built to adapt cleanly across screen sizes while staying readable, usable, and visually consistent.",
    icon: "layers3",
  },
  {
    title: "Modern front-end foundations",
    description:
      "Angular, HTML, CSS, SCSS, Bootstrap, JavaScript, and TypeScript applied with practical implementation discipline.",
    icon: "sparkles",
  },
  {
    title: "Growth through real work",
    description:
      "Professional roles, freelance delivery, and ITI training that reinforce hands-on front-end execution.",
    icon: "workflow",
  },
] as const;

export const expertiseSectionCopy = {
  eyebrow: "Core Expertise",
  title: `What ${siteConfig.firstName} brings to a front-end product team.`,
  description:
    "A recruiter-friendly view of the strengths that show up consistently across the CV, training, and portfolio work.",
} as const;

export const snapshotSectionCopy = {
  eyebrow: "Resume Snapshot",
  title: `A compact recruiter view of ${siteConfig.firstName}'s fit.`,
  description:
    "Designed for the fast scan: the current role, front-end focus, supporting education, and the technologies that stand out most.",
} as const;

export const credentialsSectionCopy = {
  eyebrow: "Education & Training",
  title: "Education and training that support hands-on front-end delivery.",
  description:
    "A compact section for formal study and structured front-end training, kept intentionally clear and easy to scan.",
  primaryLabel: "Education",
  secondaryLabel: "Training",
} as const;

export const contactSectionCopy = {
  eyebrow: "Contact",
  title: "Let’s build responsive, user-friendly web experiences.",
  primaryCtaLabel: `Email ${siteConfig.firstName}`,
  locationLabel: `${siteConfig.location}`,
} as const;

export const contactItems = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/salma-adel2000",
    href: "https://www.linkedin.com/in/salma-adel2000",
  },
  {
    label: "GitHub",
    value: "github.com/salmaadel2000",
    href: "https://github.com/salmaadel2000",
  },
  {
    label: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s+/g, "")}`,
  },
] as const;

export const expertiseItems: ExpertiseItem[] = [
  {
    title: "Angular Interface Delivery",
    description:
      "Build Angular-based interfaces with a focus on responsiveness, clarity, and maintainable implementation.",
  },
  {
    title: "Responsive Layout Implementation",
    description:
      "Translate interface ideas into layouts that adapt cleanly across devices and preserve usability.",
  },
  {
    title: "HTML, CSS & SCSS Styling",
    description:
      "Use HTML, CSS, SCSS, and Bootstrap to shape polished interfaces with dependable structure and visual consistency.",
  },
  {
    title: "JavaScript & TypeScript Foundations",
    description:
      "Work comfortably across core front-end scripting and typed application logic used in modern web projects.",
  },
  {
    title: "Vue & Nuxt Project Practice",
    description:
      "Bring hands-on project exposure beyond Angular through Vue.js and Nuxt-based front-end builds.",
  },
  {
    title: "Practical Product Collaboration",
    description:
      "Support delivery through UI-focused implementation, project ownership, and steady front-end execution.",
  },
];

export const resumeSnapshot: SnapshotItem[] = [
  { label: "Current role", value: "UI Developer at Alqemam / QTech" },
  { label: "Primary focus", value: "Responsive front-end interfaces with Angular" },
  { label: "Core stack", value: "HTML5, CSS3, SCSS, Bootstrap, JavaScript, TypeScript" },
  { label: "Additional frameworks", value: "Vue.js and Nuxt 3 project experience" },
  { label: "Education", value: "ITI Open-Source Application Development diploma + Computer Science degree" },
  { label: "Project profile", value: "Angular interfaces, e-commerce flows, and admin dashboard work" },
  { label: "Languages", value: "Arabic (native/bilingual) and English (conversation)" },
];

export const education: EducationItem[] = [
  {
    title: "9-Month Professional Diploma",
    institution: "Information Technology Institute (ITI) · Open-Source Application Development Track",
    period: "Oct 2023 - Jul 2024 · El Mansoura, Egypt",
  },
  {
    title: "Bachelor's Degree in Computer Science",
    institution: "Mansoura University · Graduation Project: Health Care System (A+)",
    period: "2018 - 2022 · El Mansoura, Egypt",
  },
];

export const trainings: CertificationItem[] = [
  {
    title: "Front End Web Development",
    issuer: "Information Technology Institute (ITI Summer Training) · Jun 2021 - Aug 2021 · El Mansoura, Egypt",
  },
  {
    title: "Front End Web Development",
    issuer:
      "Consultation Center of Computers & Information System (CCIC) · Jul 2020 - Sep 2020 · El Mansoura, Egypt",
  },
];
