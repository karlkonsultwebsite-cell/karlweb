import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle,
  CurrencyCircleDollar,
  GraduationCap,
  Briefcase,
  Clock,
  CalendarCheck,
} from "@phosphor-icons/react/dist/ssr";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { StickyActions } from "@/components/ui/StickyActions";
import { Reveal } from "@/components/ui/Reveal";
import { EnquiryButton } from "@/components/ui/EnquiryButton";
import { Cloud } from "@/components/ui/Decor";
import { Faq } from "@/components/ui/Faq";
import {
  Section,
  SectionHeading,
  Prose,
  CheckList,
  CourseGrid,
  UniversityList,
  Steps,
  EligibilityGrid,
} from "@/components/ui/ContentBlocks";
import type { Destination, CountryDetail } from "@/lib/data";
import type { CountryContent } from "@/lib/country-content-types";

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
  content,
}: {
  dest: Destination;
  detail: CountryDetail;
  content: CountryContent;
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

          <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-4 pb-14 pt-10 sm:px-6 sm:pb-16 sm:pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-8 lg:pb-20 lg:pt-16">
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-emerald-700 shadow-sm ring-1 ring-emerald-100">
                  <Flag code={dest.code} className="h-4 w-6" />
                  {detail.tagline}
                </span>
                <h1 className="mt-6 font-display text-[2.1rem] font-bold leading-[1.14] tracking-tight text-pine-900 sm:text-5xl lg:text-[3.5rem]">
                  <span className="block">Study in {dest.name}</span>
                  <span className="mt-1 block text-emerald-600">{detail.headline}</span>
                </h1>
                <p className="mt-6 max-w-[50ch] text-lg leading-relaxed text-pine-700">
                  {content.heroIntro[0]}
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
                  <EnquiryButton size="lg">
                    Book free counselling
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

        {/* HIGHLIGHTS */}
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

        {/* INTRO / WHY STUDY */}
        <Section>
          <SectionHeading
            eyebrow={`Why ${dest.name}`}
            title={`Why study in ${dest.name}?`}
          />
          <div className="mt-6">
            <Prose paragraphs={[...content.heroIntro.slice(1), ...content.whyStudy]} />
          </div>
          <div className="mt-10">
            <h3 className="mb-4 font-display text-xl font-bold text-pine-900">
              Study in {dest.name} for Indian students — key advantages
            </h3>
            <CheckList items={content.keyAdvantages} columns={2} />
          </div>
        </Section>

        {/* EDUCATION SYSTEM */}
        <Section tint>
          <SectionHeading eyebrow="How it works" title={`Education system in ${dest.name}`} />
          <div className="mt-6">
            <Prose paragraphs={content.educationSystem} />
          </div>
        </Section>

        {/* INTAKES */}
        <Section id="intakes">
          <SectionHeading
            eyebrow="Intakes"
            title={`Intakes in ${dest.name}`}
            sub={`Every intake has its own timeline, course availability and competition level. Here's each one explained — tap any intake for the full guide.`}
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {content.intakes.map((intake, i) => (
              <Reveal key={intake.slug} delay={(i % 3) * 0.06}>
                <Link
                  href={`/study-abroad/${dest.slug}/${intake.slug}`}
                  className="group flex h-full flex-col rounded-[1.75rem] bg-white p-7 ring-1 ring-emerald-100 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_45px_-28px_rgba(21,35,63,0.5)]"
                >
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-50 text-emerald-600">
                      <CalendarCheck size={24} weight="fill" />
                    </span>
                    <span className="rounded-full bg-bone px-3 py-1 text-xs font-bold uppercase tracking-wide text-pine-700/60">
                      {intake.status}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-pine-900">{intake.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-emerald-600">{intake.months}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-pine-700/80">{intake.summary}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600">
                    Read the full guide
                    <ArrowUpRight size={15} weight="bold" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* COURSES */}
        <Section tint>
          <SectionHeading
            eyebrow="Courses"
            title={`Popular courses in ${dest.name}`}
            sub={`These are the programmes Indian students choose most often — and the ones we're asked about every week.`}
          />
          <div className="mt-10">
            <CourseGrid categories={content.courseCategories} />
          </div>
        </Section>

        {/* UNIVERSITIES */}
        <Section>
          <SectionHeading
            eyebrow="Universities"
            title={`Top universities in ${dest.name}`}
            sub="Representative institutions — your actual shortlist is built around your profile, budget and goals."
          />
          <div className="mt-10">
            <UniversityList universities={content.universities} />
          </div>
        </Section>

        {/* COSTS */}
        <Section tint>
          <SectionHeading eyebrow="Costs" title={`How much does it cost to study in ${dest.name}?`} />
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-emerald-50 text-emerald-600">
                  <GraduationCap size={22} weight="fill" />
                </span>
                <h3 className="font-display text-xl font-bold text-pine-900">Tuition fees</h3>
              </div>
              <Prose paragraphs={content.tuitionCosts} />
              <p className="mt-4 rounded-2xl bg-white p-4 text-sm font-semibold text-emerald-700 ring-1 ring-emerald-100">
                Indicative tuition: {detail.costTuition}
              </p>
            </div>
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-emerald-50 text-emerald-600">
                  <CurrencyCircleDollar size={22} weight="fill" />
                </span>
                <h3 className="font-display text-xl font-bold text-pine-900">Cost of living</h3>
              </div>
              <Prose paragraphs={content.livingCosts} />
              <p className="mt-4 rounded-2xl bg-white p-4 text-sm font-semibold text-emerald-700 ring-1 ring-emerald-100">
                Indicative living cost: {detail.costLiving}
              </p>
            </div>
          </div>
          <p className="mt-6 text-xs text-pine-700/50">
            *All figures are indicative and vary by university, city and year. Confirm with
            our counsellors before budgeting.
          </p>
        </Section>

        {/* SCHOLARSHIPS */}
        <Section>
          <SectionHeading eyebrow="Funding" title={`Scholarships in ${dest.name}`} />
          <div className="mt-6">
            <Prose paragraphs={content.scholarships} />
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {content.namedScholarships.map((s, i) => (
              <Reveal key={s.name} delay={(i % 2) * 0.05}>
                <div className="h-full rounded-[1.5rem] bg-white p-6 ring-1 ring-emerald-100">
                  <h3 className="font-display text-lg font-bold text-emerald-600">{s.name}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-pine-700/80">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-8">
              <Link
                href="/scholarships"
                className="group inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-5 py-2.5 text-sm font-semibold text-emerald-700 transition-all hover:-translate-y-0.5 hover:border-emerald-600"
              >
                See how our scholarship assistance works
                <ArrowUpRight size={15} weight="bold" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </Reveal>
        </Section>

        {/* ELIGIBILITY */}
        <Section tint>
          <SectionHeading
            eyebrow="Admissions"
            title={`Eligibility requirements for ${dest.name}`}
            sub="Requirements vary by university and course level, but here's what you'll generally need."
          />
          <div className="mt-10">
            <EligibilityGrid blocks={content.eligibility} />
          </div>
          <div className="mt-8 rounded-[1.75rem] bg-white p-7 ring-1 ring-emerald-100">
            <h3 className="font-display text-lg font-bold text-pine-900">English language requirements</h3>
            <div className="mt-4">
              <CheckList items={content.englishTests} columns={2} />
            </div>
            <Link
              href="/test-prep/ielts"
              className="group mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600"
            >
              Explore our IELTS / PTE coaching
              <ArrowUpRight size={15} weight="bold" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </Section>

        {/* DOCUMENTS */}
        <Section>
          <SectionHeading
            eyebrow="Paperwork"
            title="Documents required"
            sub="Keeping these ready in advance is the single easiest way to avoid last-minute stress."
          />
          <div className="mt-8">
            <CheckList items={content.documents} columns={2} />
          </div>
        </Section>

        {/* HOW TO APPLY */}
        <Section tint>
          <SectionHeading
            eyebrow="Process"
            title={`How to apply to study in ${dest.name}`}
            sub="The process is simple when you follow it in the right order — and we walk it with you at every step."
          />
          <div className="mt-10">
            <Steps steps={content.applySteps} />
          </div>
        </Section>

        {/* VISA */}
        <Section>
          <SectionHeading eyebrow="Visa" title={`${dest.name} student visa`} />
          <div className="mt-6">
            <Prose paragraphs={content.visa} />
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div className="rounded-[1.5rem] bg-pine-900 p-6 text-white">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10 text-gold-300">
                <Briefcase size={22} weight="fill" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold">Work rights</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-white/70">{detail.workRights}</p>
            </div>
            <div className="rounded-[1.5rem] bg-pine-900 p-6 text-white">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10 text-gold-300">
                <Clock size={22} weight="fill" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold">Intakes</h3>
              <ul className="mt-1.5 space-y-0.5">
                {dest.intakes.map((intake) => (
                  <li key={intake} className="text-sm text-white/70">{intake}</li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* FAQ */}
        <Section tint>
          <SectionHeading
            center
            eyebrow="Questions"
            title={`Studying in ${dest.name}, answered`}
          />
          <div className="mt-10">
            <Reveal>
              <Faq items={detail.faqs} accent="text-emerald-600" />
            </Reveal>
          </div>
        </Section>

        {/* CTA */}
        <section className="py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
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
                <p className="relative max-w-xl text-white/70">
                  Talk to a Karl Konsult counsellor in Jaipur and get a clear, honest plan
                  built around your marks, budget and goals.
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
