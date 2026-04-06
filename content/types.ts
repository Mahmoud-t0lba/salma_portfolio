export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type HeroHighlight = {
  label: string;
  value: string;
};

export type ExpertiseItem = {
  title: string;
  description: string;
};

export type SnapshotItem = {
  label: string;
  value: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type SkillSpotlight = {
  title: string;
  description: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  employmentType: string;
  start: string;
  end: string;
  summary: string;
  bullets: string[];
};

export type ProjectLinkKind =
  | "appStore"
  | "googlePlay"
  | "github"
  | "caseStudy"
  | "liveDemo";

export type ProjectItem = {
  name: string;
  category: string;
  description: string;
  role: string;
  platforms: string[];
  stack: string[];
  projectContext: string[];
  contributions: string[];
  links: Partial<Record<ProjectLinkKind, string>>;
  featured?: boolean;
};

export type EducationItem = {
  title: string;
  institution: string;
  period: string;
};

export type CertificationItem = {
  title: string;
  issuer: string;
  href?: string;
};
