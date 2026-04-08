import { resumeSnapshot, snapshotSectionCopy } from "@/content/site";
import { Reveal } from "@/components/ui/reveal";

export function SnapshotSection() {
  return (
    <section id="resume" className="py-14 sm:py-18 lg:py-24">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="surface-interactive rounded-[2rem] border border-[var(--line)] bg-[linear-gradient(135deg,var(--accent-strong),#102131)] px-6 py-8 text-white shadow-[0_30px_80px_rgba(16,33,49,0.24)] sm:px-8 sm:py-10">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/60">
              {snapshotSectionCopy.eyebrow}
            </p>
            <h2 className="mt-4 font-display text-3xl tracking-[-0.05em] text-white sm:text-4xl">
              {snapshotSectionCopy.title}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-white/74">
              {snapshotSectionCopy.description}
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {resumeSnapshot.map((item, index) => (
                <Reveal
                  key={item.label}
                  delay={index * 0.04}
                  className="surface-soft-lift rounded-[1.4rem] border border-white/12 bg-white/8 p-5"
                >
                  <p className="text-xs uppercase tracking-[0.22em] text-white/60">{item.label}</p>
                  <p className="mt-3 text-sm leading-6 text-white/88">{item.value}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
