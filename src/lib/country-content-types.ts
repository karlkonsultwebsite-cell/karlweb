/**
 * Deep content model for the /study-abroad/[country] pages and the
 * /study-abroad/[country]/[intake] landing pages.
 *
 * ⚠️ FACT-CHECK REQUIRED: every field here carries specific claims (intake
 * months, deadlines, fees, university names, eligibility rules, scholarship
 * names). These are realistic drafts, NOT verified facts. The client's team
 * must confirm each against official/current sources before launch.
 * See REPLACE-BEFORE-LAUNCH.md.
 */

/** A named list block, e.g. "Business and Management" -> [MBA, Finance, ...] */
export type CourseCategory = {
  category: string;
  courses: string[];
};

/** One row of the "how to apply" stepper */
export type ApplyStep = {
  title: string;
  desc: string;
};

/** A timeline phase, e.g. "February – May 2026" -> [tasks] */
export type TimelinePhase = {
  period: string;
  tasks: string[];
};

/** A named university with optional supporting detail */
export type UniversityEntry = {
  name: string;
  note?: string;
};

/** Eligibility split by study level */
export type EligibilityBlock = {
  label: string; // e.g. "For Undergraduate Courses"
  points: string[];
};

/** One intake for a country (drives both the country page + its intake page) */
export type IntakeDetail = {
  slug: string; // e.g. "september-intake-2027"
  name: string; // e.g. "September Intake"
  season: string; // e.g. "Autumn / Fall"
  months: string; // e.g. "September – October 2027"
  status: string; // e.g. "Main intake" | "Secondary intake"
  summary: string; // 1-2 line teaser used on the country page
  /* --- the intake landing page --- */
  intro: string[]; // opening paragraphs
  whatIsIt: string[]; // "What is X intake?" paragraphs
  whyChoose: { title: string; desc: string }[];
  timeline: TimelinePhase[];
  deadlines: string[]; // paragraphs about application deadlines
  courseCategories: CourseCategory[];
  universities: UniversityEntry[];
  eligibility: EligibilityBlock[];
  englishTests: string[];
  documents: string[];
  applySteps: ApplyStep[];
  scholarships: string[]; // paragraphs / bullet lines
  /** comparison table vs the country's main intake */
  comparison: {
    factor: string;
    thisIntake: string;
    mainIntake: string;
  }[];
  comparisonMainLabel: string; // e.g. "September Intake"
  verdict: string[]; // "Is X intake a good choice?" paragraphs
  faqs: { q: string; a: string }[];
};

/** The deep country page content */
export type CountryContent = {
  /* hero */
  heroIntro: string[]; // opening paragraphs — "brief introduction about studying in X"

  /* why */
  whyStudy: string[]; // paragraphs
  keyAdvantages: string[]; // the "10 reasons" bulleted list

  /* education system */
  educationSystem: string[]; // paragraphs

  /* courses */
  courseCategories: CourseCategory[];

  /* universities */
  universities: UniversityEntry[];

  /* costs */
  tuitionCosts: string[]; // paragraphs by degree level
  livingCosts: string[]; // paragraphs

  /* scholarships */
  scholarships: string[]; // paragraphs
  namedScholarships: { name: string; desc: string }[];

  /* admissions */
  eligibility: EligibilityBlock[];
  englishTests: string[];
  documents: string[];
  applySteps: ApplyStep[];

  /* visa */
  visa: string[]; // paragraphs

  /* intakes */
  intakes: IntakeDetail[];
};
