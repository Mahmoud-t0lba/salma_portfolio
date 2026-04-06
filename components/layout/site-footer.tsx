import { siteConfig, socialLinks } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--line)] py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-5 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <p className="font-display text-lg font-semibold tracking-[-0.03em] text-[var(--text-primary)]">
            {siteConfig.name}
          </p>
          <p className="mt-1 text-sm text-[var(--text-secondary)]">{siteConfig.footerNote}</p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-secondary)]">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="subtle-link transition-colors hover:text-[var(--text-primary)]"
            >
              {link.label}
            </a>
          ))}
          <span className="text-[var(--text-muted)]">
            © {new Date().getFullYear()} {siteConfig.firstName}
          </span>
        </div>
      </div>
    </footer>
  );
}
