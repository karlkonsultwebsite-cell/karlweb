import type { Metadata } from "next";
import Image from "next/image";
import {
  Headphones,
  BookOpen,
  PencilLine,
  Microphone,
  Sparkle,
  ArrowRight,
  CheckCircle,
  Target,
  UsersThree,
  ChartLineUp,
} from "@phosphor-icons/react/dist/ssr";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { StickyActions } from "@/components/ui/StickyActions";
import { Reveal } from "@/components/ui/Reveal";
import { EnquiryButton } from "@/components/ui/EnquiryButton";
import { Cloud } from "@/components/ui/Decor";
import { Faq } from "@/components/ui/Faq";

const facts = [
  { v: "2h 45m", l: "Total duration" },
  { v: "0 - 9", l: "Band scale" },
  { v: "5-7 days", l: "Results (computer)" },
  { v: "2 years", l: "Score validity" },
];

const faqs = [
  { q: "Academic or General Training?", a: "Academic is for university study; General Training is for work and migration. We will tell you exactly which one your goal needs in the first session." },
  { q: "How long is the coaching?", a: "Our standard track is 8 weeks, with extension available. Intensive options exist if your test date is close." },
  { q: "How many students per batch?", a: "A maximum of 8, so the trainer can give every student individual feedback on writing and speaking." },
  { q: "Do you provide mock tests?", a: "Yes, a full-length mock every week with a tracked score history so you can see your progress band by band." },
];

export const metadata: Metadata = {
  title: "IELTS Coaching | Karl Konsult International",
  description:
    "IELTS coaching with small batches, weekly mock tests and band-targeted feedback for Academic and General Training.",
};

const modules = [
  { Icon: Headphones, title: "Listening", desc: "4 sections, 40 questions. Accent training and note-taking drills.", time: "30 min" },
  { Icon: BookOpen, title: "Reading", desc: "Skimming, scanning and timing strategy for every question type.", time: "60 min" },
  { Icon: PencilLine, title: "Writing", desc: "Task 1 and Task 2 frameworks with line-by-line feedback.", time: "60 min" },
  { Icon: Microphone, title: "Speaking", desc: "One-on-one mock interviews with a real examiner rubric.", time: "11-14 min" },
];

const features = [
  { Icon: UsersThree, title: "Small batches", desc: "Maximum 8 students so the trainer knows your weak spots." },
  { Icon: Target, title: "Band-targeted", desc: "We set a target band and build the plan backwards from it." },
  { Icon: ChartLineUp, title: "Weekly mocks", desc: "Full-length tests every week with a tracked score history." },
];

