import { experience, experienceSectionCopy } from "@/content/experience";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function ExperienceSection() {
  return (
    <section id="experience" className="section-glow py-14 sm:py-18 lg:py-24">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow={experienceSectionCopy.eyebrow}
            title={experienceSectionCopy.title}
            description={experienceSectionCopy.description}
          />
        </Reveal>

        <div className="timeline-rail mt-10 space-y-5">
          {experience.map((item, index) => (
            <Reveal
              key={`${item.company}-${item.role}`}
              delay={index * 0.05}
              className="surface-interactive surface-shell timeline-card rounded-[1.9rem] border border-[var(--line)] bg-white/85 p-6 pl-10 shadow-[var(--shadow-soft)] sm:p-7 sm:pl-12"
            >
              <div className="grid gap-6 lg:grid-cols-[16rem_1fr]">
                <div className="lg:pr-6 lg:border-r lg:border-[var(--line)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--text-muted)]">
                    {item.start} - {item.end}
                  </p>
                  <div className="project-index !left-auto !right-6 !top-6">{`0${index + 1}`}</div>
                  <h3 className="mt-3 font-display text-2xl tracking-[-0.04em] text-[var(--text-primary)]">
                    {item.role}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-[var(--text-secondary)]">
                    {item.company}
                    {item.employmentType ? ` · ${item.employmentType}` : ""}
                  </p>
                  <p className="mt-1 text-sm text-[var(--text-muted)]">{item.location}</p>
                </div>

                <div>
                  <p className="text-base leading-7 text-[var(--text-secondary)]">{item.summary}</p>
                  <ul className="mt-5 space-y-3 text-sm leading-6 text-[var(--text-secondary)]">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
