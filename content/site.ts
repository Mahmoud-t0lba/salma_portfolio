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
  name: "Mahmoud Tolba",
  firstName: "Mahmoud",
  role: "Senior Flutter Developer",
  headline: "Senior Flutter Developer building scalable, production-grade Flutter apps.",
  heroIntro:
    "I am a Senior Flutter Developer with 5+ years of experience building scalable, high-performance Flutter apps for Android and iOS. My work combines clean architecture, strong state management, API integration, polished UI, and dependable production delivery, with a light native background that helps when Flutter products need basic iOS or Android integration.",
  professionalSummary:
    "Mahmoud is a Senior Flutter Developer with 5+ years of experience delivering mobile products across transport, social, education, and utility domains. He specializes in scalable Flutter architecture, state management, API integration, and polished user experience, while also bringing a light native background in iOS and Android development for integration work when needed.",
  about: [
    "Mahmoud specializes in building maintainable Flutter applications for Android and iOS, with an engineering style shaped by Clean Architecture, SOLID principles, thoughtful UI execution, and production-ready code quality.",
    "He is comfortable owning mobile products end-to-end, working closely with cross-functional teams, and shipping business-aligned solutions. He also has a light background in iOS and Android native development, which helps when Flutter apps need platform-specific integration work.",
  ],
  status: "Currently working as a Senior Flutter Developer at Code7X",
  location: "Egypt",
  email: "mahmoudt0lba0111@gmail.com",
  phone: "+20 1097107762",
  cvDownloadHref: "/cv/mahmoud-tolba-cv.pdf",
  metaDescription:
    "Senior Flutter Developer with 5+ years of experience building scalable, production-grade Flutter apps across Android and iOS.",
  contactStatement:
    "If you are hiring a Senior Flutter Developer for product-focused delivery, cross-platform app development, or strong technical ownership across architecture and execution, let’s connect.",
  footerNote: "Built to present senior-level Flutter work with clarity and trust.",
} as const;

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Stack", href: "#tech-stack" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
  { label: "Credentials", href: "#credentials" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "Email", href: "mailto:mahmoudt0lba0111@gmail.com" },
  { label: "GitHub", href: "https://github.com/Mahmoud-t0lba/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mahmoud-t0lba" },
];

export const headerContactLinks: SocialLink[] = [
  { label: "Email", href: "mailto:mahmoudt0lba0111@gmail.com" },
  { label: "GitHub", href: "https://github.com/Mahmoud-t0lba/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mahmoud-t0lba" },
  { label: "Phone", href: "tel:+201097107762" },
];

export const heroHighlights: HeroHighlight[] = [
  { label: "Experience", value: "5+ years" },
  { label: "Platforms", value: "Android & iOS" },
  { label: "Current role", value: "Senior Flutter Developer" },
  { label: "Working style", value: "Architecture + delivery" },
];

export const expertiseItems: ExpertiseItem[] = [
  {
    title: "Scalable Flutter Delivery",
    description:
      "Build cross-platform apps that are designed for long-term ownership, not short-term demos.",
  },
  {
    title: "Architecture & Code Quality",
    description:
      "Use Clean Architecture, SOLID thinking, repository-driven structure, and dependency injection to keep codebases maintainable.",
  },
  {
    title: "State Management & App Structure",
    description:
      "Work across Bloc/Cubit, Provider, GetX, and Riverpod to build scalable Flutter applications with clear structure.",
  },
  {
    title: "UI Quality & Product Thinking",
    description:
      "Balance technical execution with thoughtful interface quality and practical product decisions.",
  },
  {
    title: "API & Realtime Integrations",
    description:
      "Work comfortably with REST, GraphQL, WebSocket, Firebase, maps, and persistence layers used in production apps.",
  },
  {
    title: "Performance & Release Readiness",
    description:
      "Focus on smooth user experience, stable delivery, and production-minded improvements that matter after launch.",
  },
  {
    title: "Native iOS & Android Integration",
    description:
      "Work with light iOS and Android native knowledge when Flutter projects need platform-specific integration support.",
  },
  {
    title: "Delivery & Collaboration",
    description:
      "Contribute across sprint planning, code review, and business-aligned delivery with cross-functional teams.",
  },
];

export const resumeSnapshot: SnapshotItem[] = [
  { label: "Years of experience", value: "5+ years building Flutter apps for production" },
  { label: "Primary focus", value: "Scalable Android and iOS applications" },
  { label: "Architecture strength", value: "Clean Architecture, MVVM, SOLID, DI" },
  { label: "State management", value: "Bloc/Cubit, Provider, GetX, Riverpod" },
  { label: "Platforms", value: "Flutter across Android and iOS, with light Swift and Kotlin exposure" },
  { label: "Native background", value: "Light iOS and Android native background for Flutter integration support" },
  { label: "Delivery style", value: "Agile execution, code review, CI/CD, collaboration" },
  { label: "Product mindset", value: "End-to-end ownership with stakeholder-aligned delivery" },
];

export const education: EducationItem[] = [
  {
    title: "Bachelor's Degree in Computer Science",
    institution: "Mansoura University",
    period: "2018 - 2022",
  },
];

export const certifications: CertificationItem[] = [
  {
    title: "Advanced Flutter: Clean Architecture & Testing",
    issuer: "Udemy / Coursera",
  },
  {
    title: "Google Flutter & Dart – The Complete Guide",
    issuer: "Udemy",
  },
  {
    title: "Introduction to iOS Mobile Application Development",
    issuer: "Meta",
  },
  {
    title: "Agile Foundations",
    issuer: "LinkedIn Learning",
  },
  {
    title: "Claude 101",
    issuer: "Anthropic",
    href: "https://drive.google.com/file/d/1XDMxkt4irV6VRwCA_4GKVbEAYsRBU3ce/view?usp=sharing",
  },
];
