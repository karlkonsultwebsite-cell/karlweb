import type { Metadata } from "next";
import Image from "next/image";
import {
  Stethoscope,
  Sparkle,
  ArrowRight,
  CheckCircle,
  CurrencyInr,
  GlobeHemisphereWest,
  Translate,
  Certificate,
  ClipboardText,
  Books,
  Hospital,
  Path,
  Star,
} from "@phosphor-icons/react/dist/ssr";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { StickyActions } from "@/components/ui/StickyActions";
import { Reveal } from "@/components/ui/Reveal";
import { EnquiryButton, EnquiryTrigger } from "@/components/ui/EnquiryButton";
import { Cloud } from "@/components/ui/Decor";
import { Faq } from "@/components/ui/Faq";
import { mbbsCountries } from "@/lib/data";

export const metadata: Metadata = {
  title: "MBBS Abroad Consultants | Study MBBS in China, Russia, Kazakhstan & Uzbekistan",
  description:
    "Study MBBS abroad with Karl Konsult International, trusted MBBS abroad consultants in Jaipur. Affordable, NMC-screened, English-medium medical universities in China, Russia, Kazakhstan and Uzbekistan — with full admission, NEET and visa support.",
};

const reasons = [
  { Icon: CurrencyInr, title: "Affordable fees", desc: "Total tuition often a fraction of a private Indian medical seat, with transparent costs." },
  { Icon: Translate, title: "English-medium", desc: "Programmes taught in English, so language is never a barrier to your degree." },
  { Icon: Certificate, title: "Globally recognised", desc: "NMC-screened, WHO/WDOMS-listed universities so your degree counts back home." },
  { Icon: Hospital, title: "Strong clinical exposure", desc: "Modern teaching hospitals and hands-on training from the early years." },
  { Icon: GlobeHemisphereWest, title: "No donation", desc: "Merit-based admission — no capitation or donation demands to secure a seat." },
  { Icon: Books, title: "FMGE / NExT ready", desc: "Coaching and guidance for the licensing exam you'll sit when you return to India." },
];

const eligibility = [
  "Class 12 with Physics, Chemistry & Biology (PCB)",
  "Minimum 50% in PCB (40% for reserved categories)",
  "Qualified NEET score (mandatory for Indian students)",
  "17 years or older by 31 December of admission year",
];

const steps = [
  { Icon: ClipboardText, title: "Free profile review", desc: "We assess your NEET score, marks and budget, then shortlist the right universities." },
  { Icon: Path, title: "Apply & get admitted", desc: "We handle the application, invitation letter and admission paperwork end to end." },
  { Icon: Certificate, title: "Visa & travel", desc: "Student-visa filing, document checks and pre-departure briefing for a smooth move." },
  { Icon: Star, title: "Study & return licensed", desc: "Ongoing support abroad, plus FMGE/NExT guidance so you come back ready to practise." },
];

const faqs = [
  { q: "Is NEET required to study MBBS abroad?", a: "Yes. For Indian students, a qualified NEET score is mandatory to study MBBS abroad and to sit the FMGE/NExT licensing exam on your return. We help you map your NEET score to the right universities." },
  { q: "Will my degree be valid in India?", a: "We only recommend NMC-screened, WHO/WDOMS-listed universities. After graduating you must clear the FMGE/NExT exam to practise in India — and we provide guidance and coaching for it." },
  { q: "How much does MBBS abroad cost?", a: "Total tuition typically ranges from around ₹15–40 lakh depending on the country and university — usually far less than a private Indian medical seat. We give you a transparent, all-inclusive estimate up front." },
  { q: "Are classes taught in English?", a: "Yes. The universities we work with run their MBBS programmes in English, with local-language support added only for clinical/hospital interactions." },
  { q: "How long is the MBBS programme?", a: "Generally 5 to 6 years including internship, depending on the country. Exact duration is listed on each country card above." },
];

