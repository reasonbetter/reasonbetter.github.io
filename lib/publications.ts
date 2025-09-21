// lib/publications.ts
export type Publication = {
  title: string;
  venue?: string;
  year?: string;
  link?: string;
  tags?: string[];
  note?: string;
};

export const publications: Publication[] = [
  {
    title: "The Ethics, Economics, and Demographics of Delaying Aging",
    venue: "in Essays on Longtermism (OUP)",
    year: "forthcoming",
    link: "#",
    tags: ["ethics", "longtermism", "aging"],
    note: "Argues that delaying aging yields enormous social benefits and is under-resourced.",
  },
  {
    title: "On Being a Random Sample",
    venue: "work in progress",
    tags: ["confirmation theory", "self-locating belief"],
    note: "Rules for 'inwards' and 'outwards' de se reasoning and updating beyond conditionalization.",
  },
  {
    title: "Keeping Up Appearances: A Reducer’s Guide",
    venue: "Journal of Philosophy",
    year: "forthcoming",
    link: "#",
    tags: ["metaphysics", "methodology"],
    note: "Desiderata for paraphrase strategies used by reductive metaphysicians.",
  },
  {
    title: "God and the Bayesian Conception of Evidence",
    venue: "Religious Studies",
    year: "forthcoming",
    link: "#",
    tags: ["bayesianism", "philosophy of religion"],
    note: "Bias hazards when reconstructing likelihoods in evidential arguments about God.",
  },
  {
    title: "Quantifier Variance (with Rohan Sud)",
    venue: "Routledge Handbook of Metametaphysics",
    year: "2020",
    link: "https://philpapers.org/rec/MANQV-3",
    tags: ["metaontology"],
    note: "Overview and defense of quantifier variance.",
  },
  {
    title: "Moral Realism and Semantic Plasticity",
    venue: "work in progress",
    year: "—",
    link: "https://davidmanley.squarespace.com/research#moral-realism",
    tags: ["metaethics", "semantics"],
    note: "Argues moral realists can accept semantic plasticity of moral terms while accounting for contrary intuitions at low cost.",
  },
  {
    title: "Dispositions Without Teleology (with Ryan Wasserman)",
    venue: "Oxford Studies in Metaphysics, vol. 10 (2017)",
    year: "2017",
    link: "https://davidmanley.squarespace.com/research#dispositions-without-teleology",
    tags: ["metaphysics", "dispositions"],
    note: "Argues against teleological metaphysics for dispositions and defends a conditional account against new objections.",
  },
  {
    title: "The Folk Probably Do Think What You Think They Think (with Billy Dunaway & Anna Edmonds)",
    venue: "Australasian Journal of Philosophy, 91(3): 421–441 (2013)",
    year: "2013",
    link: "https://davidmanley.squarespace.com/research#folk-probably",
    tags: ["x-phi", "methodology"],
    note: "Philosophers predicted many ‘surprising’ survey results; experiments still have a role, but armchair fares better than claimed.",
  },
  {
    title: "Dispositionality: Beyond the Biconditionals",
    venue: "Australasian Journal of Philosophy, 90(2): 321–334 (2012)",
    year: "2012",
    link: "https://www.tandfonline.com/doi/full/10.1080/00048402.2011.546980",
    tags: ["metaphysics", "dispositions"],
    note: "Critiques conditional analyses of dispositions and offers an alternative.",
  },
  {
    title: "Dispositions, Conditionals, and Counterexamples (with Ryan Wasserman)",
    venue: "Mind, 120: 1191–1227 (2011)",
    year: "2011",
    link: "https://academic.oup.com/mind/article-abstract/120/480/1191/951463",
    tags: ["metaphysics", "dispositions"],
    note: "Responds to critics of conditional analyses; roles of centering and counterexamples.",
  },
  {
    title: "When Best Theories Go Bad",
    venue: "Philosophy and Phenomenological Research, 78(2): 392–405 (2009)",
    year: "2009",
    link: "https://davidmanley.squarespace.com/research#best-theories",
    tags: ["metaontology"],
    note: "Argues a realist meta-ontology may counsel repudiating some ontological commitments of our best theories.",
  },
  {
    title: "A Guided Tour of Metametaphysics",
    venue: "in Metametaphysics (OUP, 2009)",
    year: "2009",
    link: "https://davidmanley.squarespace.com/research#guided-tour",
    tags: ["metametaphysics"],
    note: "Introductory chapter sketching positions in metametaphysics and a tentative account of verbal disputes.",
  },
  {
    title: "A Gradable Approach to Dispositions (with Ryan Wasserman)",
    venue: "The Philosophical Quarterly, 57: 68–75 (2007)",
    year: "2007",
    link: "",
    tags: ["metaphysics", "dispositions"],
    note: "Accounts for degrees of dispositions while avoiding problems of finks and masks.",
  },
  {
    title: "On Linking Dispositions With Conditionals (with Ryan Wasserman)",
    venue: "Mind, 117: 59–84 (2008)",
    year: "2008",
    link: "https://academic.oup.com/mind/article-abstract/117/465/59/976962",
    tags: ["metaphysics", "dispositions"],
    note: "Critiques conditional analyses (finks, masks, Achilles' heels, etc.) and offers a proposal avoiding seven problems.",
  },
  {
    title: "Properties and Resemblance Classes",
    venue: "Noûs, 36: 75–96 (2002)",
    year: "2002",
    link: "",
    tags: ["metaphysics", "nominalism"],
    note: "Critiques resemblance-class theories of properties; trope-class versions don’t escape classic problems.",
  },
];
