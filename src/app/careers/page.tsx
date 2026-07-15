import type { Metadata } from "next";
import {
  Briefcase,
  MapPin,
  Clock,
  UsersThree,
  HandHeart,
  GraduationCap,
  Rocket,
  Coffee,
  Sparkle,
  CheckCircle,
  ArrowRight,
  TrendUp,
  Heart,
} from "@phosphor-icons/react/dist/ssr";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { StickyActions } from "@/components/ui/StickyActions";
import { Reveal } from "@/components/ui/Reveal";
import { EnquiryButton } from "@/components/ui/EnquiryButton";
import { Button } from "@/components/ui/Button";
import { Cloud } from "@/components/ui/Decor";

export const metadata: Metadata = {
  title: "Careers at Karl Konsult International | Jobs at a Study Abroad Consultancy in Jaipur",
  description:
    "Explore careers at Karl Konsult International. We're hiring for overseas education counsellor jobs and more at our study abroad consultancy in Jaipur — join a mission-driven team helping students study abroad and change their lives.",
};

const perks = [
  {
    Icon: HandHeart,
    title: "Work that matters",
    desc: "Every day you help a real student reach a university abroad. It's rewarding work with a visible, life-changing impact.",
  },
  {
    Icon: TrendUp,
    title: "Room to grow",
    desc: "Clear career paths, mentorship and ownership from day one. We promote from within and back your ambitions.",
  },
  {
    Icon: UsersThree,
    title: "A team that has your back",
    desc: "Friendly, low-ego colleagues who celebrate wins together and pitch in when things get busy.",
  },
  {
    Icon: GraduationCap,
    title: "Always learning",
    desc: "Sponsored certifications, product training and exposure to universities and partners across the globe.",
  },
  {
    Icon: Rocket,
    title: "Fast-moving & modern",
    desc: "A growing consultancy where good ideas ship quickly and your voice actually shapes how we work.",
  },
  {
    Icon: Coffee,
    title: "Balance & culture",
    desc: "Great office, festive celebrations, incentives and a healthy respect for your time outside work.",
  },
];

const stats = [
  { value: "40+", label: "Team members" },
  { value: "5,000+", label: "Students guided" },
  { value: "9", label: "Study destinations" },
  { value: "250+", label: "Partner universities" },
];

type Job = {
  title: string;
  location: string;
  type: string;
  desc: string;
};

