"use client";

import { useSyncExternalStore } from "react";

/**
 * Tiny global store for the enquiry popup so ANY CTA on the page can open it
 * without prop-drilling. No external dependency.
 */
let isOpen = false;
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((l) => l());
}

export const enquiry = {
  open() {
    if (!isOpen) {
      isOpen = true;
      emit();
    }
  },
  close() {
    if (isOpen) {
      isOpen = false;
      emit();
    }
  },
  subscribe(cb: () => void) {
    listeners.add(cb);
    return () => listeners.delete(cb);
  },
  get() {
    return isOpen;
  },
};

export function useEnquiryOpen() {
  return useSyncExternalStore(
    enquiry.subscribe,
    enquiry.get,
    () => false,
  );
}
