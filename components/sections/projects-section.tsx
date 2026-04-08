import {
  projectCategoryDescriptions,
  projectCategoryOrder,
  projects,
  projectsSectionCopy,
} from "@/content/projects";
import { ProjectLinks } from "@/components/ui/project-links";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function ProjectsSection() {
  return (
    <section id="projects" className="section-glow py-14 sm:py-18 lg:py-24">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow={projectsSectionCopy.eyebrow}
            title={projectsSectionCopy.title}
            description={projectsSectionCopy.description}
          />
        </Reveal>

        <div className="mt-10 space-y-12">
          {projectCategoryOrder.map((category, categoryIndex) => {
            const categoryProjects = projects.filter((project) => project.category === category);

            if (!categoryProjects.length) {
              return null;
            }

            return (
              <div key={category}>
                <Reveal delay={categoryIndex * 0.05}>
                  <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--text-muted)]">
                        {category}
                      </p>
                      <h3 className="mt-3 font-display text-2xl tracking-[-0.04em] text-[var(--text-primary)]">
                        {categoryProjects.length} project{categoryProjects.length > 1 ? "s" : ""} in this area
                      </h3>
                    </div>
                    <p className="max-w-2xl text-sm leading-6 text-[var(--text-secondary)]">
                      {projectCategoryDescriptions[category]}
                    </p>
                  </div>
                </Reveal>

                <div className="mt-6 grid gap-5 xl:grid-cols-2">
                  {categoryProjects.map((project, index) => {
                    const hasProjectLinks = Object.values(project.links).some(Boolean);

                    return (
                      <Reveal
                        key={project.name}
                        delay={index * 0.04}
                        className="surface-interactive surface-shell aurora-panel project-card rounded-[2rem] border border-[var(--line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(251,249,244,0.92))] p-6 shadow-[var(--shadow-strong)] sm:p-7"
                      >
                        <div className="project-index">{`0${index + 1}`}</div>
                        <div className="relative z-10 flex flex-wrap items-center gap-2">
                          <span className="rounded-full border border-[var(--line)] bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent-strong)]">
                            {project.category}
                          </span>
                          <span className="rounded-full border border-[var(--line)] bg-white/80 px-3 py-1 text-xs text-[var(--text-secondary)]">
                            {hasProjectLinks ? projectsSectionCopy.linkedLabel : projectsSectionCopy.listedLabel}
                          </span>
                          {project.platforms.map((platform) => (
                            <span
                              key={platform}
                              className="surface-soft-lift rounded-full border border-[var(--line)] bg-white/80 px-3 py-1 text-xs text-[var(--text-secondary)]"
                            >
                              {platform}
                            </span>
                          ))}
                        </div>

                        <div className="relative z-10 mt-6">
                          <h3 className="font-display text-2xl tracking-[-0.04em] text-[var(--text-primary)]">
                            {project.name}
                          </h3>
                          <p className="mt-2 text-sm font-medium uppercase tracking-[0.18em] text-[var(--text-muted)]">
                            {project.role}
                          </p>
                        </div>

                        <p className="relative z-10 mt-5 text-base leading-7 text-[var(--text-secondary)]">
                          {project.description}
                        </p>

                        <div className="relative z-10 mt-6">
                          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--text-muted)]">
                            Project Context
                          </p>
                          <ul className="mt-4 space-y-3 text-sm leading-6 text-[var(--text-secondary)]">
                            {project.projectContext.map((item) => (
                              <li key={item} className="flex gap-3">
                                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="relative z-10 mt-6 flex flex-wrap gap-2">
                          {project.stack.map((item) => (
                            <span
                              key={item}
                              className="surface-soft-lift rounded-full border border-[var(--line)] bg-white px-3 py-1.5 text-sm text-[var(--text-secondary)]"
                            >
                              {item}
                            </span>
                          ))}
                        </div>

                        <div className="relative z-10 mt-6">
                          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--text-muted)]">
                            Key Contributions
                          </p>
                          <ul className="mt-4 space-y-3 text-sm leading-6 text-[var(--text-secondary)]">
                            {project.contributions.map((item) => (
                              <li key={item} className="flex gap-3">
                                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {hasProjectLinks ? (
                          <div className="relative z-10 mt-7 border-t border-[var(--line)] pt-5">
                            <ProjectLinks project={project} />
                          </div>
                        ) : null}
                      </Reveal>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
