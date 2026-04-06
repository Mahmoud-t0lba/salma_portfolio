import { Github, Linkedin, Mail, Phone } from "lucide-react";

import { headerContactLinks, navItems, siteConfig } from "@/content/site";

import { ButtonLink } from "@/components/ui/button-link";
import { ScrollProgress } from "@/components/ui/scroll-progress";

const headerIcons = {
  Email: Mail,
  GitHub: Github,
  LinkedIn: Linkedin,
  Phone,
};

export function SiteHeader() {
  return (
    <header className="relative sticky top-0 z-50 border-b border-[var(--line)] bg-[color:rgba(245,242,235,0.82)] backdrop-blur-xl">
      <ScrollProgress />
      <div className="mx-auto grid w-full max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-5 py-4 sm:px-6 lg:grid-cols-[minmax(13rem,1fr)_auto_auto] lg:gap-6 lg:px-8">
        <a href="#home" className="min-w-0 max-w-[13rem] lg:pr-4 xl:max-w-none xl:pr-8">
          <div className="truncate font-display text-[1.05rem] font-semibold tracking-[-0.03em] text-[var(--text-primary)]">
            {siteConfig.name}
          </div>
          <div className="hidden text-[0.68rem] uppercase tracking-[0.2em] text-[var(--text-muted)] xl:block">
            {siteConfig.role}
          </div>
        </a>

        <nav className="hidden items-center gap-5 xl:flex" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="subtle-link text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center justify-self-end gap-2 sm:gap-3">
          <div className="hidden items-center gap-2 2xl:flex">
            {headerContactLinks.map((link) => {
              const Icon = headerIcons[link.label as keyof typeof headerIcons];

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={link.label}
                  className="surface-soft-lift inline-flex size-10 items-center justify-center rounded-full border border-[var(--line)] bg-white/80 text-[var(--text-secondary)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent-strong)]"
                >
                  <Icon className="size-4" />
                </a>
              );
            })}
          </div>
          <a
            href="#projects"
            className="subtle-link hidden text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)] lg:inline-flex"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="subtle-link hidden text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)] lg:inline-flex"
          >
            Contact
          </a>
          <ButtonLink
            href={siteConfig.cvDownloadHref}
            variant="secondary"
            download
            className="min-h-12 min-w-[10rem] px-5 text-[0.92rem] sm:min-h-13 sm:min-w-[11rem] sm:px-6 xl:min-w-[12rem] xl:px-7"
          >
            Download CV
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
