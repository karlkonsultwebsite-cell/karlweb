import type { CountryContent } from "@/lib/country-content-types";

/**
 * Deep content for /study-abroad/china and its intake pages.
 *
 * NOTE ON MBBS: China is a major MBBS destination for Indian students, but the
 * detailed NEET / NMC / FMGE / licensing story lives on the dedicated MBBS
 * Abroad page. Keep MBBS references here BRIEF and always point across to that
 * page rather than duplicating (and risking drift from) the compliance detail.
 *
 * ⚠️ FACT-CHECK REQUIRED: intake months, deadlines, fees, university names,
 * eligibility rules and scholarship names below are realistic drafts, NOT
 * verified facts. CSC scholarship terms and NMC recognition lists change —
 * confirm against official sources before launch. Costs align with
 * `countryDetails.china` in src/lib/data.ts — update both together.
 */
export const chinaContent: CountryContent = {
  heroIntro: [
    "China is probably the most misunderstood study destination on any Indian student's list. Most people picture a language barrier and a closed system. The reality is thousands of degrees taught entirely in English, universities climbing global rankings fast, and some of the most generous scholarships available anywhere.",
    "The numbers are what make people look twice. Tuition commonly runs somewhere around USD 3,000 to USD 10,000 a year, and living costs often land between USD 3,000 and USD 6,000. That is not a typo — a full degree in China can cost less than a single year in the US or UK.",
    "Then there is the scholarship layer. The Chinese Government Scholarship, administered through the China Scholarship Council (CSC), can cover tuition, accommodation and a monthly stipend. Confucius Institute Scholarships and university-level awards add more. Genuinely funded degrees are not rare here — they are a realistic goal.",
    "China is also a leading MBBS destination for Indian students, though that pathway comes with strict rules — NEET is mandatory, and your university must be properly recognised. We keep that detail on our dedicated MBBS Abroad page, because it deserves a proper explanation rather than a paragraph.",
    "This page covers everything else you need to decide whether to study in China: courses, universities, costs, scholarships, eligibility, documents, the student visa process and both intakes. If you would rather just talk it through, our study abroad consultants in Jaipur do this every day.",
  ],

  whyStudy: [
    "The value argument is the obvious one, and it is strong. Where else can you study at a globally ranked university, in English, for tuition that often sits between USD 3,000 and USD 10,000 a year? Add living costs of roughly USD 3,000 to USD 6,000 and the total for a full degree can be less than one year elsewhere.",
    "The scholarship argument is arguably stronger. China invests heavily in attracting international students, and the CSC Chinese Government Scholarship is genuinely substantial — full tuition, accommodation and a monthly stipend for successful applicants. That is not a partial discount. That is a funded degree, and it is a realistic target rather than a lottery ticket.",
    "Academic quality has moved fast. Tsinghua, Peking, Fudan, Zhejiang and Shanghai Jiao Tong now sit among the world's better-known universities, particularly in engineering, technology and the sciences. This is not the China of twenty years ago, and student perceptions have lagged the reality by about a decade.",
    "English-taught degrees are mainstream. This is the misconception we correct most often — you do not need Mandarin to be admitted to an English-taught programme, and there are thousands of them across engineering, business, computer science, international relations and medicine.",
    "And then there is the strategic case. China is central to global manufacturing, technology and trade. Studying there gives you exposure to that ecosystem, a network inside it, and — if you learn Mandarin along the way — a combination that very few Indian graduates have. English plus Mandarin plus a technical degree is a genuinely distinctive profile.",
  ],

  keyAdvantages: [
    "Tuition typically around USD 3,000 to USD 10,000 per year — a fraction of comparable degrees in the USA, UK or Australia.",
    "Living costs commonly between USD 3,000 and USD 6,000 per year, with smaller cities far cheaper than Beijing or Shanghai.",
    "The CSC Chinese Government Scholarship can cover full tuition, accommodation and a monthly stipend — a genuinely funded degree.",
    "Thousands of English-taught programmes, so Mandarin is not a barrier to admission.",
    "Universities like Tsinghua, Peking, Fudan and Zhejiang carry real and rising global recognition.",
    "Particular strength in engineering, technology, computer science and the sciences, backed by serious research investment.",
    "A leading MBBS destination for Indian students — with strict conditions covered on our dedicated MBBS Abroad page.",
    "Modern campuses with on-campus accommodation, which keeps costs predictable and settling in simpler.",
    "Free or subsidised Mandarin classes at most universities — English plus Mandarin is a rare and valuable graduate profile.",
    "Two intakes a year (September and March), so a slipped timeline does not automatically cost you a full year.",
  ],

  educationSystem: [
    "China's system will feel broadly familiar. A bachelor's degree is typically four years (five for engineering at some universities, and longer for medicine), a master's is two to three years, and a doctorate three to four. Everything is overseen by the Ministry of Education, which maintains the official list of universities authorised to teach international students.",
    "That authorisation matters more than students realise. Only universities approved by the Ministry of Education may enrol international students, and for medicine specifically the list of institutions approved to teach English-taught MBBS is narrower still. Checking this is not optional box-ticking — it is the foundation of whether your degree is worth anything when you come home.",
    "Universities fall into recognised tiers. The Double First-Class initiative — successor to the older Project 985 and Project 211 groupings — identifies China's leading institutions and disciplines. When you see a university described as Double First-Class, that is a meaningful national quality marker rather than marketing language.",
    "Teaching has traditionally leaned toward structure, lectures and examinations, which many Indian students find familiar and comfortable. English-taught international programmes increasingly blend in projects, presentations and group work, particularly at the better-known universities.",
    "The academic year runs on two semesters: roughly September to January, and March to July. That is precisely why the two intakes are September and March.",
    "One thing worth being clear-eyed about: quality varies more across Chinese universities than across, say, New Zealand's eight. There are outstanding institutions and there are weak ones. The name on your certificate matters here, and choosing well matters more than in more uniformly regulated systems.",
  ],

  courseCategories: [
    {
      category: "Engineering",
      courses: [
        "BE / ME Mechanical Engineering",
        "BE / ME Civil Engineering",
        "BE / ME Electrical & Electronic Engineering",
        "BE / ME Aerospace Engineering",
        "ME Chemical & Materials Engineering",
      ],
    },
    {
      category: "MBBS & Medicine",
      courses: [
        "MBBS (English-taught, at approved universities only)",
        "Bachelor of Dental Surgery (BDS)",
        "Bachelor of Pharmacy",
        "Master of Public Health",
        "Bachelor of Traditional Chinese Medicine",
      ],
    },
    {
      category: "Business & Economics",
      courses: [
        "Bachelor / Master of International Business",
        "MBA",
        "MSc Finance & Banking",
        "MSc International Trade & Economics",
        "Bachelor of Economics",
      ],
    },
    {
      category: "Computer Science & IT",
      courses: [
        "BSc / MSc Computer Science & Technology",
        "MSc Artificial Intelligence",
        "MSc Software Engineering",
        "MSc Data Science & Big Data",
        "MSc Information & Communication Engineering",
      ],
    },
    {
      category: "International Relations & Chinese Studies",
      courses: [
        "Bachelor / Master of International Relations",
        "MA Chinese Language & Literature",
        "MA International Politics",
        "MA Public Administration",
        "Bachelor of Chinese Studies",
      ],
    },
    {
      category: "Sciences & Architecture",
      courses: [
        "BSc / MSc Environmental Science",
        "Bachelor / Master of Architecture",
        "MSc Biotechnology",
        "MSc Urban Planning",
        "BSc Applied Physics",
      ],
    },
  ],

  universities: [
    { name: "Tsinghua University", note: "Beijing — China's most prominent university for engineering, technology and computer science, with a strong international programme catalogue." },
    { name: "Peking University", note: "Beijing — historically China's leading comprehensive university, strong in economics, international relations and the sciences." },
    { name: "Fudan University", note: "Shanghai — highly regarded across business, economics, international relations and medicine, with a large international community." },
    { name: "Zhejiang University", note: "Hangzhou — a major research university with real strength in engineering, computer science and agriculture." },
    { name: "Shanghai Jiao Tong University", note: "Shanghai — particularly known for engineering, naval architecture and medicine; long-established English-taught programmes." },
    { name: "University of Science and Technology of China (USTC)", note: "Hefei — research-intensive, with a strong reputation in physics, mathematics and the pure sciences." },
    { name: "Nanjing University", note: "Nanjing — a comprehensive research university with a broad English-taught catalogue and strong scholarship access." },
    { name: "Wuhan University", note: "Wuhan — large and well regarded across engineering, remote sensing and medicine, with a well-known campus." },
    { name: "Harbin Institute of Technology", note: "Harbin — a technical powerhouse in engineering and aerospace, at generally lower living costs than the coastal cities." },
    { name: "Tongji University", note: "Shanghai — internationally recognised for architecture, civil engineering and urban planning, with strong European links." },
    { name: "Beijing Institute of Technology", note: "Beijing — a leading technical university with a solid range of English-taught engineering programmes." },
  ],

  tuitionCosts: [
    "Let's talk real numbers, because this is where China makes its strongest case. Undergraduate tuition for English-taught programmes typically runs somewhere around USD 3,000 to USD 8,000 per year. Arts, business and social sciences sit at the lower end; engineering and the sciences somewhat higher.",
    "Postgraduate tuition usually lands around USD 4,000 to USD 10,000 per year. MBAs at the better-known business schools — Tsinghua, Fudan, Shanghai Jiao Tong — run considerably higher and are priced closer to international norms.",
    "Medicine is a special case. English-taught MBBS at approved universities typically runs somewhere around USD 4,000 to USD 9,000 per year across a programme that generally lasts six years including internship. It remains one of the main reasons Indian students look at China — but eligibility rules are strict, and our dedicated MBBS Abroad page covers NEET, recognition and licensing properly.",
    "A useful mental note: many universities quote fees in RMB rather than USD, commonly somewhere around RMB 20,000 to RMB 60,000 per year for English-taught programmes. Exchange rates move, so check the RMB figure — that is the number you will actually pay.",
    "Then there are the extras students forget: an application fee usually around RMB 400 to RMB 800, a one-off residence permit fee, and mandatory health insurance typically around RMB 800 per year. Small individually, but budget for them.",
    "Every figure here is indicative and for planning only. Fees vary by university, by programme and by year. Before you commit to a shortlist, we pull the current fee schedule for your exact programmes so you are working from real numbers.",
  ],

  livingCosts: [
    "Living costs in China typically run somewhere between USD 3,000 and USD 6,000 per year, and where you study drives most of that spread.",
    "Beijing, Shanghai and Shenzhen are the expensive end — budget perhaps USD 500 to USD 800 a month. Cities like Wuhan, Harbin, Nanjing, Xi'an and Hefei are dramatically kinder, often around USD 250 to USD 450 a month for a comparable standard of living. Same degree, same recognition, roughly half the running cost.",
    "On-campus accommodation is the norm and it is the single biggest reason China is affordable. University dormitories for international students commonly run somewhere around RMB 800 to RMB 2,000 a month, often for a shared or single room with utilities included. It is predictable, safe and close to class — quite different from hunting for a flat in Amsterdam or Dublin.",
    "Food is genuinely cheap. Campus canteens often cost a few RMB per meal, and eating locally rather than seeking out Western food keeps costs very low. Indian students at larger universities usually find Indian food available nearby, and self-catering is common for those who want it.",
    "Public transport is inexpensive and excellent — metro systems in the major cities are modern and cost very little per trip. Health insurance is mandatory for student visa holders, typically around RMB 800 per year, and is usually arranged through your university.",
    "On part-time work, be realistic. Work rights for international students in China are limited and require permission from both your university and the local authorities. Rules vary by city and institution, and enforcement is taken seriously. Do not build your budget around earning while you study — plan your finances as though you will not work at all.",
  ],

  scholarships: [
    "Here is what makes China genuinely different: scholarships are not a nice bonus you hope for, they are a realistic core part of the plan. The scale of funding available to international students is unusual, and a fully funded degree is an achievable goal rather than a fantasy.",
    "The Chinese Government Scholarship, administered by the China Scholarship Council (CSC), is the headline award. Depending on the category, it can cover full tuition, on-campus accommodation, a monthly living stipend and comprehensive medical insurance. There are several routes in — through a Chinese embassy, directly through a university, or via certain programme-specific channels — and the route you choose genuinely affects your chances.",
    "Confucius Institute Scholarships are the next tier, aimed at students studying Chinese language, teaching Chinese, or related fields. They typically cover tuition, accommodation and a stipend, and are a strong option if you are interested in Mandarin as a subject rather than just a survival tool.",
    "Provincial and municipal government scholarships are the layer most students never find. Shanghai, Beijing, Jiangsu, Zhejiang and other provinces run their own awards for international students in their region. Less publicised, less contested, and often quite substantial — a genuinely undervalued route.",
    "University-level scholarships sit on top of all this. Most Chinese universities offer their own tuition reductions or full waivers to strong international applicants, and many will consider you automatically when you apply. Several partial awards stacked together can amount to more than one headline scholarship you had a slim chance at.",
    "The timing rule is firm: CSC deadlines typically fall between January and April for a September start, months before most admission deadlines. If a scholarship shapes whether you can go — and in China it usually should — build your whole timeline backwards from the CSC date.",
  ],

  namedScholarships: [
    {
      name: "Chinese Government Scholarship (CSC)",
      desc: "China's flagship award, administered by the China Scholarship Council. Depending on category, it can cover full tuition, on-campus accommodation, a monthly living stipend and comprehensive medical insurance for bachelor's, master's and doctoral study. You can apply through a Chinese embassy, directly via a participating university, or through specific programme channels — and choosing the right route matters. Deadlines typically fall between January and April for a September start.",
    },
    {
      name: "Confucius Institute Scholarship",
      desc: "Aimed at students pursuing Chinese language study, Chinese teaching (MTCSOL), or related fields, and at those with demonstrated Mandarin ability. Generally covers tuition, accommodation, a living stipend and insurance. HSK results carry real weight here, so it rewards students who have taken Mandarin seriously rather than treating it as an afterthought.",
    },
    {
      name: "Provincial & Municipal Government Scholarships",
      desc: "Awards run by individual provinces and cities — Shanghai, Beijing, Jiangsu, Zhejiang and others — for international students studying in their region. Often substantial and considerably less contested than the CSC, precisely because most applicants never discover them. Terms and deadlines vary by province, which is exactly why they get missed.",
    },
    {
      name: "University Scholarships",
      desc: "Most Chinese universities run their own awards for international students, ranging from partial tuition reductions to full waivers, sometimes with a stipend attached. Many consider you automatically on application; others need a separate form. Universities like Tsinghua, Fudan, Zhejiang and Wuhan all operate their own international scholarship schemes.",
    },
    {
      name: "Belt and Road / Programme-Specific Scholarships",
      desc: "A range of targeted scholarships tied to particular initiatives, partnerships or disciplines, often linked to engineering, trade and international relations. Eligibility is narrow and terms change, so these need checking against current announcements rather than older information — but for the right profile they can be very well funded.",
    },
  ],

  eligibility: [
    {
      label: "For Undergraduate Courses",
      points: [
        "Completed Class 12 from a recognised Indian board, generally with around 60% or above — competitive universities and programmes ask for considerably more.",
        "Subject prerequisites matter: Physics, Chemistry and Mathematics for engineering; Physics, Chemistry and Biology for medical programmes.",
        "Aged typically between 18 and 25 at the point of application for undergraduate study — China applies age limits more strictly than most destinations, which surprises people.",
        "English proficiency for English-taught programmes, commonly IELTS 5.5 to 6.0 or the equivalent, though requirements vary and some universities accept Class 12 English marks.",
        "For MBBS specifically: NEET qualification is mandatory for Indian students, and your university must be properly recognised. See our dedicated MBBS Abroad page for the full picture.",
        "A valid passport, a physical examination record, and a clean police clearance — all required for the student visa.",
      ],
    },
    {
      label: "For Postgraduate Courses",
      points: [
        "A recognised bachelor's degree, generally with around 60% or above; selective programmes and universities expect more.",
        "Typically aged under 35 for master's applicants and under 40 for doctoral applicants — again, age limits are applied more firmly here than elsewhere.",
        "English proficiency for English-taught programmes, commonly IELTS 6.0 to 6.5 or the equivalent.",
        "Two academic or professional recommendation letters, which Chinese universities weigh seriously, particularly for CSC scholarship applications.",
        "A study plan or research proposal — usually 800 to 1,500 words for master's, longer for doctoral. This is essentially China's version of an SOP, and CSC decisions genuinely turn on its quality.",
        "For doctoral applications, a pre-acceptance letter from a supervisor at your target university substantially strengthens both admission and scholarship chances.",
        "HSK certification for any Chinese-taught programme — usually HSK 4 or above, with HSK 5 for many humanities and social science degrees.",
      ],
    },
  ],

  englishTests: [
    "First, the thing worth saying plainly: most international degree programmes in China that Indian students apply to are taught entirely in English. Engineering, business, computer science, international relations and MBBS at approved universities all have extensive English-taught catalogues. Mandarin is not a barrier to admission.",
    "IELTS Academic is the most commonly accepted proof. Requirements are generally more relaxed than in Western destinations — often 5.5 to 6.0 overall for undergraduate programmes and 6.0 to 6.5 for postgraduate. Top universities like Tsinghua, Peking and Fudan set higher bars, frequently 6.5 and above.",
    "TOEFL iBT is widely accepted, generally around 70 to 80 for undergraduate and 80 to 90 for postgraduate entry. PTE Academic is accepted by many but not all Chinese universities, so verify against your specific shortlist rather than assuming.",
    "Many Chinese universities will waive the English test entirely if your prior education was in English — and since Indian schooling largely is, a Class 12 English mark or a medium-of-instruction letter is often accepted. This is more common in China than in most destinations, but it is discretionary and varies by university. Confirm before you skip booking a test.",
    "Now HSK, the Chinese proficiency test. If you are applying to a Chinese-taught programme, HSK 4 is typically the minimum and HSK 5 is common for humanities and social sciences. For English-taught programmes you generally do not need it for admission at all.",
    "But here is our honest advice: learn Mandarin anyway. Not for your application — for your life there. Daily life outside the major campuses runs in Chinese, and HSK 3 or 4 transforms everything from ordering food to internships to graduate opportunities. Most universities offer free or subsidised Mandarin classes, and Confucius Institute Scholarships specifically reward HSK ability. Our HSK-aligned Chinese coaching in Jaipur helps students arrive with a genuine head start.",
  ],

  documents: [
    "Valid passport with at least six months' validity beyond your intended stay, plus copies of the photo page.",
    "Class 10 and Class 12 mark sheets and passing certificates, notarised and often requiring apostille.",
    "Bachelor's transcripts and degree certificate for postgraduate applicants, notarised and apostilled.",
    "IELTS, TOEFL or PTE score report, or a medium-of-instruction letter where the university accepts one in place of a test.",
    "HSK certificate, required for Chinese-taught programmes and valuable for Confucius Institute Scholarship applications.",
    "A study plan or research proposal — typically 800 to 1,500 words. This carries real weight in both admission and CSC scholarship decisions, so it deserves proper effort.",
    "Two recommendation letters from academic or professional referees, which are taken seriously here, especially for scholarship applications.",
    "Foreigner Physical Examination Form — a mandatory medical record completed by an authorised physician, generally including blood tests, chest X-ray and ECG. It is typically valid for six months, so timing matters.",
    "JW202 or JW201 admission form — the official visa application form issued by your university once you are admitted. JW202 is generally issued for self-funded students and JW201 for government-scholarship students. You cannot apply for your student visa without it.",
    "Admission Notice from your university, which arrives alongside the JW form.",
    "Police clearance certificate, required for the student visa.",
    "Passport-size photographs meeting Chinese visa specifications, which are stricter than most students expect.",
    "Proof of funds — bank statements or a scholarship award letter demonstrating you can cover tuition and living costs.",
    "Health insurance, typically arranged through your university and mandatory for the residence permit.",
  ],

  applySteps: [
    {
      title: "1. Get your profile assessed and check recognition",
      desc: "Establish what you are eligible for — academics, subjects, English level, budget and career goal. Critically, verify your target university is authorised by the Ministry of Education to teach international students. For MBBS, the bar is higher still and NEET is mandatory — see our MBBS Abroad page for that pathway in full.",
    },
    {
      title: "2. Shortlist universities and programmes",
      desc: "Build a list of six to eight English-taught programmes. Quality varies more across Chinese universities than in most systems, so the name genuinely matters — but so does city cost. Wuhan or Harbin at half the living cost of Shanghai is a real trade-off worth weighing.",
    },
    {
      title: "3. Apply for the CSC scholarship first",
      desc: "Yes, before your admission applications. CSC deadlines typically fall between January and April for a September start, well ahead of most admission deadlines. Choose your route — embassy, university or programme channel — carefully, because it affects your odds. This step is why China timelines start early.",
    },
    {
      title: "4. Prepare your documents and study plan",
      desc: "Get transcripts notarised and apostilled — this takes longer than students expect, so start early. Write a study plan of 800 to 1,500 words that explains your academic goals and why this university. It carries real weight in both admission and scholarship decisions, so do not treat it as a formality.",
    },
    {
      title: "5. Submit university applications",
      desc: "Apply to your shortlisted universities, most of which use their own online portals. Pay application fees, usually around RMB 400 to RMB 800 each. Responses typically take four to eight weeks, sometimes longer during peak season.",
    },
    {
      title: "6. Accept your offer and collect your JW form",
      desc: "Compare offers on total cost, scholarship, university standing and city. Accept the right one and pay any required deposit. Your university then issues your Admission Notice and JW202 form (or JW201 if you hold a government scholarship) — you cannot lodge your visa without it.",
    },
    {
      title: "7. Apply for your student visa",
      desc: "Lodge your X1 visa application (for courses over 180 days) with your JW form, Admission Notice, Foreigner Physical Examination Form, police clearance and proof of funds. Then, within 30 days of arriving in China, convert it to a residence permit — this step is mandatory and students genuinely forget it. We prepare your file and stay with you through registration.",
    },
  ],

  visa: [
    "China's student visa comes in two forms, and knowing which you need saves confusion. The X1 visa is for study lasting more than 180 days — this is what you need for a degree. The X2 visa covers short-term study of 180 days or less, such as a language course or exchange semester.",
    "The X1 is not the whole story, and this is the part students miss. The X1 gets you into China; it does not authorise you to stay. Within 30 days of arriving you must convert it to a residence permit at the local Public Security Bureau, usually with your university's help. Miss that window and you are in genuine trouble — this is not a technicality anyone waves through.",
    "To apply for the X1 you need your JW202 form (or JW201 if you hold a Chinese Government Scholarship), your Admission Notice, a completed Foreigner Physical Examination Form, police clearance, proof of funds, and a passport valid well beyond your stay. The JW form is the linchpin — it is issued by your university after admission, and no JW form means no visa application. Full stop.",
    "The Foreigner Physical Examination Form deserves its own warning. It must be completed by an authorised physician and typically includes blood tests, a chest X-ray and an ECG. It is generally valid for six months, which means timing it wrongly is a real risk — too early and it expires before you fly, too late and you delay your visa. We sequence this deliberately for every student.",
    "Processing usually takes around four to eight weeks, and it stretches ahead of the September intake when volumes peak. Apply as early as your JW form allows. On arrival, you will also register your address with the local police within 24 hours if you are staying off-campus — university dormitories generally handle this for you.",
    "On work rights, be realistic. Part-time work for international students is limited and requires permission from both your university and local authorities. Rules vary by city, and this is not a country where informal arrangements are wise. Plan your finances as though you will not work.",
    "One thing we will never do is promise you a visa. Nobody can — that decision belongs to the Chinese authorities alone. What we can do is make sure your JW form, medicals, funds and documents are complete, correctly sequenced and lodged early. That is genuinely the strongest position any applicant can be in.",
  ],

  intakes: [
    {
      slug: "september-intake-2026",
      name: "September Intake",
      season: "Autumn / Fall Semester",
      months: "September – October 2026",
      status: "Main intake",
      summary:
        "China's primary intake — nearly every programme, all the major CSC scholarship rounds, and the intake the whole system is built around.",
      intro: [
        "If you are planning to study in China, September is the intake to aim at — and in China this is less of a preference than it is in most destinations. The system is genuinely built around it.",
        "Nearly every English-taught programme opens in September. More importantly, the CSC Chinese Government Scholarship rounds — the ones that can fund your tuition, accommodation and a monthly stipend — are structured around the September start. That single fact settles the question for many students.",
        "The catch is that the timeline starts far earlier than people expect. CSC deadlines typically fall between January and April, months before admission deadlines and nearly a year before you fly. Document notarisation and apostille take weeks. The Foreigner Physical Examination Form has a validity window that has to be timed properly.",
        "Below you will find how the September intake works — the timeline, deadlines, courses, universities, eligibility, documents, scholarships and the student visa route. China's process has more moving parts than most destinations, which is exactly why our counsellors in Jaipur map it out student by student.",
      ],
      whatIsIt: [
        "The September intake is the start of China's academic year. The autumn semester typically runs from September through to January, followed by the spring semester from March to July. It is the intake around which universities plan their course offerings, their scholarship rounds and their international student intake.",
        "It suits you if you finished Class 12 or your bachelor's earlier in the year, if you want the widest possible course choice, and — above all — if a scholarship matters. Realistically, if CSC funding is part of your plan, September is close to non-negotiable.",
        "Compared with March, September is bigger in every dimension. Nearly all programmes run. The main CSC rounds align to it. Cohorts are full-sized, orientation is comprehensive, and Mandarin classes and buddy programmes are properly staffed.",
        "One China-specific point worth understanding: MBBS and most medical programmes are September-only at approved universities. If medicine is your goal, March is not an option at all — and NEET remains mandatory for Indian students regardless. Our dedicated MBBS Abroad page covers that pathway properly.",
        "The trade-off is competition and early deadlines. More applicants, CSC rounds that close almost a year ahead, and visa processing that slows as volumes peak. All of which argues for starting early — not for choosing something else.",
      ],
      whyChoose: [
        {
          title: "Nearly every programme runs",
          desc: "Practically all English-taught bachelor's, master's and doctoral programmes open in September. If your target course is specialised — MBBS, a particular engineering master's, a niche research programme — September is very often the only time it runs at all.",
        },
        {
          title: "This is where the scholarship money is",
          desc: "The CSC Chinese Government Scholarship rounds are built around September. So are Confucius Institute Scholarships and most provincial and university awards. If a funded degree is your goal — and in China it genuinely can be — this intake is where it happens.",
        },
        {
          title: "Full orientation and a real cohort",
          desc: "You arrive with the year's largest group of international students. Orientation runs properly, Mandarin classes start fresh, buddy programmes are active, and student associations recruit. Landing in China alongside hundreds of others in your position makes an enormous difference.",
        },
        {
          title: "Course sequencing works as designed",
          desc: "Chinese programmes are often tightly structured, with modules built to run in a set order across the two semesters. A September start means you take them exactly as intended, rather than picking up a sequence halfway through.",
        },
        {
          title: "Better weather to land in",
          desc: "September is early autumn across most of China — mild and comfortable. Arriving in March means landing in the tail of a northern Chinese winter, and if you are heading to Harbin or Beijing, that is a genuinely different experience.",
        },
      ],
      timeline: [
        {
          period: "September – December 2025 (Research & preparation)",
          tasks: [
            "Get your profile assessed and verify your target universities are Ministry of Education authorised to teach international students.",
            "Research programmes and cities — weigh university standing against living costs, since Wuhan or Harbin cost roughly half of Shanghai.",
            "Begin IELTS or TOEFL preparation and book your test date, unless your universities accept a medium-of-instruction letter.",
            "Start notarisation and apostille of academic documents — this routinely takes longer than students expect.",
            "Draft your study plan and identify referees for recommendation letters.",
          ],
        },
        {
          period: "January – April 2026 (CSC scholarship applications)",
          tasks: [
            "Submit your CSC Chinese Government Scholarship application — this is the critical window, and it closes long before admissions.",
            "Choose your CSC route deliberately: embassy, university or programme channel, as it genuinely affects your chances.",
            "Apply for Confucius Institute Scholarships if you are pursuing Chinese language or teaching.",
            "Research and apply for provincial and municipal scholarships, which most applicants never find.",
            "Sit your English test and retake it if you land short of your target.",
          ],
        },
        {
          period: "April – June 2026 (University applications & offers)",
          tasks: [
            "Submit applications to your shortlisted universities via their online portals, paying application fees of roughly RMB 400 to RMB 800 each.",
            "Respond quickly to any requests for additional documents.",
            "Receive scholarship decisions and compare them against your offers.",
            "Accept your chosen offer and pay any required deposit.",
            "Wait for your Admission Notice and JW202 form (or JW201 if you hold a government scholarship).",
          ],
        },
        {
          period: "June – August 2026 (Visa)",
          tasks: [
            "Complete your Foreigner Physical Examination Form with an authorised physician — time this carefully, as it is generally valid for only six months.",
            "Obtain your police clearance certificate.",
            "Lodge your X1 student visa application with your JW form, Admission Notice, medicals and proof of funds.",
            "Arrange health insurance, usually through your university.",
            "Confirm your dormitory booking — on-campus accommodation is the norm and keeps costs predictable.",
          ],
        },
        {
          period: "August – September 2026 (Departure & registration)",
          tasks: [
            "Receive your visa decision and book flights once approved.",
            "Attend a pre-departure briefing covering payments, apps, transport and culture — daily life in China runs on systems you will want to understand before you land.",
            "Fly out and register your address with the local police within 24 hours if staying off-campus; dormitories usually handle this.",
            "Convert your X1 visa to a residence permit within 30 days of arrival — mandatory, and genuinely easy to forget.",
            "Attend orientation, enrol in classes and sign up for Mandarin lessons.",
          ],
        },
      ],
      deadlines: [
        "China's deadlines are unusual in one important way: the scholarship deadline comes first, and it comes early. Getting this the wrong way round is the single most expensive mistake students make here.",
        "CSC Chinese Government Scholarship rounds typically close between January and April 2026 for a September 2026 start. That is up to eight months before you fly and, crucially, months before most admission deadlines. If you wait for an offer before thinking about CSC, you have already missed it.",
        "Admission deadlines are more relaxed by comparison — most universities accept applications from around March through to June 2026, and some later still if places remain. But applying late while hoping for a scholarship is a contradiction, because the funding round will already have closed.",
        "Then the practical constraints stack up. Document notarisation and apostille take weeks. The Foreigner Physical Examination Form is generally valid for six months, so it has to be timed rather than rushed. X1 visa processing commonly takes four to eight weeks and slows as September approaches. Individually manageable; stacked together at the last minute, they are how students miss an intake they were already admitted to.",
        "Our honest recommendation: start twelve months out, so around September 2025 for a September 2026 start. That sounds excessive until you realise the CSC deadline lands in January. Students who start six months out can still get admitted — they simply forfeit the scholarship, which in China is usually the whole point.",
      ],
      courseCategories: [
        {
          category: "Engineering",
          courses: [
            "BE / ME Mechanical Engineering",
            "BE / ME Civil Engineering",
            "BE / ME Electrical & Electronic Engineering",
            "BE / ME Aerospace Engineering",
            "ME Chemical & Materials Engineering",
          ],
        },
        {
          category: "MBBS & Medicine",
          courses: [
            "MBBS (English-taught, at approved universities only — NEET mandatory)",
            "Bachelor of Dental Surgery (BDS)",
            "Bachelor of Pharmacy",
            "Master of Public Health",
            "Bachelor of Traditional Chinese Medicine",
          ],
        },
        {
          category: "Business & Economics",
          courses: [
            "Bachelor / Master of International Business",
            "MBA",
            "MSc Finance & Banking",
            "MSc International Trade & Economics",
            "Bachelor of Economics",
          ],
        },
        {
          category: "Computer Science & IT",
          courses: [
            "BSc / MSc Computer Science & Technology",
            "MSc Artificial Intelligence",
            "MSc Software Engineering",
            "MSc Data Science & Big Data",
            "MSc Information & Communication Engineering",
          ],
        },
        {
          category: "International Relations & Chinese Studies",
          courses: [
            "Bachelor / Master of International Relations",
            "MA Chinese Language & Literature",
            "MA International Politics",
            "MA Public Administration",
            "Bachelor of Chinese Studies",
          ],
        },
      ],
      universities: [
        { name: "Tsinghua University", note: "Beijing — full September intake across its English-taught engineering, technology and business programmes. Highly competitive." },
        { name: "Peking University", note: "Beijing — September entry across economics, international relations and the sciences, with strong CSC access." },
        { name: "Fudan University", note: "Shanghai — September start across business, economics, international relations and medicine." },
        { name: "Zhejiang University", note: "Hangzhou — September intake across engineering, computer science and agriculture, with good scholarship availability." },
        { name: "Shanghai Jiao Tong University", note: "Shanghai — September entry across engineering and medicine, with long-established English-taught programmes." },
        { name: "Nanjing University", note: "Nanjing — a broad September catalogue and strong provincial scholarship access through Jiangsu." },
        { name: "Wuhan University", note: "Wuhan — September intake across engineering and medicine, at living costs well below the coastal cities." },
        { name: "Harbin Institute of Technology", note: "Harbin — September entry across engineering and aerospace, with China's most affordable major-city living costs." },
        { name: "Tongji University", note: "Shanghai — September start for architecture, civil engineering and urban planning." },
        { name: "Beijing Institute of Technology", note: "Beijing — September entry across a solid range of English-taught engineering programmes." },
      ],
      eligibility: [
        {
          label: "For Undergraduate Courses",
          points: [
            "Class 12 from a recognised Indian board with generally around 60% or above; competitive universities expect considerably more.",
            "Subject prerequisites: PCM for engineering, PCB for medical programmes.",
            "Typically aged between 18 and 25 at application — China applies age limits more strictly than most destinations.",
            "IELTS 5.5 to 6.0 or equivalent for English-taught programmes; some universities accept a medium-of-instruction letter instead.",
            "For MBBS: NEET qualification is mandatory for Indian students and the university must be properly recognised — see our MBBS Abroad page.",
            "Passport, Foreigner Physical Examination Form and police clearance for the student visa.",
          ],
        },
        {
          label: "For Postgraduate Courses",
          points: [
            "A recognised bachelor's degree with generally around 60% or above; selective programmes expect more.",
            "Typically aged under 35 for master's and under 40 for doctoral applicants.",
            "IELTS 6.0 to 6.5 or equivalent for English-taught programmes; top universities ask for 6.5 and above.",
            "Two recommendation letters — weighted seriously here, especially for CSC applications.",
            "A study plan of 800 to 1,500 words, or a full research proposal for doctoral study. CSC decisions genuinely turn on this.",
            "For doctoral applicants, a supervisor pre-acceptance letter substantially strengthens both admission and scholarship chances.",
            "HSK 4 or above for any Chinese-taught programme; not required for English-taught ones.",
          ],
        },
      ],
      englishTests: [
        "Most programmes Indian students apply to are taught entirely in English, so Mandarin is not a barrier to admission. This is worth repeating because it stops so many students from even looking at China.",
        "IELTS Academic is the most commonly accepted proof, with requirements generally gentler than Western destinations — often 5.5 to 6.0 for undergraduate and 6.0 to 6.5 for postgraduate. Tsinghua, Peking and Fudan set higher bars, frequently 6.5 and above.",
        "TOEFL iBT is widely accepted, around 70 to 80 for undergraduate and 80 to 90 for postgraduate entry. PTE is accepted by many but not all Chinese universities — verify against your shortlist.",
        "Many universities waive the English test if your prior education was in English, accepting a Class 12 English mark or a medium-of-instruction letter. This is more common in China than elsewhere, but it is discretionary — confirm before skipping a test booking.",
        "For a September 2026 intake, sort your English evidence by around February or March 2026, so you have it in hand for both CSC and admission applications.",
        "On HSK: not needed for English-taught admission, but genuinely worth doing. Daily life outside campus runs in Chinese, HSK 3 or 4 changes everything, and Confucius Institute Scholarships specifically reward it. Our HSK-aligned coaching in Jaipur helps students arrive with a head start.",
      ],
      documents: [
        "Valid passport with at least six months' validity beyond your intended stay.",
        "Class 10 and Class 12 mark sheets and certificates, notarised and apostilled.",
        "Bachelor's transcripts and degree certificate for postgraduate applicants, notarised and apostilled.",
        "IELTS or TOEFL score report, or a medium-of-instruction letter where accepted.",
        "HSK certificate for Chinese-taught programmes, and valuable for Confucius Institute Scholarship applications.",
        "Study plan of 800 to 1,500 words, or a research proposal for doctoral study.",
        "Two recommendation letters from academic or professional referees.",
        "Foreigner Physical Examination Form completed by an authorised physician — generally valid six months, so time it deliberately.",
        "JW202 form (self-funded) or JW201 form (government scholarship), issued by your university after admission. No JW form means no visa application.",
        "Admission Notice from your university.",
        "Police clearance certificate.",
        "Proof of funds — bank statements or your scholarship award letter.",
        "Passport photographs meeting Chinese visa specifications, which are stricter than most students expect.",
        "Health insurance, typically arranged through your university and mandatory for the residence permit.",
      ],
      applySteps: [
        { title: "1. Assess your profile and check recognition", desc: "Start around September to November 2025. Establish eligibility and verify your target universities are Ministry of Education authorised. For MBBS, NEET is mandatory and recognition rules are stricter — see our MBBS Abroad page." },
        { title: "2. Shortlist six to eight programmes", desc: "Quality varies across Chinese universities more than in most systems, so the name matters — but weigh it against city costs. Harbin or Wuhan at roughly half Shanghai's living costs is a real trade-off." },
        { title: "3. Apply for CSC first — January to April 2026", desc: "Before admissions, not after. CSC rounds close between January and April, months ahead of admission deadlines. Pick your route — embassy, university or programme — deliberately. This is the step that defines the whole China timeline." },
        { title: "4. Sit your English test and prepare documents", desc: "Sort IELTS or TOEFL by February or March 2026. Start notarisation and apostille early — it takes weeks. Write a study plan of 800 to 1,500 words; CSC decisions genuinely turn on its quality." },
        { title: "5. Submit university applications — March to June 2026", desc: "Apply through each university's own portal, paying roughly RMB 400 to RMB 800 per application. Expect four to eight weeks for a decision, sometimes longer at peak." },
        { title: "6. Accept your offer and collect your JW form", desc: "Compare offers on total cost, scholarship, standing and city by around May or June. Accept, pay any deposit, and wait for your Admission Notice and JW202 (or JW201 if scholarship-funded)." },
        { title: "7. Apply for your X1 student visa", desc: "Lodge from June to August 2026 with your JW form, Admission Notice, Foreigner Physical Examination Form, police clearance and proof of funds. Time your medical carefully — it is valid only six months. Then convert to a residence permit within 30 days of arrival." },
      ],
      scholarships: [
        "This is the whole reason to target September. The CSC Chinese Government Scholarship rounds are built around the autumn start, and they are the most substantial funding available to Indian students in any destination we work with.",
        "The CSC can cover full tuition, on-campus accommodation, a monthly living stipend and comprehensive medical insurance. That is a genuinely funded degree — not a partial discount. Deadlines typically fall between January and April 2026 for a September 2026 start, which is why your timeline has to start in 2025.",
        "Your CSC route matters. You can apply through a Chinese embassy, directly via a participating university, or through certain programme channels. Each has different competition levels and requirements, and choosing well genuinely affects your odds. This is one of the more valuable things a counsellor who knows the system brings.",
        "Confucius Institute Scholarships align to September too, for students of Chinese language or teaching. HSK results carry real weight, so this rewards students who took Mandarin seriously rather than as an afterthought.",
        "Do not skip provincial and municipal scholarships — Shanghai, Beijing, Jiangsu, Zhejiang and others run their own awards. Less publicised, less contested, often substantial. Most applicants never find them, which is precisely why they are worth finding.",
        "University-level awards sit on top, from partial tuition reductions to full waivers, often considered automatically on application. The rule across all of it: funding deadlines close before admission deadlines. Build your September timeline backwards from the CSC date, and we will track which rounds are open for your shortlist.",
      ],
      comparison: [
        { factor: "Popularity", thisIntake: "The main intake — the large majority of international students start here", mainIntake: "A smaller secondary intake with a more modest cohort" },
        { factor: "Number of Courses", thisIntake: "Nearly all programmes, including MBBS and most medical degrees", mainIntake: "A reduced subset — MBBS and most medical programmes do not run" },
        { factor: "Competition", thisIntake: "Higher — more applicants, especially for CSC-funded places", mainIntake: "Lower, though far fewer places and programmes available" },
        { factor: "Class Size", thisIntake: "Full cohorts, complete orientation, fresh Mandarin classes", mainIntake: "Small cohorts — more personal, but a quieter mid-year campus" },
        { factor: "Scholarship Options", thisIntake: "Nearly all funding — the main CSC, Confucius and provincial rounds", mainIntake: "Very limited — the main CSC round does not run mid-year" },
        { factor: "Availability", thisIntake: "CSC closes Jan–Apr 2026; admissions run roughly Mar–Jun 2026", mainIntake: "Apply roughly September–December 2026 for a March 2027 start" },
      ],
      comparisonMainLabel: "March Intake",
      verdict: [
        "Is the September intake a good choice for China? It is not just good — it is the intake the entire Chinese system is built around, and for most Indian students it is the only one worth serious planning.",
        "The scholarship argument settles it. The CSC Chinese Government Scholarship — full tuition, accommodation and a monthly stipend — runs its main round for September. So do Confucius Institute Scholarships and most provincial awards. If funding is part of why China appeals to you, and it usually is, then March simply cannot deliver the same thing. That is the honest position.",
        "Add the course range — nearly everything runs in September, and MBBS and most medical programmes run only then — plus properly sequenced modules, full orientation and fresh Mandarin classes, and the case is straightforward.",
        "The real cost is that the timeline starts a year early. CSC deadlines land between January and April, months before admissions. Notarisation and apostille take weeks. The Foreigner Physical Examination Form has a six-month validity that must be timed. None of these are reasons to pick a different intake — they are reasons to start in 2025 rather than 2026.",
        "September is the wrong choice only in narrow cases: if your results arrive too late, if you need more months for English or funding evidence, or if you have specifically confirmed your programme runs in March and no scholarship is involved. Otherwise, target September — and start earlier than feels necessary. In China, early is not an edge. It is the price of the scholarship.",
      ],
      faqs: [
        { q: "Is September the main intake in China?", a: "Yes. September marks the start of China's academic year, and nearly all English-taught programmes open then. More importantly, the main CSC Chinese Government Scholarship rounds are built around it, along with Confucius Institute and most provincial awards. It is where the large majority of international students begin." },
        { q: "When should I start applying for the September 2026 intake in China?", a: "Around twelve months out, so September to November 2025. This surprises people until they see that CSC deadlines fall between January and April 2026 — months before admission deadlines, which run roughly March to June. If you wait for an offer before thinking about CSC, the scholarship round has already closed." },
        { q: "Can I get a full scholarship to study in China?", a: "Realistically, yes — this is what makes China unusual. The CSC Chinese Government Scholarship can cover full tuition, on-campus accommodation, a monthly stipend and medical insurance. It is competitive and merit-based, and your study plan and recommendation letters genuinely matter. Confucius Institute, provincial and university awards add more layers. Nobody can promise you an award, but a funded degree is a realistic goal rather than a fantasy." },
        { q: "Do I need to know Chinese to study in China?", a: "Not for admission to an English-taught programme, and there are thousands of them across engineering, business, computer science, international relations and MBBS at approved universities. HSK 4 or above is needed only for Chinese-taught degrees. That said, learn Mandarin anyway — daily life outside campus runs in Chinese, most universities offer free classes, and HSK ability specifically helps with Confucius Institute Scholarships." },
        { q: "Can I study MBBS in China in the September intake?", a: "Yes — MBBS at approved universities is September-only, so this is the intake for it. But the rules are strict: NEET qualification is mandatory for Indian students, and your university must be properly recognised and screened, which matters enormously for practising in India afterwards. It is too important to summarise in a FAQ — our dedicated MBBS Abroad page covers eligibility, recognition and licensing properly." },
        { q: "What is the JW202 form and why does it matter?", a: "It is the official visa application form your university issues after admitting you — JW202 for self-funded students, JW201 for government-scholarship holders. It is the linchpin of the whole process: no JW form means no X1 visa application, full stop. It arrives with your Admission Notice, which is why accepting your offer promptly matters so much to your visa timeline." },
      ],
    },
    {
      slug: "march-intake-2027",
      name: "March Intake",
      season: "Spring Semester",
      months: "March – April 2027",
      status: "Secondary intake",
      summary:
        "China's smaller spring intake — no main CSC round and no MBBS, but a genuine second chance for many English-taught programmes.",
      intro: [
        "Let's be honest from the start, because this matters: the March intake in China is smaller, and it comes with two significant limitations you need to know before you plan around it.",
        "First, the main CSC Chinese Government Scholarship round does not run for March. Second, MBBS and most medical programmes are September-only. If either a full scholarship or medicine is why China appeals to you, March cannot deliver it — and anyone telling you otherwise is not being straight with you.",
        "That said, March is a real intake. Many English-taught programmes in engineering, business, computer science and international relations do accept spring entry, at the same universities with the same degrees. If your September plans fell through — a late result, an English score short by half a band, funding that took longer to arrange — March means moving forward now rather than losing a year.",
        "This page covers where March works, where it does not, the timeline, deadlines, eligibility, documents and the student visa route. And because the picture varies so much by university and programme here, this is one where a conversation with our counsellors in Jaipur genuinely saves time.",
      ],
      whatIsIt: [
        "The March intake is the start of China's spring semester, typically running from March through to July. It is the country's secondary entry point, offered by many — though not all — universities for a subset of their English-taught programmes.",
        "It suits you if you missed September for practical reasons: results that arrived late, an English score needing another attempt, finances that took longer to document, or a change of plan. It also suits students who want extra months to build a genuinely stronger application rather than a rushed one.",
        "Where it works well: engineering, business, computer science, international relations and Chinese language programmes have reasonable spring availability across many universities. These are the same institutions, the same faculty and the same degrees — your certificate does not record which semester you started.",
        "Where it does not work: MBBS and most medical programmes are September-only at approved universities, without exception. The main CSC scholarship round does not run mid-year. Some specialised research programmes and tightly sequenced degrees are autumn-only too.",
        "So the critical first step here is different from any other intake. Before you plan anything, confirm your specific programme at your specific university accepts March entry. Students routinely build entire timelines around courses with no spring start — and in China that is a particularly common and costly error.",
      ],
      whyChoose: [
        {
          title: "You move forward instead of losing a year",
          desc: "Missing September does not have to mean waiting twelve months. March is roughly six months later — you keep your momentum rather than watching a year disappear, which matters enormously if you have just finished your degree or Class 12.",
        },
        {
          title: "Real time to strengthen your application",
          desc: "Those extra months are genuinely useful. Retake IELTS and lift your band. Get your documents notarised and apostilled without panic. Write a study plan you actually thought about. Add a certification or some work experience.",
        },
        {
          title: "Lower competition where it runs",
          desc: "Fewer applicants target March, so pressure on the available places is lighter. For students with solid but not exceptional profiles, spring entry can be where a good application lands comfortably.",
        },
        {
          title: "A better shot at university-level awards",
          desc: "The main CSC round does not run — but university and some provincial awards do accept spring entrants. Because the mid-year pool is smaller, competition for these can actually be gentler than in September. Not CSC money, but genuinely worth having.",
        },
        {
          title: "A calmer visa and arrival season",
          desc: "X1 visa processing peaks ahead of September. A March application lands in a quieter period, and dormitory allocation is often easier too — though timelines still vary and early lodgement always beats late.",
        },
      ],
      timeline: [
        {
          period: "July – September 2026 (Research & availability check)",
          tasks: [
            "Confirm which programmes actually accept March entry — the critical first step, and the one students skip.",
            "Rule out MBBS and most medical programmes now, since they are September-only at approved universities.",
            "Verify your target universities are Ministry of Education authorised to teach international students.",
            "Begin IELTS or TOEFL preparation and book a test date.",
            "Start notarisation and apostille of academic documents early — it takes weeks regardless of intake.",
          ],
        },
        {
          period: "September – October 2026 (Testing & applications)",
          tasks: [
            "Sit your English test, leaving room to retake if you fall short — this is why you chose March.",
            "Finalise a shortlist of five to eight March-eligible programmes.",
            "Write your study plan of 800 to 1,500 words, tailored to each university.",
            "Request recommendation letters, giving referees at least three weeks.",
            "Submit university applications — deadlines typically fall between October and December 2026.",
          ],
        },
        {
          period: "November – December 2026 (Offers & funding)",
          tasks: [
            "Apply for any university or provincial scholarships open to spring entrants — check terms carefully, as many are September-only.",
            "Respond quickly to requests for further documents.",
            "Compare offers on total cost, university standing and city costs.",
            "Accept your offer and pay any required deposit.",
            "Wait for your Admission Notice and JW202 form.",
          ],
        },
        {
          period: "December 2026 – February 2027 (Visa)",
          tasks: [
            "Complete your Foreigner Physical Examination Form with an authorised physician, timing it against its six-month validity.",
            "Obtain your police clearance certificate.",
            "Lodge your X1 student visa application with your JW form, Admission Notice, medicals and proof of funds.",
            "Arrange health insurance, usually through your university.",
            "Confirm your dormitory booking — generally easier for the spring intake.",
          ],
        },
        {
          period: "February – March 2027 (Departure & registration)",
          tasks: [
            "Receive your visa decision and book flights once approved.",
            "Attend a pre-departure briefing — and pack for winter, because March in northern China is genuinely cold.",
            "Register your address with local police within 24 hours if staying off-campus; dormitories usually handle this.",
            "Convert your X1 visa to a residence permit within 30 days of arrival — mandatory, and easy to forget.",
            "Attend the spring orientation, enrol in classes and join Mandarin lessons.",
          ],
        },
      ],
      deadlines: [
        "For a March 2027 start, applications generally open around July 2026 and close between October and December 2026, varying by university and programme. But as with any China timeline, dates are the second question.",
        "The first is availability. Does your programme run in March at all? MBBS and most medical programmes do not — that is absolute. Some specialised research programmes and tightly sequenced degrees do not either. Building a careful plan around a course with no spring start is the most common March mistake we see.",
        "On scholarships, be realistic. The main CSC round does not run for March, and that is not a deadline you can chase — it is simply how the programme is structured. What remains is a subset of university and provincial awards, with deadlines typically between October and December 2026. Fewer options, so apply the moment a round opens.",
        "The document constraints do not soften. Notarisation and apostille still take weeks. The Foreigner Physical Examination Form is still valid for only about six months, so it still needs timing rather than rushing. These are the same hurdles as September, just in a quieter season.",
        "Visa timing is more comfortable but still deserves respect. Lodge your X1 by December 2026 or January 2027 to leave real buffer. Processing commonly takes four to eight weeks, and a mistimed medical or a slow apostille can eat weeks you did not budget for.",
        "Start around seven to eight months out — so July or August 2026. Less runway than September demands, but enough, provided you do the availability check first rather than assuming March will simply be there.",
      ],
      courseCategories: [
        {
          category: "Engineering",
          courses: [
            "BE / ME Mechanical Engineering",
            "BE / ME Civil Engineering",
            "ME Engineering Management",
            "BE / ME Electrical Engineering (selected programmes)",
            "ME Industrial Engineering",
          ],
        },
        {
          category: "Business & Economics",
          courses: [
            "Bachelor / Master of International Business",
            "MBA",
            "MSc Finance & Banking",
            "MSc International Trade & Economics",
            "Bachelor of Economics",
          ],
        },
        {
          category: "Computer Science & IT",
          courses: [
            "BSc / MSc Computer Science & Technology",
            "MSc Software Engineering",
            "MSc Data Science & Big Data (selected programmes)",
            "MSc Artificial Intelligence (selected programmes)",
            "MSc Information Management",
          ],
        },
        {
          category: "International Relations & Chinese Studies",
          courses: [
            "Bachelor / Master of International Relations",
            "MA Chinese Language & Literature",
            "MA International Politics",
            "MA Public Administration",
            "Chinese Language Programmes (HSK preparation)",
          ],
        },
        {
          category: "Sciences & Architecture",
          courses: [
            "BSc / MSc Environmental Science",
            "Master of Architecture (selected programmes)",
            "MSc Urban Planning",
            "MSc Biotechnology (selected programmes)",
            "BSc Applied Physics",
          ],
        },
      ],
      universities: [
        { name: "Zhejiang University", note: "Hangzhou — reasonable spring availability across engineering and computer science programmes." },
        { name: "Wuhan University", note: "Wuhan — selected March entry across engineering and science, at living costs well below the coastal cities." },
        { name: "Nanjing University", note: "Nanjing — selected spring entry, with Jiangsu provincial scholarships worth checking for mid-year eligibility." },
        { name: "Harbin Institute of Technology", note: "Harbin — selected March entry in engineering; be prepared for a genuinely cold arrival." },
        { name: "Tongji University", note: "Shanghai — limited spring entry on selected architecture and engineering programmes." },
        { name: "Beijing Institute of Technology", note: "Beijing — selected March intake across some English-taught engineering programmes." },
        { name: "Fudan University", note: "Shanghai — limited mid-year entry on selected business and international relations programmes; most courses are September-only." },
        { name: "Shanghai Jiao Tong University", note: "Shanghai — spring entry is rare and programme-specific; verify directly. Medical programmes are September-only." },
        { name: "Chinese language institutes nationwide", note: "Various cities — Mandarin and HSK preparation programmes run reliable March intakes, a useful bridge before a September degree start." },
      ],
      eligibility: [
        {
          label: "For Undergraduate Courses",
          points: [
            "Class 12 from a recognised Indian board with generally around 60% or above — the same academic bar as September.",
            "Subject prerequisites: PCM for engineering programmes.",
            "Typically aged between 18 and 25 at application, as age limits apply regardless of intake.",
            "IELTS 5.5 to 6.0 or equivalent for English-taught programmes; some universities accept a medium-of-instruction letter.",
            "Confirmation that your specific programme accepts March entry — note that MBBS and most medical programmes do not.",
            "Passport, Foreigner Physical Examination Form and police clearance for the student visa.",
          ],
        },
        {
          label: "For Postgraduate Courses",
          points: [
            "A recognised bachelor's degree with generally around 60% or above — no university lowers its bar for spring entry.",
            "Typically aged under 35 for master's and under 40 for doctoral applicants.",
            "IELTS 6.0 to 6.5 or equivalent for English-taught programmes.",
            "Two recommendation letters from academic or professional referees.",
            "A study plan of 800 to 1,500 words — and if you are applying after a September attempt, address the gap honestly rather than hoping it goes unnoticed.",
            "For doctoral applicants, a supervisor pre-acceptance letter — noting that supervision availability is often tighter mid-year.",
            "HSK 4 or above for Chinese-taught programmes; not required for English-taught ones.",
          ],
        },
      ],
      englishTests: [
        "Requirements do not soften for March. IELTS Academic 5.5 to 6.0 or equivalent for most English-taught undergraduate programmes, 6.0 to 6.5 for postgraduate, with top universities asking 6.5 and above.",
        "TOEFL iBT is widely accepted, generally around 70 to 80 for undergraduate and 80 to 90 for postgraduate entry. PTE is accepted by many but not all Chinese universities — verify against your shortlist.",
        "Many universities still waive the English test where your prior education was in English, accepting a Class 12 English mark or a medium-of-instruction letter. Discretionary, so confirm rather than assume.",
        "For a March 2027 intake, sort your English evidence by around September 2026. If you are choosing March precisely because a September attempt fell short, use these months properly — that is the entire point of the extra runway.",
        "On HSK: still not needed for English-taught admission, still genuinely worth doing. One March-specific note — Chinese language and HSK preparation programmes have reliable spring intakes, which some students use deliberately as a bridge before starting a degree in September. Our HSK-aligned coaching in Jaipur helps either way.",
      ],
      documents: [
        "Valid passport with at least six months' validity beyond your intended stay.",
        "Class 10 and Class 12 mark sheets and certificates, notarised and apostilled.",
        "Bachelor's transcripts and degree certificate for postgraduate applicants, notarised and apostilled.",
        "IELTS or TOEFL score report, or a medium-of-instruction letter where accepted.",
        "HSK certificate for Chinese-taught programmes.",
        "Study plan of 800 to 1,500 words — and if you are applying after a September attempt, explain the mid-year start honestly.",
        "Two recommendation letters from academic or professional referees.",
        "Foreigner Physical Examination Form completed by an authorised physician — generally valid six months, so time it deliberately.",
        "JW202 form (self-funded) or JW201 form (scholarship holders), issued by your university after admission. No JW form means no visa application.",
        "Admission Notice from your university.",
        "Police clearance certificate.",
        "Proof of funds — bank statements or a scholarship award letter.",
        "Passport photographs meeting Chinese visa specifications.",
        "Health insurance, typically arranged through your university and mandatory for the residence permit.",
      ],
      applySteps: [
        { title: "1. Check March availability first", desc: "Before anything else, confirm your target programme accepts spring entry — MBBS and most medical programmes do not, and neither do some specialised courses. Verify Ministry of Education authorisation at the same time. Start around July or August 2026." },
        { title: "2. Shortlist five to eight March-eligible programmes", desc: "Build your list only from what genuinely runs in spring, balancing university standing against city living costs — Wuhan or Harbin cost roughly half of Shanghai." },
        { title: "3. Sit your English test", desc: "Book IELTS or TOEFL for around September 2026. If a short score is why you are here, use these months to fix it properly rather than repeating the same attempt." },
        { title: "4. Prepare documents and your study plan", desc: "Start notarisation and apostille early — weeks, not days. Write a study plan of 800 to 1,500 words explaining your goals, your university choice and, if relevant, your mid-year start." },
        { title: "5. Apply to universities and available scholarships", desc: "Submit from October to December 2026. Be realistic on funding — the main CSC round does not run for March, so target the university and provincial awards that do accept spring entrants, and apply the moment they open." },
        { title: "6. Accept your offer and collect your JW form", desc: "Compare offers on total cost and standing by around November or December. Accept, pay any deposit, and wait for your Admission Notice and JW202 form." },
        { title: "7. Apply for your X1 student visa", desc: "Lodge by December 2026 or January 2027 with your JW form, Admission Notice, Foreigner Physical Examination Form, police clearance and proof of funds. A quieter season than September, but time your medical carefully. Then convert to a residence permit within 30 days of arrival." },
      ],
      scholarships: [
        "We will not oversell this. The main CSC Chinese Government Scholarship round does not run for the March intake, and since CSC funding is the single strongest reason many Indian students look at China, that is a serious limitation. If a fully funded degree is your goal, September is the honest answer.",
        "That is not a deadline you can chase or an exception you can appeal — it is simply how the programme is structured. Any consultant suggesting otherwise is either mistaken or not being straight with you.",
        "What does remain is genuinely worth pursuing. Many Chinese universities extend their own scholarships to spring entrants — partial tuition reductions and occasionally full waivers. Read the terms closely, because mid-year rules often differ from September ones and are rarely spelled out prominently.",
        "Provincial and municipal scholarships are worth checking too. Some accept spring entrants, and because they are less publicised and the mid-year pool is smaller, competition can be genuinely lighter. Not CSC-scale money, but a meaningful reduction on an already affordable degree.",
        "And here is the structural point that matters most for March applicants: China is cheap even without a scholarship. Tuition around USD 3,000 to USD 8,000 and living costs around USD 3,000 to USD 6,000 in a city like Wuhan or Harbin can total less than a partially funded year elsewhere. For March applicants, choosing an affordable city often outperforms chasing a scholarship you would not have won — and that arithmetic is exactly what our counsellors work through with you.",
      ],
      comparison: [
        { factor: "Popularity", thisIntake: "A smaller secondary intake with a modest international cohort", mainIntake: "The main intake — where the large majority of students start" },
        { factor: "Number of Courses", thisIntake: "A reduced subset — MBBS and most medical programmes do not run", mainIntake: "Nearly all programmes, including MBBS at approved universities" },
        { factor: "Competition", thisIntake: "Lower — fewer applicants for the places that exist", mainIntake: "Higher — more applicants, especially for CSC-funded places" },
        { factor: "Class Size", thisIntake: "Small cohorts, more staff contact, a quieter campus", mainIntake: "Full cohorts, complete orientation, fresh Mandarin classes" },
        { factor: "Scholarship Options", thisIntake: "Limited — no main CSC round; university and some provincial awards only", mainIntake: "Nearly all funding — the main CSC, Confucius and provincial rounds" },
        { factor: "Availability", thisIntake: "Apply roughly September–December 2026 for a March 2027 start", mainIntake: "CSC closes Jan–Apr 2026; admissions run roughly Mar–Jun 2026" },
      ],
      comparisonMainLabel: "September Intake",
      verdict: [
        "Is the March intake in China a good choice? It depends entirely on one question: does a scholarship matter to you?",
        "If it does — and for most students looking at China it genuinely should, because CSC funding is the country's single biggest advantage — then March is hard to recommend. The main CSC round does not run mid-year. That is not a hurdle to work around; it is a structural fact, and pretending otherwise would be doing you a disservice.",
        "But if you are self-funding, March makes real sense. China is remarkably affordable even without a scholarship: tuition around USD 3,000 to USD 8,000 and living costs around USD 3,000 to USD 6,000 in a city like Wuhan or Harbin. If you can fund that yourself, the absence of a CSC round costs you much less than it first appears — and you get the same university, same faculty, same degree.",
        "March is also the better choice when September would mean rushing. A strong March application beats a panicked September one. Extra months to lift your IELTS band, get documents apostilled without drama and write a considered study plan are an investment, not a delay.",
        "March is simply not an option for MBBS or most medical programmes — they are September-only at approved universities, and NEET remains mandatory for Indian students regardless. If medicine is your goal, your timeline is set for you, and our dedicated MBBS Abroad page walks through that pathway properly.",
        "So here is our honest position. Scholarship-dependent or medicine-focused? Wait for September. Self-funding a non-medical English-taught degree, and September would mean cutting corners? March is a sound choice at a university that genuinely runs it. What we will not do is push you at whichever intake happens to be closest.",
      ],
      faqs: [
        { q: "Is the March intake available at all Chinese universities?", a: "No, and this is the first thing to check. Many universities offer selected English-taught programmes in engineering, business, computer science and international relations for spring entry, but coverage is patchy. MBBS and most medical programmes are September-only at approved universities without exception. Always confirm your specific programme before planning around it." },
        { q: "Can I get a CSC scholarship for the March intake?", a: "The main CSC Chinese Government Scholarship round does not run for March — that is structural, not a deadline you can chase. Some university and provincial awards do accept spring entrants. If a fully funded degree is central to your plan, September is the honest answer. If you are self-funding, China's low costs mean March still works well." },
        { q: "Can I study MBBS in China in the March intake?", a: "No. MBBS and most medical programmes at approved universities are September-only. NEET qualification is also mandatory for Indian students, and your university must be properly recognised and screened, which matters for practising in India afterwards. If medicine is your goal, your timeline is set — our dedicated MBBS Abroad page covers eligibility, recognition and licensing in full." },
        { q: "When should I apply for the March 2027 intake?", a: "Start around July or August 2026, roughly seven to eight months out. Applications generally open from July 2026 and close between October and December 2026. Remember that notarisation and apostille take weeks, and the Foreigner Physical Examination Form is valid for only about six months — so it needs timing, not rushing." },
        { q: "Will starting in March affect my degree?", a: "Not the degree itself — same university, same faculty, same curriculum, same certificate, and it does not record which semester you joined. The one thing worth checking is that Chinese programmes are often tightly sequenced across the two semesters, so a spring start can occasionally mean prerequisites fall out of order. We check this against your specific programme before you commit." },
        { q: "Is it easier to get admission in the March intake?", a: "Academic requirements are the same — no university lowers its standards for spring entry, and age limits still apply. But there are typically fewer applicants competing for the places available, so the practical pressure can be lighter. Think of it as less crowded, not easier. The real difference is not admission difficulty — it is the missing CSC round." },
      ],
    },
  ],
};
