import type { Metadata } from "next";
import Image from "next/image";
import {
  Target,
  Eye,
  Heart,
  ShieldCheck,
  HandHeart,
  Compass,
} from "@phosphor-icons/react/dist/ssr";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { StickyActions } from "@/components/ui/StickyActions";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { EnquiryButton } from "@/components/ui/EnquiryButton";

export const metadata: Metadata = {
  title: "About Us | Karl Konsult International",
  description:
    "Meet Karl Konsult International, overseas education consultants guiding students to the right university since 2009 with honest, outcome-first advice.",
};

const stats = [
  { value: "5,000+", label: "Students placed" },
  { value: "16 yrs", label: "Of guidance" },
  { value: "250+", label: "Partner universities" },
  { value: "98%", label: "Visa success" },
];

const values = [
  {
    Icon: ShieldCheck,
    title: "Honesty first",
    desc: "We recommend what fits you, not what pays us the most. Always.",
    tint: "bg-emerald-50 text-emerald-600",
  },
  {
    Icon: HandHeart,
    title: "Student at the centre",
    desc: "Every shortlist starts from your scores, budget and ambitions.",
    tint: "bg-coral-400/15 text-coral-500",
  },
  {
    Icon: Compass,
    title: "End to end",
    desc: "From the first call to the visa stamp, one team stays with you.",
    tint: "bg-gold-400/20 text-gold-500",
  },
];

