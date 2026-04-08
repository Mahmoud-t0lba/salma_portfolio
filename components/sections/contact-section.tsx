import { ArrowRight, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";
import { contactItems, contactSectionCopy, siteConfig } from "@/content/site";

const contactIcons = {
  Email: Mail,
  LinkedIn: Linkedin,
  GitHub: Github,
  Phone,
} as const;

export function ContactSection() {
  return (
    <section id="contact" className="section-glow py-14 sm:py-18 lg:py-24">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="surface-interactive surface-shell aurora-panel section-grid rounded-[2rem] border border-[var(--line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(248,244,236,0.96))] p-6 shadow-[var(--shadow-strong)] sm:p-8">
            <p className="relative z-10 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--text-muted)]">
              {contactSectionCopy.eyebrow}
            </p>
            <div className="relative z-10 mt-5 grid gap-8 lg:grid-cols-[1fr_0.92fr]">
              <div>
                <h2 className="font-display text-3xl tracking-[-0.05em] text-[var(--text-primary)] sm:text-4xl">
                  {contactSectionCopy.title}
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--text-secondary)]">
                  {siteConfig.contactStatement}
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <ButtonLink href={`mailto:${siteConfig.email}`}>
                    {contactSectionCopy.primaryCtaLabel}
                    <ArrowRight className="ml-2 size-4" />
                  </ButtonLink>
                  <ButtonLink href={siteConfig.cvDownloadHref} variant="secondary" download>
                    Download CV
                  </ButtonLink>
                </div>
                <div className="surface-soft-lift mt-6 inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white/80 px-4 py-2 text-sm text-[var(--text-secondary)]">
                  <MapPin className="size-4 text-[var(--accent)]" />
                  {contactSectionCopy.locationLabel}
                </div>
              </div>

              <div className="grid gap-3">
                {contactItems.map((item, index) => {
                  const Icon = contactIcons[item.label];

                  return (
                    <Reveal
                      key={item.label}
                      delay={index * 0.04}
                      className="surface-soft-lift surface-shell metric-card rounded-[1.35rem] border border-[var(--line)] bg-white/85 p-4"
                    >
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                        className="flex items-center justify-between gap-4"
                      >
                        <div className="flex items-center gap-3">
                          <div className="rounded-full border border-[var(--line)] bg-[var(--accent-soft)] p-2.5 text-[var(--accent-strong)]">
                            <Icon className="size-4" />
                          </div>
                          <div>
                            <p className="text-xs uppercase tracking-[0.22em] text-[var(--text-muted)]">
                              {item.label}
                            </p>
                            <p className="mt-1 text-sm font-medium text-[var(--text-primary)]">
                              {item.value}
                            </p>
                          </div>
                        </div>
                        <ArrowRight className="size-4 text-[var(--text-muted)]" />
                      </a>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
