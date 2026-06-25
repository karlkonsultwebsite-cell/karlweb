"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus } from "@phosphor-icons/react";

export type FaqItem = { q: string; a: string };

/**
 * Accessible FAQ accordion with smooth expand. `accent` sets the active color.
 */
export function Faq({
  items,
  accent = "text-emerald-600",
}: {
  items: FaqItem[];
  accent?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-pine-900/10 overflow-hidden rounded-[1.75rem] border border-pine-900/10 bg-white">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-bone/60"
              aria-expanded={isOpen}
            >
              <span className="font-display text-lg font-bold text-pine-900">{item.q}</span>
              <span
                className={`grid h-8 w-8 shrink-0 place-items-center rounded-full bg-bone transition-transform duration-300 ${accent} ${isOpen ? "rotate-45" : ""}`}
              >
                <Plus size={18} weight="bold" />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-5 leading-relaxed text-pine-700/80">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
