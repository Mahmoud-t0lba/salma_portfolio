import { Layers3, Sparkles, Workflow } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/content/site";

const principles = [
  {
    title: "Architecture-first execution",
    description: "Clean structure, dependency management, and maintainable codebases that can keep growing.",
    icon: Layers3,
  },
  {
    title: "Product-aware engineering",
    description: "Close collaboration with stakeholders and designers to keep delivery useful, clear, and user-focused.",
    icon: Sparkles,
  },
  {
    title: "Dependable delivery rhythm",
    description: "Sprint planning, code review, and release-minded execution shaped by real team workflows.",
    icon: Workflow,
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-14 sm:py-18 lg:py-24">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="Built for teams that care about quality, clarity, and long-term maintainability."
            description={siteConfig.professionalSummary}
          />
        </Reveal>

        <div className="grid gap-4">
          {siteConfig.about.map((paragraph, index) => (
            <Reveal
              key={paragraph}
              delay={0.08 * (index + 1)}
              className="surface-interactive rounded-[1.6rem] border border-[var(--line)] bg-white/80 p-6 shadow-[var(--shadow-soft)]"
            >
              <p className="text-base leading-7 text-[var(--text-secondary)]">{paragraph}</p>
            </Reveal>
          ))}

          <div className="grid gap-4 md:grid-cols-3">
            {principles.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal
                  key={item.title}
                  delay={0.2 + index * 0.05}
                  className="surface-interactive rounded-[1.6rem] border border-[var(--line)] bg-[var(--surface-strong)] p-5"
                >
                  <Icon className="size-5 text-[var(--accent)]" />
                  <h3 className="mt-4 text-sm font-semibold tracking-[-0.01em] text-[var(--text-primary)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                    {item.description}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
