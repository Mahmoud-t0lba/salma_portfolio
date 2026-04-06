import { expertiseItems } from "@/content/site";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function ExpertiseSection() {
  return (
    <section id="expertise" className="py-14 sm:py-18 lg:py-24">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Core Expertise"
            title="What Mahmoud brings to a mobile product team."
            description="A recruiter-friendly view of the value areas that show up consistently across Mahmoud's CV, delivery roles, and public app work."
          />
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {expertiseItems.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 0.05}
              className="surface-interactive rounded-[1.7rem] border border-[var(--line)] bg-white/85 p-6 shadow-[var(--shadow-soft)]"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg font-semibold tracking-[-0.03em] text-[var(--text-primary)]">
                  {item.title}
                </h3>
                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--text-muted)]">
                  0{index + 1}
                </span>
              </div>
              <p className="mt-4 text-sm leading-6 text-[var(--text-secondary)]">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
