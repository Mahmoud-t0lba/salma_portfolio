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
    "border border-[rgba(255,255,255,0.1)] bg-[linear-gradient(135deg,var(--accent-strong),var(--accent))] text-white shadow-[0_18px_34px_rgba(25,52,80,0.22)] hover:-translate-y-0.5 hover:shadow-[0_26px_54px_rgba(25,52,80,0.24)]",
  secondary:
    "border border-[var(--line-strong)] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(255,255,255,0.74))] text-[var(--text-primary)] hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-white",
  ghost:
    "border border-transparent bg-white/16 text-[var(--text-primary)] backdrop-blur-sm hover:border-[var(--line)] hover:bg-white/78",
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
        "surface-soft-lift group relative isolate inline-flex min-h-12 items-center justify-center overflow-hidden rounded-full px-5 text-sm font-semibold tracking-[-0.01em] transition-all duration-300 before:absolute before:inset-0 before:-translate-x-[120%] before:bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.3),transparent)] before:opacity-0 before:transition before:duration-700 before:content-[''] after:absolute after:inset-[1px] after:rounded-full after:border after:border-white/8 after:opacity-0 after:transition after:duration-300 after:content-[''] hover:before:translate-x-[120%] hover:before:opacity-100 hover:after:opacity-100",
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
