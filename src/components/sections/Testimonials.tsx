import Image from "next/image";
import { Star, Quotes } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/ui/Reveal";

const reviews = [
  {
    quote:
      "They reworked my SOP twice and flagged a funding gap I had missed. The Canada visa came through in three weeks.",
    name: "Ananya Rathore",
    role: "MS Data Science, University of Waterloo",
    seed: "ananya-portrait-student",
  },
  {
    quote:
      "I walked in with a 5.5 and left with a 7. The PTE batch was small enough that the trainer knew my weak spots.",
    name: "Devansh Mehta",
    role: "PTE Academic, now at TU Munich",
    seed: "devansh-portrait-student",
    img: "/student-1.png",
  },
  {
    quote:
      "Honest advice from day one. They talked me out of an expensive course and into a better-ranked one in Ireland.",
    name: "Simran Kaur",
    role: "MSc Marketing, Trinity College Dublin",
    seed: "simran-portrait-student",
  },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-24">
      <div className="pointer-events-none absolute -left-20 top-1/2 -z-0 h-72 w-72 rounded-full bg-gold-300/20 blur-3xl" />
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-700">
            Student stories
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight text-pine-900 md:text-[3.25rem]">
            Offers that changed the course of a life
          </h2>
          <p className="mt-5 max-w-xl text-lg text-pine-700/80">
            A few of the students now studying where they always hoped to.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.08}>
              <figure className="flex h-full flex-col rounded-3xl border border-emerald-100 bg-bone p-7 shadow-[0_16px_38px_-28px_rgba(21,35,63,0.5)] transition-all duration-300 hover:-translate-y-1 hover:bg-white">
                <Quotes size={32} weight="fill" className="text-gold-400" />
                <div className="mt-3 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={16} weight="fill" className="text-gold-500" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-pine-800">
                  {r.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-emerald-100 pt-5">
                  <Image
                    src={r.img ?? `https://picsum.photos/seed/${r.seed}/120/120`}
                    alt={r.name}
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-bold text-pine-900">{r.name}</p>
                    <p className="text-xs text-pine-700/70">{r.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
