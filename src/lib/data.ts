/**
 * Single source of truth for destinations, language courses, MBBS countries and
 * intakes. Edit here and every section/menu updates.
 *
 * IMAGES: each item carries an `img` Unsplash URL so the site looks real today.
 * To swap to your own licensed/partner photos later, drop a file in /public and
 * change `img` to e.g. "/country-australia.jpg". See REPLACE-BEFORE-LAUNCH.md.
 *
 * INTAKES: verified against typical institutional calendars (Jun 2026). Always
 * confirm against the specific university/course before quoting to a student.
 */

export type Destination = {
  name: string;
  code: string; // flagcdn ISO code; "eu" handled specially
  slug: string;
  img: string;
  fact: string;
  intakes: string[];
  popular?: boolean;
};

// Unsplash source helper — stable, optimized, no API key. Swap for /public files later.
const u = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&q=70`;

export const destinations: Destination[] = [
  {
    name: "Australia",
    code: "au",
    slug: "australia",
    img: u("1506973035872-a4ec16b8e8d9"), // Sydney Opera House
    fact: "Post-study work visa up to 4 years",
    intakes: ["February 2027", "July 2026", "November 2026"],
    popular: true,
  },
  {
    name: "United Kingdom",
    code: "gb",
    slug: "uk",
    img: u("1513635269975-59663e0ac1ad"), // London
    fact: "2-year Graduate Route to stay & work",
    // UK actually runs three major intakes
    intakes: ["September 2026", "January 2027", "May 2027"],
    popular: true,
  },
  {
    name: "New Zealand",
    code: "nz",
    slug: "new-zealand",
    img: u("1469854523086-cc02fe5d8800"),
    fact: "Open work visa after you graduate",
    intakes: ["February 2027", "July 2026"],
  },
  {
    name: "USA",
    code: "us",
    slug: "usa",
    img: u("1485738422979-f5c462d49f74"), // NYC
    fact: "World top-ranked universities & OPT",
    intakes: ["Fall 2026", "Spring 2027"],
    popular: true,
  },
  {
    name: "Germany",
    code: "de",
    slug: "germany",
    img: u("1467269204594-9661b134dd2b"), // Berlin
    fact: "Low / no tuition at public universities",
    intakes: ["Winter 2026 (Oct)", "Summer 2027 (Apr)"],
    popular: true,
  },
  {
    name: "France",
    code: "fr",
    slug: "france",
    img: u("1502602898657-3e91760cbb34"), // Paris
    fact: "Affordable fees, many English programmes",
    intakes: ["September 2026", "January 2027"],
  },
  {
    name: "Italy",
    code: "it",
    slug: "italy",
    img: u("1516483638261-f4dbaf036963"), // Tuscany / Italy
    fact: "Low tuition & generous regional scholarships",
    intakes: ["September 2026", "February 2027"],
  },
  {
    name: "Europe",
    code: "eu",
    slug: "europe",
    img: u("1491557345352-5929e343eb89"), // European cityscape
    fact: "Schengen access across 25+ study hubs",
    intakes: ["September 2026", "February 2027"],
  },
  {
    name: "China",
    code: "cn",
    slug: "china",
    img: u("1474181487882-5abf3f0ba6c2"), // Shanghai
    fact: "Scholarship-rich, fast-growing study hub",
    intakes: ["September 2026", "March 2027"],
  },
];

/**
 * Rich per-country detail for the /study-abroad/[slug] pages. Keyed by slug.
 * Realistic placeholder content — VERIFY costs, work-rights and intake specifics
 * with your team / official sources before quoting to students (see
 * REPLACE-BEFORE-LAUNCH.md).
 */
export type CountryDetail = {
  tagline: string; // hero eyebrow
  headline: string; // hero H1 accent phrase
  intro: string;
  highlights: { label: string; value: string }[]; // quick stat strip
  why: { title: string; desc: string }[]; // why study here
  popularCourses: string[];
  topUniversities: string[];
  costLiving: string; // indicative annual living cost
  costTuition: string; // indicative annual tuition
  workRights: string;
  faqs: { q: string; a: string }[];
};

export const countryDetails: Record<string, CountryDetail> = {
  australia: {
    tagline: "Study in Australia",
    headline: "world-class degrees, sunshine included",
    intro:
      "Australia pairs globally ranked universities with one of the most generous post-study work regimes anywhere — making it a top choice for Indian students who want a degree and a launchpad to a career abroad.",
    highlights: [
      { label: "Post-study work", value: "Up to 4 yrs" },
      { label: "Top-100 unis", value: "7" },
      { label: "Main intakes", value: "Feb · Jul" },
    ],
    why: [
      { title: "Strong work rights", value: "", desc: "The Temporary Graduate visa (485) lets you stay and work 2–4 years after graduating." },
      { title: "Ranked universities", value: "", desc: "Home to the Group of Eight — several sit inside the global top 100." },
      { title: "Part-time work", value: "", desc: "Work rights during study help offset living costs while you gain experience." },
    ].map(({ title, desc }) => ({ title, desc })),
    popularCourses: ["Data Science & AI", "Nursing & Healthcare", "Engineering", "Business & Management", "IT & Cybersecurity"],
    topUniversities: ["University of Melbourne", "University of Sydney", "UNSW Sydney", "Monash University", "University of Queensland"],
    costLiving: "AUD 24,000–29,000 / year*",
    costTuition: "AUD 20,000–45,000 / year*",
    workRights: "Up to 48 hours per fortnight during study; 2–4 years post-study.",
    faqs: [
      { q: "How much does it cost to study in Australia?", a: "Tuition typically runs AUD 20,000–45,000 a year depending on the course and university, plus around AUD 24,000–29,000 for living. We help you plan the full budget and find scholarships." },
      { q: "Can I work while studying in Australia?", a: "Yes — international students can generally work up to 48 hours per fortnight during term and unlimited hours during scheduled breaks." },
      { q: "What is the post-study work visa?", a: "The Temporary Graduate visa (subclass 485) lets eligible graduates stay and work for 2–4 years depending on your qualification and location." },
    ],
  },
  uk: {
    tagline: "Study in the UK",
    headline: "one-year master's, centuries of prestige",
    intro:
      "The UK offers globally respected degrees, famously short one-year master's programmes, and the two-year Graduate Route to stay and work — a fast, efficient path to a world-class qualification.",
    highlights: [
      { label: "Master's length", value: "1 year" },
      { label: "Graduate Route", value: "2 years" },
      { label: "Main intakes", value: "Sep · Jan · May" },
    ],
    why: [
      { title: "One-year master's", desc: "Finish a postgraduate degree in 12 months — less time, less cost, faster return." },
      { title: "Graduate Route visa", desc: "Stay and work for two years after you graduate (three for PhD)." },
      { title: "World-leading universities", desc: "Oxford, Cambridge, Imperial, UCL and dozens more with global reputation." },
    ],
    popularCourses: ["Business Analytics", "Finance & Accounting", "Computer Science", "Public Health", "Law (LLM)"],
    topUniversities: ["University of Oxford", "University of Cambridge", "Imperial College London", "UCL", "University of Manchester"],
    costLiving: "£12,000–15,000 / year*",
    costTuition: "£14,000–35,000 / year*",
    workRights: "Up to 20 hours per week during term; 2-year Graduate Route after study.",
    faqs: [
      { q: "How many intakes does the UK have?", a: "UK universities commonly offer three intakes — September (main), January, and a smaller May intake — depending on the institution and course." },
      { q: "What is the UK Graduate Route?", a: "The Graduate Route lets eligible graduates stay in the UK to work or look for work for two years (three for doctoral students) after completing their degree." },
      { q: "Is a UK master's really one year?", a: "Yes — most taught UK master's degrees are completed in 12 months, which lowers total tuition and living costs compared to two-year programmes elsewhere." },
    ],
  },
  "new-zealand": {
    tagline: "Study in New Zealand",
    headline: "quality degrees, unbeatable quality of life",
    intro:
      "New Zealand offers internationally recognised, UK-modelled degrees, a safe and welcoming environment, and an open post-study work visa — a calm, high-quality alternative to the bigger destinations.",
    highlights: [
      { label: "Post-study work", value: "Up to 3 yrs" },
      { label: "Universities", value: "All top 500" },
      { label: "Main intakes", value: "Feb · Jul" },
    ],
    why: [
      { title: "Open work visa", desc: "The Post-Study Work Visa lets eligible graduates work for up to three years." },
      { title: "Every uni ranked", desc: "All eight New Zealand universities feature in global rankings." },
      { title: "Safe & welcoming", desc: "Consistently rated among the safest, most livable countries for students." },
    ],
    popularCourses: ["IT & Software", "Engineering", "Agriculture & Environment", "Hospitality Management", "Business"],
    topUniversities: ["University of Auckland", "University of Otago", "Victoria University of Wellington", "University of Canterbury", "Massey University"],
    costLiving: "NZD 20,000–25,000 / year*",
    costTuition: "NZD 22,000–35,000 / year*",
    workRights: "Up to 20 hours per week during study; up to 3 years post-study.",
    faqs: [
      { q: "Can I work after studying in New Zealand?", a: "Yes. Eligible graduates can apply for a Post-Study Work Visa allowing them to work for up to three years, depending on qualification level and where they studied." },
      { q: "When are the intakes?", a: "The main intake is February, with a second semester intake in July. Some programmes also offer additional start dates." },
      { q: "Is New Zealand affordable?", a: "Tuition and living costs are generally lower than in the US or UK, and the quality of life is very high. We help you budget and find scholarships." },
    ],
  },
  usa: {
    tagline: "Study in the USA",
    headline: "the world's top-ranked universities",
    intro:
      "The United States is home to more top-ranked universities than anywhere else, with unmatched research, flexible curricula, and the OPT work programme that lets STEM graduates work for up to three years.",
    highlights: [
      { label: "OPT (STEM)", value: "Up to 3 yrs" },
      { label: "Top-100 unis", value: "40+" },
      { label: "Main intakes", value: "Fall · Spring" },
    ],
    why: [
      { title: "Unrivalled rankings", desc: "The US dominates global top-100 lists across almost every field." },
      { title: "OPT & STEM OPT", desc: "Work for 1 year after graduating — extended to 3 years for STEM degrees." },
      { title: "Flexible curriculum", desc: "Switch majors, minor, and shape your degree around your interests." },
    ],
    popularCourses: ["Computer Science", "Data Science", "Business (MS/MBA)", "Engineering", "Health Sciences"],
    topUniversities: ["MIT", "Stanford University", "Harvard University", "Carnegie Mellon University", "Georgia Tech"],
    costLiving: "USD 12,000–18,000 / year*",
    costTuition: "USD 25,000–60,000 / year*",
    workRights: "On-campus work during study; 1-year OPT (3 years for STEM) after study.",
    faqs: [
      { q: "What is OPT?", a: "Optional Practical Training (OPT) lets F-1 students work in their field for up to 12 months after graduating — extended by 24 months (36 total) for eligible STEM degrees." },
      { q: "Do I need the GRE or GMAT?", a: "Many US programmes require the GRE or GMAT, though a growing number are test-optional. We'll tell you exactly what your target universities need." },
      { q: "How much does it cost?", a: "Costs vary widely — public universities are more affordable than private ones. We help you shortlist by budget and find scholarships and assistantships." },
    ],
  },
  germany: {
    tagline: "Study in Germany",
    headline: "low or no tuition, world-class engineering",
    intro:
      "Germany is one of the best-value study destinations in the world — most public universities charge little or no tuition, even for international students, while offering globally respected engineering and science degrees.",
    highlights: [
      { label: "Public tuition", value: "Low / none" },
      { label: "Post-study stay", value: "18 months" },
      { label: "Main intakes", value: "Oct · Apr" },
    ],
    why: [
      { title: "Little or no tuition", desc: "Most public universities charge only a small semester fee, even for international students." },
      { title: "Engineering powerhouse", desc: "Home to TU Munich, RWTH Aachen and a world-leading Mittelstand economy." },
      { title: "Job-seeker visa", desc: "Stay 18 months after graduating to find work in Germany." },
    ],
    popularCourses: ["Mechanical Engineering", "Automotive & Robotics", "Computer Science", "Data Science", "Renewable Energy"],
    topUniversities: ["Technical University of Munich", "RWTH Aachen", "Heidelberg University", "TU Berlin", "University of Stuttgart"],
    costLiving: "€11,000–12,000 / year*",
    costTuition: "€0–3,500 / year (public)*",
    workRights: "120 full / 240 half days per year during study; 18-month job-seeker visa after.",
    faqs: [
      { q: "Is it true studying in Germany is free?", a: "Most public universities charge no tuition fee — only a small semester contribution (a few hundred euros). You mainly budget for living costs and the blocked account." },
      { q: "Do I need to know German?", a: "Many master's programmes are taught fully in English. German-taught degrees and daily life need B1–B2 — and we offer Goethe-aligned German coaching to get you there." },
      { q: "What is the blocked account?", a: "A blocked account (Sperrkonto) proves you can cover living costs for your first year — a visa requirement. We guide you through setting it up." },
    ],
  },
  france: {
    tagline: "Study in France",
    headline: "affordable degrees in the heart of Europe",
    intro:
      "France combines affordable public tuition, a growing catalogue of English-taught programmes, and strong post-study work rights — all in one of Europe's most influential economies and cultures.",
    highlights: [
      { label: "Public tuition", value: "Low" },
      { label: "Post-study stay", value: "Up to 2 yrs" },
      { label: "Main intakes", value: "Sep · Jan" },
    ],
    why: [
      { title: "Affordable & subsidised", desc: "Public universities are heavily subsidised, even for international students." },
      { title: "English-taught options", desc: "Hundreds of programmes are now delivered entirely in English." },
      { title: "Stay-back rights", desc: "A post-study residence permit lets eligible graduates stay to work." },
    ],
    popularCourses: ["Business & Management", "Luxury & Fashion Management", "Engineering", "Culinary Arts", "Computer Science"],
    topUniversities: ["Université PSL", "Sorbonne University", "École Polytechnique", "Sciences Po", "HEC Paris"],
    costLiving: "€9,000–14,000 / year*",
    costTuition: "€3,000–10,000 / year*",
    workRights: "Up to ~964 hours per year during study; post-study work permit available.",
    faqs: [
      { q: "Do I need French to study in France?", a: "Many programmes are taught in English, but French-taught degrees and daily life expect A2–B1. We offer DELF/TEF-ready French coaching to prepare you." },
      { q: "How affordable is France?", a: "Public university tuition is low and heavily subsidised. Living costs vary by city — Paris is pricier than regional towns. We help you plan a realistic budget." },
      { q: "Can I stay and work after graduating?", a: "Yes — eligible master's graduates can apply for a temporary residence permit to seek work or start a business in France." },
    ],
  },
  italy: {
    tagline: "Study in Italy",
    headline: "low tuition, generous scholarships, la dolce vita",
    intro:
      "Italy offers some of Europe's lowest public-university tuition, generous income-based scholarships and tuition waivers, and a growing range of English-taught degrees — all steeped in art, history and culture.",
    highlights: [
      { label: "Public tuition", value: "Low" },
      { label: "Scholarships", value: "Income-based" },
      { label: "Main intakes", value: "Sep · Feb" },
    ],
    why: [
      { title: "Low tuition", desc: "Public universities charge modest, often income-scaled fees." },
      { title: "Regional scholarships", desc: "DSU regional scholarships can cover fees, meals and accommodation." },
      { title: "English-taught degrees", desc: "A growing catalogue of programmes is delivered in English." },
    ],
    popularCourses: ["Design & Fashion", "Architecture", "Engineering", "Business", "Food Science"],
    topUniversities: ["Politecnico di Milano", "University of Bologna", "Sapienza University of Rome", "University of Padua", "Politecnico di Torino"],
    costLiving: "€8,000–12,000 / year*",
    costTuition: "€900–4,000 / year (public)*",
    workRights: "Up to 20 hours per week during study; post-study stay permit available.",
    faqs: [
      { q: "Are scholarships really available in Italy?", a: "Yes. Italy's regional DSU scholarships are income-based and can cover tuition, accommodation and meals. We help you check eligibility and apply." },
      { q: "Do I need Italian?", a: "English-taught programmes may need little Italian, but daily life and Italian-taught degrees expect A2–B1. We offer Italian coaching to help you settle in." },
      { q: "When can I apply?", a: "The main intake is September, with a second February intake at some universities. Scholarship deadlines often fall earlier, so plan ahead." },
    ],
  },
  europe: {
    tagline: "Study in Europe",
    headline: "one visa, a whole continent of options",
    intro:
      "Beyond the big names, Europe offers dozens of affordable, high-quality study hubs — from the Netherlands and Ireland to Poland, Spain and the Nordics — many with English-taught degrees and Schengen access across the continent.",
    highlights: [
      { label: "Study hubs", value: "25+" },
      { label: "Schengen access", value: "Yes" },
      { label: "Main intakes", value: "Sep · Feb" },
    ],
    why: [
      { title: "Affordable & diverse", desc: "Many European countries offer low tuition and strong English-taught options." },
      { title: "Schengen mobility", desc: "Study in one country and travel freely across the Schengen area." },
      { title: "Work opportunities", desc: "Most countries allow part-time work and post-study stay-back options." },
    ],
    popularCourses: ["Engineering", "Business & Management", "Computer Science", "Data Science", "Hospitality"],
    topUniversities: ["TU Delft (Netherlands)", "Trinity College Dublin (Ireland)", "KU Leuven (Belgium)", "Lund University (Sweden)", "University of Warsaw (Poland)"],
    costLiving: "€8,000–14,000 / year*",
    costTuition: "€0–15,000 / year (varies)*",
    workRights: "Varies by country; most allow part-time work and post-study stay.",
    faqs: [
      { q: "Which European country is best for me?", a: "It depends on your course, budget and language comfort. That's exactly what our counsellors help you decide — matching your profile to the right European destination." },
      { q: "Can I travel across Europe on a student visa?", a: "A student residence permit from a Schengen country generally lets you travel freely across the Schengen area during your studies." },
      { q: "Are English-taught programmes available?", a: "Yes — countries like the Netherlands, Ireland and the Nordics offer many English-taught degrees. We shortlist ones that fit your profile." },
    ],
  },
  china: {
    tagline: "Study in China",
    headline: "scholarship-rich, fast-rising study hub",
    intro:
      "China has become a leading study destination with heavily ranked universities, extensive government and university scholarships, and English-taught programmes — especially strong for engineering, business and medicine.",
    highlights: [
      { label: "Scholarships", value: "CSC + uni" },
      { label: "Top-100 unis", value: "7" },
      { label: "Main intakes", value: "Sep · Mar" },
    ],
    why: [
      { title: "Generous scholarships", desc: "CSC and university scholarships can cover tuition, accommodation and a stipend." },
      { title: "Rising rankings", desc: "Tsinghua, Peking and Fudan rank among the world's best." },
      { title: "English-taught degrees", desc: "Many programmes, including MBBS, are taught in English." },
    ],
    popularCourses: ["Engineering", "MBBS / Medicine", "Business & Economics", "Computer Science", "International Relations"],
    topUniversities: ["Tsinghua University", "Peking University", "Fudan University", "Zhejiang University", "Shanghai Jiao Tong University"],
    costLiving: "USD 3,000–6,000 / year*",
    costTuition: "USD 3,000–10,000 / year*",
    workRights: "Limited part-time work with permission; varies by city and university.",
    faqs: [
      { q: "Are scholarships easy to get in China?", a: "China offers a wide range of CSC (government) and university scholarships that can cover tuition, housing and a monthly stipend. We help you find and apply to ones you qualify for." },
      { q: "Can I study medicine (MBBS) in China?", a: "Yes — China is a popular MBBS destination for Indian students. See our dedicated MBBS Abroad page for eligibility, NEET and recognition details." },
      { q: "Do I need to know Chinese?", a: "Many degree programmes are taught in English. For daily life and some courses, basic Mandarin helps — and we offer HSK-aligned Chinese coaching." },
    ],
  },
};

export type LanguageCourse = {
  name: string;
  blurb: string;
  meta: string;
  href?: string;
};

export const languageCourses: LanguageCourse[] = [
  {
    name: "IELTS / PTE / Duolingo",
    blurb:
      "Band-targeted English coaching with weekly mocks for university and visa requirements.",
    meta: "Most popular",
    href: "/test-prep/ielts",
  },
  {
    name: "German Language",
    blurb:
      "Goethe-aligned A1–C1 classes for German universities, blocked accounts and work visas.",
    meta: "A1 – C1",
    href: "/test-prep/german",
  },
  {
    name: "French",
    blurb:
      "DELF/TEF-ready French for study and PR pathways in France and Canada.",
    meta: "A1 – B2",
    href: "/test-prep/french",
  },
  {
    name: "Italian",
    blurb: "Beginner to intermediate Italian for study and life in Italy.",
    meta: "A1 – B1",
    href: "/test-prep/italian",
  },
  {
    name: "Japanese",
    blurb: "JLPT-focused Japanese for study, scholarships and work in Japan.",
    meta: "N5 – N3",
    href: "/test-prep/japanese",
  },
  {
    name: "Chinese (Mandarin)",
    blurb: "HSK-aligned Mandarin for China scholarships and exchange programmes.",
    meta: "HSK 1 – 4",
    href: "/test-prep/chinese",
  },
  {
    name: "Korean",
    blurb: "TOPIK-ready Korean for Korea's growing roster of global degrees.",
    meta: "TOPIK 1 – 3",
    href: "/test-prep/korean",
  },
];

export type MbbsCountry = {
  name: string;
  code: string;
  blurb: string;
  highlight: string;
  duration: string;
  medium: string;
  recognition: string;
  feeRange: string; // indicative total tuition — VERIFY before launch
};

export const mbbsCountries: MbbsCountry[] = [
  {
    name: "China",
    code: "cn",
    blurb: "English-medium MBBS at NMC-screened, WHO-listed universities with modern teaching hospitals.",
    highlight: "Top choice",
    duration: "6 years (incl. internship)",
    medium: "English",
    recognition: "NMC-screened · WHO / WDOMS-listed",
    feeRange: "₹18–35 L total tuition*",
  },
  {
    name: "Russia",
    code: "ru",
    blurb: "Long-established state medical universities with large, well-supported Indian-student communities.",
    highlight: "Globally recognised",
    duration: "6 years",
    medium: "English",
    recognition: "NMC-screened · WHO / WDOMS-listed",
    feeRange: "₹20–40 L total tuition*",
  },
  {
    name: "Kazakhstan",
    code: "kz",
    blurb: "Affordable tuition and a low cost of living make it a popular, budget-friendly medical destination.",
    highlight: "Budget-friendly",
    duration: "5 years + internship",
    medium: "English",
    recognition: "NMC-screened · WHO / WDOMS-listed",
    feeRange: "₹16–28 L total tuition*",
  },
  {
    name: "Uzbekistan",
    code: "uz",
    blurb: "A newer, fast-growing destination with modern campuses and competitive, all-inclusive fees.",
    highlight: "Emerging choice",
    duration: "5–6 years",
    medium: "English",
    recognition: "NMC-screened · WHO / WDOMS-listed",
    feeRange: "₹15–25 L total tuition*",
  },
];

// Helpers
export const popularDestinations = destinations.filter((d) => d.popular);
export const destinationByName = (name: string) =>
  destinations.find((d) => d.name === name);
