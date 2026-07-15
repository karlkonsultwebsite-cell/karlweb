import Image from "next/image";
import {
  GraduationCap,
  Buildings,
  CurrencyCircleDollar,
  Briefcase,
  Path,
  CheckCircle,
  ArrowRight,
  BookOpen,
  Clock,
  Sparkle,
} from "@phosphor-icons/react/dist/ssr";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { StickyActions } from "@/components/ui/StickyActions";
import { Reveal } from "@/components/ui/Reveal";
import { EnquiryButton } from "@/components/ui/EnquiryButton";
import { Cloud } from "@/components/ui/Decor";
import { Faq } from "@/components/ui/Faq";
import type { Destination, CountryDetail } from "@/lib/data";

/**
 * Shared template for the /study-abroad/[slug] country pages. Driven by a
 * Destination + its CountryDetail from src/lib/data.ts. One layout, nine
 * countries. Blue (emerald token) accent throughout to stay on-brand.
 */

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

export function CountryPage({
  dest,
  detail,
}: {
  dest: Destination;
  detail: CountryDetail;
}) {
  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-b from-emerald-100 via-emerald-50 to-bone">
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <Cloud className="left-[7%] top-[18%] w-24 text-white animate-floaty" />
            <Cloud className="right-[14%] top-[10%] w-16 text-white/80 animate-floaty-slow" />
            <div className="absolute -right-20 top-1/4 h-80 w-80 rounded-full bg-emerald-200/50 blur-3xl" />
            <div className="dot-grid absolute bottom-10 left-[5%] h-24 w-40 opacity-50" />
          </div>

          <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-8 lg:pb-24 lg:pt-16">
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-emerald-700 shadow-sm ring-1 ring-emerald-100">
                  <Flag code={dest.code} className="h-4 w-6" />
                  {detail.tagline}
                </span>
                <h1 className="mt-6 font-display text-[2.1rem] font-bold leading-[1.2] tracking-tight text-pine-900 sm:text-5xl lg:text-[3.5rem]">
                  <span className="block">Study in {dest.name}</span>
                  <span className="mt-1 block text-emerald-600">{detail.headline}</span>
                </h1>
                <p className="mt-6 max-w-[48ch] text-lg leading-relaxed text-pine-700">{detail.intro}</p>
                <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
                  <EnquiryButton size="lg">
                    Book free counselling
                    <ArrowRight size={18} weight="bold" />
                  </EnquiryButton>
                  <EnquiryButton variant="outline" size="lg">
                    Check eligibility
                  </EnquiryButton>
                </div>
              </Reveal>
            </div>

            {/* hero photo */}
            <Reveal direction="left" className="relative mx-auto w-full max-w-[540px]">
              <div className="absolute -right-6 -top-6 -z-0 h-44 w-44 blob bg-gold-300/60 blur-2xl" />
              <div className="relative animate-floaty-slow overflow-hidden rounded-[2.5rem] ring-4 ring-white shadow-[0_40px_80px_-32px_rgba(21,35,63,0.45)]">
                <Image
                  src={dest.img}
                  alt={`Study in ${dest.name}`}
                  width={1100}
                  height={880}
                  priority
                  className="aspect-[5/4] h-auto w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* HIGHLIGHTS STRIP */}
        <section className="border-y border-emerald-100 bg-white py-8">
          <div className="mx-auto grid max-w-[1100px] grid-cols-3 gap-6 px-4 sm:px-6 lg:px-8">
            {detail.highlights.map((h, i) => (
              <Reveal key={h.label} delay={i * 0.05} className="text-center">
                <p className="font-display text-2xl font-bold text-emerald-600 sm:text-4xl">{h.value}</p>
                <p className="mt-1 text-xs font-medium text-pine-700/65 sm:text-sm">{h.label}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* WHY STUDY HERE */}
        <section className="py-14 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-700">
                <Sparkle size={15} weight="fill" className="text-gold-500" />
                Why {dest.name}
              </span>
              <h2 className="mt-4 font-display text-[2rem] font-bold leading-[1.1] tracking-tight text-pine-900 sm:text-4xl">
                Reasons students choose {dest.name}
              </h2>
            </Reveal>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {detail.why.map((w, i) => (
                <Reveal key={w.title} delay={(i % 3) * 0.06}>
                  <div className="group h-full rounded-[1.75rem] border border-emerald-100 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_45px_-28px_rgba(21,35,63,0.5)]">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                      <CheckCircle size={28} weight="fill" />
                    </span>
                    <h3 className="mt-5 font-display text-xl font-bold text-pine-900">{w.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-pine-700/75">{w.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* COSTS + WORK RIGHTS + INTAKES */}
        <section className="bg-bone py-14 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto mb-12 max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-700">
                The essentials
              </span>
              <h2 className="mt-4 font-display text-[2rem] font-bold leading-[1.1] tracking-tight text-pine-900 sm:text-4xl">
                Costs, work rights &amp; intakes
              </h2>
            </Reveal>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Reveal>
                <div className="h-full rounded-[1.75rem] bg-white p-7 ring-1 ring-emerald-100">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-50 text-emerald-600">
                    <GraduationCap size={24} weight="fill" />
                  </span>
                  <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-pine-700/50">Tuition</p>
                  <p className="mt-1 font-display text-lg font-bold text-pine-900">{detail.costTuition}</p>
                </div>
              </Reveal>
              <Reveal delay={0.06}>
                <div className="h-full rounded-[1.75rem] bg-white p-7 ring-1 ring-emerald-100">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-50 text-emerald-600">
                    <CurrencyCircleDollar size={24} weight="fill" />
                  </span>
                  <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-pine-700/50">Living cost</p>
                  <p className="mt-1 font-display text-lg font-bold text-pine-900">{detail.costLiving}</p>
                </div>
              </Reveal>
              <Reveal delay={0.12}>
                <div className="h-full rounded-[1.75rem] bg-white p-7 ring-1 ring-emerald-100">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-50 text-emerald-600">
                    <Briefcase size={24} weight="fill" />
                  </span>
                  <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-pine-700/50">Work rights</p>
                  <p className="mt-1 text-sm font-semibold leading-snug text-pine-900">{detail.workRights}</p>
                </div>
              </Reveal>
              <Reveal delay={0.18}>
                <div className="h-full rounded-[1.75rem] bg-white p-7 ring-1 ring-emerald-100">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-50 text-emerald-600">
                    <Clock size={24} weight="fill" />
                  </span>
                  <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-pine-700/50">Intakes</p>
                  <ul className="mt-1 space-y-0.5">
                    {dest.intakes.map((intake) => (
                      <li key={intake} className="text-sm font-semibold text-pine-900">{intake}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
            <p className="mt-6 text-center text-xs text-pine-700/50">
              *Indicative figures only. Tuition, living costs and work rules vary by
              university, city and year — confirm with our counsellors before applying.
            </p>
          </div>
        </section>

        {/* POPULAR COURSES + TOP UNIVERSITIES */}
        <section className="py-14 sm:py-16 lg:py-24">
          <div className="mx-auto grid max-w-[1400px] gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-700">
                <BookOpen size={15} weight="fill" />
                Popular courses
              </span>
              <h2 className="mt-4 font-display text-[1.7rem] font-bold leading-tight tracking-tight text-pine-900 sm:text-3xl">
                What students study in {dest.name}
              </h2>
              <ul className="mt-6 space-y-3">
                {detail.popularCourses.map((c) => (
                  <li key={c} className="flex items-center gap-3 rounded-2xl bg-white p-4 ring-1 ring-emerald-100">
                    <CheckCircle size={20} weight="fill" className="shrink-0 text-emerald-600" />
                    <span className="font-semibold text-pine-900">{c}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal direction="left">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-700">
                <Buildings size={15} weight="fill" />
                Top universities
              </span>
              <h2 className="mt-4 font-display text-[1.7rem] font-bold leading-tight tracking-tight text-pine-900 sm:text-3xl">
                Where our students get in
              </h2>
              <div className="mt-6 grid gap-3">
                {detail.topUniversities.map((uni, i) => (
                  <div key={uni} className="flex items-center gap-4 rounded-2xl bg-pine-900 p-4 text-white">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/10 font-display text-sm font-bold text-gold-300">
                      {i + 1}
                    </span>
                    <span className="font-semibold">{uni}</span>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-xs text-pine-700/50">
                Representative institutions — your shortlist is built around your profile.
              </p>
            </Reveal>
          </div>
        </section>

        {/* PROCESS */}
        <section className="bg-bone py-14 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto mb-14 max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-700">
                <Path size={15} weight="fill" />
                How we get you there
              </span>
              <h2 className="mt-4 font-display text-[2rem] font-bold leading-[1.1] tracking-tight text-pine-900 sm:text-4xl">
                Your path to {dest.name}, step by step
              </h2>
            </Reveal>
            <div className="relative">
              <div className="pointer-events-none absolute left-0 right-0 top-7 hidden h-0.5 bg-emerald-100 lg:block" />
              <div className="grid gap-8 lg:grid-cols-4">
                {[
                  { t: "Free counselling", d: `We map your goals to the right ${dest.name} universities and courses.` },
                  { t: "Applications", d: "We handle your applications, SOP and documents end to end." },
                  { t: "Offer & funding", d: "Secure your offer, then plan scholarships, loans and proof of funds." },
                  { t: "Visa & fly", d: "Student-visa filing, interview prep and pre-departure guidance." },
                ].map((s, i) => (
                  <Reveal key={s.t} delay={i * 0.1}>
                    <div className="relative">
                      <span className="relative z-10 grid h-14 w-14 place-items-center rounded-2xl bg-emerald-600 font-display text-lg font-bold text-white shadow-[0_14px_30px_-12px_rgba(21,118,214,0.7)]">
                        {i + 1}
                      </span>
                      <h3 className="mt-5 font-display text-xl font-bold text-pine-900">{s.t}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-pine-700/75">{s.d}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-[900px] px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto mb-10 max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-700">
                Questions
              </span>
              <h2 className="mt-4 font-display text-[2rem] font-bold leading-[1.1] tracking-tight text-pine-900 sm:text-4xl">
                Studying in {dest.name}, answered
              </h2>
            </Reveal>
            <Reveal>
              <Faq items={detail.faqs} accent="text-emerald-600" />
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-14 sm:pb-16 lg:pb-24">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="relative flex flex-col items-center gap-6 overflow-hidden rounded-[2rem] bg-pine-900 p-10 text-center shadow-[0_30px_70px_-40px_rgba(21,35,63,0.7)] sm:p-14">
                <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-emerald-600/30 blur-2xl" />
                <ul className="relative flex flex-wrap justify-center gap-x-6 gap-y-2">
                  {["Free counselling", "Honest course advice", "Visa & scholarship support"].map((t) => (
                    <li key={t} className="flex items-center gap-2 text-sm font-semibold text-white/80">
                      <CheckCircle size={18} weight="fill" className="text-gold-300" />
                      {t}
                    </li>
                  ))}
                </ul>
                <h2 className="relative max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
                  Ready to study in {dest.name}?
                </h2>
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
