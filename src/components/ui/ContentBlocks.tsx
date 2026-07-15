import { CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/ui/Reveal";
import type {
  CourseCategory,
  ApplyStep,
  TimelinePhase,
  UniversityEntry,
  EligibilityBlock,
} from "@/lib/country-content-types";

/**
 * Shared presentational blocks for the long-form country + intake pages.
 * Keeps the deep pages readable and consistent without repeating markup.
 */

export function SectionHeading({
  eyebrow,
  title,
  sub,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
  center?: boolean;
}) {
  return (
    <Reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-700">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 font-display text-[1.9rem] font-bold leading-[1.15] tracking-tight text-pine-900 sm:text-4xl">
        {title}
      </h2>
      {sub && <p className="mt-4 text-lg leading-relaxed text-pine-700/80">{sub}</p>}
    </Reveal>
  );
}

/** Long-form paragraphs */
export function Prose({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="space-y-4 text-lg leading-relaxed text-pine-700/85">
      {paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  );
}

/** Bulleted advantage/checklist rows */
export function CheckList({
  items,
  columns = 1,
}: {
  items: string[];
  columns?: 1 | 2;
}) {
  return (
    <ul className={`grid gap-3 ${columns === 2 ? "sm:grid-cols-2" : ""}`}>
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 rounded-2xl bg-white p-4 ring-1 ring-emerald-100"
        >
          <CheckCircle size={20} weight="fill" className="mt-0.5 shrink-0 text-emerald-600" />
          <span className="leading-relaxed text-pine-800">{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Courses grouped by category */
export function CourseGrid({ categories }: { categories: CourseCategory[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((c, i) => (
        <Reveal key={c.category} delay={(i % 3) * 0.06}>
          <div className="h-full rounded-[1.75rem] border border-emerald-100 bg-white p-6">
            <h3 className="font-display text-lg font-bold text-pine-900">{c.category}</h3>
            <ul className="mt-3 space-y-2">
              {c.courses.map((course) => (
                <li key={course} className="flex items-center gap-2 text-sm text-pine-700/80">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                  {course}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/** Numbered university list */
export function UniversityList({ universities }: { universities: UniversityEntry[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {universities.map((u, i) => (
        <div
          key={u.name}
          className="flex items-start gap-4 rounded-2xl bg-pine-900 p-4 text-white"
        >
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/10 font-display text-sm font-bold text-gold-300">
            {i + 1}
          </span>
          <div>
            <p className="font-semibold leading-snug">{u.name}</p>
            {u.note && <p className="mt-0.5 text-sm text-white/60">{u.note}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}

/** Vertical timeline of phases */
export function Timeline({ phases }: { phases: TimelinePhase[] }) {
  return (
    <div className="relative">
      <div className="absolute left-[19px] top-2 bottom-2 w-0.5 rounded-full bg-gradient-to-b from-emerald-300 via-emerald-200 to-transparent" />
      <div className="space-y-8">
        {phases.map((p, i) => (
          <Reveal key={p.period} delay={i * 0.05}>
            <div className="relative flex gap-5">
              <span className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-emerald-600 font-display text-sm font-bold text-white shadow-[0_10px_24px_-10px_rgba(21,118,214,0.8)]">
                {i + 1}
              </span>
              <div className="flex-1 pt-1">
                <h3 className="font-display text-lg font-bold text-pine-900">{p.period}</h3>
                <ul className="mt-2 space-y-1.5">
                  {p.tasks.map((t) => (
                    <li key={t} className="flex items-start gap-2 text-pine-700/80">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                      <span className="leading-relaxed">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

/** How-to-apply stepper */
export function Steps({ steps }: { steps: ApplyStep[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {steps.map((s, i) => (
        <Reveal key={s.title} delay={(i % 2) * 0.05}>
          <div className="flex h-full gap-4 rounded-[1.5rem] bg-white p-6 ring-1 ring-emerald-100">
            <span className="font-display text-2xl font-bold tabular-nums text-emerald-200">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="font-display text-lg font-bold text-pine-900">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-pine-700/80">{s.desc}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/** Eligibility split by level */
export function EligibilityGrid({ blocks }: { blocks: EligibilityBlock[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {blocks.map((b, i) => (
        <Reveal key={b.label} delay={i * 0.06}>
          <div className="h-full rounded-[1.75rem] bg-bone p-7 ring-1 ring-emerald-100">
            <h3 className="font-display text-lg font-bold text-pine-900">{b.label}</h3>
            <ul className="mt-4 space-y-2.5">
              {b.points.map((p) => (
                <li key={p} className="flex items-start gap-2.5">
                  <CheckCircle size={18} weight="fill" className="mt-0.5 shrink-0 text-emerald-600" />
                  <span className="text-sm leading-relaxed text-pine-800">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/** Responsive comparison table */
export function ComparisonTable({
  rows,
  thisLabel,
  mainLabel,
}: {
  rows: { factor: string; thisIntake: string; mainIntake: string }[];
  thisLabel: string;
  mainLabel: string;
}) {
  return (
    <div className="overflow-x-auto rounded-[1.5rem] ring-1 ring-emerald-100">
      <table className="w-full min-w-[520px] border-collapse bg-white text-left">
        <thead>
          <tr className="bg-pine-900 text-white">
            <th className="px-5 py-4 font-display text-sm font-bold">Factor</th>
            <th className="px-5 py-4 font-display text-sm font-bold text-gold-300">{thisLabel}</th>
            <th className="px-5 py-4 font-display text-sm font-bold">{mainLabel}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={r.factor} className={i % 2 ? "bg-bone/60" : ""}>
              <td className="px-5 py-4 text-sm font-semibold text-pine-900">{r.factor}</td>
              <td className="px-5 py-4 text-sm text-emerald-700">{r.thisIntake}</td>
              <td className="px-5 py-4 text-sm text-pine-700/80">{r.mainIntake}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Simple alternating section wrapper */
export function Section({
  children,
  tint = false,
  id,
}: {
  children: React.ReactNode;
  tint?: boolean;
  id?: string;
}) {
  return (
    <section id={id} className={`py-14 sm:py-16 lg:py-20 ${tint ? "bg-bone" : ""}`}>
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
