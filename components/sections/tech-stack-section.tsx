import { skillGroups, skillSpotlights } from "@/content/skills";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function TechStackSection() {
  return (
    <section id="tech-stack" className="py-14 sm:py-18 lg:py-24">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Tech Stack"
            title="A structured skills view built around how Mahmoud actually works."
            description="Instead of a random badge wall, the section is organized by real production responsibilities: Flutter delivery, architecture, platform services, light native integration support, and workflow."
          />
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {skillSpotlights.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 0.05}
              className="surface-interactive rounded-[1.75rem] border border-[var(--line)] bg-white/85 p-6 shadow-[var(--shadow-soft)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--text-muted)]">
                Focus Area
              </p>
              <h3 className="mt-4 text-xl font-semibold tracking-[-0.03em] text-[var(--text-primary)]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                {item.description}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Reveal
              key={group.title}
              delay={0.15 + index * 0.04}
              className="surface-interactive rounded-[1.75rem] border border-[var(--line)] bg-[var(--surface-strong)] p-6"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg font-semibold tracking-[-0.03em] text-[var(--text-primary)]">
                  {group.title}
                </h3>
                <span className="rounded-full border border-[var(--line)] bg-white px-3 py-1 text-xs text-[var(--text-muted)]">
                  {group.items.length}
                </span>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="surface-soft-lift rounded-full border border-[var(--line)] bg-white px-3 py-1.5 text-sm text-[var(--text-secondary)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