const openings: Job[] = [
  {
    title: "Senior Study Abroad Counsellor",
    location: "Jaipur",
    type: "Full-time",
    desc: "Guide students end-to-end — from shortlisting universities to admissions and visas. Ideal for an experienced overseas education counsellor who loves mentoring students.",
  },
  {
    title: "IELTS / PTE Trainer",
    location: "Jaipur",
    type: "Full-time",
    desc: "Coach students to top band scores with engaging classes and mock tests. Strong English fundamentals and a knack for teaching are a must.",
  },
  {
    title: "Visa Documentation Specialist",
    location: "Jaipur · Hybrid",
    type: "Full-time",
    desc: "Own the visa file — checklists, SOPs, financials and submissions — with meticulous attention to detail and a calm, student-first approach.",
  },
  {
    title: "Digital Marketing Executive",
    location: "Jaipur · Hybrid",
    type: "Full-time",
    desc: "Run campaigns, social media and content that reach the right students. Bring creativity, data sense and a growth mindset.",
  },
  {
    title: "Front Office Associate",
    location: "Jaipur",
    type: "Full-time",
    desc: "Be the warm first face of Karl Konsult — welcome walk-ins, manage enquiries and keep our office running smoothly.",
  },
];

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-b from-emerald-100 via-emerald-50 to-bone">
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <Cloud className="left-[8%] top-[18%] w-24 text-white animate-floaty" />
            <Cloud className="right-[12%] top-[10%] w-16 text-white/80 animate-floaty-slow" />
            <div className="absolute -right-20 top-1/4 h-80 w-80 rounded-full bg-emerald-400/25 blur-3xl" />
            <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-gold-300/30 blur-3xl" />
          </div>

          <div className="mx-auto max-w-[1400px] px-4 pb-16 pt-10 text-center sm:px-6 sm:pb-20 sm:pt-14 lg:px-8 lg:pb-24 lg:pt-16">
            <Reveal className="mx-auto max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-emerald-600 shadow-sm ring-1 ring-emerald-300/40">
                <Sparkle size={15} weight="fill" className="text-gold-500" />
                Careers · We&apos;re hiring
              </span>
              <h1 className="mt-6 font-display text-[2.2rem] font-bold leading-[1.14] tracking-tight text-pine-900 sm:text-5xl lg:text-[3.9rem]">
                Help students{" "}
                <span className="relative inline-block text-emerald-600">
                  change their lives
                  <svg aria-hidden viewBox="0 0 240 16" className="absolute -bottom-3 left-0 w-full text-gold-400" preserveAspectRatio="none">
                    <path d="M3 11c56-9 164-11 234-5" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-[52ch] text-lg leading-relaxed text-pine-700">
                At Karl Konsult International we turn students&apos; study-abroad dreams
                into acceptance letters. If you&apos;re driven, warm and want work that
                genuinely matters, come build a career with a fast-growing overseas
                education consultancy in Jaipur.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                <Button href="#openings" size="lg">
                  See open roles
                  <ArrowRight size={18} weight="bold" />
                </Button>
                <EnquiryButton variant="outline" size="lg">
                  Send us your CV
                </EnquiryButton>
              </div>
            </Reveal>
          </div>
        </section>

        {/* WHY WORK WITH US */}
        <section className="py-14 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-400/15 px-4 py-1.5 text-sm font-semibold text-emerald-600">
                <Heart size={15} weight="fill" />
                Why work with us
              </span>
              <h2 className="mt-4 font-display text-[2rem] font-bold leading-[1.1] tracking-tight text-pine-900 sm:text-4xl">
                A place you&apos;ll be proud to work
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-pine-700/75">
                We look after our people the same way we look after our students —
                with care, honesty and a real investment in your future.
              </p>
            </Reveal>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {perks.map((p, i) => (
                <Reveal key={p.title} delay={(i % 3) * 0.06}>
                  <div className="group h-full rounded-[1.75rem] border border-emerald-300/30 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_45px_-28px_rgba(21,118,214,0.4)]">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-emerald-400/15 text-emerald-600 transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                      <p.Icon size={28} weight="fill" />
                    </span>
                    <h3 className="mt-5 font-display text-xl font-bold text-pine-900">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-pine-700/75">{p.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* LIFE AT KARL KONSULT — STAT STRIP */}
        <section className="bg-bone py-14 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-400/15 px-4 py-1.5 text-sm font-semibold text-emerald-600">
                Life at Karl Konsult
              </span>
              <h2 className="mt-4 font-display text-[2rem] font-bold leading-[1.1] tracking-tight text-pine-900 sm:text-4xl">
                A growing team with a big mission
              </h2>
            </Reveal>

            <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={(i % 4) * 0.06}>
                  <div className="h-full rounded-[1.75rem] bg-white p-8 text-center ring-1 ring-emerald-300/30">
                    <p className="font-display text-4xl font-bold text-emerald-600 sm:text-5xl">{s.value}</p>
                    <p className="mt-2 text-sm font-semibold text-pine-700/70">{s.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* OPEN POSITIONS */}
        <section id="openings" className="scroll-mt-24 py-14 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-400/15 px-4 py-1.5 text-sm font-semibold text-emerald-600">
                <Briefcase size={15} weight="fill" />
                Open positions
              </span>
              <h2 className="mt-4 font-display text-[2rem] font-bold leading-[1.1] tracking-tight text-pine-900 sm:text-4xl">
                Find your role at Karl Konsult
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-pine-700/75">
                Current openings at our study abroad consultancy in Jaipur. See one
                that fits? Apply and our team will be in touch.
              </p>
            </Reveal>

            <div className="mt-12 space-y-5">
              {openings.map((job, i) => (
                <Reveal key={job.title} delay={(i % 3) * 0.05}>
                  <div className="group flex flex-col gap-5 rounded-[1.75rem] border border-emerald-300/30 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-30px_rgba(21,118,214,0.45)] sm:p-8 lg:flex-row lg:items-center lg:justify-between">
                    <div className="min-w-0 flex-1">
                      <h3 className="font-display text-xl font-bold text-pine-900 sm:text-2xl">{job.title}</h3>
                      <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-pine-700/70">
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin size={16} weight="fill" className="text-emerald-600" />
                          {job.location}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Clock size={16} weight="fill" className="text-emerald-600" />
                          {job.type}
                        </span>
                      </div>
                      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-pine-700/75">{job.desc}</p>
                    </div>
                    <div className="shrink-0">
                      <EnquiryButton size="md">
                        Apply now
                        <ArrowRight size={16} weight="bold" />
                      </EnquiryButton>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <p className="mt-6 text-center text-xs text-pine-700/50">
              Roles and locations are indicative and may change. Reach out any time —
              we&apos;re always happy to hear from great people.
            </p>
          </div>
        </section>

        {/* CLOSING CTA */}
        <section className="pb-14 sm:pb-16 lg:pb-24">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="relative flex flex-col items-center gap-6 overflow-hidden rounded-[2rem] bg-pine-900 p-10 text-center shadow-[0_30px_70px_-40px_rgba(21,35,63,0.7)] sm:p-14">
                <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-emerald-500/20 blur-2xl" />
                <div className="pointer-events-none absolute -bottom-20 -left-16 h-72 w-72 rounded-full bg-gold-400/15 blur-2xl" />
                <ul className="relative flex flex-wrap justify-center gap-x-6 gap-y-2">
                  {["Mission-driven work", "Growth & mentorship", "A team that cares"].map((t) => (
                    <li key={t} className="flex items-center gap-2 text-sm font-semibold text-white/80">
                      <CheckCircle size={18} weight="fill" className="text-emerald-300" />
                      {t}
                    </li>
                  ))}
                </ul>
                <h2 className="relative max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
                  Don&apos;t see your role? Send us your CV anyway.
                </h2>
                <p className="relative max-w-xl text-white/70">
                  We&apos;re growing fast and love meeting talented, mission-driven
                  people. Tell us about yourself and we&apos;ll keep you in mind.
                </p>
                <div className="relative">
                  <EnquiryButton size="lg" className="!bg-white !text-emerald-600 hover:!bg-white/90">
                    Send us your CV
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
