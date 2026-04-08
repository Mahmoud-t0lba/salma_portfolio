"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

import { ButtonLink } from "@/components/ui/button-link";
import { Float } from "@/components/ui/float";
import { Reveal } from "@/components/ui/reveal";
import { heroHighlights, heroPanelContent, siteConfig, socialLinks } from "@/content/site";
import { withBasePath } from "@/lib/base-path";

const socialIcons = {
  Email: Mail,
  GitHub: Github,
  LinkedIn: Linkedin,
};

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const profileImageSrc = siteConfig.profileImageSrc ? withBasePath(siteConfig.profileImageSrc) : null;

  const contentY = useTransform(scrollY, [0, 640], [0, -24]);
  const cardY = useTransform(scrollY, [0, 640], [0, -34]);
  const cardRotate = useTransform(scrollY, [0, 640], [0, 2.2]);
  const orbY = useTransform(scrollY, [0, 640], [0, -42]);

  return (
    <section id="home" className="relative overflow-hidden pt-14 sm:pt-18">
      <div className="absolute inset-x-0 top-0 -z-10 h-[38rem] bg-[radial-gradient(circle_at_top_right,rgba(48,94,132,0.18),transparent_34%),radial-gradient(circle_at_top_left,rgba(255,255,255,0.92),transparent_28%)]" />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-[4%] top-24 -z-10 h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(95,137,172,0.36),transparent_70%)] blur-xl"
        style={reduceMotion ? undefined : { y: orbY }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute right-[8%] top-16 -z-10 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(25,52,80,0.18),transparent_72%)] blur-2xl"
        style={reduceMotion ? undefined : { y: cardY }}
      />
      <div className="pointer-events-none absolute inset-x-[10%] top-16 -z-10 h-[28rem] rounded-[3rem] border border-white/38 bg-white/18 shadow-[0_40px_90px_rgba(16,25,38,0.06)] backdrop-blur-[2px]" />

      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 pb-14 pt-10 sm:px-6 md:pb-18 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:pb-24 lg:pt-14">
        <Reveal className="max-w-3xl">
          <motion.div style={reduceMotion ? undefined : { y: contentY }}>
            <div className="hero-kicker surface-soft-lift inline-flex items-center rounded-full border border-[var(--line-strong)] bg-white/84 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--text-secondary)] shadow-[var(--shadow-soft)]">
              {siteConfig.status}
            </div>

            <h1 className="hero-title mt-7 font-display text-4xl tracking-[-0.06em] sm:text-5xl lg:text-[4.8rem] lg:leading-[0.94]">
              {siteConfig.headline}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-secondary)] sm:text-xl">
              {siteConfig.heroIntro}
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {heroPanelContent.tags.map((tag) => (
                <span
                  key={tag}
                  className="surface-soft-lift rounded-full border border-[var(--line)] bg-white/72 px-3 py-1.5 text-[0.76rem] font-medium uppercase tracking-[0.18em] text-[var(--text-secondary)]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="#projects">
                View Projects
                <ArrowRight className="ml-2 size-4" />
              </ButtonLink>
              <ButtonLink href={siteConfig.cvDownloadHref} variant="secondary" download>
                <Download className="mr-2 size-4" />
                Download CV
              </ButtonLink>
              <ButtonLink href="#contact" variant="ghost">
                Contact Me
              </ButtonLink>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-[var(--text-secondary)]">
              <span className="inline-flex items-center gap-2">
                <MapPin className="size-4 text-[var(--accent)]" />
                {siteConfig.location}
              </span>
              <span className="inline-flex items-center gap-2">
                <Phone className="size-4 text-[var(--accent)]" />
                {siteConfig.phone}
              </span>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              {socialLinks.map((link) => {
                const Icon = socialIcons[link.label as keyof typeof socialIcons];

                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    className="surface-soft-lift inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white/75 px-4 py-2 text-sm text-[var(--text-primary)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)]"
                    whileHover={reduceMotion ? undefined : { y: -4, scale: 1.02 }}
                  >
                    <Icon className="size-4 text-[var(--accent)]" />
                    {link.label}
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </Reveal>

        <Reveal className="lg:pt-10" delay={0.12} from="right">
          <Float delay={0.65} distance={10}>
            <motion.div
              style={reduceMotion ? undefined : { y: cardY, rotate: cardRotate }}
              className="surface-interactive surface-shell aurora-panel rounded-[2rem] border border-[var(--line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(251,249,244,0.92))] p-6 shadow-[var(--shadow-strong)] sm:p-7"
            >
              <div className="group relative mb-6 overflow-hidden rounded-[1.75rem] border border-[var(--line)] bg-[var(--surface-strong)] shadow-[var(--shadow-soft)]">
                <div className="relative aspect-[4/4.8]">
                  {profileImageSrc ? (
                    <>
                      <div className="profile-halo" />
                      <div className="orbital-ring" />

                      <Image
                        src={profileImageSrc}
                        alt={siteConfig.profileImageAlt}
                        fill
                        priority
                        sizes="(min-width: 1024px) 32rem, 100vw"
                        className="object-cover object-center transition-transform duration-[1600ms] ease-out group-hover:scale-[1.035]"
                      />

                      <motion.div
                        className="surface-soft-lift absolute left-4 top-4 rounded-full border border-white/24 bg-white/12 px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md"
                        animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
                        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4.8, ease: "easeInOut" }}
                      >
                        {heroPanelContent.tags[0]}
                      </motion.div>

                      <motion.div
                        className="surface-soft-lift absolute right-4 top-4 rounded-full border border-white/24 bg-white/12 px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md"
                        animate={reduceMotion ? undefined : { y: [0, 6, 0] }}
                        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5.6, ease: "easeInOut" }}
                      >
                        {heroPanelContent.tags[2]}
                      </motion.div>

                      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[rgba(20,24,33,0.58)] to-transparent" />

                      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
                        <div className="rounded-[1rem] border border-white/20 bg-white/12 px-4 py-3 backdrop-blur-md">
                          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-white/72">
                            {siteConfig.name}
                          </p>
                          <p className="mt-1 text-sm font-medium text-white">{siteConfig.role}</p>
                        </div>

                        <div className="rounded-full border border-white/20 bg-white/12 px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-md">
                          {heroPanelContent.badge}
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="flex h-full flex-col justify-between bg-[radial-gradient(circle_at_top_right,rgba(48,94,132,0.28),transparent_36%),linear-gradient(180deg,#f9f5ee_0%,#ecf1f5_100%)] p-6 sm:p-7">
                      <div className="flex items-center justify-between gap-4">
                        <span className="rounded-full border border-[var(--line)] bg-white/80 px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[var(--text-secondary)]">
                          {heroPanelContent.mediaEyebrow}
                        </span>
                        <span className="rounded-full border border-[var(--line)] bg-[var(--accent-soft)] px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[var(--accent-strong)]">
                          {heroPanelContent.badge}
                        </span>
                      </div>

                      <div className="mt-8">
                        <div className="font-display text-6xl tracking-[-0.08em] text-[var(--text-primary)] sm:text-7xl">
                          SA
                        </div>
                        <p className="mt-8 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--text-muted)]">
                          {siteConfig.name}
                        </p>
                        <p className="mt-2 text-xl font-semibold tracking-[-0.03em] text-[var(--text-primary)] sm:text-2xl">
                          {siteConfig.role}
                        </p>
                        <p className="mt-4 max-w-sm text-sm leading-6 text-[var(--text-secondary)]">
                          {heroPanelContent.mediaDescription}
                        </p>
                      </div>

                      <div className="mt-8 flex flex-wrap gap-2">
                        {heroPanelContent.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-[var(--line)] bg-white/80 px-3 py-1.5 text-xs font-medium text-[var(--text-secondary)]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="relative z-10 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--text-muted)]">
                    {heroPanelContent.eyebrow}
                  </p>
                  <h2 className="mt-3 font-display text-2xl tracking-[-0.04em] text-[var(--text-primary)]">
                    {heroPanelContent.title}
                  </h2>
                </div>

                <div className="rounded-full border border-[var(--line)] bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent-strong)]">
                  {heroPanelContent.badge}
                </div>
              </div>

              <div className="relative z-10 mt-8 grid gap-3 sm:grid-cols-2">
                {heroHighlights.map((item) => (
                  <div
                    key={item.label}
                    className="surface-soft-lift metric-card rounded-[1.35rem] border border-[var(--line)] bg-white/85 p-4"
                  >
                    <p className="text-xs uppercase tracking-[0.22em] text-[var(--text-muted)]">
                      {item.label}
                    </p>
                    <p className="mt-2 text-base font-semibold tracking-[-0.02em] text-[var(--text-primary)]">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="surface-soft-lift surface-shell relative z-10 mt-6 rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface-strong)] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--text-muted)]">
                  {heroPanelContent.recruiterTitle}
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-[var(--text-secondary)]">
                  {heroPanelContent.recruiterHighlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="relative z-10 mt-6 flex flex-wrap gap-2">
                {heroPanelContent.tags.map((tag) => (
                  <span
                    key={tag}
                    className="surface-soft-lift rounded-full border border-[var(--line)] bg-white/80 px-3 py-1.5 text-xs font-medium text-[var(--text-secondary)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </Float>
        </Reveal>
      </div>
    </section>
  );
}