export default function IELTSPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-b from-emerald-100 via-emerald-50 to-bone">
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <Cloud className="left-[7%] top-[20%] w-24 text-white animate-floaty" />
            <Cloud className="right-[14%] top-[10%] w-16 text-white/80 animate-floaty-slow" />
            <div className="absolute -right-20 top-1/4 h-80 w-80 rounded-full bg-emerald-200/50 blur-3xl" />
            <div className="dot-grid absolute bottom-10 left-[5%] h-24 w-40 opacity-50" />
          </div>

          <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-8 lg:pb-24 lg:pt-16">
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-emerald-700 shadow-sm ring-1 ring-emerald-100">
                  <Sparkle size={15} weight="fill" className="text-gold-500" />
                  IELTS · Academic & General
                </span>
                <h1 className="mt-6 font-display text-[2.4rem] font-bold leading-[1.04] tracking-tight text-pine-900 sm:text-5xl lg:text-[4rem]">
                  Hit the{" "}
                  <span className="relative inline-block text-emerald-600">
                    band you need
                    <svg aria-hidden viewBox="0 0 240 16" className="absolute -bottom-2 left-0 w-full text-gold-400" preserveAspectRatio="none">
                      <path d="M3 11c56-9 164-11 234-5" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" />
                    </svg>
                  </span>
                </h1>
                <p className="mt-6 max-w-[44ch] text-lg leading-relaxed text-pine-700">
                  Small-batch coaching with weekly mock tests and feedback targeted to the
                  exact band your university and visa need.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <EnquiryButton size="lg">
                    Book a free demo class
                    <ArrowRight size={18} weight="bold" />
                  </EnquiryButton>
                </div>
              </Reveal>
            </div>

            {/* hero illustration + floating band card */}
            <Reveal direction="left" className="relative mx-auto w-full max-w-[520px]">
              <div className="absolute -right-6 -top-6 -z-0 h-44 w-44 blob bg-gold-300/60 blur-2xl" />
              <Image
                src="/ielts-hero.png"
                alt="Student preparing for the IELTS exam"
                width={760}
                height={760}
                priority
                className="relative w-full animate-floaty-slow drop-shadow-[0_30px_55px_rgba(21,35,63,0.28)]"
              />
              <div className="absolute -bottom-2 -left-2 w-[200px] rounded-[1.5rem] bg-white/95 p-5 ring-1 ring-emerald-100 shadow-[0_30px_60px_-30px_rgba(21,35,63,0.5)] backdrop-blur sm:-left-6 sm:w-[230px]">
                <p className="text-xs font-semibold uppercase tracking-wide text-pine-700/55">Average band lift</p>
                <div className="mt-1 flex items-end gap-1.5">
                  <span className="font-display text-4xl font-bold text-emerald-600">+1.5</span>
                  <span className="mb-1.5 text-sm font-semibold text-pine-700/70">bands</span>
                </div>
                <div className="mt-3 space-y-2">
                  {[
                    { l: "Listening", b: "8.0" },
                    { l: "Writing", b: "7.0" },
                  ].map((r) => (
                    <div key={r.l}>
                      <div className="flex justify-between text-xs font-semibold text-pine-800">
                        <span>{r.l}</span>
                        <span className="text-emerald-600">{r.b}</span>
                      </div>
                      <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-emerald-50">
                        <div className="h-full rounded-full bg-emerald-500" style={{ width: `${(parseFloat(r.b) / 9) * 100}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* QUICK FACTS */}
        <section className="border-y border-emerald-100 bg-white py-8">
          <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-6 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
            {facts.map((f, i) => (
              <Reveal key={f.l} delay={i * 0.05} className="text-center">
                <p className="font-display text-3xl font-bold text-emerald-600 sm:text-4xl">{f.v}</p>
                <p className="mt-1 text-sm font-medium text-pine-700/65">{f.l}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* 4 MODULES */}
        <section className="py-14 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-700">
                The four modules
              </span>
              <h2 className="mt-4 font-display text-[2rem] font-bold leading-[1.1] tracking-tight text-pine-900 sm:text-4xl">
                We coach every band, separately
              </h2>
            </Reveal>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {modules.map((m, i) => (
                <Reveal key={m.title} delay={i * 0.07}>
                  <div className="group h-full rounded-[1.75rem] border border-emerald-100 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_45px_-28px_rgba(21,35,63,0.5)]">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                      <m.Icon size={28} weight="fill" />
                    </span>
                    <div className="mt-5 flex items-center justify-between">
                      <h3 className="font-display text-xl font-bold text-pine-900">{m.title}</h3>
                      <span className="rounded-full bg-bone px-2.5 py-1 text-xs font-semibold text-pine-700/60">{m.time}</span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-pine-700/75">{m.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* WHY US strip */}
        <section className="bg-bone py-14 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-3">
              {features.map((f, i) => (
                <Reveal key={f.title} delay={i * 0.08}>
                  <div className="h-full rounded-[1.75rem] bg-white p-8 ring-1 ring-emerald-100">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-emerald-600 text-white">
                      <f.Icon size={28} weight="fill" />
                    </span>
                    <h3 className="mt-5 font-display text-xl font-bold text-pine-900">{f.title}</h3>
                    <p className="mt-2 leading-relaxed text-pine-700/75">{f.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto mb-10 max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-700">
                Questions
              </span>
              <h2 className="mt-4 font-display text-[2rem] font-bold leading-[1.1] tracking-tight text-pine-900 sm:text-4xl">
                IELTS, answered
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
                <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-emerald-600/30 blur-2xl" />
                <ul className="relative flex flex-wrap justify-center gap-x-6 gap-y-2">
                  {["8-week track", "Free demo class", "Money-back band guarantee"].map((t) => (
                    <li key={t} className="flex items-center gap-2 text-sm font-semibold text-white/80">
                      <CheckCircle size={18} weight="fill" className="text-gold-300" />
                      {t}
                    </li>
                  ))}
                </ul>
                <h2 className="relative max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
                  Start with a free IELTS demo class
                </h2>
                <div className="relative">
                  <EnquiryButton variant="ghost" size="lg">Book my demo</EnquiryButton>
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
