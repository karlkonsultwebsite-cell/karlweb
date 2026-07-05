import type { Metadata } from "next";
import {
  Sparkle,
  ArrowRight,
  CheckCircle,
  Trophy,
  HandCoins,
  Bank,
  GraduationCap,
  Books,
  MagnifyingGlass,
  ClipboardText,
  PaperPlaneTilt,
  Globe,
  Coins,
} from "@phosphor-icons/react/dist/ssr";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { StickyActions } from "@/components/ui/StickyActions";
import { Reveal } from "@/components/ui/Reveal";
import { EnquiryButton } from "@/components/ui/EnquiryButton";
import { Cloud } from "@/components/ui/Decor";
import { Faq } from "@/components/ui/Faq";

export const metadata: Metadata = {
  title: "Scholarships for Study Abroad | Karl Konsult International",
  description:
    "Scholarship assistance for international students from Karl Konsult International — trusted overseas education consultants in Jaipur. We help you find, shortlist and apply for merit, need-based and government scholarships to make studying abroad affordable.",
};

const types = [
  {
    Icon: Trophy,
    title: "Merit-based scholarships",
    desc: "Awarded for strong academics, test scores or a standout profile. We help you present your achievements so they get noticed.",
  },
  {
    Icon: HandCoins,
    title: "Need-based scholarships",
    desc: "Aimed at students who need financial support. We guide you on documentation and how to make a genuine, well-evidenced case.",
  },
  {
    Icon: Globe,
    title: "Government scholarships",
    desc: "Fully or partly funded schemes like Chevening (UK), DAAD (Germany) and CSC (China). We track deadlines and eligibility for you.",
  },
  {
    Icon: Bank,
    title: "University scholarships",
    desc: "Institution-specific awards, fee waivers and early-bird discounts. We shortlist the universities that fund students like you.",
  },
  {
    Icon: Books,
    title: "Subject-specific scholarships",
    desc: "Funding tied to a field of study — STEM, business, arts and more. We match your course to the awards that fit it.",
  },
  {
    Icon: Coins,
    title: "Country & regional grants",
    desc: "Regional aid like Italy's DSU support that lowers tuition and living costs. We flag the ones your destination offers.",
  },
];

const steps = [
  {
    Icon: MagnifyingGlass,
    title: "Profile assessment",
    desc: "We start by understanding your academics, budget, course and goals to gauge what you're realistically eligible for.",
  },
  {
    Icon: ClipboardText,
    title: "Shortlist scholarships",
    desc: "We build a tailored list of merit, need-based, university and government scholarships that genuinely match your profile.",
  },
  {
    Icon: Books,
    title: "Application & essays",
    desc: "We guide your scholarship essays, motivation letters and supporting documents so your story comes through clearly and honestly.",
  },
  {
    Icon: PaperPlaneTilt,
    title: "Submission & follow-up",
    desc: "We help you submit on time, track every deadline and follow up, so no opportunity slips through the cracks.",
  },
];

const countries = [
  {
    flag: "🇩🇪",
    country: "Germany",
    label: "Low / no tuition",
    desc: "Many public universities charge little to no tuition, and schemes like DAAD offer funded scholarships for international students.",
  },
  {
    flag: "🇮🇹",
    country: "Italy",
    label: "DSU regional grants",
    desc: "Regional DSU scholarships can cover tuition, meals and accommodation for eligible students, making Italy remarkably affordable.",
  },
  {
    flag: "🇨🇳",
    country: "China",
    label: "CSC scholarships",
    desc: "The Chinese Government (CSC) scholarship supports international students, often covering tuition and living support at top universities.",
  },
  {
    flag: "🇬🇧",
    country: "United Kingdom",
    label: "Chevening & more",
    desc: "Prestigious awards like Chevening, plus a wide range of university scholarships and fee reductions for international students.",
  },
];

