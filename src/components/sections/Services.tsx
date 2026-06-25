import {
  Compass,
  Exam,
  Bank,
  AirplaneTilt,
  FirstAidKit,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/ui/Reveal";
import { EnquiryButton } from "@/components/ui/EnquiryButton";

/**
 * "What we do" as a connected journey path (a stepper), deliberately a different
 * layout family from the card+list sections. Order is meaningful: these are the
 * five sequential stages from first dream to departure.
 */
const steps = [
  {
    n: "01",
    Icon: Compass,
    title: "Course mapping",
    desc: "A shortlist built around your scores, budget and the career you want.",
  },
  {
    n: "02",
    Icon: Exam,
    title: "Test prep",
    desc: "IELTS, PTE and German coaching with mocks and band-targeted feedback.",
  },
  {
    n: "03",
    Icon: Bank,
    title: "Loans & funding",
    desc: "Education-loan paperwork, scholarships and proof-of-funds support.",
  },
  {
    n: "04",
    Icon: AirplaneTilt,
    title: "Visa filing",
    desc: "SOP drafting, document checks and interview prep, start to stamp.",
  },
  {
    n: "05",
    Icon: FirstAidKit,
    title: "MBBS abroad",
    desc: "Vetted medical universities with NMC-recognised pathways.",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-gradient-to-b from-bone to-emerald-50/50 py-14 sm:py-20 lg:py-28"
    >
      <div className="pointer-events-none absolute -right-32 top-32 -z-0 h-96 w-96 rounded-full bg-emerald-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-emerald-700 ring-1 ring-emerald-100">
            What we do
          </span>
          <h2 className="mt-5 font-display text-[2rem] font-bold leading-[1.08] tracking-tight text-pine-900 sm:text-4xl md:text-[3.4rem]">
            From first dream to{" "}
            <span className="text-emerald-600">departure gate</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-pine-700/75">
            Five connected stages. One team walks every one of them with you.
          </p>
        </Reveal>

        {/* the journey path */}
        <div className="relative mt-16">
          {/* connecting line: horizontal on desktop, vertical on mobile */}
          <div className="absolute left-[27px] top-0 h-full w-0.5 bg-gradient-to-b from-emerald-200 via-emerald-200 to-transparent md:left-0 md:top-[27px] md:h-0.5 md:w-full md:bg-gradient-to-r md:from-transparent md:via-emerald-200 md:to-transparent" />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-4">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <div className="group relative flex items-start gap-5 md:flex-col md:items-center md:text-center">
                  {/* node */}
                  <div className="relative z-10 shrink-0">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white text-emerald-600 shadow-[0_12px_28px_-14px_rgba(21,35,63,0.5)] ring-1 ring-emerald-100 transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-emerald-600 group-hover:text-white">
                      <s.Icon size={26} weight="fill" />
                    </div>
                    <span className="absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full bg-gold-400 text-[11px] font-bold text-pine-900">
                      {s.n}
                    </span>
                  </div>

                  <div className="md:mt-5">
                    <h3 className="font-display text-lg font-bold text-pine-900">
                      {s.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-pine-700/75 md:mx-auto md:max-w-[18ch]">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* closing CTA band */}
        <Reveal delay={0.1}>
          <div className="mt-14 flex flex-col items-center justify-between gap-5 rounded-[1.75rem] bg-pine-900 p-7 text-center shadow-[0_30px_70px_-40px_rgba(21,35,63,0.7)] sm:flex-row sm:p-8 sm:text-left">
            <div>
              <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
                Not sure where you fit on the path?
              </h3>
              <p className="mt-1.5 text-white/65">
                Start with a free shortlist. We will map the rest around it.
              </p>
            </div>
            <EnquiryButton variant="ghost" size="lg" className="shrink-0">
              Book free counselling
            </EnquiryButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
