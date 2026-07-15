/**
 * Barrel mapping destination slug -> deep page content.
 *
 * ⚠️ All content here contains specific factual claims (intake months,
 * deadlines, fees, university names, eligibility rules, scholarship schemes).
 * These are realistic drafts written to the client's approved structure — they
 * are NOT verified. The team must fact-check every figure and list against
 * current official sources before launch. See REPLACE-BEFORE-LAUNCH.md.
 */
import type { CountryContent } from "@/lib/country-content-types";

import { ukContent } from "./uk";
import { australiaContent } from "./australia";
import { usaContent } from "./usa";
import { germanyContent } from "./germany";
import { franceContent } from "./france";
import { italyContent } from "./italy";
import { newZealandContent } from "./new-zealand";
import { europeContent } from "./europe";
import { chinaContent } from "./china";

export const countryContent: Record<string, CountryContent> = {
  uk: ukContent,
  australia: australiaContent,
  usa: usaContent,
  germany: germanyContent,
  france: franceContent,
  italy: italyContent,
  "new-zealand": newZealandContent,
  europe: europeContent,
  china: chinaContent,
};
