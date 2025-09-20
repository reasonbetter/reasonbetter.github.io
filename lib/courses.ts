// lib/courses.ts
export type ReadingItem = { title: string; href?: string; note?: string };
export type ReadingSection = { title: string; items: ReadingItem[] };
export type Course = {
  slug: string;
  code: string;
  name: string;
  desc: string;
  readings: ReadingSection[];
};

export const COURSES: Course[] = [
  {
    slug: "phil-450",
    code: "Phil 450",
    name: "Philosophy of Emerging Technology",
    desc:
      "Upper-level exploration of philosophical issues raised by recent and near-future technologies — including AI, climate engineering, VR, surveillance tech, gene editing, anti-aging, and engineered viruses. We analyze impacts on well-being and agency, evaluate catastrophic/existential risks, and ask how to help shape a better future.",
    // Paraphrase of your description and bullet points. 
    readings: [
      {
        title: "Artificial Intelligence & Agency",
        items: [
          { title: "Guiding principles for AI agents (overview)", note: "Add your preferred syllabus links" },
        ],
      },
      {
        title: "Bioethics & Enhancement",
        items: [
          { title: "Treatments vs. elective enhancements (overview)", note: "Add PDFs/links" },
        ],
      },
      {
        title: "Longevity & Aging",
        items: [
          {
            title: "Farrelly, “Why aging research?” (overview)",
            note: "You reference this in Global Priorities/Changing the World; add your chosen version",
          },
        ],
      },
    ],
  },
  {
    slug: "phil-360",
    code: "Phil 360",
    name: "Global Priorities",
    desc:
      "Interdisciplinary course on the world’s most important problems and what we can do to help: (i) global health & poverty, (ii) animals & the environment, and (iii) emerging technologies. We also address how to compare problems, weigh human goods, and assess effectiveness.",
    // Condensed from your page. 
    readings: [
      {
        title: "I. Introduction & Mindset",
        items: [
          { title: "MacAskill, Doing Good Better (Ch. 1–2)", note: "Effectiveness framing" },
          { title: "Manley, Reason Better (Ch. 1–2)", href: "https://tophat.com/marketplace/social-science/philosophy/product/685660910" },
        ],
      },
      {
        title: "II. Meet the World",
        items: [
          { title: "Rosling, Factfulness (selected chapters)" },
          { title: "Our World in Data: Mortality in the Past", href: "https://ourworldindata.org/mortality-access" },
          { title: "Dollar Street (Gapminder)", href: "https://www.gapminder.org/dollar-street" },
        ],
      },
      {
        title: "III. Hearts & Minds",
        items: [
          { title: "Bloom, Empathy and its Discontents" },
          { title: "Soares, On Caring" },
          { title: "Slovic, The more who die, the less we care" },
        ],
      },
      {
        title: "IV. Extreme Poverty & Policy",
        items: [
          { title: "Banerjee & Duflo, Poor Economics (selected)" },
          { title: "80,000 Hours: The good, the bad, and the ineffective", href: "https://80000hours.org/articles/what-makes-a-charity-effective/" },
        ],
      },
      {
        title: "V. Catastrophic Risk & Emerging Tech",
        items: [
          { title: "Founders Pledge: Climate change / Mental health (excerpts)" },
          { title: "Future of Life Institute topic pages", href: "https://futureoflife.org" },
        ],
      },
      // Seeded from your “Changing the World” schedule; many items there point into Canvas.
      // Adjust/expand freely (some links require login). 
    ],
  },
  {
    slug: "phil-183",
    code: "Phil 183",
    name: "Critical Reasoning",
    desc:
      "Practical reasoning tools from cognitive psychology, behavioral economics, logic, probability, and decision theory. Covers heuristics & biases, evidential strength, causation vs. correlation, scientific method, and risk perception — with applications to everyday and professional decision-making.",
    // Condensed from your page; includes the textbook reference below. 
    readings: [
      {
        title: "Core Text",
        items: [
          {
            title: "Manley, Reason Better: An Interdisciplinary Guide to Critical Thinking (2nd ed.)",
            href: "https://tophat.com/marketplace/social-science/philosophy/product/685660910",
            note: "Primary text",
          },
        ],
      },
      {
        title: "Bias & Probability",
        items: [
          { title: "Heuristics and biases (selections)" },
          { title: "“When can we infer causation from correlation?” (readings to attach)", note: "Add PDFs/links" },
        ],
      },
    ],
  },
];
