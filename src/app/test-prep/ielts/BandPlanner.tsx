"use client";

import { useState } from "react";
import { Target, ArrowRight } from "@phosphor-icons/react";
import { EnquiryButton } from "@/components/ui/EnquiryButton";

const TARGETS = [6.0, 6.5, 7.0, 7.5, 8.0];

// rough "where students like you typically land" per module, scaled to target
const MODULES = ["Listening", "Reading", "Writing", "Speaking"] as const;

function planFor(target: number) {
  // writing usually lags, listening usually leads — shape a believable split
  const lift = { Listening: 0.5, Reading: 0.5, Writing: -0.5, Speaking: 0 } as const;
  return MODULES.map((m) => {
    const band = Math.max(5, Math.min(9, target + lift[m]));
    return { m, band: Math.round(band * 2) / 2 };
  });
}

export function BandPlanner() {
  const [target, setTarget] = useState(7.0);
  const plan = planFor(target);

  return (
    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
      {/* control */}
      <div>
        <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-700">
          <Target size={15} weight="fill" />
          Band planner
        </span>
        <h2 className="mt-4 font-display text-[2rem] font-bold leading-[1.1] tracking-tight text-pine-900 sm:text-4xl">
          Tell us your target.
          <br />
          We plan backwards.
        </h2>
        <p className="mt-4 max-w-md text-lg leading-relaxed text-pine-700/75">
          Your overall band is an average, so every module needs its own plan. Pick a
          goal and see the per-module split we&apos;ll build your study weeks around.
        </p>

        <div className="mt-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-pine-700/55">
            Overall band I need
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {TARGETS.map((t) => {
              const active = t === target;
              return (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTarget(t)}
                  aria-pressed={active}
                  className={`grid h-14 w-14 place-items-center rounded-2xl font-display text-lg font-bold transition-all ${
                    active
                      ? "scale-105 bg-emerald-600 text-white shadow-[0_14px_30px_-12px_rgba(21,118,214,0.7)]"
                      : "bg-white text-pine-800 ring-1 ring-emerald-100 hover:ring-emerald-300"
                  }`}
                >
                  {t.toFixed(1)}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-8">
          <EnquiryButton size="lg">
            Build my study plan
            <ArrowRight size={18} weight="bold" />
          </EnquiryButton>
        </div>
      </div>

      {/* scoreboard */}
      <div className="relative rounded-[2.25rem] bg-pine-900 p-7 text-white shadow-[0_40px_80px_-40px_rgba(21,35,63,0.7)] sm:p-9">
        <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-emerald-600/40 blur-3xl" />
        <div className="relative flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white/50">
              Target overall
            </p>
            <p className="font-display text-6xl font-bold text-emerald-300">
              {target.toFixed(1)}
            </p>
          </div>
          <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/70">
            Suggested split
          </span>
        </div>

        <div className="relative mt-7 space-y-4">
          {plan.map((row) => (
            <div key={row.m}>
              <div className="flex items-center justify-between text-sm font-semibold">
                <span className="text-white/80">{row.m}</span>
                <span className="tabular-nums text-emerald-300">{row.band.toFixed(1)}</span>
              </div>
              <div className="mt-1.5 h-2.5 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-emerald-300 transition-all duration-500 ease-out"
                  style={{ width: `${(row.band / 9) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <p className="relative mt-6 text-sm leading-relaxed text-white/55">
          Writing and Reading carry the most students down. Your plan front-loads
          whichever module sits furthest from its target.
        </p>
      </div>
    </div>
  );
}
