import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  CheckCircle,
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
  Timeline,
  Steps,
  EligibilityGrid,
  ComparisonTable,
} from "@/components/ui/ContentBlocks";
import type { Destination } from "@/lib/data";
import type { IntakeDetail } from "@/lib/country-content-types";

/**
 * Intake landing page — e.g. "January Intake in UK 2027". Deep, SEO-targeted
 * long-form page matching the client-approved reference structure.
 */
export function IntakePage({
  dest,
  intake,
}: {
  dest: Destination;
  intake: IntakeDetail;
}) {
  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-b from-emerald-100 via-emerald-50 to-bone">
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <Cloud className="left-[7%] top-[20%] w-24 text-white animate-floaty" />
            <Cloud className="right-[12%] top-[10%] w-16 text-white/80 animate-floaty-slow" />
            <div className="absolute -right-20 top-1/4 h-80 w-80 rounded-full bg-emerald-200/50 blur-3xl" />
          </div>

          <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-4 pb-14 pt-10 sm:px-6 sm:pb-16 sm:pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-8 lg:pb-20 lg:pt-16">
            <div>
              <Reveal>
                <Link
                  href={`/study-abroad/${dest.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700 transition-colors hover:text-emerald-800"
                >
                  <ArrowLeft size={16} weight="bold" /> Study in {dest.name}
                </Link>
                <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-emerald-700 shadow-sm ring-1 ring-emerald-100">
                  <CalendarCheck size={15} weight="fill" className="text-gold-500" />
                  {intake.status} · {intake.season}
                </span>
                <h1 className="mt-5 font-display text-[2rem] font-bold leading-[1.14] tracking-tight text-pine-900 sm:text-4xl lg:text-[3.2rem]">
                  <span className="block">{intake.name} in {dest.name}</span>
                  <span className="mt-1 block text-emerald-600">
                    Complete guide for Indian students
                  </span>
                </h1>
                <p className="mt-5 text-base font-semibold text-pine-700/70">{intake.months}</p>
                <p className="mt-4 max-w-[50ch] text-lg leading-relaxed text-pine-700">
                  {intake.intro[0]}
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

            <Reveal direction="left" className="relative mx-auto w-full max-w-[520px]">
              <div className="absolute -right-6 -top-6 -z-0 h-44 w-44 blob bg-gold-300/60 blur-2xl" />
              <div className="relative animate-floaty-slow overflow-hidden rounded-[2.5rem] ring-4 ring-white shadow-[0_40px_80px_-32px_rgba(21,35,63,0.45)]">
                <Image
                  src={dest.img}
                  alt={`${intake.name} in ${dest.name}`}
                  width={1000}
                  height={800}
                  priority
                  className="aspect-[5/4] h-auto w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* INTRO */}
        <Section>
          <SectionHeading
            eyebrow="Overview"
            title={`${intake.name} in ${dest.name}`}
          />
          <div className="mt-6">
            <Prose paragraphs={intake.intro.slice(1)} />
          </div>
        </Section>

        {/* WHAT IS IT */}
        <Section tint>
          <SectionHeading
            eyebrow="The basics"
            title={`What is the ${intake.name} in ${dest.name}?`}
          />
          <div className="mt-6">
            <Prose paragraphs={intake.whatIsIt} />
          </div>
        </Section>

        {/* WHY CHOOSE */}
        <Section>
          <SectionHeading
            eyebrow="Benefits"
            title={`Why choose the ${intake.name}?`}
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {intake.whyChoose.map((w, i) => (
              <Reveal key={w.title} delay={(i % 3) * 0.06}>
                <div className="h-full rounded-[1.75rem] border border-emerald-100 bg-white p-7">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-50 text-emerald-600">
                    <CheckCircle size={24} weight="fill" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-pine-900">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-pine-700/80">{w.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* TIMELINE */}
        <Section tint>
          <SectionHeading
            eyebrow="Plan ahead"
            title={`${intake.name} ${dest.name} timeline`}
            sub="Planning early is the key to securing admission to your preferred university."
          />
          <div className="mt-10">
            <Timeline phases={intake.timeline} />
          </div>
        </Section>

        {/* DEADLINES */}
        <Section>
          <SectionHeading eyebrow="Deadlines" title={`Application deadlines for the ${intake.name}`} />
          <div className="mt-6">
            <Prose paragraphs={intake.deadlines} />
          </div>
        </Section>

        {/* COURSES */}
        <Section tint>
          <SectionHeading
            eyebrow="Courses"
            title={`Popular courses available in the ${intake.name}`}
            sub="Many universities offer career-oriented courses during this intake. Some popular choices include:"
          />
          <div className="mt-10">
            <CourseGrid categories={intake.courseCategories} />
          </div>
        </Section>

        {/* UNIVERSITIES */}
        <Section>
          <SectionHeading
            eyebrow="Universities"
            title={`Top ${dest.name} universities offering the ${intake.name}`}
            sub="Availability may vary by course and department — always check the latest course list before applying."
          />
          <div className="mt-10">
            <UniversityList universities={intake.universities} />
          </div>
        </Section>

        {/* ELIGIBILITY */}
        <Section tint>
          <SectionHeading
            eyebrow="Eligibility"
            title={`Eligibility requirements for the ${intake.name}`}
            sub="Admission requirements differ by university and course level, but generally students need:"
          />
          <div className="mt-10">
            <EligibilityGrid blocks={intake.eligibility} />
          </div>
          <div className="mt-8 rounded-[1.75rem] bg-white p-7 ring-1 ring-emerald-100">
            <h3 className="font-display text-lg font-bold text-pine-900">English language requirements</h3>
            <div className="mt-4">
              <CheckList items={intake.englishTests} columns={2} />
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
            title={`Documents required for the ${intake.name}`}
            sub="Keeping all documents ready in advance helps avoid last-minute delays."
          />
          <div className="mt-8">
            <CheckList items={intake.documents} columns={2} />
          </div>
        </Section>

        {/* HOW TO APPLY */}
        <Section tint>
          <SectionHeading
            eyebrow="Process"
            title={`How to apply for the ${intake.name} in ${dest.name}`}
            sub="The admission process is simple if you follow the correct steps:"
          />
          <div className="mt-10">
            <Steps steps={intake.applySteps} />
          </div>
        </Section>

        {/* SCHOLARSHIPS */}
        <Section>
          <SectionHeading eyebrow="Funding" title={`Scholarships for the ${intake.name}`} />
          <div className="mt-6">
            <Prose paragraphs={intake.scholarships} />
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

        {/* COMPARISON */}
        <Section tint>
          <SectionHeading
            eyebrow="Compare"
            title={`${intake.name} vs ${intake.comparisonMainLabel} in ${dest.name}`}
          />
          <div className="mt-10">
            <Reveal>
              <ComparisonTable
                rows={intake.comparison}
                thisLabel={intake.name}
                mainLabel={intake.comparisonMainLabel}
              />
            </Reveal>
          </div>
        </Section>

        {/* VERDICT */}
        <Section>
          <SectionHeading
            eyebrow="The verdict"
            title={`Is the ${intake.name} in ${dest.name} a good choice?`}
          />
          <div className="mt-6">
            <Prose paragraphs={intake.verdict} />
          </div>
        </Section>

        {/* FAQ */}
        <Section tint>
          <SectionHeading center eyebrow="Questions" title="Frequently asked questions" />
          <div className="mt-10">
            <Reveal>
              <Faq items={intake.faqs} accent="text-emerald-600" />
            </Reveal>
          </div>
        </Section>

        {/* CTA */}
        <section className="py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="relative flex flex-col items-center gap-6 overflow-hidden rounded-[2rem] bg-pine-900 p-10 text-center shadow-[0_30px_70px_-40px_rgba(21,35,63,0.7)] sm:p-14">
                <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-emerald-600/30 blur-2xl" />
                <h2 className="relative max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
                  Start your {dest.name} journey for the {intake.name}
                </h2>
                <p className="relative max-w-xl text-white/70">
                  Start your preparation today and take the first step toward building a
                  successful international career. Our counsellors in Jaipur will guide you
                  through every stage.
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
