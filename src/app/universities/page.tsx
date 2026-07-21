import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle,
  GraduationCap,
  Buildings,
  Trophy,
  Path,
} from "@phosphor-icons/react/dist/ssr";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { StickyActions } from "@/components/ui/StickyActions";
import { Reveal } from "@/components/ui/Reveal";
import { EnquiryButton } from "@/components/ui/EnquiryButton";
import { Cloud } from "@/components/ui/Decor";
import { destinations } from "@/lib/data";
import { countryContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Top Universities Abroad | Partner Universities — Karl Konsult International",
  description:
    "Explore top universities abroad across the UK, Australia, USA, Germany, France, Italy, New Zealand, Europe and China. Karl Konsult International, overseas education consultants in Jaipur, help Indian students get admission with free counselling.",
};

const u = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1100&q=70`;

const why = [
  {
    Icon: Trophy,
    title: "Ranked, recognised institutions",
    desc: "We only shortlist universities that are properly accredited and respected by employers back home.",
  },
  {
    Icon: Path,
    title: "Matched to your profile",
    desc: "Your marks, budget, test scores and career goals decide the list — not a commission sheet.",
  },
  {
    Icon: CheckCircle,
    title: "Realistic ambition",
    desc: "Every shortlist mixes reach, match and safe options, so you always have a strong offer in hand.",
  },
];

function Flag({ code, className = "" }: { code: string; className?: string }) {
  if (code === "eu") {
    return (
      <span
        className={`grid place-items-center rounded-[3px] bg-[#003399] text-[10px] font-bold text-[#FFCC00] ring-1 ring-black/10 ${className}`}
        aria-hidden
      >
        ★
      </span>
    );
  }
  return (
    <Image
      src={`https://flagcdn.com/h40/${code}.png`}
      alt=""
      width={30}
      height={20}
      className={`rounded-[3px] object-cover ring-1 ring-black/10 ${className}`}
    />
  );
}