const faqs = [
  {
    q: "Do you charge to help me find scholarships?",
    a: "Scholarship guidance is part of our student support, and your first counselling session is free. We help you find and apply for the right scholarships as part of your overall study abroad plan — talk to us and we'll explain exactly what's included.",
  },
  {
    q: "Can you guarantee I'll get a scholarship?",
    a: "No honest consultant can guarantee a scholarship — awards depend on your profile, competition and each provider's criteria. What we do guarantee is that we'll shortlist the right opportunities, strengthen your applications and make sure you don't miss deadlines.",
  },
  {
    q: "When should I start applying for scholarships?",
    a: "Early — many scholarships have deadlines months before the intake, and some close before university applications do. We recommend starting your scholarship planning alongside your university shortlisting, ideally 10 to 12 months ahead.",
  },
  {
    q: "Can I apply for more than one scholarship?",
    a: "Yes, and you usually should. We help you apply to a sensible mix of university, government and external scholarships to maximise your chances, while making sure each application is tailored rather than copy-pasted.",
  },
];

export default function ScholarshipsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-b from-emerald-100 via-emerald-50 to-bone">
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <Cloud className="left-[8%] top-[18%] w-24 text-white animate-floaty" />
            <Cloud className="right-[12%] top-[10%] w-16 text-white/80 animate-floaty-slow" />
            <div className="absolute -right-20 top-1/4 h-80 w-80 rounded-full bg-emerald-200/40 blur-3xl" />
            <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-gold-300/30 blur-3xl" />
          </div>

          <div className="mx-auto max-w-[900px] px-4 pb-16 pt-10 text-center sm:px-6 sm:pb-20 sm:pt-14 lg:px-8 lg:pb-24 lg:pt-16">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-emerald-600 shadow-sm ring-1 ring-emerald-200/60">
                <Sparkle size={15} weight="fill" className="text-gold-500" />
                Scholarship assistance
              </span>
              <h1 className="mx-auto mt-6 max-w-3xl font-display text-[2.3rem] font-bold leading-[1.05] tracking-tight text-pine-900 sm:text-5xl lg:text-[3.7rem]">
                Scholarships that make studying abroad{" "}
                <span className="relative inline-block text-emerald-600">
                  affordable
                  <svg aria-hidden viewBox="0 0 240 16" className="absolute -bottom-2 left-0 w-full text-gold-400" preserveAspectRatio="none">
                    <path d="M3 11c56-9 164-11 234-5" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-[54ch] text-lg leading-relaxed text-pine-700">
                A world-class degree shouldn&apos;t be out of reach. We help you find
                the scholarships you actually qualify for, and guide your applications
                from shortlist to submission — so cost never decides your future.
              </p>
              <div className="mt-8 flex justify-center">
                <EnquiryButton size="lg">
                  Check my scholarship options
                  <ArrowRight size={18} weight="bold" />
                </EnquiryButton>
              </div>
            </Reveal>
          </div>
        </section>

        {/* TYPES OF SCHOLARSHIPS */}
        <section className="py-14 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-semibold text-emerald-600">
                What we help with
              </span>
              <h2 className="mt-4 font-display text-[2rem] font-bold leading-[1.1] tracking-tight text-pine-900 sm:text-4xl">
                Types of scholarships we help with
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-pine-700/75">
                From merit awards to government-funded schemes, we help you tap every
                source of funding you&apos;re eligible for.
              </p>
            </Reveal>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {types.map((t, i) => (
                <Reveal key={t.title} delay={(i % 3) * 0.06}>
                  <div className="group h-full rounded-[1.75rem] border border-emerald-200/60 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_45px_-28px_rgba(21,118,214,0.4)]">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-emerald-100 text-emerald-600 transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                      <t.Icon size={28} weight="fill" />
                    </span>
                    <h3 className="mt-5 font-display text-xl font-bold text-pine-900">{t.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-pine-700/75">{t.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS — TIMELINE */}
        <section className="bg-bone py-14 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto mb-14 max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-semibold text-emerald-600">
                How it works
              </span>
              <h2 className="mt-4 font-display text-[2rem] font-bold leading-[1.1] tracking-tight text-pine-900 sm:text-4xl">
                How our scholarship assistance works
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-pine-700/75">
                A clear, four-step process that turns scholarship hunting from
                overwhelming into organised.
              </p>
            </Reveal>

            <div className="relative">
              <div className="pointer-events-none absolute left-0 right-0 top-7 hidden h-0.5 bg-emerald-200/70 lg:block" />
              <div className="grid gap-8 lg:grid-cols-4">
                {steps.map((s, i) => (
                  <Reveal key={s.title} delay={i * 0.1}>
                    <div className="relative">
                      <span className="relative z-10 grid h-14 w-14 place-items-center rounded-2xl bg-emerald-600 text-white shadow-[0_14px_30px_-12px_rgba(21,118,214,0.7)]">
                        <s.Icon size={26} weight="fill" />
                      </span>
                      <span className="mt-5 block font-display text-sm font-bold uppercase tracking-wide text-emerald-600">
                        Step {i + 1}
                      </span>
                      <h3 className="mt-1 font-display text-xl font-bold text-pine-900">{s.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-pine-700/75">{s.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* COUNTRY HIGHLIGHTS */}
        <section className="py-14 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-semibold text-emerald-600">
                <GraduationCap size={15} weight="fill" />
                Country highlights
              </span>
              <h2 className="mt-4 font-display text-[2rem] font-bold leading-[1.1] tracking-tight text-pine-900 sm:text-4xl">
                Where your money goes further
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-pine-700/75">
                Some destinations are far more affordable than you&apos;d expect. Here
                are a few where scholarships and low tuition can transform the budget.
              </p>
            </Reveal>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {countries.map((c, i) => (
                <Reveal key={c.country} delay={(i % 2) * 0.06}>
                  <div className="flex h-full gap-5 rounded-[1.75rem] bg-white p-6 ring-1 ring-emerald-200/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-30px_rgba(21,118,214,0.5)]">
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-emerald-50 text-3xl" aria-hidden>
                      {c.flag}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-display text-xl font-bold text-pine-900">{c.country}</h3>
                        <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-bold text-emerald-600">
                          {c.label}
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-pine-700/75">{c.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="mt-6 text-center text-xs text-pine-700/50">
              Scholarship names, eligibility and coverage vary and change year to year.
              Confirm current details with our counsellors before applying.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-bone py-14 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-[900px] px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto mb-10 max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-semibold text-emerald-600">
                Questions
              </span>
              <h2 className="mt-4 font-display text-[2rem] font-bold leading-[1.1] tracking-tight text-pine-900 sm:text-4xl">
                Scholarships, answered
              </h2>
            </Reveal>
            <Reveal>
              <Faq items={faqs} accent="text-emerald-600" />
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-14 sm:pb-16 lg:pb-24">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="relative flex flex-col items-center gap-6 overflow-hidden rounded-[2rem] bg-pine-900 p-10 text-center shadow-[0_30px_70px_-40px_rgba(21,35,63,0.7)] sm:p-14">
                <div className="pointer-events-none absolute -bottom-16 left-10 h-72 w-72 rounded-full bg-emerald-500/25 blur-3xl" />
                <ul className="relative flex flex-wrap justify-center gap-x-6 gap-y-2">
                  {["Free first session", "Tailored shortlist", "Deadline tracking"].map((t) => (
                    <li key={t} className="flex items-center gap-2 text-sm font-semibold text-white/80">
                      <CheckCircle size={18} weight="fill" className="text-emerald-300" />
                      {t}
                    </li>
                  ))}
                </ul>
                <h2 className="relative max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
                  Let&apos;s find the scholarships you qualify for
                </h2>
                <p className="relative max-w-md text-white/70">
                  Tell us about your profile and goals, and we&apos;ll map out the
                  funding options worth applying for.
                </p>
                <div className="relative">
                  <EnquiryButton size="lg">
                    Check my scholarship options
                  </EnquiryButton>
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
