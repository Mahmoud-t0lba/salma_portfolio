import type { ProjectItem, ProjectLinkKind } from "@/content/types";

export const projectLinkMeta: { key: ProjectLinkKind; label: string }[] = [
  { key: "appStore", label: "App Store" },
  { key: "googlePlay", label: "Google Play" },
  { key: "caseStudy", label: "Case Study" },
  { key: "liveDemo", label: "Live Demo" },
];

export const projectCategoryOrder = [
  "Transport & Logistics",
  "Social & Lifestyle",
  "Education & Utilities",
  "Other",
] as const;

export const projects: ProjectItem[] = [
  {
    name: "By Bus",
    category: "Transport & Logistics",
    description:
      "Bus transportation app for Egypt focused on route booking, trip visibility, and a smoother rider experience across Android and iOS.",
    role: "Senior Flutter Developer",
    platforms: ["Android", "iOS"],
    stack: ["Flutter", "Dart", "Clean Architecture", "API Integration", "Real-Time Tracking"],
    projectContext: [
      "Public Android and iOS release for an Egypt-focused bus transportation service.",
      "Store listings highlight route booking, live tracking, multiple payment options, and rider convenience.",
    ],
    contributions: [
      "Owned the product journey from conception to launch across both user-facing apps.",
      "Designed the app architecture and code structure with scalability in mind.",
      "Aligned business goals with technical execution through product-minded delivery.",
      "Supported quality through code review and engineering best practices.",
    ],
    links: {
      googlePlay: "https://play.google.com/store/apps/details?id=com.bybus.passenger",
      appStore: "https://apps.apple.com/eg/app/by-bus/id6504498504",
    },
    featured: true,
  },
  {
    name: "SAWA",
    category: "Social & Lifestyle",
    description:
      "Carpooling app in Egypt that connects drivers and passengers through ride discovery, booking, and safer shared commuting flows.",
    role: "Senior Flutter Developer",
    platforms: ["Android", "iOS"],
    stack: ["Flutter", "Dart", "UI/UX", "Booking Flows", "Maps"],
    projectContext: [
      "Public Android and iOS release centered on cost-effective and sustainable commuting in Egypt.",
      "Store listings mention ride offers, booking requests, in-app messaging, recurring rides, and ratings.",
    ],
    contributions: [
      "Contributed to cross-platform feature delivery in a production Flutter codebase.",
      "Supported UI refinement and user-experience improvements across ongoing releases.",
      "Worked with stakeholders to help keep delivery aligned and on schedule.",
    ],
    links: {
      googlePlay: "https://play.google.com/store/apps/details?id=com.fusion.sawa",
      appStore: "https://apps.apple.com/eg/app/sawa/id1645381223",
    },
    featured: true,
  },
  {
    name: "Engineering Tracks",
    category: "Education & Utilities",
    description:
      "Engineering education and training app for an Egyptian-Saudi academy offering courses, online learning, and professional development content.",
    role: "Flutter Developer",
    platforms: ["Android", "iOS"],
    stack: ["Flutter", "Dart", "E-learning", "REST APIs", "Push Notifications"],
    projectContext: [
      "Public Android and iOS release for engineering training, online courses, and academic-to-market skill development.",
      "Store listings position the app around e-learning, quizzes, consultancy-driven learning, and course access.",
    ],
    contributions: [
      "Built and maintained production mobile functionality across Android and iOS.",
      "Contributed to feature delivery, interface polish, and overall application quality.",
      "Supported dependable execution across collaborative team and client requirements.",
    ],
    links: {
      googlePlay: "https://play.google.com/store/apps/details?id=com.phonegap.engTracks",
      appStore: "https://apps.apple.com/eg/app/engineering-tracks/id1543736435",
    },
    featured: true,
  },
  {
    name: "Teksa",
    category: "Other",
    description:
      "Business services app for a Saudi IT company offering web design, app development, hosting, and programming services through mobile.",
    role: "Flutter Developer",
    platforms: ["Android", "iOS"],
    stack: ["Flutter", "Dart", "Business Services", "API Integration", "UI Delivery"],
    projectContext: [
      "Public Android and iOS release for a business offering digital presence and software services.",
      "Store listings cover web design, app development, hosting, programming, and API-related solution delivery.",
    ],
    contributions: [
      "Helped deliver a production-ready mobile experience across both major platforms.",
      "Applied practical Flutter development skills across feature work and release preparation.",
      "Supported polished execution in collaboration with product stakeholders.",
    ],
    links: {
      googlePlay: "https://play.google.com/store/apps/details?id=com.Teksa.teksa",
      appStore: "https://apps.apple.com/eg/app/teksa/id6483865247",
    },
    featured: true,
  },
  {
    name: "Ajlakum",
    category: "Transport & Logistics",
    description: "Transport and logistics project included in the CV as part of Mahmoud's applied mobile product experience.",
    role: "Flutter Developer",
    platforms: ["Mobile"],
    stack: ["Flutter", "Dart"],
    projectContext: [
      "Listed in the CV under transport and logistics work.",
      "No verified public store listing has been added to the portfolio yet.",
    ],
    contributions: ["Included as part of Mahmoud's transport-focused project experience in the CV."],
    links: {},
  },
  {
    name: "Wird",
    category: "Social & Lifestyle",
    description:
      "Islamic companion app that combines Quran reading, adhkar, prayer times, Qibla, recitations, widgets, and reminders in one mobile experience.",
    role: "Flutter Developer",
    platforms: ["Android", "iOS"],
    stack: ["Flutter", "Dart", "Local Notifications", "Widgets", "Content-Rich UI"],
    projectContext: [
      "Public Android and iOS release combining Quran, supplications, prayer tools, and Islamic audio content.",
      "Store listings mention widgets, notifications, progress saving, shortcuts, and verse sharing flows.",
    ],
    contributions: [
      "Listed in the CV as part of Mahmoud's public mobile release experience.",
      "Public store presence shows a content-rich utility app with multiple daily-use flows inside one product.",
    ],
    links: {
      googlePlay: "https://play.google.com/store/apps/details?id=com.quran.wird&pli=1",
      appStore: "https://apps.apple.com/eg/app/wird-%D9%88-%D8%B1%D8%AF/id6759871577",
    },
  },
  {
    name: "Kumquaty",
    category: "Social & Lifestyle",
    description:
      "Grocery shopping app built around fresh fruits, vegetables, and farm-sourced produce ordering with delivery convenience.",
    role: "Flutter Developer",
    platforms: ["Android", "iOS"],
    stack: ["Flutter", "Dart", "E-commerce", "Ordering Flows", "Delivery Experience"],
    projectContext: [
      "Public Android and iOS release focused on produce shopping and delivery.",
      "Store listings emphasize fresh local products, browsing, ordering, delivery, and product transparency.",
    ],
    contributions: [
      "Listed in the CV as part of Mahmoud's social and lifestyle app work.",
      "Public store presence reflects product work in ordering and commerce-style mobile UX.",
    ],
    links: {
      googlePlay: "https://play.google.com/store/apps/details?id=com.kian.kumquatyUser",
      appStore: "https://apps.apple.com/eg/app/kumquaty/id6471918075",
    },
  },
  {
    name: "Sadakat",
    category: "Social & Lifestyle",
    description:
      "Islamic lifestyle app centered on prayer times, adhkar, supplications, and tasbeeh in a lightweight Android experience.",
    role: "Flutter Developer",
    platforms: ["Android"],
    stack: ["Flutter", "Dart", "Prayer Times", "Lifestyle Utility"],
    projectContext: [
      "Public Android release focused on daily Islamic reminders and prayer-time awareness.",
      "Store listing mentions prayer times by place, morning and evening adhkar, and digital tasbeeh.",
    ],
    contributions: [
      "Listed in the CV as part of Mahmoud's public Android release work.",
      "Represents public utility-style mobile delivery in the lifestyle space.",
    ],
    links: {
      googlePlay: "https://play.google.com/store/apps/details?id=sa.aait.aspbranch.hassanat",
    },
  },
  {
    name: "A-Plus",
    category: "Education & Utilities",
    description:
      "Online learning app delivering courses and lectures across multiple study areas through a mobile-first education experience.",
    role: "Flutter Developer",
    platforms: ["Android", "iOS"],
    stack: ["Flutter", "Dart", "Online Learning", "Video-Based Learning", "Education UX"],
    projectContext: [
      "Public Android and iOS release for online learning and lecture access.",
      "Store listings highlight course libraries, lecture access, teacher-led study content, and mobile learning convenience.",
    ],
    contributions: [
      "Listed in the CV as part of Mahmoud's education-focused product work.",
      "Public store presence reflects experience with content-led education applications.",
    ],
    links: {
      googlePlay: "https://play.google.com/store/apps/details?id=com.sellx.aplus_student",
      appStore: "https://apps.apple.com/eg/app/a-plus/id1543956025",
    },
  },
  {
    name: "Maktabi Plus",
    category: "Education & Utilities",
    description: "Education and utility project listed in the CV as part of Mahmoud's broader product work.",
    role: "Flutter Developer",
    platforms: ["Mobile"],
    stack: ["Flutter", "Dart"],
    projectContext: [
      "Listed in the CV under education and utility work.",
      "No verified public store listing has been added to the portfolio yet.",
    ],
    contributions: ["Included in the CV as part of Mahmoud's broader education and utility app work."],
    links: {},
  },
  {
    name: "GENE",
    category: "Other",
    description:
      "iOS booking app designed around theatre discovery, show schedules, interactive seat selection, and secure payment flows.",
    role: "Flutter Developer",
    platforms: ["iOS"],
    stack: ["Flutter", "Dart", "Ticketing", "Seat Selection", "Booking UX"],
    projectContext: [
      "Public iOS release focused on a theatre-style booking experience.",
      "Store listing highlights show browsing, schedule details, seat maps, and secure online payments.",
    ],
    contributions: [
      "Listed in the CV as part of Mahmoud's public iOS release experience.",
      "Represents iOS-facing product work in booking and transaction-heavy user journeys.",
    ],
    links: {
      appStore: "https://apps.apple.com/iq/app/gene/id6743855109?l=ar",
    },
  },
  {
    name: "Shahia",
    category: "Other",
    description:
      "iOS shopping app for Shahia's frozen meat and vegetable product catalog, presented as a retail ordering experience.",
    role: "Flutter Developer",
    platforms: ["iOS"],
    stack: ["Flutter", "Dart", "Shopping", "Product Catalog", "Retail UX"],
    projectContext: [
      "Public iOS release focused on retail shopping for Shahia frozen food products.",
      "Store listing identifies the app as a shopping experience around meat and frozen vegetable offerings.",
    ],
    contributions: [
      "Listed in the CV as part of Mahmoud's public iOS release experience.",
      "Represents product delivery work in a commerce-oriented mobile flow.",
    ],
    links: {
      appStore: "https://apps.apple.com/iq/app/%D8%B4%D9%87%D9%8A%D8%A9/id6744401579?l=ar",
    },
  },
];
