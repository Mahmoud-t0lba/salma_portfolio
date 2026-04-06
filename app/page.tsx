import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { CredentialsSection } from "@/components/sections/credentials-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ExpertiseSection } from "@/components/sections/expertise-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SnapshotSection } from "@/components/sections/snapshot-section";
import { TechStackSection } from "@/components/sections/tech-stack-section";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ExpertiseSection />
        <TechStackSection />
        <ExperienceSection />
        <ProjectsSection />
        <SnapshotSection />
        <CredentialsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
