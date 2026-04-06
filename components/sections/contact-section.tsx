import { ArrowRight, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/content/site";

const contactItems = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/mahmoud-t0lba",
    href: "https://www.linkedin.com/in/mahmoud-t0lba",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/Mahmoud-t0lba",
    href: "https://github.com/Mahmoud-t0lba/",
    icon: Github,
  },
  {
    label: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s+/g, "")}`,
    icon: Phone,
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-14 sm:py-18 lg:py-24">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="surface-interactive rounded-[2rem] border border-[var(--line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(248,244,236,0.96))] p-6 shadow-[var(--shadow-strong)] sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--text-muted)]">
              Contact
            </p>
            <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_0.92fr]">
              <div>
                <h2 className="font-display text-3xl tracking-[-0.05em] text-[var(--text-primary)] sm:text-4xl">
                  Let’s build high-quality mobile products with strong technical ownership.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--text-secondary)]">
                  {siteConfig.contactStatement}
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <ButtonLink href={`mailto:${siteConfig.email}`}>
                    Email Mahmoud
                    <ArrowRight className="ml-2 size-4" />
                  </ButtonLink>
                  <ButtonLink href={siteConfig.cvDownloadHref} variant="secondary" download>
                    Download CV
                  </ButtonLink>
                </div>
                <div className="surface-soft-lift mt-6 inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white/80 px-4 py-2 text-sm text-[var(--text-secondary)]">
                  <MapPin className="size-4 text-[var(--accent)]" />
                  Based in {siteConfig.location}
                </div>
              </div>

              <div className="grid gap-3">
                {contactItems.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <Reveal
                      key={item.label}
                      delay={index * 0.04}
                      className="surface-soft-lift rounded-[1.35rem] border border-[var(--line)] bg-white/85 p-4"
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
