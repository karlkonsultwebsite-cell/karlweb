import type { CountryContent } from "@/lib/country-content-types";

/**
 * Deep content for /study-abroad/usa and its intake landing pages.
 *
 * ⚠️ FACT-CHECK REQUIRED: intake months, deadlines, fees, university names,
 * eligibility rules and scholarship details are realistic drafts written as
 * indicative ranges — not verified facts. Confirm every figure against
 * official/current sources before launch. See REPLACE-BEFORE-LAUNCH.md.
 */
export const usaContent: CountryContent = {
  heroIntro: [
    "For a lot of Indian students, the USA is not just a study destination — it is the study destination. The one you have had in the back of your mind since someone in your family or your school got in.",
    "There is substance behind that reputation. American universities dominate global rankings, they run research programmes that genuinely change fields, and the sheer scale means there is a university for almost every profile — from the Ivy League to excellent state schools that most Indian students have never heard of but should have.",
    "What makes the US genuinely different is flexibility. You can start a degree undecided, take courses across departments, change your major, and build a degree that does not exist as a package anywhere else. If you are not certain what you want to be yet, that is a real advantage rather than a problem.",
    "The other draw is OPT — Optional Practical Training — which typically lets eligible graduates work in their field after finishing, with a longer window for STEM graduates. For many students that runway is the whole point.",
    "We will be straight with you though: the US is the most expensive mainstream destination, the application process is the most involved, and the F-1 visa interview is a real hurdle rather than a formality. It rewards students who plan properly and frustrates those who do not.",
    "At Karl Konsult International, we work with students in Jaipur on this decision every week. This page is our honest attempt to answer your real questions — cost, courses, tests, visas, intakes — before you even walk in.",
  ],

  whyStudy: [
    "Start with the research. American universities receive enormous research funding, and that money reaches students. As a master's or PhD student you can end up working on genuinely significant projects with faculty who are leaders in their field — and often getting paid to do it through an assistantship.",
    "Then there is flexibility, which is the thing Indian students consistently underestimate. US degrees are built around credits rather than fixed syllabi. You pick your major, add a minor, take electives outside your department, and change direction if you discover you were wrong. Coming from a system where your stream is decided at 16, that freedom is genuinely liberating.",
    "OPT is the practical argument. Eligible F-1 graduates can typically apply for around 12 months of Optional Practical Training to work in their field, and STEM graduates may be eligible for an extension taking it to roughly 36 months. Rules change, so verify current policy — but that runway is the reason many students pick the US over shorter-work-rights destinations.",
    "The funding picture is also better than most Indian families assume. Yes, sticker prices are terrifying. But assistantships, fellowships and aid are real, and a funded PhD or a master's with a teaching assistantship can change the maths completely. The students who get funded are the ones who applied early to the right programmes.",
    "And the scale matters. Over four thousand accredited institutions means genuine choice — a well-funded state university in the Midwest may serve you better than a famous name on the coast, at half the cost, with the same OPT rights.",
    "Be realistic, though. The US is expensive, the applications are demanding, the visa is genuinely competitive, and immigration policy shifts. It is a great choice for the right student with the right plan — not an automatic one.",
  ],

  keyAdvantages: [
    "OPT work authorisation — typically around 12 months for eligible graduates, with a possible STEM extension taking it to roughly 36 months. Verify current rules, which do change.",
    "The largest concentration of highly ranked universities in the world, across virtually every discipline.",
    "Genuine academic flexibility — choose and change your major, add a minor, take electives across departments.",
    "Substantial research funding that reaches students through assistantships, fellowships and lab positions.",
    "Teaching and research assistantships that can cover a significant part of tuition and provide a stipend, especially at master's and PhD level.",
    "On-campus work rights for F-1 students, typically capped at around 20 hours per week during term.",
    "CPT (Curricular Practical Training) allowing internships that count towards your degree while you are still studying.",
    "Over four thousand accredited institutions, meaning real options at every budget and profile level.",
    "Strong industry links, particularly in tech, finance, healthcare and engineering — with campus recruiting built into the academic calendar.",
    "Large, well-established Indian student communities on most major campuses, with active student associations that genuinely help you land.",
  ],

  educationSystem: [
    "The American system runs on credits, not fixed syllabi. Every course carries a credit value, you accumulate credits towards your degree, and within your requirements you have real choice about what to take. That is the single biggest structural difference from Indian universities.",
    "Bachelor's degrees typically take four years. The first two are broad — general education requirements across the sciences, humanities and social sciences — and you usually declare your major around the end of year two. If you genuinely do not know what you want yet, this is a feature, not a bug.",
    "Master's degrees usually run one to two years, most commonly around two years for the technical fields Indian students favour. PhDs typically take four to six years and are frequently fully funded through assistantships — which is why a US PhD can cost less than a US master's.",
    "The academic year is built around two main semesters. Fall runs roughly from August to December, Spring from January to May, with an optional shorter Summer term. That structure is exactly why Fall is the dominant intake and Spring the secondary one.",
    "Assessment is continuous and relentless. Expect midterms, finals, weekly problem sets, quizzes, projects, presentations and class participation marks — all feeding a GPA on a 4.0 scale. Nobody sits one exam in May that decides the year. Students from Indian universities usually find the workload steadier but far less forgiving of a slow start.",
    "Academic integrity is enforced seriously, and the definition of plagiarism is broader than many Indian students expect — including collaboration on assignments meant to be individual. Learn your department's rules in week one.",
    "Universities split broadly into public (state) and private institutions. Private universities have higher sticker prices but often more institutional aid; public universities charge out-of-state rates to international students, which are higher than in-state but frequently still cheaper than private. Do not rule out a state school on the name — the value is often better.",
  ],

  courseCategories: [
    {
      category: "Business and Management",
      courses: [
        "Master of Business Administration (MBA)",
        "MS in Finance",
        "MS in Business Analytics",
        "MS in Marketing",
        "MS in Supply Chain Management",
        "BBA / BS in Business Administration",
      ],
    },
    {
      category: "Engineering and Technology",
      courses: [
        "MS in Mechanical Engineering",
        "MS in Electrical and Computer Engineering",
        "MS in Civil Engineering",
        "MS in Industrial Engineering",
        "MS in Aerospace Engineering",
        "BS in Engineering (various disciplines)",
      ],
    },
    {
      category: "Information Technology",
      courses: [
        "MS in Computer Science",
        "MS in Data Science",
        "MS in Artificial Intelligence and Machine Learning",
        "MS in Cybersecurity",
        "MS in Information Systems",
        "BS in Computer Science",
      ],
    },
    {
      category: "Health and Life Sciences",
      courses: [
        "Master of Public Health (MPH)",
        "MS in Biotechnology",
        "MS in Pharmaceutical Sciences",
        "MS in Bioinformatics",
        "MS in Health Informatics",
        "BS in Biological Sciences",
      ],
    },
    {
      category: "Arts and Social Sciences",
      courses: [
        "MA in Economics",
        "MA in International Relations",
        "MA in Communication and Media Studies",
        "MS in Psychology",
        "MFA in Design or Fine Arts",
        "BA in Political Science",
      ],
    },
    {
      category: "Law and Professional Studies",
      courses: [
        "LLM (Master of Laws)",
        "MS in Project Management",
        "MS in Human Resource Management",
        "MS in Architecture",
        "MS in Environmental Science",
        "MS in Engineering Management",
      ],
    },
  ],

  universities: [
    { name: "Massachusetts Institute of Technology (MIT)", note: "Research-intensive and highly selective; a benchmark for engineering and computer science." },
    { name: "Stanford University", note: "Silicon Valley location with exceptionally strong CS, engineering and entrepreneurship links." },
    { name: "Harvard University", note: "Broad excellence across business, law, public health and the sciences." },
    { name: "Carnegie Mellon University", note: "A perennial favourite for Indian students in computer science, robotics and AI." },
    { name: "University of California, Berkeley", note: "Leading public university with outstanding engineering and CS programmes." },
    { name: "Georgia Institute of Technology", note: "Strong engineering and computing with comparatively reasonable public-university costs." },
    { name: "University of Illinois Urbana-Champaign", note: "Long-standing strength in engineering and CS, and a very large Indian student community." },
    { name: "University of Michigan, Ann Arbor", note: "Broad research university strong across engineering, business and public health." },
    { name: "University of Texas at Austin", note: "Excellent engineering and business in a major tech hub with a lower cost of living." },
    { name: "Purdue University", note: "Renowned engineering programmes and a substantial Indian student presence." },
  ],

  tuitionCosts: [
    "Let's talk about the money honestly, because this is where most US plans succeed or fail. Everything below is an indicative range — every university sets its own fees, they rise most years, and you should confirm on the official programme page before committing to anything.",
    "Bachelor's degrees typically cost around US$25,000 to US$60,000 per year in tuition for international students. Public universities at out-of-state rates generally sit at the lower end; private universities at the higher end. Over four years that is a serious commitment, so run the full number, not the annual one.",
    "Master's degrees usually range from about US$20,000 to US$60,000 per year, with most programmes running around two years. STEM master's at good public universities often land around US$25,000 to US$40,000 per year — which is where a lot of Indian students find the best value.",
    "MBA programmes are their own tier, commonly running from around US$60,000 to US$160,000 for the full two years at well-known schools, usually with substantial work-experience requirements.",
    "PhD programmes are the exception that surprises people. Many are fully funded through teaching or research assistantships that cover tuition and provide a living stipend. A funded US PhD can genuinely cost you less than a US master's — if you get one.",
    "Here is the thing about sticker prices: they are a starting point, not a final bill. Assistantships, fellowships, department awards and tuition waivers all reduce the real cost, sometimes dramatically. The students who pay full sticker are usually the ones who applied late to programmes they had not researched.",
    "Do not forget the costs around the edges: application fees of roughly US$50 to US$150 per university, the SEVIS fee, the visa fee, mandatory health insurance often around US$1,500 to US$3,000 a year, and test fees for the GRE, GMAT, TOEFL or IELTS. They add up faster than students expect.",
  ],

  livingCosts: [
    "Living costs in the US vary more dramatically than in any other destination, and this is genuinely where you can control your budget. The gap between New York or the Bay Area and a college town in the Midwest is enormous.",
    "In major metros — New York, Boston, San Francisco, Los Angeles — a realistic monthly budget sits somewhere around US$1,500 to US$2,500 covering accommodation, food, transport, phone and some social life. In smaller college towns in the Midwest or the South, expect roughly US$800 to US$1,400 for a comparable lifestyle.",
    "Universities publish an official Cost of Attendance figure that includes tuition plus estimated living expenses. This matters practically: your I-20 is issued against it, and it is the number your financial documents need to cover for the visa. Treat it as your planning baseline.",
    "Accommodation dominates your budget. On-campus housing is convenient and social but often pricey; sharing an off-campus apartment with two or three roommates is how most Indian graduate students actually live, and it is dramatically cheaper. Most students move off-campus after their first semester.",
    "Where students genuinely save: cook at home — this is the single biggest lever, and eating out in the US destroys budgets fast. Share an apartment. Buy textbooks used or rent them. Use the campus gym and health centre you are already paying for. And consider a university in a lower-cost state, where the same degree costs far less to live through.",
    "F-1 students are generally permitted to work on campus, typically capped at around 20 hours per week during term and full-time during breaks. On-campus jobs — library, dining hall, lab, IT help desk — are the standard route. Off-campus work is tightly restricted and requires specific authorisation like CPT or OPT.",
    "Be very clear about this: working off-campus without authorisation is a serious status violation with consequences that follow you for years. Never let anyone tell you otherwise. And treat on-campus work as covering incidentals, not tuition.",
  ],

  scholarships: [
    "Here is the truth about US funding: it is the most generous and the most competitive system among the major destinations, and the students who win it are almost never the ones who started looking in June.",
    "Assistantships are the real story, and most Indian students underestimate them. A Teaching Assistantship (TA) or Research Assistantship (RA) can cover a substantial part or all of your tuition and pay a monthly stipend on top. They are most common at master's and PhD level in STEM fields, and they are awarded by departments — not by a central scholarship office. This is why applying early to the right department matters more than a generic scholarship search.",
    "Fellowships are the merit tier — awarded on academic record, research potential and fit. Many are department-specific and require no separate application beyond your admission file, which is another reason a strong application is your best funding strategy.",
    "University merit scholarships and tuition waivers exist at both undergraduate and graduate level, commonly ranging from a few thousand dollars to a full waiver of out-of-state fees. Public universities often use waivers rather than cash awards, which achieves the same thing.",
    "External schemes are the prestigious tier. The Fulbright-Nehru Fellowships are the best-known for Indian students, alongside Indian funders like the Inlaks Shivdasani Foundation, the JN Tata Endowment, and the Narotam Sekhsaria Foundation. These have their own calendars, usually running well ahead of university deadlines.",
    "The rules that decide outcomes: apply early, because assistantship money is allocated as admissions are made and is largely gone by the later rounds. Email professors whose research genuinely interests you — RA positions frequently come from that contact, not from a form. Apply to a range of universities rather than five reaches. And write for the specific programme.",
    "We help students in Jaipur target the programmes where their profile is genuinely competitive for funding. No consultant can promise you an assistantship or a scholarship, and you should walk away from anyone who does.",
  ],

  namedScholarships: [
    {
      name: "Fulbright-Nehru Master's Fellowships",
      desc: "The flagship US government scheme for Indian students, administered by USIEF. Typically covers tuition, airfare, a living stipend and health insurance for a master's degree. Expects strong academics, leadership, relevant work experience and a commitment to return to India. Applications usually open around the middle of the year, well before university deadlines.",
    },
    {
      name: "Teaching and Research Assistantships (TA/RA)",
      desc: "Not a named scheme but the single largest source of real funding for Indian graduate students. Departments offer tuition coverage plus a monthly stipend in exchange for teaching or research work. Awarded by the department alongside admission, most commonly in STEM fields. Applying early and contacting faculty directly makes a genuine difference.",
    },
    {
      name: "Inlaks Shivdasani Foundation Scholarships",
      desc: "An Indian foundation supporting outstanding students for postgraduate study abroad, including the USA. Highly competitive, with its own interview process and a timeline that runs independently of university deadlines.",
    },
    {
      name: "JN Tata Endowment Loan Scholarship",
      desc: "One of India's oldest schemes for higher education abroad, offering a loan scholarship with a partial gift element to Indian graduates across disciplines and destinations. Applications typically open early in the year, long before most students start thinking about funding.",
    },
    {
      name: "Narotam Sekhsaria Foundation Scholarships",
      desc: "An Indian scheme providing interest-free loan scholarships for postgraduate study abroad across a broad range of fields. Competitive, with its own application cycle, and worth researching early alongside university funding.",
    },
  ],

  eligibility: [
    {
      label: "For Undergraduate Courses",
      points: [
        "Class 12 from a recognised board (CBSE, ICSE or State), usually around 60% to 90% depending on how selective the university is.",
        "SAT or ACT scores at many universities, though a large number are now test-optional — check each one rather than assuming.",
        "Proof of English, typically TOEFL iBT around 70 to 100 or IELTS around 6.0 to 7.0, depending on the university's tier.",
        "Essays — a personal statement and often supplemental essays specific to each university. These carry real weight in US admissions, unlike in most other systems.",
        "Two to three Letters of Recommendation, usually from teachers and a counsellor.",
        "Extracurricular activities and demonstrated interests. US undergraduate admissions genuinely assess you beyond marks — this is not a myth.",
        "Financial documentation showing you can cover the Cost of Attendance, which is required before an I-20 is issued.",
      ],
    },
    {
      label: "For Postgraduate Courses",
      points: [
        "A recognised bachelor's degree, typically four years. Note that a three-year Indian bachelor's can be an issue at some universities, though many accept it — verify per programme rather than assuming.",
        "A strong GPA, commonly around 3.0 on a 4.0 scale, which maps roughly to around 60% to 70% depending on the university's conversion.",
        "GRE for most STEM and science programmes, or GMAT for MBA and some business master's. Many programmes have gone test-optional, so check each one.",
        "Proof of English, commonly TOEFL iBT around 80 to 100 or IELTS around 6.5 to 7.5, and higher for programmes with a teaching component.",
        "A Statement of Purpose that is genuinely specific — naming faculty, research areas and why this programme. Generic SOPs are the most common reason strong profiles get rejected.",
        "Two to three Letters of Recommendation, ideally academic and from people who can speak to your research or technical ability.",
        "An updated CV or résumé covering projects, publications, internships and work experience.",
        "Work experience where required — most MBAs expect several years, and some professional master's ask for relevant exposure.",
        "Financial documentation covering the Cost of Attendance for the I-20.",
      ],
    },
  ],

  englishTests: [
    "TOEFL iBT — historically the most widely accepted test in the US and still the default at many universities. Undergraduate programmes commonly ask for around 70 to 100; graduate programmes around 80 to 100, with some competitive programmes wanting higher. Some also set minimum section scores, particularly in speaking if you want a teaching assistantship.",
    "IELTS Academic — now accepted by the large majority of US universities. Undergraduate requirements typically sit around 6.0 to 7.0, graduate around 6.5 to 7.5. Perfectly safe for the US, despite an outdated belief among some students that the US only accepts TOEFL.",
    "PTE Academic — accepted by a growing number of US universities, typically around 53 to 68. Acceptance is less universal than TOEFL or IELTS, so verify per programme.",
    "Duolingo English Test — accepted by a substantial number of US universities, commonly around 105 to 125. Cheaper and faster, but acceptance varies more than the established tests — always confirm.",
    "Standardised tests are separate from English tests, and students conflate them. The GRE is expected for many STEM and science graduate programmes; the GMAT for MBA and some business master's; the SAT or ACT for undergraduate. Many programmes have moved test-optional, but a strong GRE can still support a weaker GPA and help your funding case.",
    "A note on waivers: some US universities waive the English requirement if your medium of instruction was English and you can provide an official MOI letter, or if you have studied in an English-speaking country. It is discretionary and programme-specific. Never assume a waiver — request confirmation in writing.",
    "If your score is short, that is fixable. Our IELTS and TOEFL coaching in Jaipur is built around reaching your target score rather than just drilling the format — and for the US, your speaking score can directly affect your assistantship eligibility.",
  ],

  documents: [
    "Academic transcripts and mark sheets — Class 10, Class 12, and all bachelor's semesters for graduate applications.",
    "Degree certificate or provisional certificate; a bonafide letter if you are still studying.",
    "A valid passport with sufficient validity to cover your programme and visa.",
    "English test scorecard (TOEFL, IELTS, PTE or an accepted equivalent).",
    "GRE or GMAT scorecard where the programme requires it; SAT or ACT for undergraduate.",
    "Statement of Purpose written specifically for each programme — naming faculty and research areas where relevant.",
    "Two to three Letters of Recommendation, submitted directly by your referees through the university's portal.",
    "An updated CV or résumé covering education, projects, publications, internships and work experience.",
    "Work experience documents — offer letters, experience certificates and payslips where relevant.",
    "Portfolio for design, architecture, fine arts and media programmes.",
    "Financial documents — bank statements, loan sanction letters and sponsor affidavits covering the Cost of Attendance, required for your I-20.",
    "Form I-20, issued by the university once you accept and prove funding — the anchor document for your F-1 visa.",
    "SEVIS fee payment receipt and DS-160 confirmation page for the visa interview.",
    "Passport-sized photographs meeting US visa specifications.",
  ],

  applySteps: [
    {
      title: "Shortlist your programmes and universities",
      desc: "Start with the programme, not the ranking. Read faculty research pages, check course lists, and build a list of eight to twelve across reach, match and safety. Include good public universities — the value is often better than the famous names.",
    },
    {
      title: "Check eligibility and test requirements honestly",
      desc: "Compare your GPA, degree length and test scores against each programme. Confirm whether a three-year bachelor's is accepted, and whether the GRE or GMAT is required or optional. Find the gaps now, not in a rejection email.",
    },
    {
      title: "Take your tests",
      desc: "Book TOEFL or IELTS, plus GRE or GMAT if needed, leaving room for one retake. Give yourself several months — the GRE in particular is not a test you cram in three weeks.",
    },
    {
      title: "Prepare your application materials",
      desc: "Transcripts, SOP, LORs, CV and portfolio. Write a different SOP for each programme — naming actual faculty and research areas. This is the stage that decides your outcome, and generic essays are where strong profiles quietly fail.",
    },
    {
      title: "Submit your applications",
      desc: "Apply through each university's own portal, or the Common App for many undergraduate programmes. Pay attention to funding deadlines, which are usually earlier than admission deadlines and matter more.",
    },
    {
      title: "Compare offers and confirm admission",
      desc: "Decisions typically arrive over several months. Compare on total cost after aid, programme fit, location and OPT prospects — not on the name. Accept your choice, pay the deposit and submit your financial documents so the university issues your I-20.",
    },
    {
      title: "Pay the SEVIS fee and apply for your F-1 visa",
      desc: "With your I-20, pay the SEVIS I-901 fee, complete the DS-160, book your visa appointment, and prepare properly for the interview. This is a real hurdle, not a formality — book as early as you can, because slots in the pre-Fall rush disappear fast.",
    },
  ],

  visa: [
    "The visa you need is the F-1 student visa, which covers full-time academic study at an SEVP-certified institution. There is also the J-1 exchange visitor visa for certain exchange and funded programmes, and the M-1 for vocational study — but for the vast majority of Indian students, it is F-1.",
    "Everything starts with the I-20. Once you accept your offer, pay any deposit and submit financial documents proving you can cover the Cost of Attendance, the university issues Form I-20. You cannot begin the visa process without it, so the I-20 timeline effectively sets your visa timeline.",
    "The sequence is: receive your I-20, pay the SEVIS I-901 fee, complete the DS-160 form online, pay the visa application fee, book your appointment, and attend the interview at a US Embassy or Consulate. In India that means Delhi, Mumbai, Chennai, Kolkata or Hyderabad.",
    "The interview is the part that genuinely decides your outcome, and it is short — often just a few minutes. The officer is assessing three things: are you a genuine student, can you actually fund this, and do you have ties that mean you intend to return to India after your studies. Answer clearly, concisely and honestly.",
    "The financial evidence needs to cover the Cost of Attendance on your I-20 — at minimum your first year, with a credible plan for the rest. Bank statements, education loan sanction letters and sponsor affidavits are all acceptable. Funds that appear in an account days before your interview invite exactly the scrutiny you do not want. Plan this months ahead and be ready to explain the source.",
    "Here is where Indian applications most often go wrong: an inconsistent story. If your SOP says one thing, your finances suggest another, and your interview answers say a third, that is a problem. Your course choice should make sense given your background, and your funding should make sense given your family's documented income.",
    "Appointment availability is the practical constraint nobody warns you about. Slots in the pre-Fall rush from May to July disappear quickly. Book the moment you have your I-20 and SEVIS receipt — waiting a fortnight can genuinely cost you your intake.",
    "While studying, F-1 students may generally work on campus up to around 20 hours a week during term. CPT allows internships that are integral to your programme; OPT typically allows around 12 months of work in your field after graduation, with a possible STEM extension taking it to roughly 36 months. These rules do change, so verify current policy when you apply.",
    "One thing we will always be straight with you about: no consultant, ours included, can guarantee a visa. US visa decisions rest entirely with the consular officer. What we can do is make sure your documents, your finances and your story are consistent and complete — and prepare you properly for the interview, which is what actually decides most cases.",
  ],

  intakes: [
    /* ------------------------------------------------------------------ */
    /* FALL — MAIN                                                         */
    /* ------------------------------------------------------------------ */
    {
      slug: "fall-intake-2026",
      name: "Fall Intake",
      season: "Autumn / Fall",
      months: "August – September 2026",
      status: "Main intake",
      summary:
        "America's primary intake — every programme, every university, and almost all the assistantship funding. If you can plan for it, this is the one.",
      intro: [
        "If you are serious about studying in the USA, Fall is where you want to be. It is the main academic start of the year, and effectively everything American higher education has to offer opens up around it.",
        "US universities build their entire calendar around Fall. Whatever programme you have been researching, whatever university you have been picturing — it starts in Fall. More importantly, so does the funding.",
        "That last point deserves emphasis, because it is the thing students miss. The overwhelming majority of assistantships, fellowships and departmental aid are allocated to the Fall cohort. Choosing Spring can quietly cost you the funding that makes the US affordable in the first place.",
        "The catch is that everyone knows this. Fall is the most competitive intake in the US, and the students getting the offers and the funding they want started roughly fifteen months out — not in March.",
        "This guide covers exactly how the Fall 2026 intake works: the timeline, the deadlines, the programmes, the universities, the funding and the F-1 visa. Read it now, and again when you start applying.",
      ],
      whatIsIt: [
        "The Fall intake is the primary academic start of the American year. Classes typically begin in late August or early September 2026, following an orientation week for international students.",
        "This is the intake where the entire catalogue is live. Every undergraduate programme, every master's, every PhD cohort, every assistantship, every fellowship and every campus service runs at full capacity. Nothing is switched off for low numbers.",
        "It suits you if your timeline runs naturally: finish Class 12 or your bachelor's in the Indian academic year ending around March to June 2026, having applied across late 2025 and early 2026, then sort your I-20 and F-1 visa over the summer and start in August.",
        "Compared with Spring, Fall is bigger in every direction — more programmes, more competition, vastly more funding, more people arriving alongside you. International orientation feels genuinely different when thousands of new students land in the same fortnight.",
        "There is also a practical alignment worth understanding. Fall matches the US recruiting cycle: career fairs happen in September and October, summer internships are recruited for in the autumn and winter, and those internships are frequently where the full-time offer comes from. Starting in Spring puts you out of step with that rhythm for your first year.",
        "If your profile is ready and your funding plan is in place, there is no strategic reason to choose Spring over Fall. Fall is the default for very good reasons.",
      ],
      whyChoose: [
        {
          title: "Almost all the funding is here",
          desc: "This is the single biggest argument. Teaching and research assistantships, fellowships and departmental aid are overwhelmingly allocated to the Fall cohort. Spring applicants compete for what is left, which is often very little. If funding matters to your plan, Fall is not really optional.",
        },
        {
          title: "Every programme is available",
          desc: "Programmes that run once a year run in Fall. Many PhD cohorts admit in Fall only. If you have a specific programme, a specific lab or a specific faculty member in mind, Fall is frequently your only entry point.",
        },
        {
          title: "The recruiting cycle lines up",
          desc: "US career fairs run in September and October, and summer internships are recruited for through the autumn and winter. Starting in Fall means you are in the room for that cycle from the beginning rather than a semester behind it.",
        },
        {
          title: "You arrive with a full cohort",
          desc: "Thousands of international students start together. Orientation runs properly, Indian student associations organise pickups and housing help, and your friendships form in the first fortnight rather than being assembled later.",
        },
        {
          title: "It fits the Indian academic calendar",
          desc: "Your results arrive around May or June, you apply through the preceding autumn and winter, and you start in August. No gap year to explain, no lost momentum — the cleanest transition from an Indian degree to an American one.",
        },
      ],
      timeline: [
        {
          period: "May – August 2025",
          tasks: [
            "Decide your field and specialisation properly — for the US, this drives which faculty you target.",
            "Begin GRE or GMAT preparation; this is a months-long project, not a three-week one.",
            "Research universities and read faculty research pages, not just ranking tables.",
            "Check whether your three-year bachelor's is accepted at each programme — verify, do not assume.",
            "Start researching Fulbright-Nehru and Indian funders, which open around mid-year.",
          ],
        },
        {
          period: "September – November 2025",
          tasks: [
            "Take your GRE or GMAT, leaving room for one retake.",
            "Take TOEFL or IELTS — remember your speaking score can affect assistantship eligibility.",
            "Finalise a shortlist of eight to twelve universities across reach, match and safety.",
            "Email professors whose research genuinely interests you — this is how RA positions actually happen.",
            "Request LORs and give your referees at least a month; US referees submit directly through portals.",
          ],
        },
        {
          period: "December 2025 – January 2026",
          tasks: [
            "Write a distinct SOP for each programme, naming actual faculty and research areas.",
            "Submit your applications — many funding deadlines fall in December and January, earlier than admission deadlines.",
            "Pay application fees, typically around US$50 to US$150 per university.",
            "Ensure your referees have actually submitted; portals show you their status.",
            "Begin your education loan conversation with banks now, not in June.",
          ],
        },
        {
          period: "February – April 2026",
          tasks: [
            "Receive decisions; these arrive across several months rather than on one date.",
            "Compare offers on total cost after aid, funding, programme fit and location.",
            "Respond to any assistantship offers or interview requests promptly — these are time-sensitive.",
            "Accept your choice and pay the enrolment deposit.",
            "Submit financial documents so the university can issue your I-20.",
          ],
        },
        {
          period: "May – August 2026",
          tasks: [
            "Receive your I-20 and pay the SEVIS I-901 fee immediately.",
            "Complete the DS-160 and book your F-1 visa appointment the moment slots open — this is genuinely urgent.",
            "Prepare properly for the visa interview; practise your answers on course, funding and ties to India.",
            "Arrange accommodation, connect with the university's Indian student association, and book flights after your visa.",
            "Fly out for international orientation and start classes in late August 2026.",
          ],
        },
      ],
      deadlines: [
        "Applications for the Fall 2026 intake typically open around August or September 2025 — roughly a year ahead. That sounds excessive until you see how many students are already deep in GRE prep by then.",
        "Deadlines vary enormously by university and programme. Most graduate programmes fall between December 2025 and February 2026. Highly competitive programmes and most PhD cohorts close in December or early January. Some universities run rolling admissions into the spring, but by then the good outcomes are largely gone.",
        "Here is the deadline that actually matters, and most students miss it entirely: the funding deadline. Many programmes have a priority or funding deadline — often in December or January — that is weeks or months earlier than the admission deadline. Apply after it and you may still get admitted, but with no assistantship consideration at all. That is the difference between an affordable degree and an unaffordable one.",
        "For undergraduate applications, Early Decision and Early Action deadlines typically fall around November 2025, with Regular Decision usually in early January 2026. Early rounds can help at some universities, but Early Decision is binding — do not use it unless you are certain and your funding is settled.",
        "The visa chain is the other hard constraint. You need your I-20 by roughly May, which means accepting an offer and submitting financials by April. F-1 appointment slots from May to July are the scarcest of the year, and students genuinely lose their intake to a booking calendar rather than to a rejection.",
        "Our honest recommendation for Fall 2026: have your tests done by November 2025, your applications submitted by December 2025 or early January 2026 to catch funding rounds, your I-20 by May 2026, and your visa interview booked the moment your SEVIS receipt exists.",
      ],
      courseCategories: [
        {
          category: "Business and Management",
          courses: [
            "Master of Business Administration (MBA)",
            "MS in Finance",
            "MS in Business Analytics",
            "MS in Marketing",
            "MS in Supply Chain Management",
          ],
        },
        {
          category: "Engineering and Technology",
          courses: [
            "MS in Mechanical Engineering",
            "MS in Electrical and Computer Engineering",
            "MS in Civil Engineering",
            "MS in Industrial Engineering",
            "MS in Aerospace Engineering",
          ],
        },
        {
          category: "Information Technology",
          courses: [
            "MS in Computer Science",
            "MS in Data Science",
            "MS in Artificial Intelligence and Machine Learning",
            "MS in Cybersecurity",
            "MS in Information Systems",
          ],
        },
        {
          category: "Health and Life Sciences",
          courses: [
            "Master of Public Health (MPH)",
            "MS in Biotechnology",
            "MS in Bioinformatics",
            "MS in Pharmaceutical Sciences",
            "MS in Health Informatics",
          ],
        },
        {
          category: "Arts and Social Sciences",
          courses: [
            "MA in Economics",
            "MA in International Relations",
            "MA in Communication",
            "MS in Psychology",
            "MFA in Design",
          ],
        },
        {
          category: "Research Degrees",
          courses: [
            "PhD in Computer Science (Fall admission only at most universities)",
            "PhD in Engineering",
            "PhD in Life Sciences",
            "PhD in Economics",
            "PhD in Physics and Chemistry",
          ],
        },
      ],
      universities: [
        { name: "Massachusetts Institute of Technology (MIT)", note: "Full Fall catalogue; most graduate programmes admit for Fall only." },
        { name: "Stanford University", note: "Fall start across its full graduate portfolio with substantial fellowship funding." },
        { name: "Carnegie Mellon University", note: "Complete Fall intake; a perennial favourite for Indian CS applicants." },
        { name: "University of California, Berkeley", note: "Full Fall start with assistantship funding allocated in this cycle." },
        { name: "Georgia Institute of Technology", note: "Full Fall catalogue with strong engineering funding and reasonable public costs." },
        { name: "University of Illinois Urbana-Champaign", note: "Complete Fall intake and a very large Indian student community." },
        { name: "University of Michigan, Ann Arbor", note: "Full Fall start across engineering, business and public health." },
        { name: "University of Texas at Austin", note: "Complete Fall catalogue in a major tech hub with lower living costs." },
        { name: "Purdue University", note: "Full Fall intake with renowned engineering programmes and TA opportunities." },
        { name: "North Carolina State University", note: "Strong Fall engineering and analytics programmes with good value for money." },
      ],
      eligibility: [
        {
          label: "For Undergraduate Courses",
          points: [
            "Class 12 from a recognised board, generally around 60% to 90% depending on how selective the university is.",
            "SAT or ACT at many universities, though a large number are now test-optional — check each one.",
            "TOEFL iBT around 70 to 100 or IELTS around 6.0 to 7.0 depending on the university's tier.",
            "A personal essay plus supplemental essays, which carry genuine weight in US undergraduate admissions.",
            "Two to three Letters of Recommendation from teachers and a counsellor.",
            "Extracurricular activities and demonstrated interests — US admissions really do assess you beyond your marks.",
            "Financial documentation covering the Cost of Attendance, required before an I-20 is issued.",
          ],
        },
        {
          label: "For Postgraduate Courses",
          points: [
            "A recognised bachelor's degree, typically four years; a three-year degree is accepted at many but not all universities — verify per programme.",
            "A GPA around 3.0 on a 4.0 scale, roughly equivalent to around 60% to 70% depending on the conversion used.",
            "GRE for most STEM programmes or GMAT for MBA and some business master's; many are test-optional, so check.",
            "TOEFL iBT around 80 to 100 or IELTS around 6.5 to 7.5, with speaking sub-scores mattering for assistantships.",
            "A programme-specific SOP naming faculty and research areas — generic SOPs are where strong profiles fail.",
            "Two to three Letters of Recommendation, submitted directly by referees through the portal.",
            "An updated CV covering projects, publications, internships and work experience.",
            "Financial documentation covering the Cost of Attendance for the I-20.",
          ],
        },
      ],
      englishTests: [
        "TOEFL iBT — the default at many US universities. Undergraduate around 70 to 100; graduate around 80 to 100, with some competitive programmes wanting higher. Watch the speaking section: a low speaking score can rule you out of a teaching assistantship even if your overall is fine.",
        "IELTS Academic — accepted by the large majority of US universities. Undergraduate around 6.0 to 7.0; graduate around 6.5 to 7.5. Perfectly safe for the US despite an outdated belief that only TOEFL works.",
        "PTE Academic — accepted by a growing number of universities, typically around 53 to 68. Less universally accepted than TOEFL or IELTS, so verify per programme.",
        "Duolingo English Test — accepted by a substantial number of universities, commonly around 105 to 125. Cheaper and faster, but confirm acceptance for your specific programme.",
        "GRE and GMAT are separate from English tests and students conflate them. GRE for most STEM graduate programmes, GMAT for MBA and some business master's. Many are now test-optional, but a strong GRE can offset a modest GPA and genuinely strengthen your funding case.",
        "Waivers: some universities waive English requirements with an official Medium of Instruction letter. It is discretionary and programme-specific — request confirmation in writing rather than assuming.",
      ],
      documents: [
        "Class 10 and Class 12 mark sheets.",
        "Bachelor's transcripts and degree certificate, or a bonafide letter if you are still studying.",
        "A valid passport with sufficient remaining validity.",
        "TOEFL, IELTS or accepted English test scorecard.",
        "GRE or GMAT scorecard where required; SAT or ACT for undergraduate.",
        "A programme-specific Statement of Purpose for each application.",
        "Two to three Letters of Recommendation, submitted by referees through the portal.",
        "An updated CV or résumé.",
        "Work experience certificates, if applicable.",
        "Portfolio for design, architecture and fine arts programmes.",
        "Financial documents covering the Cost of Attendance — bank statements, loan sanction letter or sponsor affidavit.",
        "Form I-20 issued by the university.",
        "SEVIS I-901 fee receipt and DS-160 confirmation page.",
        "Passport-size photographs to US visa specification.",
      ],
      applySteps: [
        {
          title: "Choose your programmes and universities",
          desc: "Start around mid-2025. Read faculty research pages, check programme structure, and shortlist eight to twelve across reach, match and safety. Do not overlook strong public universities — better value, same OPT.",
        },
        {
          title: "Check eligibility and test requirements",
          desc: "Match your GPA, degree length and test needs to each programme. Confirm three-year bachelor's acceptance and whether the GRE or GMAT is required. Find gaps in August, not in a March rejection.",
        },
        {
          title: "Prepare your documents",
          desc: "Transcripts, a distinct SOP per programme, LORs, CV and portfolio. Name real faculty in your SOP. This stage decides your outcome and your funding more than anything else.",
        },
        {
          title: "Submit your applications",
          desc: "Apply through each university's portal by December 2025 or early January 2026 — targeting the funding deadline, not the admission deadline. They are not the same date, and the earlier one is what matters.",
        },
        {
          title: "Receive and compare your offers",
          desc: "Decisions arrive between roughly February and April 2026, often with assistantship offers attached. Compare on total cost after aid, not on the sticker price or the name.",
        },
        {
          title: "Confirm admission and get your I-20",
          desc: "Accept your choice, pay the deposit and submit financial documents covering the Cost of Attendance. The university then issues your I-20. Target May 2026.",
        },
        {
          title: "Pay SEVIS and apply for your F-1 visa",
          desc: "Pay the SEVIS I-901 fee, complete the DS-160, and book your interview the moment slots appear. May to July slots vanish fast — students lose their intake to the booking calendar, not to rejections.",
        },
      ],
      scholarships: [
        "Fall is where the money is. This is not a marginal difference — the overwhelming majority of US funding is allocated to the Fall cohort, and understanding that shapes your entire strategy.",
        "Assistantships are the real prize and the thing most Indian students under-pursue. A TA or RA can cover much or all of your tuition and pay a monthly stipend on top. They are awarded by departments alongside admission, most commonly in STEM. Critically, they are allocated in the Fall admission cycle and largely exhausted by the later rounds — which is why a December application beats a March one even when both get admitted.",
        "Fellowships are the merit tier, awarded on academic record and research potential. Many are department-specific and need no separate application beyond your admission file — meaning a strong, specific application is itself your best funding strategy.",
        "University merit scholarships and tuition waivers exist at both levels, from a few thousand dollars to a full out-of-state fee waiver. Public universities often use waivers rather than cash, which achieves the same result.",
        "External schemes are the prestigious tier. Fulbright-Nehru Master's Fellowships are the best known for Indian students, administered by USIEF with applications usually opening around mid-2025 for a Fall 2026 start. Indian funders — Inlaks Shivdasani, JN Tata Endowment, Narotam Sekhsaria — run their own earlier calendars.",
        "The things that genuinely work: email professors whose research actually interests you, because RA positions come from that contact rather than from a form. Apply by the funding deadline, not the admission deadline. Apply to a realistic range rather than five reaches. And never budget around an award you have not won.",
      ],
      comparison: [
        {
          factor: "Popularity",
          thisIntake: "The primary intake — the large majority of international students start here",
          mainIntake: "Much smaller, chosen by students who missed Fall or needed more time",
        },
        {
          factor: "Number of Courses",
          thisIntake: "The full catalogue — every programme, including PhD cohorts",
          mainIntake: "A reduced selection; many programmes and most PhD cohorts do not admit",
        },
        {
          factor: "Competition",
          thisIntake: "Highest — the strongest applicant pool of the year",
          mainIntake: "Lower, with fewer applicants per place on the programmes that run",
        },
        {
          factor: "Class Size",
          thisIntake: "Larger cohorts, full sections, a wider network from day one",
          mainIntake: "Smaller cohorts and more direct access to faculty",
        },
        {
          factor: "Scholarship Options",
          thisIntake: "Almost all assistantships, fellowships and aid are allocated in this cycle",
          mainIntake: "Very limited — most funding is already committed to the Fall cohort",
        },
        {
          factor: "Availability",
          thisIntake: "Every university, every department, every programme",
          mainIntake: "Limited to departments that choose to run a second admission cycle",
        },
      ],
      comparisonMainLabel: "Spring Intake",
      verdict: [
        "Is the Fall intake a good choice? Yes — and for the US specifically, it is closer to essential than to preferable.",
        "You get the full catalogue, the recruiting cycle in sync with your degree, a cohort arriving alongside you, and — the decisive factor — access to the assistantship and fellowship funding that makes an American degree financially survivable. That last point is not a nice-to-have. For most Indian students, funding is the difference between going and not going.",
        "The honest trade-offs are real. Fall attracts the strongest applicant pool of the year. Funding deadlines in December mean your applications need to be finished while you are still in your final year. And the F-1 appointment scramble from May to July is genuinely stressful in a way no brochure prepares you for.",
        "It also demands planning about fifteen months out. If you are reading this in February 2026 hoping to start that August, be realistic: your funding chances are largely gone, and the sensible options are Spring 2027 or a properly prepared Fall 2027.",
        "So: Fall is the right intake for the USA, provided you respect its timeline. Tests done by November, applications in by December targeting funding rounds, I-20 by May, visa booked the day your SEVIS receipt exists. Do that and Fall gives you every option America has.",
      ],
      faqs: [
        {
          q: "When does the Fall 2026 intake in the USA actually start?",
          a: "Classes typically begin in late August or early September 2026, with international orientation running the week before. Exact dates vary by university — some start in mid-August — so always check your I-20 and your offer letter, since your I-20 start date also affects when you can enter the US.",
        },
        {
          q: "When should I start applying for the Fall 2026 intake?",
          a: "Begin around mid-2025 with GRE or GMAT preparation. Aim to submit applications by December 2025 or early January 2026. Crucially, target the funding deadline rather than the admission deadline — they are often different dates, and the earlier one decides whether you get assistantship consideration at all.",
        },
        {
          q: "Why does everyone say Fall is better for funding?",
          a: "Because departments allocate their assistantship and fellowship budgets in the Fall admission cycle. By Spring, most of that money is already committed to students who started in August. You can absolutely get admitted in Spring; getting funded is much harder. For most Indian students, that is the deciding factor.",
        },
        {
          q: "Is my three-year Indian bachelor's accepted for a US master's?",
          a: "It depends entirely on the university. Many accept a three-year degree, particularly with a strong GPA or relevant work experience; some require four years of education, and a few ask for a credential evaluation from a body like WES. Verify per programme before you apply — this is not something to assume either way.",
        },
        {
          q: "How early should I book my F-1 visa appointment?",
          a: "The moment you have your I-20 and SEVIS receipt. Appointment slots between May and July are the scarcest of the year because every Fall starter is competing for them. Students genuinely lose their intake to the booking calendar rather than to a rejection — this is the most avoidable failure in the whole process.",
        },
        {
          q: "Can I work while studying on an F-1 visa?",
          a: "Generally yes on campus, typically capped at around 20 hours a week during term and full-time during breaks. CPT allows internships integral to your programme, and OPT typically permits around 12 months of work in your field after graduation, with a possible STEM extension to roughly 36 months. Rules change, so verify current policy — and never work off-campus without proper authorisation, as it is a serious status violation.",
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    /* SPRING — SECONDARY                                                  */
    /* ------------------------------------------------------------------ */
    {
      slug: "spring-intake-2027",
      name: "Spring Intake",
      season: "Winter / Spring",
      months: "January – February 2027",
      status: "Secondary intake",
      summary:
        "Missed Fall? Spring is a genuine second chance — fewer programmes and much less funding, but real competition relief and months of extra preparation.",
      intro: [
        "Dreaming of studying in the USA but missed the Fall intake? Don't worry — you have not lost a year.",
        "The Spring intake exists for students in exactly your position. Maybe your GRE score needed one more attempt. Maybe your final results came late, or your visa slot did not come through, or your loan took longer than the bank promised. Maybe you simply were not willing to rush an application you would regret.",
        "Whatever the reason, Spring is a real, properly supported intake at a good number of American universities. You study the same content, get the same degree, and qualify for the same OPT as anyone who started in Fall.",
        "But we are going to be more honest with you than most consultants here, because the US is different from other destinations on one specific point: funding. Most assistantship and fellowship money is allocated in the Fall cycle. By Spring, much of it is committed. If your plan depends on getting funded, that is a serious consideration — not a footnote.",
        "This guide covers everything about the Spring 2027 intake in the USA: what runs, what does not, the timeline, the deadlines, the funding reality, and whether it is right for you.",
      ],
      whatIsIt: [
        "The Spring intake — sometimes called the winter intake — is America's second academic start of the year. Classes typically begin in January 2027, with some universities starting in early February.",
        "It exists because US universities operate on a two-semester system, so Spring is a structurally genuine entry point rather than an improvised one. A good number of universities admit for Spring across their more popular graduate programmes.",
        "It suits you if you missed the Fall deadlines, needed extra time to retake the GRE, GMAT or TOEFL, are waiting on final results, had a visa appointment or funding delay, or would rather submit a strong application in September than a rushed one in December.",
        "Compared with Fall, the academic differences are minimal — same faculty, same content, same accreditation, same OPT eligibility. The real differences are availability and funding. The programme selection is narrower, and the assistantship money is substantially thinner.",
        "Which programmes run in Spring? The high-demand ones: computer science, data science, information systems, business analytics, engineering, project management, MBA at some schools, and public health. Most PhD cohorts admit for Fall only. Highly specialised programmes and those with fixed lab cohorts usually do not run in Spring.",
        "One structural point worth understanding: a Spring start puts you slightly out of step with the US recruiting cycle in your first year. Career fairs happen in the autumn, and summer internships are recruited for months before you arrive. It is a scheduling disadvantage in year one, not a permanent one.",
      ],
      whyChoose: [
        {
          title: "A genuine second chance",
          desc: "Missing Fall used to mean waiting a full year. Spring cuts that to roughly four months. You keep your momentum and your study habits instead of drifting through a year explaining a gap on your CV.",
        },
        {
          title: "Meaningfully less competition",
          desc: "Far fewer students apply for Spring, so there are fewer applicants per place on the programmes that run. If your profile is solid but not spectacular, Spring is often where a borderline application becomes an admit.",
        },
        {
          title: "More time to prepare properly",
          desc: "Those extra months matter more than you think. Retake the GRE and get a score that actually helps. Rewrite your SOP so it names real faculty. Season your bank funds properly. Sort your loan without panic.",
        },
        {
          title: "Smaller cohorts and better faculty access",
          desc: "Spring intakes are smaller. That usually means smaller sections, more contact with professors, and a genuine shot at building the relationship that leads to an RA position in your second semester.",
        },
        {
          title: "A calmer visa appointment queue",
          desc: "This is genuinely underrated. The May-to-July F-1 scramble is the worst booking problem in the whole US process. Applying for a Spring start means booking in October or November, when slots are far more available.",
        },
      ],
      timeline: [
        {
          period: "January – April 2026",
          tasks: [
            "Research universities that actually run a Spring 2027 intake — the list is shorter, so confirm early.",
            "Begin GRE or GMAT preparation if you need to retake or have not sat it yet.",
            "Check eligibility for shortlisted programmes, including three-year bachelor's acceptance.",
            "Read faculty research pages for the programmes you are targeting.",
            "Build a realistic budget covering tuition, health insurance and living costs.",
          ],
        },
        {
          period: "May – July 2026",
          tasks: [
            "Take your GRE or GMAT with room for one retake.",
            "Take TOEFL or IELTS — your speaking score still matters for any assistantship hope.",
            "Finalise a shortlist of six to ten Spring-intake programmes.",
            "Email professors about research interests — with the Fall funding gone, this contact matters even more.",
            "Request LORs and give your referees at least a month.",
          ],
        },
        {
          period: "August – September 2026",
          tasks: [
            "Write a distinct SOP for each programme, naming faculty and explaining your timeline honestly.",
            "Submit your applications — most Spring deadlines fall between August and October 2026.",
            "Ask departments directly whether any assistantship funding exists for the Spring cohort.",
            "Begin your education loan process with banks.",
            "Ensure your referees have actually submitted through the portals.",
          ],
        },
        {
          period: "October – November 2026",
          tasks: [
            "Receive and compare your decisions on total cost, programme fit and location.",
            "Accept your choice and pay the enrolment deposit.",
            "Submit financial documents covering the Cost of Attendance.",
            "Receive your I-20 and pay the SEVIS I-901 fee immediately.",
            "Complete the DS-160 and book your F-1 visa appointment — slots are far better now than in summer.",
          ],
        },
        {
          period: "November 2026 – January 2027",
          tasks: [
            "Attend your F-1 visa interview, well prepared on course, funding and ties to India.",
            "Arrange accommodation — Spring arrivals have fewer on-campus options, so start early.",
            "Connect with the university's Indian student association for arrival help.",
            "Book flights once your visa is approved, and pack for a genuine American winter.",
            "Fly out for January orientation and start classes.",
          ],
        },
      ],
      deadlines: [
        "Applications for the Spring 2027 intake typically open around March to May 2026 — roughly eight to ten months ahead. Deadlines vary by university, but most fall between August and October 2026.",
        "Some universities set Spring deadlines as early as July or August 2026, particularly for competitive programmes. Others accept applications into October or even November. The variation is wider than for Fall, so check each programme individually rather than assuming a common date.",
        "Applying early matters more for Spring than students expect, for a specific reason. The Spring selection is already narrower, so each programme has fewer seats. Popular programmes — computer science, data science, business analytics — can close well before the stated deadline simply because they fill.",
        "There is also a funding argument for early Spring applications. What little assistantship money exists for the Spring cohort is allocated first-come, and it is gone quickly. An August application has a genuine shot at it; a November one usually does not.",
        "The visa chain sets your real deadline. For a January start you need your I-20 by roughly late October, which means accepting an offer and submitting financials by early October, which means applying by August or September. The good news is that the October-to-November appointment queue is far kinder than the summer one.",
        "Our honest recommendation: treat September 2026 as your real deadline for a Spring 2027 start. Anything later works only if everything goes right, and something usually does not.",
      ],
      courseCategories: [
        {
          category: "Information Technology",
          courses: [
            "MS in Computer Science",
            "MS in Data Science",
            "MS in Information Systems",
            "MS in Cybersecurity",
            "MS in Software Engineering",
          ],
        },
        {
          category: "Business and Management",
          courses: [
            "MS in Business Analytics",
            "MS in Finance",
            "MS in Management",
            "MBA (Spring cohorts at selected schools)",
            "MS in Marketing",
          ],
        },
        {
          category: "Engineering and Technology",
          courses: [
            "MS in Mechanical Engineering",
            "MS in Electrical and Computer Engineering",
            "MS in Civil Engineering",
            "MS in Industrial Engineering",
            "MS in Engineering Management",
          ],
        },
        {
          category: "Health and Life Sciences",
          courses: [
            "Master of Public Health (selected universities)",
            "MS in Health Informatics",
            "MS in Biotechnology",
            "MS in Bioinformatics",
            "MS in Healthcare Administration",
          ],
        },
        {
          category: "Arts and Social Sciences",
          courses: [
            "MA in Economics (selected universities)",
            "MA in International Relations",
            "MA in Communication",
            "MS in Applied Psychology",
            "MA in Education",
          ],
        },
        {
          category: "Professional Studies",
          courses: [
            "MS in Project Management",
            "MS in Human Resource Management",
            "MS in Supply Chain Management",
            "MS in Construction Management",
            "MS in Environmental Science",
          ],
        },
      ],
      universities: [
        { name: "Northeastern University", note: "Well-established Spring intake across computing, engineering and business." },
        { name: "Arizona State University", note: "Substantial Spring admission across engineering, IT and business." },
        { name: "University of Texas at Arlington", note: "Regular Spring cohorts in engineering and computer science." },
        { name: "University at Buffalo, SUNY", note: "Spring start across a good range of engineering and management programmes." },
        { name: "Illinois Institute of Technology", note: "Established Spring intake in computing and engineering." },
        { name: "Stevens Institute of Technology", note: "Spring cohorts across computer science, engineering and analytics." },
        { name: "George Mason University", note: "Spring admission across IT, analytics and public policy programmes." },
        { name: "University of Texas at Dallas", note: "Regular Spring intake in computer science, engineering and management." },
        { name: "Pace University", note: "Spring starts across computing and business programmes in New York." },
        { name: "San Jose State University", note: "Selected Spring admission with a Silicon Valley location — confirm availability by programme." },
      ],
      eligibility: [
        {
          label: "For Undergraduate Courses",
          points: [
            "Class 12 from a recognised board, usually around 55% to 80% depending on the university.",
            "SAT or ACT at some universities, though many Spring-admitting institutions are test-optional.",
            "TOEFL iBT around 70 to 90 or IELTS around 6.0 to 6.5, depending on the university.",
            "A personal essay; explaining your Spring timeline honestly is fine and often helps.",
            "Two Letters of Recommendation from teachers or a counsellor.",
            "Note that fewer undergraduate programmes admit for Spring than graduate ones — confirm availability first.",
            "Financial documentation covering the Cost of Attendance, required for the I-20.",
          ],
        },
        {
          label: "For Postgraduate Courses",
          points: [
            "A recognised bachelor's degree; verify three-year degree acceptance per programme, as it varies.",
            "A GPA around 3.0 on a 4.0 scale, though Spring-admitting universities are often somewhat more flexible.",
            "GRE or GMAT where required; many Spring programmes are test-optional, which can work in your favour.",
            "TOEFL iBT around 79 to 95 or IELTS around 6.5 to 7.0.",
            "A programme-specific SOP; with a Spring application, addressing your timeline directly strengthens it rather than weakening it.",
            "Two to three Letters of Recommendation submitted through the portal.",
            "An updated CV covering projects, internships and work experience.",
            "A gap of a year or so after graduation is generally fine if you can account for it — work, an internship or a certification all count.",
            "Financial documentation covering the Cost of Attendance for the I-20.",
          ],
        },
      ],
      englishTests: [
        "TOEFL iBT — widely accepted for Spring admissions, commonly around 79 to 95 for graduate programmes. Watch your speaking sub-score if you have any hope of a teaching assistantship later.",
        "IELTS Academic — accepted by the large majority of universities running Spring intakes, typically around 6.5 to 7.0 for graduate entry.",
        "PTE Academic — accepted by a growing number of universities, around 53 to 63. Fast results, which helps a compressed timeline. Verify per programme.",
        "Duolingo English Test — accepted by many of the universities that admit for Spring, commonly around 100 to 120. Confirm per programme.",
        "GRE or GMAT — required by some Spring programmes and optional at many. A strong GRE still helps your case for the limited Spring funding that exists, so do not dismiss it just because it is optional.",
        "Waivers: discretionary and programme-specific, usually requiring an official Medium of Instruction letter. Get any waiver confirmed in writing rather than assuming it.",
        "The upside of Spring: months of extra time to reach the score you need. If your Fall attempt fell short, use this window and our IELTS and TOEFL coaching in Jaipur properly rather than booking a panicked retake.",
      ],
      documents: [
        "Class 10 and Class 12 mark sheets.",
        "Bachelor's transcripts and degree certificate.",
        "A valid passport with sufficient remaining validity.",
        "TOEFL, IELTS or accepted English test scorecard.",
        "GRE or GMAT scorecard where the programme requires it.",
        "A programme-specific Statement of Purpose addressing your timeline.",
        "Two to three Letters of Recommendation submitted through the portal.",
        "An updated CV or résumé.",
        "Work experience or internship certificates, especially if you have a gap since graduating.",
        "Portfolio for the design programmes that do admit for Spring.",
        "Financial documents covering the Cost of Attendance.",
        "Form I-20 issued by the university.",
        "SEVIS I-901 fee receipt and DS-160 confirmation page.",
        "Passport-size photographs to US visa specification.",
      ],
      applySteps: [
        {
          title: "Choose a programme that actually admits for Spring",
          desc: "This is step zero and where Spring differs from Fall. Confirm on the official programme page that Spring 2027 admission exists — many programmes and most PhD cohorts are Fall-only.",
        },
        {
          title: "Check eligibility against your real profile",
          desc: "Match your GPA, degree length, and test scores to each programme. Confirm three-year bachelor's acceptance and whether the GRE is required or optional.",
        },
        {
          title: "Prepare your documents without rushing",
          desc: "You have months. Use them. Rewrite the SOP so it names real faculty, chase your LORs properly, and fix the test score rather than hoping it gets overlooked.",
        },
        {
          title: "Submit early — ideally by August or September 2026",
          desc: "Spring admissions have fewer seats, and what little funding exists goes to early applicants. The stated deadline is not the real one; the programme filling is.",
        },
        {
          title: "Receive and compare your decisions",
          desc: "Expect decisions roughly between September and November 2026. Compare on total cost, programme fit and location — and be realistic about funding prospects.",
        },
        {
          title: "Confirm admission and get your I-20",
          desc: "Accept, pay the deposit and submit financial documents covering the Cost of Attendance. Target your I-20 by late October so the visa has room.",
        },
        {
          title: "Pay SEVIS and apply for your F-1 visa",
          desc: "Pay the SEVIS I-901 fee, complete the DS-160 and book your interview for October or November — a far kinder queue than the summer scramble. Prepare properly; the interview decides it.",
        },
      ],
      scholarships: [
        "We are going to be blunter here than most consultants, because this is the single most important thing to understand about Spring in the US: there is much less funding, and it is not a small difference.",
        "Departments allocate their assistantship and fellowship budgets in the Fall admission cycle. By the time Spring admits arrive, most of that money is already committed to students who started in August. You can absolutely get admitted in Spring. Getting funded is genuinely much harder.",
        "That said, do not treat it as zero. Some assistantships open in Spring when a Fall student leaves, changes advisor or graduates. Departments occasionally have unallocated funds. And a strong Spring student who impresses a professor in their first semester can pick up an RA position for the following term — this happens more often than people think, and it is a legitimate strategy.",
        "University merit scholarships and partial tuition waivers do exist for Spring entrants at some universities, typically smaller than their Fall equivalents. Ask the department directly rather than relying on the general scholarships page, which is usually written for Fall.",
        "Fulbright-Nehru and most major external schemes are aligned to the Fall start and should be treated as unavailable for Spring unless a scheme explicitly says otherwise. Indian funders like the JN Tata Endowment, Inlaks Shivdasani and Narotam Sekhsaria run on their own calendars and remain worth checking regardless of intake.",
        "The practical route for most Spring students is an education loan. Start that conversation with banks around April 2026 for a Spring 2027 start, because loan processing is frequently what delays a US application past the point of no return.",
        "Our straight advice: if funding decides whether you can go at all, Spring is a genuinely risky choice, and Fall 2027 may serve you far better. Plan your budget as if no award will come, and treat one as a bonus.",
      ],
      comparison: [
        {
          factor: "Popularity",
          thisIntake: "Smaller — chosen mainly by students who missed Fall or needed more time",
          mainIntake: "The primary intake; the large majority of international students start here",
        },
        {
          factor: "Number of Courses",
          thisIntake: "A reduced selection; many programmes and most PhD cohorts are Fall-only",
          mainIntake: "The full catalogue — every programme at every university",
        },
        {
          factor: "Competition",
          thisIntake: "Lower — fewer applicants per place on the programmes that admit",
          mainIntake: "Highest, with the strongest applicant pool of the year",
        },
        {
          factor: "Class Size",
          thisIntake: "Smaller cohorts, smaller sections and better access to faculty",
          mainIntake: "Larger cohorts, full sections, a wider network from day one",
        },
        {
          factor: "Scholarship Options",
          thisIntake: "Substantially fewer — most assistantship money is already committed",
          mainIntake: "Almost all assistantships, fellowships and aid are allocated in this cycle",
        },
        {
          factor: "Availability",
          thisIntake: "Limited to departments that choose to run a second admission cycle",
          mainIntake: "Every university, every department, every programme",
        },
      ],
      comparisonMainLabel: "Fall Intake",
      verdict: [
        "So — is the Spring intake in the USA a good choice? Yes, with one significant caveat that we would rather state plainly than bury.",
        "It is the right call if you missed Fall, if your GRE needs another attempt, if your results or loan came through late, or if you would rather submit a strong application in September than a rushed one in December. You lose about four months instead of a whole year, and you arrive with a better application than you would otherwise have had. The visa queue is also genuinely kinder.",
        "The caveat is funding. In the UK or Australia, choosing the secondary intake costs you some scholarship options. In the US, it can cost you the assistantship that makes the degree affordable at all. If your plan requires funding, that is not a minor trade-off — it is the whole question.",
        "The other downsides are smaller: a narrower programme list, most PhD cohorts closed, and a first year slightly out of step with the autumn recruiting cycle.",
        "What does not change is everything academic. Same degree, same faculty, same accreditation, same OPT and STEM OPT eligibility. Your transcript does not record which semester you started, and no employer asks.",
        "Our bottom line: if you can self-fund or you have a loan sorted, and the programme you want admits for Spring, take it — the time saved is real. If you are counting on an assistantship to make the numbers work, think hard about Fall 2027 instead. That is exactly the conversation our team in Jaipur has with students every week, and we regularly advise waiting when waiting is genuinely the better call.",
      ],
      faqs: [
        {
          q: "Is the Spring intake in the USA worth it, or should I wait for Fall?",
          a: "It is worth it if you can fund your studies and the programme you want admits for Spring — you save roughly eight months and get the same degree and OPT rights. Wait for Fall if you are counting on an assistantship or fellowship, because most US funding is allocated in the Fall cycle and is largely committed by Spring. That is the deciding question for most Indian students.",
        },
        {
          q: "When should I apply for the Spring 2027 intake in the USA?",
          a: "Applications typically open around March to May 2026, with deadlines mostly between August and October 2026. Aim to submit by August or September. You need your I-20 by late October to leave room for the visa — though the October-to-November appointment queue is far kinder than the summer scramble.",
        },
        {
          q: "Which programmes are available in the Spring intake?",
          a: "Mostly the high-demand ones: computer science, data science, information systems, cybersecurity, business analytics, engineering, project management and public health. Most PhD cohorts admit for Fall only, and highly specialised or fixed-cohort lab programmes usually do not run in Spring. Always confirm on the official programme page.",
        },
        {
          q: "Can I get an assistantship if I join in the Spring intake?",
          a: "It is much harder but not impossible. Most department funding is committed to Fall admits. What opens up in Spring is usually a position vacated by a departing student, or unallocated funds. A realistic strategy is to arrive self-funded or loan-funded, impress a professor in your first semester, and target an RA position for the following term — that genuinely happens.",
        },
        {
          q: "Does a Spring start affect my OPT or job prospects?",
          a: "No. You get the same degree, the same accreditation and the same OPT and STEM OPT eligibility as a Fall starter. The only practical difference is that your first year is slightly out of step with the autumn recruiting cycle, which can make landing your first summer internship harder. It is a year-one scheduling issue, not a permanent disadvantage.",
        },
        {
          q: "Is the F-1 visa easier to get for the Spring intake?",
          a: "The requirements are identical — same I-20, same SEVIS fee, same DS-160, same interview, same scrutiny of your finances and your intent. What is genuinely different is availability: booking an appointment in October or November is far easier than in the May-to-July rush. That is a logistics advantage, not an eligibility one, and no consultant can guarantee any visa outcome.",
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    /* SUMMER — LIMITED                                                    */
    /* ------------------------------------------------------------------ */
    {
      slug: "summer-intake-2027",
      name: "Summer Intake",
      season: "Summer Term",
      months: "May – June 2027",
      status: "Limited intake",
      summary:
        "A small, specialised third start at a handful of US universities — genuinely narrow, and for most students the wrong answer.",
      intro: [
        "The Summer intake is America's least-known academic start, and we are going to be considerably more cautious about it than most consultants will be.",
        "It is real. A limited group of US universities run a May or June start, mostly on selected professional master's programmes, English language pathways, and a small number of business and IT courses.",
        "But the selection is genuinely narrow — narrower than the equivalent third intake in the UK or Australia. If you have arrived here hoping to find your MS in Computer Science starting in May 2027, the honest answer is that you almost certainly will not, and we would rather tell you now than after you have paid application fees.",
        "There is also a specific US complication worth knowing upfront: some summer terms are shorter or partially structured, which can affect your F-1 status and your eligibility for CPT in your first year. This is a genuine technical issue, not a detail.",
        "Where Summer does work is narrow but real: students who need an English language or bridge programme before a Fall start, or those on specific professional programmes designed around a summer entry.",
        "This guide covers what actually runs in Summer 2027, and — importantly — why Fall 2027 is usually the better answer.",
      ],
      whatIsIt: [
        "The Summer intake is a third academic start offered by a minority of US universities. Terms typically begin in May or early June 2027, often structured as one or two shorter sessions rather than a full semester.",
        "It exists mainly for three reasons. First, English language and bridge programmes that run over the summer and feed directly into a Fall degree start — this is genuinely the most common and most sensible use of a summer start. Second, some professional and executive master's programmes designed around a summer entry. Third, a small number of universities offering a limited set of graduate courses in a summer session.",
        "It suits you in a narrow set of cases: you need an ELP or bridge programme before starting your degree in Fall, you are on a specific professional programme built around a summer entry, or you are transferring credits and a summer session fits your plan.",
        "Compared with Fall, the difference is not subtle — it is enormous. Fall gives you every programme at every university plus almost all the funding. Summer gives you a short list at a handful of institutions with essentially no funding.",
        "Here is the point that matters most, and it is US-specific. A summer session is often not a full academic term. For F-1 purposes that can affect your full-time enrolment status, and the CPT rules generally require you to have completed a full academic year before you are eligible for most internships. Starting in summer does not automatically accelerate your internship eligibility, and it can complicate your status if the term is not structured as a full one.",
        "The academic quality is not the concern. Availability and structure are. Ask the university's Designated School Official (DSO) directly how a summer start affects your status and your CPT timeline before you commit to anything.",
      ],
      whyChoose: [
        {
          title: "The bridge and ELP route is genuinely useful",
          desc: "This is the strongest case for Summer. If your English score is short of your programme's requirement, a summer language or bridge programme lets you arrive, acclimatise, meet the requirement and start your degree in Fall — which is a real, sensible, well-trodden path.",
        },
        {
          title: "You settle in before the campus fills",
          desc: "Arriving in summer means finding housing, opening a bank account, getting your phone sorted and learning the campus while it is quiet. When the Fall cohort lands, you are already oriented rather than overwhelmed.",
        },
        {
          title: "Very low competition",
          desc: "Almost nobody applies for summer. On the programmes that run, the applicant pool is tiny, which can make it a realistic route for a profile that would struggle against a full Fall field.",
        },
        {
          title: "Very small cohorts",
          desc: "Summer sessions are small — sometimes just a handful of students. You get close contact with faculty and a lot of individual attention, which is particularly valuable on a bridge programme.",
        },
        {
          title: "A head start on coursework",
          desc: "If you are on a programme that allows it, completing a course or two over summer can lighten your Fall load — which matters if you are planning to take on a teaching assistantship alongside a heavy schedule.",
        },
      ],
      timeline: [
        {
          period: "June – September 2026",
          tasks: [
            "Confirm which universities actually run a Summer 2027 start — do this first, before anything else.",
            "Establish whether the programme is a full degree, a bridge, or an English language course.",
            "Ask the university's DSO how a summer start affects your F-1 status and CPT timeline.",
            "Book TOEFL or IELTS and begin preparation.",
            "Build a realistic budget covering tuition, insurance and living costs.",
          ],
        },
        {
          period: "October – December 2026",
          tasks: [
            "Shortlist programmes; the list will be short, so keep Fall 2027 alternatives genuinely open.",
            "Take your English test with room for a retake.",
            "Take the GRE or GMAT if your target programme requires it.",
            "Draft your SOP explaining your programme choice and your timeline clearly.",
            "Request LORs and give your referees plenty of notice.",
          ],
        },
        {
          period: "January – February 2027",
          tasks: [
            "Submit your applications — summer admissions are rolling and cohorts are tiny, so early matters.",
            "Ask departments directly whether any funding exists for the summer cohort; usually the answer is no.",
            "Start your education loan conversation with banks.",
            "Respond quickly to any document requests.",
            "Keep a Fall 2027 backup shortlist alive and genuinely viable.",
          ],
        },
        {
          period: "February – March 2027",
          tasks: [
            "Receive and compare your offers — and compare them honestly against Fall 2027.",
            "Accept your choice and pay the enrolment deposit.",
            "Submit financial documents covering the Cost of Attendance.",
            "Receive your I-20 and pay the SEVIS I-901 fee.",
            "Complete the DS-160 and book your F-1 visa appointment early.",
          ],
        },
        {
          period: "March – May 2027",
          tasks: [
            "Attend your F-1 visa interview, prepared on course, funding and ties to India.",
            "Arrange accommodation — summer arrivals often need off-campus housing.",
            "Book flights once your visa is approved.",
            "Confirm your reporting date; you generally cannot enter more than 30 days before your I-20 start date.",
            "Fly out and start your programme in May or June 2027.",
          ],
        },
      ],
      deadlines: [
        "Applications for the Summer 2027 intake typically open around mid-2026, roughly nine to eleven months ahead. Most universities running a summer start use rolling admissions rather than a fixed deadline.",
        "The practical deadline for most summer programmes falls between January and March 2027. Some accept applications into April, but that leaves almost no room for an F-1 visa, and we would not advise planning around it.",
        "The visa chain sets your real deadline. For a May start you need your I-20 by around March, which means accepting and submitting financials by February, which means applying by January. Work backwards from the visa, not from the stated cut-off.",
        "There is a US-specific timing rule worth knowing: you generally cannot enter the US more than 30 days before your I-20 programme start date. That constrains your arrival window more tightly than students expect, so book flights accordingly.",
        "Because summer cohorts are tiny, programmes close without warning. A session with fifteen seats does not send a reminder before it fills. If you find a summer programme you genuinely want, apply immediately.",
        "Scholarship deadlines are essentially irrelevant here, because there is effectively no funding attached to summer starts. Do not build a timeline around an award you will not get.",
        "The most useful deadline advice for Summer: set a decision point. If you do not have a firm offer for a programme you actually want by February 2027, redirect to Fall 2027 — which is only three months later and gives you the entire catalogue and all the funding.",
      ],
      courseCategories: [
        {
          category: "English Language and Bridge Programmes",
          courses: [
            "Intensive English Language Programme (IEP)",
            "Pre-Master's Bridge Programme",
            "Academic English for Graduate Study",
            "Graduate Preparation Programme feeding a Fall start",
            "Conditional Admission pathway programmes",
          ],
        },
        {
          category: "Business and Management",
          courses: [
            "MS in Management (selected universities)",
            "MS in Project Management",
            "Executive MBA (summer cohorts at selected schools)",
            "MS in Business Analytics (very limited availability)",
            "Graduate Certificate in Business",
          ],
        },
        {
          category: "Information Technology",
          courses: [
            "MS in Information Systems (limited availability)",
            "MS in Information Technology (selected universities)",
            "Graduate Certificate in Data Analytics",
            "Graduate Certificate in Cybersecurity",
            "Summer session CS coursework for continuing students",
          ],
        },
        {
          category: "Health and Professional Studies",
          courses: [
            "MS in Healthcare Administration (selected universities)",
            "Master of Public Health (very limited summer availability)",
            "Graduate Certificate in Health Informatics",
            "MS in Nursing (selected post-licensure routes)",
            "Graduate Certificate in Public Health",
          ],
        },
        {
          category: "Education and Social Sciences",
          courses: [
            "MA in Education (summer cohorts are relatively common in this field)",
            "MEd for practising teachers",
            "Graduate Certificate in TESOL",
            "MA in Counselling (selected universities)",
            "Summer research programmes for continuing students",
          ],
        },
        {
          category: "Short-Term and Credit Programmes",
          courses: [
            "Summer session courses transferable towards a degree",
            "Research internships for continuing students",
            "Graduate certificates completed over one summer",
            "Study abroad summer programmes",
            "Professional development certificates",
          ],
        },
      ],
      universities: [
        { name: "Northeastern University", note: "Runs summer sessions and pathway programmes on selected courses." },
        { name: "Arizona State University", note: "Summer sessions and English language pathways feeding a Fall start." },
        { name: "University at Buffalo, SUNY", note: "Summer session availability and ELP pathways — confirm per programme." },
        { name: "Pace University", note: "Summer starts on selected programmes and bridge pathways in New York." },
        { name: "Illinois Institute of Technology", note: "Limited summer session availability on selected graduate courses." },
        { name: "George Mason University", note: "Summer sessions and English pathway programmes." },
        { name: "University of Texas at Arlington", note: "Limited summer admission on selected engineering and management courses." },
        { name: "Kent State University", note: "Summer intake on selected programmes plus English language pathways." },
        { name: "Auburn University", note: "Summer session availability on selected graduate courses — confirm directly." },
        { name: "Drexel University", note: "Quarter system means multiple entry points; check summer quarter availability by programme." },
      ],
      eligibility: [
        {
          label: "For Undergraduate Courses",
          points: [
            "Direct undergraduate entry in summer is very rare — most summer undergraduate options are English language or bridge programmes.",
            "Class 12 from a recognised board, typically around 50% to 65% for pathway or conditional admission entry.",
            "TOEFL iBT around 55 to 79 or IELTS around 5.0 to 6.0 for a language or bridge programme; higher for direct entry.",
            "A personal statement covering your subject choice and your timeline.",
            "Understand clearly whether you are joining a degree or a pathway that leads into one — ask the university to confirm in writing.",
            "Conditional admission — where you are admitted to the degree subject to completing the language programme — is the standard and legitimate structure here.",
          ],
        },
        {
          label: "For Postgraduate Courses",
          points: [
            "A recognised bachelor's degree; verify three-year degree acceptance per programme.",
            "A GPA around 2.75 to 3.0 on a 4.0 scale, as the universities running summer starts are generally more flexible.",
            "TOEFL iBT around 70 to 90 or IELTS around 6.0 to 6.5 for direct entry; lower for a bridge programme.",
            "GRE or GMAT is often not required for the professional programmes that run in summer — verify per programme.",
            "An SOP explaining your programme choice and why the summer timeline works for you.",
            "Two Letters of Recommendation.",
            "An updated CV; work experience is often weighted more heavily on these routes.",
            "Ask the DSO in writing how a summer start affects your full-time enrolment status and your CPT eligibility timeline — this is the question most students never think to ask.",
          ],
        },
      ],
      englishTests: [
        "TOEFL iBT — accepted for summer admissions, commonly around 70 to 90 for direct graduate entry. Language and bridge programmes accept considerably lower, often around 55 to 70, which is precisely their purpose.",
        "IELTS Academic — accepted by most universities running summer starts, typically around 6.0 to 6.5 for direct entry and around 5.0 to 5.5 for a bridge programme.",
        "PTE Academic — accepted by some universities, around 48 to 58. Verify per programme, as acceptance is patchier at this level.",
        "Duolingo English Test — accepted by a number of universities running summer pathways, commonly around 95 to 110. Fast and cheap, but confirm acceptance.",
        "Intensive English Programmes (IEP) — the most important option on this page. If your score falls short, a summer IEP with conditional admission to a Fall degree start is a genuinely sensible, well-established route. You arrive, improve your English in an immersive environment, meet the requirement and start your degree in August.",
        "Waivers: discretionary and programme-specific, usually requiring an official Medium of Instruction letter. Get any waiver confirmed in writing.",
      ],
      documents: [
        "Class 10 and Class 12 mark sheets.",
        "Bachelor's transcripts and degree certificate.",
        "A valid passport with sufficient remaining validity.",
        "TOEFL, IELTS or accepted English test scorecard.",
        "GRE or GMAT scorecard if your programme requires it.",
        "Statement of Purpose covering your programme choice and timeline.",
        "Two Letters of Recommendation.",
        "An updated CV or résumé.",
        "Work experience or internship certificates, which carry extra weight on these routes.",
        "Written confirmation of whether your programme is a degree, a bridge or a language course.",
        "Written confirmation from the DSO on how a summer start affects your F-1 status and CPT timeline.",
        "Financial documents covering the Cost of Attendance.",
        "Form I-20 issued by the university.",
        "SEVIS I-901 fee receipt and DS-160 confirmation page.",
        "Passport-size photographs to US visa specification.",
      ],
      applySteps: [
        {
          title: "Confirm a Summer 2027 start actually exists",
          desc: "Do this before anything else. Check the official programme page or email admissions. Summer availability is the narrowest of any US intake and changes year to year — this is where most summer plans collapse.",
        },
        {
          title: "Check eligibility and the programme type",
          desc: "Confirm in writing whether it is a full degree, a bridge programme or a language course, and ask the DSO how a summer start affects your F-1 status and CPT eligibility. This is the step nobody takes and everybody should.",
        },
        {
          title: "Prepare your documents",
          desc: "Transcripts, SOP, LORs and CV. Your SOP should explain your timeline plainly — for a niche intake, a clear, honest narrative reads far better than a template.",
        },
        {
          title: "Submit by January 2027",
          desc: "Summer cohorts are tiny and fill without warning. Rolling admissions plus fifteen seats means the real deadline is whenever the programme fills, not the published date.",
        },
        {
          title: "Receive your offer letter",
          desc: "Expect a decision around February 2027. Compare it honestly against a Fall 2027 alternative before you accept — for most students, Fall is genuinely the better deal.",
        },
        {
          title: "Confirm admission and get your I-20",
          desc: "Accept, pay the deposit and submit financial documents covering the Cost of Attendance. Target your I-20 by March so the visa has room.",
        },
        {
          title: "Pay SEVIS and apply for your F-1 visa",
          desc: "Pay the SEVIS I-901 fee, complete the DS-160 and book your interview for March or April. Remember you generally cannot enter the US more than 30 days before your I-20 start date.",
        },
      ],
      scholarships: [
        "We will not oversell this, because there is essentially nothing to oversell: there is effectively no scholarship or assistantship funding for the Summer intake in the USA.",
        "Departments allocate assistantships in the Fall cycle. By summer, that money is not merely committed — the budget year has largely played out. Teaching assistantships in particular barely exist over summer, because there are far fewer courses being taught and therefore far fewer sections needing a TA.",
        "What exists is marginal: an occasional small tuition discount on a language or bridge programme, or a rare departmental award at a university trying to fill a summer session. These are not advertised, and you would have to ask directly to find them.",
        "Fulbright-Nehru and every major external scheme are aligned to the Fall start. Treat them as unavailable for summer.",
        "Indian funders such as the JN Tata Endowment, Inlaks Shivdasani and the Narotam Sekhsaria Foundation run on their own calendars independent of US intakes, so they remain worth checking regardless of when you start — but their timelines are early, and a summer applicant has usually missed them.",
        "The practical reality: a summer start is a self-funded or loan-funded start. Begin your loan conversation with banks around October 2026 for a Summer 2027 start.",
        "Our straightforward advice, and we would rather say it plainly: if funding matters at all to whether you can go, Summer is the wrong intake — more definitively than for any other intake on this site. Fall 2027 is only three months later and is where all the money is.",
      ],
      comparison: [
        {
          factor: "Popularity",
          thisIntake: "Very small — a niche intake chosen by a limited number of students",
          mainIntake: "The primary intake; the large majority of international students start here",
        },
        {
          factor: "Number of Courses",
          thisIntake: "Narrow — mostly language, bridge and selected professional programmes",
          mainIntake: "The full catalogue — every programme, including PhD cohorts",
        },
        {
          factor: "Competition",
          thisIntake: "Lowest of the three intakes, with a very small applicant pool",
          mainIntake: "Highest, with the strongest applicant pool of the year",
        },
        {
          factor: "Class Size",
          thisIntake: "Very small cohorts and close individual attention from faculty",
          mainIntake: "Large cohorts, full sections and a much wider peer network",
        },
        {
          factor: "Scholarship Options",
          thisIntake: "Effectively none — assistantships and aid are committed in the Fall cycle",
          mainIntake: "Almost all assistantships, fellowships and aid are allocated in this cycle",
        },
        {
          factor: "Availability",
          thisIntake: "A handful of universities, and availability changes year to year",
          mainIntake: "Every university, every department, every programme",
        },
      ],
      comparisonMainLabel: "Fall Intake",
      verdict: [
        "Is the Summer intake in the USA a good choice? Our honest answer is: rarely — and we would rather lose your business than tell you otherwise.",
        "There is one situation where it genuinely works, and it is a good one. If your English score is short and you take a summer intensive English or bridge programme with conditional admission to a Fall degree start, that is a sensible, well-established route. You arrive early, improve your English immersively, settle in while campus is quiet, and start your degree in August with the full Fall cohort — and all the funding still in play. If that is your situation, Summer is a genuinely smart move.",
        "The other situation is a specific professional or executive programme actually designed around a summer entry — most commonly in education. If that is your field and the programme is built that way, it is fine.",
        "For everyone else, Summer is the wrong answer. The programme list is tiny, there is effectively no funding, most sessions are not full academic terms, and the F-1 status and CPT complications are real. Taking a summer programme you do not want because it is available is a decision you will be paying for over the next two years.",
        "Here is the test we would apply. Ask yourself: am I choosing summer for a specific structural reason — a bridge programme, or a course genuinely designed for it? If yes, go. If you are choosing it just because it is the next available date, stop. Fall 2027 is three months later and gives you the entire American system plus its funding.",
        "If you are weighing Summer against waiting, talk to someone who will look at your actual marks, budget and timeline rather than just processing an application. That is the conversation our team in Jaipur has every week — and on this particular intake, we advise waiting more often than not.",
      ],
      faqs: [
        {
          q: "Does the USA really have a Summer intake?",
          a: "Yes, but it is very limited. A small number of US universities run a May or June start, mostly on English language and bridge programmes, selected professional master's — education is the most common — and a few business and IT courses. It is a genuine intake, but the selection is far narrower than Fall or Spring, and availability changes year to year.",
        },
        {
          q: "What is the best reason to choose a Summer intake?",
          a: "The bridge route. If your English score is short of your programme's requirement, a summer intensive English programme with conditional admission to a Fall degree start is genuinely sensible. You arrive early, meet the requirement immersively, settle in while campus is quiet, and begin your degree in August with the full Fall cohort and all the funding still available.",
        },
        {
          q: "Are there scholarships or assistantships for the Summer intake?",
          a: "Effectively none. Departments allocate assistantship budgets in the Fall cycle, and teaching assistantships barely exist over summer because far fewer courses are taught. Fulbright-Nehru and the major external schemes are aligned to Fall. A summer start is realistically a self-funded or loan-funded start — plan on that basis.",
        },
        {
          q: "Will a Summer start affect my F-1 status or my CPT eligibility?",
          a: "It can, and this is the question most students never ask. Summer sessions are often shorter or partially structured rather than full academic terms, which can affect your full-time enrolment status. CPT eligibility generally requires completing a full academic year first, so a summer start does not automatically accelerate your internship timeline. Ask the university's Designated School Official (DSO) in writing before you commit.",
        },
        {
          q: "When should I apply for the Summer 2027 intake?",
          a: "Applications typically open around mid-2026. Aim to submit by January 2027. The visa chain sets the real deadline: you need your I-20 by roughly March, which means accepting by February, which means applying in January. Also note you generally cannot enter the US more than 30 days before your I-20 start date.",
        },
        {
          q: "Should I take a Summer intake or wait for Fall?",
          a: "For most students, wait for Fall. Summer only makes sense for a specific structural reason — a bridge or language programme leading into a Fall start, or a professional programme genuinely designed for summer entry. If you are considering it simply because it is the next available date, Fall 2027 is only three months later and gives you the full catalogue, the recruiting cycle, and effectively all of the funding.",
        },
      ],
    },
  ],
};
