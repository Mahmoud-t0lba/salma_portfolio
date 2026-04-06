import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
};

const variants = {
  primary:
    "bg-[var(--accent-strong)] text-white shadow-[0_16px_32px_rgba(25,52,80,0.18)] hover:-translate-y-0.5 hover:bg-[var(--accent)]",
  secondary:
    "border border-[var(--line-strong)] bg-white/80 text-[var(--text-primary)] hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-white",
  ghost:
    "border border-transparent bg-transparent text-[var(--text-primary)] hover:border-[var(--line)] hover:bg-white/70",
} as const;

export function ButtonLink({
  href,
  children,
  className,
  variant = "primary",
  external = false,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "surface-soft-lift group relative isolate inline-flex min-h-12 items-center justify-center overflow-hidden rounded-full px-5 text-sm font-semibold tracking-[-0.01em] transition-all duration-300 before:absolute before:inset-0 before:-translate-x-[120%] before:bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.28),transparent)] before:opacity-0 before:transition before:duration-700 before:content-[''] hover:before:translate-x-[120%] hover:before:opacity-100",
        variants[variant],
        className,
      )}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      {...props}
    >
      {children}
    </Link>
  );
}
