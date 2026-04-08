import { Layers3, Sparkles, Workflow } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { aboutPrinciples, aboutSectionCopy, siteConfig } from "@/content/site";

const principleIcons = {
  layers3: Layers3,
  sparkles: Sparkles,
  workflow: Workflow,
} as const;

export function AboutSection() {
  return (
    <section id="about" className="section-glow py-14 sm:py-18 lg:py-24">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow={aboutSectionCopy.eyebrow}
            title={aboutSectionCopy.title}
            description={aboutSectionCopy.description}
          />
        </Reveal>

        <div className="grid gap-4">
          {siteConfig.about.map((paragraph, index) => (
            <Reveal
              key={paragraph}
              delay={0.08 * (index + 1)}
              className="surface-interactive surface-shell aurora-panel rounded-[1.6rem] border border-[var(--line)] bg-white/80 p-6 shadow-[var(--shadow-soft)]"
            >
              <div className="relative z-10">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--text-muted)]">
                  Profile Lens 0{index + 1}
                </p>
                <p className="mt-4 text-base leading-7 text-[var(--text-secondary)]">{paragraph}</p>
              </div>
            </Reveal>
          ))}

          <div className="grid gap-4 md:grid-cols-3">
            {aboutPrinciples.map((item, index) => {
              const Icon = principleIcons[item.icon];

              return (
                <Reveal
                  key={item.title}
                  delay={0.2 + index * 0.05}
                  className="surface-interactive surface-shell metric-card rounded-[1.6rem] border border-[var(--line)] bg-[var(--surface-strong)] p-5"
                >
                  <div className="relative z-10">
                    <Icon className="size-5 text-[var(--accent)]" />
                    <h3 className="mt-4 text-sm font-semibold tracking-[-0.01em] text-[var(--text-primary)]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
