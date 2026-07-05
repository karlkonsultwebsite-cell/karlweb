/**
 * Blog content. Sample posts so the /blog + /blog/[slug] pages are real and
 * SEO-useful today. Replace with the client's actual articles before launch
 * (or wire to a CMS). See REPLACE-BEFORE-LAUNCH.md.
 */

const u = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&q=70`;

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // display string
  read: string; // e.g. "5 min read"
  img: string;
  body: string[]; // paragraphs
};

export const blogPosts: BlogPost[] = [
  {
    slug: "study-in-uk-2027-intakes-guide",
    title: "Study in the UK: a simple guide to the 2027 intakes",
    excerpt:
      "September, January or May? Here's how to pick the right UK intake for your timeline, budget and course — without the jargon.",
    category: "Planning",
    date: "2 July 2026",
    read: "5 min read",
    img: u("1513475382585-d06e58bcb0e0"),
    body: [
      "One of the first questions students ask us is simple: when should I actually apply to study in the UK? The good news is that UK universities are flexible — most run a main September intake, a sizeable January intake, and some even offer a May start. The right one depends less on the calendar and more on you.",
      "The September intake is the largest, with the widest choice of courses, scholarships and university accommodation. If your documents and test scores are ready in time, it's usually the strongest option. January works beautifully if you need a few extra months to prepare your IELTS or PTE, arrange funding, or simply weren't ready in the summer rush.",
      "The smaller May intake is worth knowing about too, especially for certain business and foundation programmes. It's less crowded, which can mean faster decisions — but fewer courses to choose from.",
      "Whichever you pick, the real secret is working backwards. A UK application involves your academic documents, an English test, a statement of purpose, references, and then the visa — each with its own lead time. Start early and the deadlines feel comfortable; leave it late and they feel impossible.",
      "That's exactly where a counsellor helps. At Karl Konsult International, we map your target universities to the intake that fits your readiness, then build a week-by-week plan so nothing gets rushed. Book a free counselling session and we'll tell you honestly which intake to aim for.",
    ],
  },
  {
    slug: "ielts-vs-pte-which-to-choose",
    title: "IELTS vs PTE: which English test should you actually take?",
    excerpt:
      "Both are accepted almost everywhere — so the real question is which one suits how you think. Here's an honest comparison.",
    category: "Test Prep",
    date: "24 June 2026",
    read: "4 min read",
    img: u("1434030216411-0b793f4b4173"),
    body: [
      "IELTS and PTE both prove your English for university and visa applications, and both are accepted by the vast majority of institutions and governments. So students often ask us which is 'easier'. The honest answer: neither — they're just different, and one will suit you more than the other.",
      "IELTS has a human examiner for the speaking section, a paper or computer option, and a familiar format. If you're comfortable speaking to a person and prefer a well-trodden path, it's a safe, well-understood choice.",
      "PTE is fully computer-based and scored by an algorithm. It rewards strategy, templates and clear pronunciation, and results usually arrive in about 48 hours — a big advantage when your application deadline is tight. Students who like structure and want speed often prefer it.",
      "There's also the Duolingo English Test — cheaper, taken from home in about an hour, and accepted by a growing list of universities. It's worth considering if budget and convenience matter most, though acceptance is narrower than IELTS or PTE.",
      "In our coaching, we start by looking at your target universities' requirements and a short diagnostic of your English. Then we recommend the test that gets you your score fastest — and we prepare you for it with weekly mocks. Not sure which is right for you? That's a five-minute conversation with one of our trainers.",
    ],
  },
  {
    slug: "germany-blocked-account-explained",
    title: "Germany's blocked account, explained simply",
    excerpt:
      "It sounds intimidating, but the Sperrkonto is just a proof-of-funds step. Here's what it is and how to set it up.",
    category: "Funding",
    date: "16 June 2026",
    read: "3 min read",
    img: u("1467269204594-9661b134dd2b"),
    body: [
      "If you're planning to study in Germany, you'll quickly run into the term 'blocked account' — or Sperrkonto. It's one of the most common things students worry about, and one of the easiest to demystify.",
      "A blocked account is simply a special bank account where you deposit enough money to cover your living costs for your first year in Germany. It proves to the visa authorities that you can support yourself. The money is 'blocked' in the sense that you can only withdraw a set amount each month once you arrive.",
      "The required amount is set by the German government and updates periodically, so always confirm the current figure before you transfer. You open the account with an approved provider, transfer the funds, receive a confirmation, and include it in your visa application.",
      "Because Germany's public universities charge little or no tuition, the blocked account is often the single biggest upfront cost — which is exactly why planning it early matters. We walk students through choosing a provider, timing the transfer, and getting the paperwork right so the visa step is smooth.",
    ],
  },
  {
    slug: "sop-that-visa-officers-believe",
    title: "Writing a statement of purpose visa officers actually believe",
    excerpt:
      "A great SOP isn't flowery — it's clear, specific and honest. Here's the structure we use with our students.",
    category: "Applications",
    date: "8 June 2026",
    read: "6 min read",
    img: u("1517048676732-d65bc937f952"),
    body: [
      "Your statement of purpose (SOP) is where an admissions committee — and later a visa officer — decides whether your story adds up. The mistake most students make is trying to sound impressive. What actually works is being clear, specific and honest.",
      "Start with why this course, at this university, now. Vague enthusiasm ('I have always been passionate about...') is forgettable. Concrete reasons — a specific module, a professor's research, the career it leads to — are convincing.",
      "Then connect the dots: how does your past (your degree, your work, your projects) lead naturally to this course, and how does this course lead to your future plans? A believable SOP reads like a straight line, not a leap.",
      "Address the practical questions honestly, especially for the visa: why this country, how you'll fund it, and why you intend to return or follow the legal post-study route. Officers are trained to spot copied, exaggerated or evasive statements.",
      "Finally, cut the clichés and get a second pair of eyes. In our application support, we don't write your SOP for you — we help you find your genuine story and shape it so it's clear, specific and credible. That's what gets offers, and visas, across the line.",
    ],
  },
  {
    slug: "mbbs-abroad-neet-guide",
    title: "MBBS abroad after NEET: what Indian students need to know",
    excerpt:
      "Didn't get the seat you hoped for at home? Studying MBBS abroad is a recognised, affordable route — if you do it right.",
    category: "MBBS Abroad",
    date: "30 May 2026",
    read: "5 min read",
    img: u("1523240795612-9a054b0db644"),
    body: [
      "Every year, thousands of Indian students with a valid NEET score look beyond India for their medical degree — not as a compromise, but as a smart, recognised route to becoming a doctor. If you're considering it, here's what actually matters.",
      "First: NEET is mandatory. Even to study MBBS abroad, and to sit the FMGE/NExT licensing exam when you return, Indian students need a qualified NEET score. Anyone who tells you otherwise is steering you wrong.",
      "Second: recognition is everything. Only consider universities that are NMC-screened and WHO/WDOMS-listed. This determines whether your degree counts back home. Countries like China, Russia, Kazakhstan and Uzbekistan have well-established, English-medium programmes at recognised universities.",
      "Third: understand the real cost. Total tuition abroad is often a fraction of a private Indian medical seat, with no donation. But you should get a transparent, all-inclusive estimate — tuition, hostel, food and travel — before you commit.",
      "Finally, plan for the return. Coming back to practise in India means clearing the FMGE/NExT exam, so factor that preparation in from the start. We guide students through eligibility, university selection, admission, visa and the licensing pathway — see our MBBS Abroad page or book a free counselling session to talk it through.",
    ],
  },
  {
    slug: "scholarships-for-indian-students-abroad",
    title: "Scholarships for Indian students: where to actually look",
    excerpt:
      "Studying abroad is more affordable than most students think. Here are the scholarship types worth chasing — and how to win them.",
    category: "Funding",
    date: "21 May 2026",
    read: "4 min read",
    img: u("1541339907198-e08756dedf3f"),
    body: [
      "One of the biggest myths about studying abroad is that it's only for the wealthy. In reality, a huge amount of funding goes unclaimed every year simply because students don't know where to look — or apply too late.",
      "Government scholarships are the headline acts: Chevening for the UK, DAAD for Germany, and the CSC for China, among others. They're competitive but generous, often covering tuition and living costs. They also have early deadlines, so they reward students who plan ahead.",
      "University scholarships are more numerous and often easier to win — merit awards, international-student bursaries, and department-specific funding. Many are awarded automatically based on your application, which is why a strong profile matters.",
      "Then there are country-specific advantages that act like scholarships: Germany's low or no tuition, Italy's income-based DSU awards, and China's university stipends. Sometimes the biggest saving is simply choosing the right destination.",
      "The students who win funding aren't always the strongest on paper — they're the ones who apply to the right awards, early, with a sharp application. Our scholarship assistance helps you find the ones you actually qualify for and make each application count. Book a free session and we'll map your options.",
    ],
  },
];

export const blogPostBySlug = (slug: string) =>
  blogPosts.find((p) => p.slug === slug);
