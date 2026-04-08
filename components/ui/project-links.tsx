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
  const availableLinks = projectLinkMeta.filter(({ key }) => Boolean(project.links[key]));

  if (!availableLinks.length) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-2">
      {availableLinks.map(({ key, label }) => {
        const href = project.links[key];

        return (
          <Link
            key={`${project.name}-${key}`}
            href={href!}
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
