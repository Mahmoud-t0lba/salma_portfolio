import type { SkillGroup, SkillSpotlight } from "@/content/types";

export const skillSpotlights: SkillSpotlight[] = [
  {
    title: "Flutter Core",
    description:
      "Production-focused Flutter delivery across app structure, state management, UI quality, and release execution.",
  },
  {
    title: "Native Awareness",
    description:
      "Light Swift, SwiftUI, and Kotlin exposure that supports Flutter integration work when platform-specific handling is needed.",
  },
  {
    title: "Delivery Workflow",
    description:
      "Architecture, CI/CD, code review, sprint planning, and collaboration practices shaped by real product teams.",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages & Frameworks",
    items: ["Dart", "Flutter", "Swift", "SwiftUI", "Kotlin"],
  },
  {
    title: "Architecture & Patterns",
    items: [
      "Clean Architecture",
      "MVVM",
      "MVC",
      "OOP",
      "SOLID",
      "Design Patterns",
      "Dependency Injection (GetIt)",
      "Repository Pattern",
      "Feature-Based Architecture",
      "Scalable App Architecture",
    ],
  },
  {
    title: "State Management",
    items: ["Bloc/Cubit", "Provider", "GetX", "Riverpod"],
  },
  {
    title: "Native & Platform Integration",
    items: [
      "iOS Native",
      "Android Native",
      "Flutter Native Integration",
      "JSON Parsing",
      "Deep Linking",
      "App Links",
      "App Publishing",
    ],
  },
  {
    title: "Networking & Realtime",
    items: ["REST APIs", "GraphQL", "Dio", "HTTP", "WebSocket", "Postman"],
  },
  {
    title: "Storage & Services",
    items: [
      "Hive",
      "SharedPreferences",
      "Sqflite",
      "Flutter Secure Storage",
      "Firebase",
      "FCM",
      "Local Notifications",
      "Google Maps",
      "Push Notifications",
    ],
  },
  {
    title: "Workflow & Delivery",
    items: [
      "Agile (Scrum)",
      "Jira",
      "Trello",
      "Git",
      "GitHub",
      "GitHub Actions",
      "Bitrise (CI/CD)",
      "Fastlane",
      "Code Review",
      "Sprint Planning",
      "Team Collaboration",
    ],
  },
];
