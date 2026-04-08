import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={cn("heading-rule max-w-3xl", align === "center" && "mx-auto text-center")}>
      <p
        className={cn(
          "section-heading-chip text-xs font-semibold uppercase tracking-[0.32em] text-[var(--text-muted)]",
          align === "center" && "mx-auto",
        )}
      >
        {eyebrow}
      </p>
      <h2 className="mt-4 font-display text-3xl tracking-[-0.04em] text-[var(--text-primary)] sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-[var(--text-secondary)] sm:text-lg">
        {description}
      </p>
    </div>
  );
}
