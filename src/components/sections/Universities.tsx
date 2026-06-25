import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

const partners = [
  "University of Waterloo",
  "Trinity College Dublin",
  "University College Birmingham",
  "Technical University of Munich",
  "Anglia Ruskin University",
  "University of New South Wales",
];

export function Universities() {
  return (
    <section id="universities" className="border-y border-emerald-100 bg-bone py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <Reveal className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -left-6 -top-6 -z-0 h-36 w-36 blob bg-emerald-200/60 blur-2xl" />
            <div className="absolute -bottom-6 -right-4 -z-0 h-36 w-36 blob bg-gold-300/60 blur-2xl" />
            <div className="relative animate-floaty-slow overflow-hidden rounded-[32px] ring-4 ring-white shadow-[0_28px_55px_-28px_rgba(21,35,63,0.4)]">
              <Image
                src="/universities.png"
                alt="Illustrated partner university campus buildings"
                width={1000}
                height={680}
                className="h-[300px] w-full object-cover sm:h-[360px]"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-pine-900 md:text-[3rem]">
              Where our students get in
            </h2>
            <p className="mt-5 max-w-md text-lg text-pine-700/75">
              We place students at trusted, well-ranked institutions across our eight
              destination countries.
            </p>
            <ul className="mt-7 flex flex-wrap gap-2.5">
              {partners.map((p) => (
                <li
                  key={p}
                  className="rounded-full border border-emerald-100 bg-white px-4 py-2 text-sm font-medium text-pine-800"
                >
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
