import { ArrowUpRight } from "lucide-react";

import { certifications, education } from "@/content/site";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function CredentialsSection() {
  return (
    <section id="credentials" className="py-14 sm:py-18 lg:py-24">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Education & Certifications"
            title="Clean, compact credibility signals."
            description="A simple section for formal education and supporting certifications, kept intentionally minimal to preserve the premium rhythm of the page."
          />
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-[0.82fr_1.18fr]">
          <Reveal className="surface-interactive rounded-[1.8rem] border border-[var(--line)] bg-white/85 p-6 shadow-[var(--shadow-soft)]">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--text-muted)]">
              Education
            </p>
            {education.map((item) => (
              <div key={item.title} className="surface-soft-lift mt-5 rounded-[1.4rem] border border-[var(--line)] bg-[var(--surface-strong)] p-5">
                <h3 className="font-display text-2xl tracking-[-0.04em] text-[var(--text-primary)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm font-medium text-[var(--text-secondary)]">
                  {item.institution}
                </p>
                <p className="mt-1 text-sm text-[var(--text-muted)]">{item.period}</p>
              </div>
            ))}
          </Reveal>

          <Reveal
            delay={0.08}
            className="surface-interactive rounded-[1.8rem] border border-[var(--line)] bg-white/85 p-6 shadow-[var(--shadow-soft)]"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--text-muted)]">
              Certifications
            </p>
            <div className="mt-5 grid gap-3">
              {certifications.map((item) => (
                <div
                  key={item.title}
                  className="surface-soft-lift flex flex-wrap items-center justify-between gap-4 rounded-[1.25rem] border border-[var(--line)] bg-[var(--surface-strong)] p-4"
                >
                  <div>
                    <h3 className="text-base font-semibold tracking-[-0.02em] text-[var(--text-primary)]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-[var(--text-secondary)]">{item.issuer}</p>
                  </div>

                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="subtle-link inline-flex items-center gap-1 text-sm font-medium text-[var(--accent-strong)] transition-colors hover:text-[var(--accent)]"
                    >
                      View
                      <ArrowUpRight className="size-4" />
                    </a>
                  ) : null}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
