import { CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/ui/Reveal";
import { EnquiryForm } from "@/components/ui/EnquiryForm";

export function Counselling() {
  return (
    <section id="counselling" className="py-14 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-emerald-600 to-emerald-700 shadow-[0_40px_80px_-40px_rgba(21,118,214,0.55)]">
          <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-20 left-10 h-72 w-72 rounded-full bg-gold-400/20 blur-3xl" />
          <div className="relative grid items-center gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:gap-16 lg:p-16">
            <Reveal>
              <h2 className="font-display text-4xl font-bold leading-[1.14] tracking-tight text-white md:text-[3.25rem]">
                Book a free counselling session
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-white/85">
                Tell us where you want to study. A senior counsellor will call you back
                within one working day with a clear, no-pressure plan.
              </p>
              <ul className="mt-8 space-y-3">
                {["No fee, no obligation", "Honest course and budget advice", "Visa-readiness check included"].map((t) => (
                  <li key={t} className="flex items-center gap-3 text-white/90">
                    <CheckCircle size={22} weight="fill" className="text-gold-300" />
                    <span className="font-medium">{t}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-3xl bg-white p-6 shadow-[0_24px_50px_-30px_rgba(21,35,63,0.5)] sm:p-8">
                <EnquiryForm />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