export default function UniversitiesPage() {
  const countries = destinations
    .map((d) => ({ dest: d, content: countryContent[d.slug] }))
    .filter((c) => c.content);

  const totalUnis = countries.reduce(
    (n, c) => n + (c.content?.universities.length ?? 0),
    0,
  );

  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-b from-emerald-100 via-emerald-50 to-bone">
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <Cloud className="left-[7%] top-[18%] w-24 text-white animate-floaty" />
            <Cloud className="right-[12%] top-[10%] w-16 text-white/80 animate-floaty-slow" />
            <div className="absolute -right-20 top-1/4 h-80 w-80 rounded-full bg-emerald-200/50 blur-3xl" />
          </div>

          <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-4 pb-14 pt-10 sm:px-6 sm:pb-16 sm:pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-8 lg:pb-20 lg:pt-16">
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-emerald-700 shadow-sm ring-1 ring-emerald-100">
                  <GraduationCap size={15} weight="fill" />
                  Universities abroad
                </span>
                <h1 className="mt-6 font-display text-[2.1rem] font-bold leading-[1.14] tracking-tight text-pine-900 sm:text-5xl lg:text-[3.5rem]">
                  <span className="block">Top universities abroad</span>
                  <span className="mt-1 block text-emerald-600">for Indian students</span>
                </h1>
                <p className="mt-6 max-w-[50ch] text-lg leading-relaxed text-pine-700">
                  From the UK and Australia to Germany, Italy and beyond — explore the
                  universities our students apply to, then let us build a shortlist that
                  actually fits your marks, budget and career plans.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
                  <EnquiryButton size="lg">
                    Get my university shortlist
                    <ArrowRight size={18} weight="bold" />
                  </EnquiryButton>
                  <EnquiryButton variant="outline" size="lg">Check eligibility</EnquiryButton>
                </div>
              </Reveal>
            </div>

            <Reveal direction="left" className="relative mx-auto w-full max-w-[540px]">
              <div className="absolute -right-6 -top-6 -z-0 h-44 w-44 blob bg-gold-300/60 blur-2xl" />
              <div className="relative animate-floaty-slow overflow-hidden rounded-[2.5rem] ring-4 ring-white shadow-[0_40px_80px_-32px_rgba(21,35,63,0.45)]">
                <Image
                  src={u("1562774053-701939374585")}
                  alt="University campus abroad where Karl Konsult students study"
                  width={1100}
                  height={880}
                  priority
                  className="aspect-[5/4] h-auto w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* STATS */}
        <section className="border-y border-emerald-100 bg-white py-8">
          <div className="mx-auto grid max-w-[1100px] grid-cols-3 gap-6 px-4 sm:px-6 lg:px-8">
            {[
              { value: "250+", label: "Partner universities" },
              { value: `${countries.length}`, label: "Study destinations" },
              { value: "5,000+", label: "Students placed" },
            ].map((s, i) => (
              <Reveal key={s.label} delay={i * 0.05} className="text-center">
                <p className="font-display text-2xl font-bold text-emerald-600 sm:text-4xl">{s.value}</p>
                <p className="mt-1 text-xs font-medium text-pine-700/65 sm:text-sm">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* WHY OUR SHORTLIST */}
        <section className="py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-700">
                How we shortlist
              </span>
              <h2 className="mt-4 font-display text-[1.9rem] font-bold leading-[1.15] tracking-tight text-pine-900 sm:text-4xl">
                The right university, not just a famous one
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-pine-700/80">
                A big name means nothing if the course, cost or entry bar doesn&apos;t suit
                you. Here&apos;s how we decide what belongs on your list.
              </p>
            </Reveal>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {why.map((w, i) => (
                <Reveal key={w.title} delay={(i % 3) * 0.06}>
                  <div className="h-full rounded-[1.75rem] border border-emerald-100 bg-white p-7">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-emerald-50 text-emerald-600">
                      <w.Icon size={28} weight="fill" />
                    </span>
                    <h3 className="mt-5 font-display text-xl font-bold text-pine-900">{w.title}</h3>
                    <p className="mt-2 leading-relaxed text-pine-700/80">{w.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* UNIVERSITIES BY COUNTRY */}
        <section className="bg-bone py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-700">
                <Buildings size={15} weight="fill" />
                Browse by country
              </span>
              <h2 className="mt-4 font-display text-[1.9rem] font-bold leading-[1.15] tracking-tight text-pine-900 sm:text-4xl">
                {totalUnis}+ universities across {countries.length} destinations
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-pine-700/80">
                A representative selection of the institutions Indian students apply to in
                each country. Tap a country for full costs, intakes and entry requirements.
              </p>
            </Reveal>

            <div className="mt-12 space-y-6">
              {countries.map(({ dest, content }, idx) => (
                <Reveal key={dest.slug} delay={(idx % 3) * 0.05}>
                  <div className="overflow-hidden rounded-[1.75rem] bg-white ring-1 ring-emerald-100">
                    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-emerald-100 bg-white p-6">
                      <div className="flex items-center gap-3">
                        <Flag code={dest.code} className="h-7 w-10" />
                        <div>
                          <h3 className="font-display text-xl font-bold text-pine-900">
                            Universities in {dest.name}
                          </h3>
                          <p className="text-sm text-pine-700/70">{dest.fact}</p>
                        </div>
                      </div>
                      <Link
                        href={`/study-abroad/${dest.slug}`}
                        className="group inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-5 py-2.5 text-sm font-semibold text-emerald-700 transition-all hover:-translate-y-0.5 hover:border-emerald-600"
                      >
                        Study in {dest.name}
                        <ArrowUpRight size={15} weight="bold" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </div>
                    <ul className="grid gap-x-6 gap-y-3 p-6 sm:grid-cols-2">
                      {content!.universities.map((uni, i) => (
                        <li key={uni.name} className="flex items-start gap-3">
                          <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-emerald-50 font-display text-xs font-bold text-emerald-700">
                            {i + 1}
                          </span>
                          <div className="min-w-0">
                            <p className="font-semibold leading-snug text-pine-900">{uni.name}</p>
                            {uni.note && (
                              <p className="mt-0.5 text-sm text-pine-700/65">{uni.note}</p>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <p className="mt-8 text-center text-xs text-pine-700/50">
                Representative institutions only — availability, entry requirements and
                course lists vary by year. Your actual shortlist is built around your
                profile in a free counselling session.
              </p>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="relative flex flex-col items-center gap-6 overflow-hidden rounded-[2rem] bg-pine-900 p-10 text-center shadow-[0_30px_70px_-40px_rgba(21,35,63,0.7)] sm:p-14">
                <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-emerald-600/30 blur-2xl" />
                <ul className="relative flex flex-wrap justify-center gap-x-6 gap-y-2">
                  {["Free counselling", "Profile-based shortlist", "Application & visa support"].map((t) => (
                    <li key={t} className="flex items-center gap-2 text-sm font-semibold text-white/80">
                      <CheckCircle size={18} weight="fill" className="text-gold-300" />
                      {t}
                    </li>
                  ))}
                </ul>
                <h2 className="relative max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
                  Not sure which university fits you?
                </h2>
                <p className="relative max-w-xl text-white/70">
                  Share your marks, budget and goals — we&apos;ll come back with a
                  realistic shortlist and an honest view of your chances.
                </p>
                <div className="relative">
                  <EnquiryButton variant="ghost" size="lg">Book free counselling</EnquiryButton>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
      <StickyActions />
    </>
  );
}
