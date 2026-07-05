import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { StickyActions } from "@/components/ui/StickyActions";
import { Reveal } from "@/components/ui/Reveal";
import { Cloud } from "@/components/ui/Decor";

export type LegalSection = {
  heading: string;
  body: string[];
};

export type LegalPageProps = {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
};

/**
 * Shared long-form legal template (Privacy, Terms, Refund, Disclaimer).
 * Compact hero band + a readable single-column article. Legibility over
 * decoration. Any paragraph starting with "• " is rendered as a bullet item.
 */
export function LegalPage({ title, updated, intro, sections }: LegalPageProps) {
  return (
    <>
      <Navbar />
      <main>
        {/* ===== COMPACT HERO ===== */}
        <section className="relative overflow-hidden bg-gradient-to-b from-emerald-100 via-emerald-50 to-bone">
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <Cloud className="left-[8%] top-[24%] w-20 text-white animate-floaty" />
            <Cloud className="right-[12%] top-[16%] w-14 text-white/80 animate-floaty-slow" />
            <div className="absolute -right-20 -top-10 h-64 w-64 rounded-full bg-gold-300/30 blur-3xl" />
          </div>

          <div className="mx-auto max-w-[820px] px-4 pb-10 pt-12 sm:px-6 sm:pb-12 sm:pt-16 lg:pb-14 lg:pt-20">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-emerald-700 shadow-sm ring-1 ring-emerald-100">
                Legal
              </span>
              <h1 className="mt-5 font-display text-[2rem] font-bold leading-[1.08] tracking-tight text-pine-900 sm:text-4xl lg:text-5xl">
                {title}
              </h1>
              <p className="mt-4 text-sm font-medium text-pine-700/70">
                Last updated: {updated}
              </p>
            </Reveal>
          </div>
        </section>

        {/* ===== ARTICLE ===== */}
        <section className="py-12 sm:py-14 lg:py-20">
          <div className="mx-auto max-w-[820px] px-4 sm:px-6 lg:px-8">
            <Reveal>
              <p className="text-lg leading-relaxed text-pine-700/85">{intro}</p>
            </Reveal>

            <div className="mt-12 space-y-10">
              {sections.map((section) => (
                <Reveal key={section.heading}>
                  <div className="space-y-4">
                    <h2 className="font-display text-xl font-bold text-pine-900 sm:text-2xl">
                      {section.heading}
                    </h2>
                    {renderBody(section.body)}
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <p className="mt-14 rounded-2xl border border-emerald-100 bg-bone px-6 py-5 text-sm leading-relaxed text-pine-700/70">
                This document is a general policy provided for information only and does
                not constitute legal advice. If anything here is unclear, or you would
                like clarification before acting on it, please contact us using the
                details above.
              </p>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
      <StickyActions />
    </>
  );
}

/**
 * Renders a section's paragraphs. Consecutive lines beginning with "• "
 * are grouped into a single styled unordered list so implicit lists read
 * cleanly; everything else renders as a paragraph.
 */
function renderBody(body: string[]) {
  const blocks: React.ReactNode[] = [];
  let list: string[] = [];

  const flushList = (key: string) => {
    if (list.length === 0) return;
    blocks.push(
      <ul key={key} className="space-y-2.5 pl-1">
        {list.map((item, i) => (
          <li key={i} className="flex gap-3 text-pine-700/80 leading-relaxed">
            <span
              aria-hidden
              className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500"
            />
            <span>{item.replace(/^•\s*/, "")}</span>
          </li>
        ))}
      </ul>,
    );
    list = [];
  };

  body.forEach((para, i) => {
    if (para.startsWith("• ")) {
      list.push(para);
      return;
    }
    flushList(`list-${i}`);
    blocks.push(
      <p key={`p-${i}`} className="text-pine-700/80 leading-relaxed">
        {para}
      </p>,
    );
  });
  flushList("list-end");

  return blocks;
}
