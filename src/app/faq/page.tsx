import type { Metadata } from "next";
import {
  ArrowRight,
  Question,
  Compass,
  GraduationCap,
  FileText,
  Bank,
  Books,
  CheckCircle,
} from "@phosphor-icons/react/dist/ssr";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { StickyActions } from "@/components/ui/StickyActions";
import { Reveal } from "@/components/ui/Reveal";
import { EnquiryButton } from "@/components/ui/EnquiryButton";
import { Cloud } from "@/components/ui/Decor";
import { Faq } from "@/components/ui/Faq";

export const metadata: Metadata = {
  title: "Study Abroad FAQ | Karl Konsult International",
  description:
    "Answers to the most common study abroad questions — counselling, choosing a course & country, applications, student visas, finances and test prep. From trusted overseas education consultants in Jaipur.",
};

const categories = [
  {
    Icon: Compass,
    title: "Getting started & counselling",
    items: [
      {
        q: "Is the first counselling session really free?",
        a: "Yes. Your first counselling session is completely free and there's no obligation to sign up. We use it to understand your goals, marks, budget and timeline, then give you honest, realistic guidance — even if that means telling you to wait a year or rethink a plan.",
      },
      {
        q: "When is the right time to start planning my study abroad journey?",
        a: "The earlier the better — ideally 10 to 14 months before your intended intake. That gives you room for test prep (IELTS/PTE), university shortlisting, applications, scholarship deadlines and a stress-free visa process. That said, we've helped students on shorter timelines too, so talk to us regardless of where you are.",
      },
      {
        q: "Do I have to visit your Jaipur office, or can everything be done online?",
        a: "Both work. You're welcome to visit us in Jaipur for a face-to-face session, or we can guide you entirely over call, video and WhatsApp. Most students use a mix of both, and our support stays the same either way.",
      },
      {
        q: "What does Karl Konsult actually help with?",
        a: "End to end: career and course counselling, country and university shortlisting, applications and SOPs, IELTS/PTE coaching, scholarship guidance, student-visa filing and pre-departure support. You get one team that stays with you from the first question to your first day abroad.",
      },
      {
        q: "Will you push me toward a specific university or country?",
        a: "No. Our advice is student-first, not commission-first. We shortlist based on your profile, budget and long-term goals, and we're upfront about the trade-offs of each option so you can decide with confidence.",
      },
    ],
  },
  {
    Icon: GraduationCap,
    title: "Choosing a course & country",
    items: [
      {
        q: "How do I decide which country is right for me?",
        a: "It comes down to your course, budget, post-study work goals and the kind of experience you want. In counselling we compare tuition, living costs, work rights, visa policies and job outcomes across countries like the UK, Germany, Italy, China and more, then match them to your profile.",
      },
      {
        q: "I'm not sure what course to study. Can you help me choose?",
        a: "Absolutely. Many students come to us undecided. We look at your academic background, interests, strengths and career direction to suggest courses that genuinely fit — not just the ones that are easiest to get into.",
      },
      {
        q: "Can I study abroad in English without knowing the local language?",
        a: "Yes. Many programmes, especially in the UK, and a growing number in Europe, are taught fully in English. For countries like Germany, learning the local language helps with admissions, visas and part-time work, and we offer German classes to support that.",
      },
      {
        q: "Are the universities you recommend recognised and reputable?",
        a: "We only work with accredited, recognised institutions and are transparent about rankings, accreditation and outcomes. You'll always know why a university is on your shortlist before you apply.",
      },
    ],
  },
  {
    Icon: FileText,
    title: "Applications & admissions",
    items: [
      {
        q: "How many universities should I apply to?",
        a: "Usually a balanced mix of ambitious, target and safe choices — often three to six — so you have strong options without overspending on application fees. We tailor the exact list to your profile and budget.",
      },
      {
        q: "Do you help with the SOP and other application documents?",
        a: "Yes. We guide you on your Statement of Purpose, LORs, CV/resume and application forms. We help you draft and refine — in your own voice — so your application is authentic, well-structured and stands out for the right reasons.",
      },
      {
        q: "What are my chances of getting an admission or offer?",
        a: "It depends on your academics, test scores, chosen universities and how well your application is presented. We give you an honest read on your chances and build a realistic shortlist so you're not banking on a single long-shot.",
      },
      {
        q: "How long does the admission process take?",
        a: "It varies by country and university — anywhere from a couple of weeks to a few months. Some institutions offer on rolling deadlines while others have fixed cycles. We map every deadline for your shortlist so nothing slips.",
      },
    ],
  },
  {
    Icon: Bank,
    title: "Visa & finances",
    items: [
      {
        q: "Do you help with the student visa application?",
        a: "Yes. Student-visa support is a core part of what we do. We help with document checklists, financial proof, form filling and interview preparation so your visa file is complete, honest and consulate-ready.",
      },
      {
        q: "How much money do I need to show for a student visa?",
        a: "Every country sets its own financial requirement covering tuition plus living costs, and the exact figure and format change over time. In counselling we walk you through the current requirement for your destination and how to document funds correctly.",
      },
      {
        q: "Can I work part-time while studying abroad?",
        a: "Most study destinations allow international students to work part-time during term (commonly up to around 20 hours a week) and full-time in holidays, subject to visa rules. We explain the exact work rights for your country so you can plan your finances.",
      },
      {
        q: "Are education loans and scholarships available?",
        a: "Yes to both. Many students fund their studies through a combination of savings, education loans and scholarships. We guide you on scholarship options and how to strengthen your applications for them — see our scholarships page for details.",
      },
      {
        q: "What if my visa gets rejected?",
        a: "A careful, honest application is the best protection against rejection, which is exactly what we help you build. If a refusal does happen, we review the reasons with you and plan the strongest possible way forward, whether that's a reapplication or an alternative option.",
      },
    ],
  },
  {
    Icon: Books,
    title: "Language courses & test prep",
    items: [
      {
        q: "Do you offer IELTS and PTE coaching?",
        a: "Yes. We run structured IELTS and PTE coaching with practice tests, feedback and strategy sessions, in both live online and in-centre batches, so you walk into the exam prepared and confident.",
      },
      {
        q: "Which English test should I take — IELTS or PTE?",
        a: "It depends on the universities and countries you're targeting and how you perform under each format. Some students find PTE's computer-based style easier, others prefer IELTS. We help you pick the one that plays to your strengths and is accepted where you're applying.",
      },
      {
        q: "Do I need to learn German to study in Germany?",
        a: "For English-taught programmes you may only need basic German, but many German-taught degrees, blocked-account pathways and part-time jobs expect B1 to B2. Our German classes take you from A1 to C1 along a clear, Goethe-aligned roadmap.",
      },
      {
        q: "How long does it take to get a good IELTS or PTE score?",
        a: "With focused preparation, many students are exam-ready in around 4 to 8 weeks, depending on their starting level and target score. We assess your current level first and set a realistic prep plan around your deadlines.",
      },
    ],
  },
];