export default function MbbsAbroadPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-b from-coral-300/30 via-coral-300/10 to-bone">
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <Cloud className="left-[8%] top-[18%] w-24 text-white animate-floaty" />
            <Cloud className="right-[12%] top-[10%] w-16 text-white/80 animate-floaty-slow" />
            <div className="absolute -right-20 top-1/4 h-80 w-80 rounded-full bg-coral-400/30 blur-3xl" />
            <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-gold-300/30 blur-3xl" />
          </div>

          <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-8 lg:pb-24 lg:pt-16">
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-coral-500 shadow-sm ring-1 ring-coral-300/40">
                  <Sparkle size={15} weight="fill" className="text-gold-500" />
                  MBBS Abroad · NMC-screened universities
                </span>
                <h1 className="mt-6 font-display text-[2.2rem] font-bold leading-[1.14] tracking-tight text-pine-900 sm:text-5xl lg:text-[3.9rem]">
                  Become the doctor{" "}
                  <span className="relative inline-block text-coral-500">
                    you set out to be
                    <svg aria-hidden viewBox="0 0 240 16" className="absolute -bottom-3 left-0 w-full text-gold-400" preserveAspectRatio="none">
                      <path d="M3 11c56-9 164-11 234-5" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" />
                    </svg>
                  </span>
                </h1>
                <p className="mt-6 max-w-[48ch] text-lg leading-relaxed text-pine-700">
                  Didn&apos;t get the Indian medical seat you hoped for? Study MBBS abroad
                  at affordable, English-medium, NMC-screened universities in China,
                  Russia, Kazakhstan and Uzbekistan — and we&apos;ll guide you through
                  every step, from NEET to your white coat.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
                  <EnquiryButton size="lg" className="!bg-coral-500 hover:!bg-coral-400">
                    Talk to an MBBS counsellor
                    <ArrowRight size={18} weight="bold" />
                  </EnquiryButton>
                  <EnquiryButton variant="outline" size="lg">
                    Check eligibility
                  </EnquiryButton>
                </div>
              </Reveal>
            </div>

            {/* hero photo + floating fee chip */}
            <Reveal direction="left" className="relative mx-auto w-full max-w-[520px]">
              <div className="absolute -right-6 -top-6 -z-0 h-44 w-44 blob bg-gold-300/60 blur-2xl" />
              <div className="absolute -bottom-8 -left-8 -z-0 h-48 w-48 blob bg-coral-300/50 blur-2xl" />
              <div className="relative animate-floaty-slow overflow-hidden rounded-[2.5rem] ring-4 ring-white shadow-[0_40px_80px_-32px_rgba(21,35,63,0.45)]">
                <Image
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=1100&q=75"
                  alt="Indian medical student studying MBBS abroad"
                  width={1100}
                  height={1100}
                  priority
                  className="aspect-square h-auto w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 left-4 flex items-center gap-3 rounded-2xl bg-white px-5 py-3 shadow-[0_20px_45px_-18px_rgba(21,35,63,0.45)] sm:left-1/2 sm:-translate-x-1/2">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-coral-400/15 text-coral-500">
                  <CurrencyInr size={20} weight="fill" />
                </span>
                <div className="leading-tight">
                  <p className="font-display text-lg font-bold text-pine-900">From ₹15 L*</p>
                  <p className="text-xs text-pine-700/60">total tuition</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* WHY MBBS ABROAD */}
        <section className="py-14 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-coral-400/15 px-4 py-1.5 text-sm font-semibold text-coral-500">
                Why study MBBS abroad
              </span>
              <h2 className="mt-4 font-display text-[2rem] font-bold leading-[1.1] tracking-tight text-pine-900 sm:text-4xl">
                A smarter route to the white coat
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-pine-700/75">
                For thousands of Indian students, studying medicine abroad is the
                affordable, recognised way to become a doctor.
              </p>
            </Reveal>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {reasons.map((r, i) => (
                <Reveal key={r.title} delay={(i % 3) * 0.06}>
                  <div className="group h-full rounded-[1.75rem] border border-coral-300/30 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_45px_-28px_rgba(245,106,77,0.4)]">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-coral-400/15 text-coral-500 transition-colors group-hover:bg-coral-500 group-hover:text-white">
                      <r.Icon size={28} weight="fill" />
                    </span>
                    <h3 className="mt-5 font-display text-xl font-bold text-pine-900">{r.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-pine-700/75">{r.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* COUNTRY DETAIL CARDS */}
        <section className="bg-bone py-14 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-coral-400/15 px-4 py-1.5 text-sm font-semibold text-coral-500">
                <Stethoscope size={15} weight="fill" />
                Where to study
              </span>
              <h2 className="mt-4 font-display text-[2rem] font-bold leading-[1.1] tracking-tight text-pine-900 sm:text-4xl">
                Top MBBS destinations
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-pine-700/75">
                Hand-picked, NMC-screened universities. Tap any country to get a
                personalised university list and fee estimate.
              </p>
            </Reveal>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
              {mbbsCountries.map((c, i) => (
                <Reveal key={c.code} delay={(i % 2) * 0.06}>
                  <EnquiryTrigger
                    ariaLabel={`Enquire about MBBS in ${c.name}`}
                    className="group flex h-full w-full gap-5 rounded-[1.75rem] bg-white p-5 text-left ring-1 ring-coral-300/30 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-30px_rgba(245,106,77,0.5)] sm:p-6"
                  >
                    <div className="relative h-24 w-32 shrink-0 overflow-hidden rounded-2xl sm:h-28 sm:w-36">
                      <Image
                        src={`https://flagcdn.com/h240/${c.code}.png`}
                        alt={`MBBS in ${c.name}`}
                        width={320}
                        height={200}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <span className="absolute left-2 top-2 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-coral-500 backdrop-blur">
                        {c.highlight}
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-display text-xl font-bold text-pine-900">
                        MBBS in {c.name}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-pine-700/75">{c.blurb}</p>
                      <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
                        <div>
                          <dt className="font-semibold uppercase tracking-wide text-pine-700/45">Duration</dt>
                          <dd className="mt-0.5 font-semibold text-pine-900">{c.duration}</dd>
                        </div>
                        <div>
                          <dt className="font-semibold uppercase tracking-wide text-pine-700/45">Medium</dt>
                          <dd className="mt-0.5 font-semibold text-pine-900">{c.medium}</dd>
                        </div>
                        <div className="col-span-2">
                          <dt className="font-semibold uppercase tracking-wide text-pine-700/45">Recognition</dt>
                          <dd className="mt-0.5 font-semibold text-pine-900">{c.recognition}</dd>
                        </div>
                        <div className="col-span-2">
                          <dt className="font-semibold uppercase tracking-wide text-pine-700/45">Indicative fees</dt>
                          <dd className="mt-0.5 font-semibold text-coral-500">{c.feeRange}</dd>
                        </div>
                      </dl>
                    </div>
                  </EnquiryTrigger>
                </Reveal>
              ))}
            </div>
            <p className="mt-6 text-center text-xs text-pine-700/50">
              *Indicative total tuition only. Exact fees, duration and recognition vary by
              university and year — confirm with our counsellors before applying.
            </p>
          </div>
        </section>

        {/* ELIGIBILITY */}
        <section className="py-14 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full bg-coral-400/15 px-4 py-1.5 text-sm font-semibold text-coral-500">
                  Eligibility
                </span>
                <h2 className="mt-4 font-display text-[2rem] font-bold leading-[1.1] tracking-tight text-pine-900 sm:text-4xl">
                  Are you eligible? Most students are.
                </h2>
                <p className="mt-5 max-w-md text-lg text-pine-700/80">
                  The basics are simple. Send us your details and we&apos;ll confirm your
                  eligibility and shortlist universities — free of charge.
                </p>
                <div className="mt-8">
                  <EnquiryButton size="lg" className="!bg-coral-500 hover:!bg-coral-400">
                    Check my eligibility
                    <ArrowRight size={18} weight="bold" />
                  </EnquiryButton>
                </div>
              </Reveal>

              <Reveal direction="left">
                <ul className="space-y-4 rounded-[2rem] bg-pine-900 p-8 shadow-[0_30px_70px_-40px_rgba(21,35,63,0.7)] sm:p-10">
                  {eligibility.map((e) => (
                    <li key={e} className="flex items-start gap-3 text-white">
                      <CheckCircle size={22} weight="fill" className="mt-0.5 shrink-0 text-coral-300" />
                      <span className="font-medium leading-relaxed">{e}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="bg-bone py-14 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto mb-14 max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-coral-400/15 px-4 py-1.5 text-sm font-semibold text-coral-500">
                How it works
              </span>
              <h2 className="mt-4 font-display text-[2rem] font-bold leading-[1.1] tracking-tight text-pine-900 sm:text-4xl">
                From NEET to your white coat
              </h2>
            </Reveal>

            <div className="relative">
              <div className="pointer-events-none absolute left-0 right-0 top-7 hidden h-0.5 bg-coral-300/40 lg:block" />
              <div className="grid gap-8 lg:grid-cols-4">
                {steps.map((s, i) => (
                  <Reveal key={s.title} delay={i * 0.1}>
                    <div className="relative">
                      <span className="relative z-10 grid h-14 w-14 place-items-center rounded-2xl bg-coral-500 text-white shadow-[0_14px_30px_-12px_rgba(245,106,77,0.7)]">
                        <s.Icon size={26} weight="fill" />
                      </span>
                      <span className="mt-5 block font-display text-sm font-bold uppercase tracking-wide text-coral-500">
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

        {/* FAQ */}
        <section className="py-14 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-[900px] px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto mb-10 max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-coral-400/15 px-4 py-1.5 text-sm font-semibold text-coral-500">
                Questions
              </span>
              <h2 className="mt-4 font-display text-[2rem] font-bold leading-[1.1] tracking-tight text-pine-900 sm:text-4xl">
                MBBS abroad, answered
              </h2>
            </Reveal>
            <Reveal>
              <Faq items={faqs} accent="text-coral-500" />
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-14 sm:pb-16 lg:pb-24">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="relative flex flex-col items-center gap-6 overflow-hidden rounded-[2rem] bg-gradient-to-br from-coral-500 to-coral-400 p-10 text-center shadow-[0_30px_70px_-40px_rgba(245,106,77,0.6)] sm:p-14">
                <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-white/15 blur-2xl" />
                <ul className="relative flex flex-wrap justify-center gap-x-6 gap-y-2">
                  {["Free profile review", "NMC-screened universities", "End-to-end support"].map((t) => (
                    <li key={t} className="flex items-center gap-2 text-sm font-semibold text-white/90">
                      <CheckCircle size={18} weight="fill" />
                      {t}
                    </li>
                  ))}
                </ul>
                <h2 className="relative max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
                  Start your MBBS abroad journey today
                </h2>
                <div className="relative">
                  <EnquiryButton size="lg" className="!bg-white !text-coral-500 hover:!bg-white/90">
                    Book free counselling
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
