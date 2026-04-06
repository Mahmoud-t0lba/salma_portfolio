import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { projectLinkMeta } from "@/content/projects";
import type { ProjectItem } from "@/content/types";
import { cn } from "@/lib/utils";

type ProjectLinksProps = {
  project: ProjectItem;
  compact?: boolean;
};

export function ProjectLinks({ project, compact = false }: ProjectLinksProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {projectLinkMeta.map(({ key, label }) => {
        const href = project.links[key];
        const isStoreLink = key === "appStore" || key === "googlePlay";

        if (!href) {
          if (isStoreLink) {
            return null;
          }

          return (
            <span
              key={`${project.name}-${key}`}
              className={cn(
                "inline-flex items-center rounded-full border border-dashed border-[var(--line)] bg-white/50 text-[var(--text-muted)]",
                compact ? "px-3 py-1 text-[0.7rem]" : "px-3.5 py-1.5 text-xs",
              )}
              aria-label={`${label} link not listed for ${project.name}`}
            >
              {label}
            </span>
          );
        }

        return (
          <Link
            key={`${project.name}-${key}`}
            href={href}
            target="_blank"
            rel="noreferrer"
            className={cn(
              "surface-soft-lift inline-flex items-center gap-1.5 rounded-full border border-[var(--line-strong)] bg-white/90 text-[var(--text-primary)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent-strong)]",
              compact ? "px-3 py-1 text-[0.7rem]" : "px-3.5 py-1.5 text-xs font-medium",
            )}
          >
            <span>{label}</span>
            <ArrowUpRight className="size-3.5" />
          </Link>
        );
      })}
    </div>
  );
}