export default function FaqPage() {
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
            <div className="dot-grid absolute bottom-10 left-[5%] h-24 w-40 opacity-50" />
          </div>

          <div className="mx-auto max-w-[900px] px-4 pb-16 pt-10 text-center sm:px-6 sm:pb-20 sm:pt-14 lg:px-8 lg:pb-24 lg:pt-16">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-emerald-600 shadow-sm ring-1 ring-emerald-200/60">
                <Question size={15} weight="fill" className="text-emerald-600" />
                Help centre · FAQ
              </span>
              <h1 className="mx-auto mt-6 max-w-3xl font-display text-[2.4rem] font-bold leading-[1.14] tracking-tight text-pine-900 sm:text-5xl lg:text-[3.8rem]">
                Your study abroad questions,{" "}
                <span className="relative inline-block text-emerald-600">
                  answered
                  <svg aria-hidden viewBox="0 0 200 16" className="absolute -bottom-3 left-0 w-full text-gold-400" preserveAspectRatio="none">
                    <path d="M3 11c48-9 140-11 194-5" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-[52ch] text-lg leading-relaxed text-pine-700">
                Studying abroad comes with a lot of questions — and that&apos;s
                completely normal. Here are honest answers to the ones students and
                parents ask us most, from counselling and courses to visas, finances
                and test prep.
              </p>
              <div className="mt-8 flex justify-center">
                <EnquiryButton size="lg">
                  Book free counselling
                  <ArrowRight size={18} weight="bold" />
                </EnquiryButton>
              </div>
            </Reveal>
          </div>
        </section>

        {/* GROUPED FAQS */}
        <section className="py-14 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-[900px] px-4 sm:px-6 lg:px-8">
            <div className="space-y-16 sm:space-y-20">
              {categories.map((cat, i) => (
                <div key={cat.title}>
                  <Reveal className="mb-8 flex items-center gap-4">
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-emerald-100 text-emerald-600">
                      <cat.Icon size={28} weight="fill" />
                    </span>
                    <div>
                      <span className="font-display text-sm font-bold uppercase tracking-wide text-emerald-600">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h2 className="font-display text-2xl font-bold leading-tight tracking-tight text-pine-900 sm:text-3xl">
                        {cat.title}
                      </h2>
                    </div>
                  </Reveal>
                  <Reveal delay={0.05}>
                    <Faq items={cat.items} accent="text-emerald-600" />
                  </Reveal>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-14 sm:pb-16 lg:pb-24">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="relative flex flex-col items-center gap-6 overflow-hidden rounded-[2rem] bg-pine-900 p-10 text-center shadow-[0_30px_70px_-40px_rgba(21,35,63,0.7)] sm:p-14">
                <div className="pointer-events-none absolute -bottom-16 left-10 h-72 w-72 rounded-full bg-emerald-500/25 blur-3xl" />
                <ul className="relative flex flex-wrap justify-center gap-x-6 gap-y-2">
                  {["Free first session", "Honest advice", "End-to-end support"].map((t) => (
                    <li key={t} className="flex items-center gap-2 text-sm font-semibold text-white/80">
                      <CheckCircle size={18} weight="fill" className="text-emerald-300" />
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="relative flex items-center gap-2">
                  <span className="font-display text-sm font-bold uppercase tracking-wide text-gold-300">
                    Still have questions?
                  </span>
                </div>
                <h2 className="relative max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
                  Talk to a counsellor — it&apos;s free
                </h2>
                <p className="relative max-w-md text-white/70">
                  Every student&apos;s situation is different. Tell us yours and
                  we&apos;ll give you clear, personalised answers.
                </p>
                <div className="relative">
                  <EnquiryButton size="lg">
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
