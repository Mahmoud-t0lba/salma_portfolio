import type { ExperienceItem } from "@/content/types";

export const experienceSectionCopy = {
  eyebrow: "Experience",
  title: "A progression across real front-end implementation work.",
  description:
    "Presented as portfolio-ready summaries that stay faithful to the CV while improving clarity for recruiters and hiring teams.",
} as const;

export const experience: ExperienceItem[] = [
  {
    role: "UI Developer",
    company: "Alqemam / QTech",
    location: "Mansoura, Egypt",
    start: "Aug 2024",
    end: "Present",
    summary:
      "Design and implement responsive, user-friendly interfaces for web and mobile applications as part of the Alqemam / QTech team.",
    bullets: [
      "Design responsive, user-friendly interfaces across active web and mobile application work.",
      "Turn interface requirements into front-end implementation that stays clear and easy to navigate.",
      "Contribute UI-focused delivery with attention to usability, responsiveness, and practical execution.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Al Alamiyya Al Hura",
    location: "El Mansoura, Egypt",
    employmentType: "Internship",
    start: "Jul 2022",
    end: "Sep 2022",
    summary:
      "Built hands-on front-end experience during an internship focused on core web technologies and Vue.js project work.",
    bullets: [
      "Developed two websites using native HTML, CSS, and JavaScript.",
      "Completed a project using Vue.js.",
      "Strengthened practical implementation skills through focused front-end training and delivery work.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Freelance",
    location: "Remote",
    employmentType: "Freelance",
    start: "Jan 2021",
    end: "Nov 2021",
    summary:
      "Delivered website work for different clients through freelance front-end development.",
    bullets: [
      "Developed and maintained websites for various clients.",
      "Worked across different project needs with a practical front-end implementation approach.",
    ],
  },
];