const team = [
  { name: "Rajeev Karl", role: "Founder & Lead Counsellor", img: "https://picsum.photos/seed/karl-team-rajeev/500/500" },
  { name: "Meher Sodhi", role: "Visa & Documentation Head", img: "https://picsum.photos/seed/karl-team-meher/500/500" },
  { name: "Aman Verma", role: "Test Prep Lead", img: "https://picsum.photos/seed/karl-team-aman/500/500" },
  { name: "Priya Nair", role: "University Relations", img: "https://picsum.photos/seed/karl-team-priya/500/500" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="About us"
          title="Your education buddy,"
          highlight="since 2009"
          subtitle="We are counsellors first, agents second. Here is the team and the thinking behind every offer letter we help win."
        />

        {/* story */}
        <section className="py-14 sm:py-16 lg:py-24">
          <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
            <Reveal direction="right" className="relative">
              <div className="absolute -left-8 -top-8 -z-0 h-44 w-44 blob bg-gold-300/60 blur-2xl" />
              <div className="absolute -bottom-8 -right-8 -z-0 h-44 w-44 blob bg-emerald-200/60 blur-2xl" />
              <div className="relative animate-floaty-slow overflow-hidden rounded-[36px] ring-4 ring-white shadow-[0_30px_60px_-28px_rgba(21,35,63,0.4)]">
                <Image
                  src="/who_we_are.png"
                  alt="The Karl Konsult counselling team helping students"
                  width={1100}
                  height={900}
                  className="h-[440px] w-full object-cover"
                />
              </div>
            </Reveal>

            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-700">
                  Our story
                </span>
                <h2 className="mt-4 font-display text-[2rem] font-bold leading-[1.1] tracking-tight text-pine-900 sm:text-4xl">
                  Built by people who have been the nervous applicant
                </h2>
                <div className="mt-5 space-y-4 text-lg leading-relaxed text-pine-700/85">
                  <p>
                    Karl Konsult started in 2009 with one belief: studying abroad should
                    not depend on who you know or how much jargon you can decode. It
                    should depend on a clear plan and honest advice.
                  </p>
                  <p>
                    Since then we have guided thousands of students across eight countries,
                    from the first shortlist to the visa interview. We turn down
                    commissions when a course is not right, because the offer letter that
                    matters is the one you are actually proud of.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* stats band */}
        <section className="bg-pine-900 py-14 sm:py-16">
          <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-8 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.06} className="text-center">
                <p className="font-display text-4xl font-bold text-gold-300 sm:text-5xl">
                  {s.value}
                </p>
                <p className="mt-2 text-sm font-medium text-white/65">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* mission + vision */}
        <section className="py-14 sm:py-16 lg:py-24">
          <div className="mx-auto grid max-w-[1400px] gap-6 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
            <Reveal>
              <div className="h-full rounded-[2rem] bg-gradient-to-br from-emerald-600 to-emerald-700 p-8 text-white shadow-[0_30px_70px_-40px_rgba(21,118,214,0.6)] sm:p-10">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white/15">
                  <Target size={28} weight="fill" />
                </span>
                <h3 className="mt-5 font-display text-2xl font-bold">Our mission</h3>
                <p className="mt-3 leading-relaxed text-white/80">
                  To make studying abroad clear, fair and achievable for every serious
                  student, with guidance that puts the outcome first.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="h-full rounded-[2rem] border border-emerald-100 bg-white p-8 shadow-[0_24px_50px_-34px_rgba(21,35,63,0.5)] sm:p-10">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gold-400/20 text-gold-500">
                  <Eye size={28} weight="fill" />
                </span>
                <h3 className="mt-5 font-display text-2xl font-bold text-pine-900">Our vision</h3>
                <p className="mt-3 leading-relaxed text-pine-700/80">
                  To be the most trusted name in overseas education from India, known not
                  for the most applications, but for the happiest students.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* values */}
        <section className="bg-bone py-14 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-700">
                What we stand for
              </span>
              <h2 className="mt-4 font-display text-[2rem] font-bold leading-[1.1] tracking-tight text-pine-900 sm:text-4xl">
                Three things we never compromise
              </h2>
            </Reveal>
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              {values.map((v, i) => (
                <Reveal key={v.title} delay={i * 0.08}>
                  <div className="h-full rounded-[1.75rem] border border-emerald-100 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_45px_-28px_rgba(21,35,63,0.5)]">
                    <span className={`grid h-14 w-14 place-items-center rounded-2xl ${v.tint}`}>
                      <v.Icon size={28} weight="fill" />
                    </span>
                    <h3 className="mt-5 font-display text-xl font-bold text-pine-900">{v.title}</h3>
                    <p className="mt-2 leading-relaxed text-pine-700/75">{v.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* team */}
        <section className="py-14 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-700">
                The people
              </span>
              <h2 className="mt-4 font-display text-[2rem] font-bold leading-[1.1] tracking-tight text-pine-900 sm:text-4xl">
                Counsellors who pick up the phone
              </h2>
            </Reveal>
            <div className="mt-12 grid grid-cols-2 gap-5 sm:gap-6 lg:grid-cols-4">
              {team.map((m, i) => (
                <Reveal key={m.name} delay={i * 0.06}>
                  <div className="group overflow-hidden rounded-[1.75rem] border border-emerald-100 bg-white text-center shadow-[0_18px_40px_-30px_rgba(21,35,63,0.5)] transition-all duration-300 hover:-translate-y-1">
                    <div className="overflow-hidden bg-emerald-50">
                      <Image
                        src={m.img}
                        alt={m.name}
                        width={500}
                        height={500}
                        className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-56"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-display text-lg font-bold text-pine-900">{m.name}</h3>
                      <p className="mt-1 text-sm text-emerald-600">{m.role}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-16 sm:pb-20 lg:pb-28">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="flex flex-col items-center gap-6 rounded-[2rem] bg-pine-900 p-10 text-center shadow-[0_30px_70px_-40px_rgba(21,35,63,0.7)] sm:p-14">
                <div className="flex items-center gap-2 text-gold-300">
                  <Heart size={22} weight="fill" />
                  <span className="text-sm font-semibold uppercase tracking-wide">Let's talk</span>
                </div>
                <h2 className="max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
                  Ready to plan your study-abroad journey?
                </h2>
                <p className="max-w-md text-white/65">
                  Book a free, no-pressure counselling session. We will map the next step
                  with you.
                </p>
                <EnquiryButton variant="ghost" size="lg">
                  Book free counselling
                </EnquiryButton>
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
