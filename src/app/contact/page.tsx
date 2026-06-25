import type { Metadata } from "next";
import {
  Phone,
  EnvelopeSimple,
  MapPin,
  Clock,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { StickyActions } from "@/components/ui/StickyActions";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { EnquiryForm } from "@/components/ui/EnquiryForm";

export const metadata: Metadata = {
  title: "Contact Us | Karl Konsult International",
  description:
    "Talk to Karl Konsult International. Call, WhatsApp, email or book a free counselling session for studying abroad.",
};

const details = [
  {
    Icon: Phone,
    label: "Call us",
    value: "+91 97723 00000",
    href: "tel:+919772300000",
    tint: "bg-emerald-50 text-emerald-600",
  },
  {
    Icon: WhatsappLogo,
    label: "WhatsApp",
    value: "+91 97723 00000",
    href: "https://wa.me/919772300000",
    tint: "bg-[#25D366]/15 text-[#1faa52]",
  },
  {
    Icon: EnvelopeSimple,
    label: "Email",
    value: "hello@karlkonsult.com",
    href: "mailto:hello@karlkonsult.com",
    tint: "bg-coral-400/15 text-coral-500",
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Contact us"
          title="Let's plan your"
          highlight="next step"
          subtitle="Call, WhatsApp, email, or send the form below. A senior counsellor replies within one working day."
        />

        <section className="py-14 sm:py-16 lg:py-24">
          <div className="mx-auto grid max-w-[1400px] gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:px-8">
            {/* left: contact details */}
            <div>
              <Reveal>
                <h2 className="font-display text-[1.8rem] font-bold leading-[1.12] tracking-tight text-pine-900 sm:text-3xl">
                  Reach us directly
                </h2>
                <p className="mt-3 text-lg text-pine-700/80">
                  Prefer to talk first? Pick whatever is easiest for you.
                </p>
              </Reveal>

              <div className="mt-8 flex flex-col gap-4">
                {details.map((d, i) => (
                  <Reveal key={d.label} delay={i * 0.06}>
                    <a
                      href={d.href}
                      target={d.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 rounded-2xl border border-emerald-100 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-28px_rgba(21,35,63,0.5)]"
                    >
                      <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl ${d.tint}`}>
                        <d.Icon size={24} weight="fill" />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-pine-700/55">
                          {d.label}
                        </p>
                        <p className="mt-0.5 font-display text-lg font-bold text-pine-900">
                          {d.value}
                        </p>
                      </div>
                    </a>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={0.2}>
                <div className="mt-6 rounded-2xl border border-emerald-100 bg-bone p-6">
                  <div className="flex items-start gap-3">
                    <MapPin size={22} weight="fill" className="mt-0.5 shrink-0 text-emerald-600" />
                    <div>
                      <p className="font-semibold text-pine-900">Visit our office</p>
                      <p className="mt-1 text-sm leading-relaxed text-pine-700/75">
                        3rd Floor, Crystal Mall, C-Scheme, Jaipur, Rajasthan 302001
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-start gap-3">
                    <Clock size={22} weight="fill" className="mt-0.5 shrink-0 text-emerald-600" />
                    <div>
                      <p className="font-semibold text-pine-900">Office hours</p>
                      <p className="mt-1 text-sm leading-relaxed text-pine-700/75">
                        Mon to Sat · 10:00 AM to 7:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* right: form */}
            <Reveal direction="left">
              <div className="rounded-[2rem] border border-emerald-100 bg-white p-6 shadow-[0_30px_70px_-44px_rgba(21,35,63,0.5)] sm:p-8">
                <h2 className="font-display text-2xl font-bold text-pine-900">
                  Send us an enquiry
                </h2>
                <p className="mt-1.5 text-pine-700/70">
                  Tell us a little about you and we will call you back.
                </p>
                <div className="mt-6">
                  <EnquiryForm />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* map */}
        <section className="pb-16 sm:pb-20 lg:pb-28">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="overflow-hidden rounded-[2rem] border border-emerald-100 shadow-[0_24px_50px_-34px_rgba(21,35,63,0.4)]">
                <iframe
                  title="Karl Konsult International office location"
                  src="https://www.google.com/maps?q=C-Scheme,Jaipur,Rajasthan&output=embed"
                  width="100%"
                  height="420"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block h-[360px] w-full sm:h-[420px]"
                />
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
