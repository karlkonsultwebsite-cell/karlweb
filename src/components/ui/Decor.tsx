/** Decorative, non-interactive accents. Pure CSS/SVG, pointer-events none. */

export function Blob({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute blob blur-2xl ${className}`}
    />
  );
}

export function Cloud({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 120 60"
      className={`pointer-events-none absolute ${className}`}
      fill="currentColor"
    >
      <path d="M30 50a18 18 0 0 1 0-36 22 22 0 0 1 41-6 16 16 0 0 1 19 16 14 14 0 0 1-4 26H30z" />
    </svg>
  );
}

/** Small floating sparkle/dot cluster */
export function Sparkles({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 40 40" className={`pointer-events-none absolute ${className}`} fill="currentColor">
      <circle cx="8" cy="20" r="3" />
      <circle cx="22" cy="8" r="2" />
      <circle cx="30" cy="26" r="2.5" />
    </svg>
  );
}
