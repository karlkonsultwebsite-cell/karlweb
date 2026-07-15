import { Cloud } from "@/components/ui/Decor";

/**
 * Shared compact hero band for inner pages (About, Contact).
 */
export function PageHero({
  eyebrow,
  title,
  highlight,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  subtitle: string;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-100 via-emerald-50 to-bone">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <Cloud className="left-[8%] top-[24%] w-24 text-white animate-floaty" />
        <Cloud className="right-[12%] top-[16%] w-16 text-white/80 animate-floaty-slow" />
        <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-gold-300/30 blur-3xl" />
        <div className="dot-grid absolute bottom-6 left-[5%] h-24 w-40 opacity-50" />
      </div>

      <div className="mx-auto max-w-[1400px] px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-emerald-700 ring-1 ring-emerald-100">
          {eyebrow}
        </span>
        <h1 className="mx-auto mt-5 max-w-3xl font-display text-[2.2rem] font-bold leading-[1.14] tracking-tight text-pine-900 sm:text-5xl lg:text-6xl">
          {title} {highlight && <span className="text-emerald-600">{highlight}</span>}
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg text-pine-700/80">{subtitle}</p>
      </div>
    </section>
  );
}
