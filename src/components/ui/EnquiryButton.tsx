"use client";

import { buttonClass } from "@/components/ui/Button";
import { enquiry } from "@/components/ui/enquiry-store";

type Variant = "primary" | "outline" | "ghost";
type Size = "md" | "lg";

/**
 * A CTA that opens the global enquiry popup instead of navigating.
 * Shares the exact look of <Button>.
 */
export function EnquiryButton({
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  children,
}: {
  variant?: Variant;
  size?: Size;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={() => {
        onClick?.();
        enquiry.open();
      }}
      className={buttonClass(variant, size, className)}
    >
      {children}
    </button>
  );
}

/**
 * Opens the enquiry popup but with fully custom styling (no buttonClass).
 * For bespoke CTAs that don't match the standard Button variants.
 */
export function EnquiryTrigger({
  className = "",
  ariaLabel,
  children,
}: {
  className?: string;
  ariaLabel?: string;
  children: React.ReactNode;
}) {
  return (
    <button type="button" aria-label={ariaLabel} onClick={() => enquiry.open()} className={className}>
      {children}
    </button>
  );
}
