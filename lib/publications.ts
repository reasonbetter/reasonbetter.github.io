// lib/publications.ts
export type Publication = {
  title: string;
  venue?: string;
  link?: string;
  tags?: string[];
  note?: string;
};

export const publications: Publication[] = [
  {
    title: "The Ethics, Economics, and Demographics of Delaying Aging",
    venue: "in Essays on Longtermism, eds. H. Greaves & W. MacAskill (OUP, 2025)",
    link: "/papers/EEDDA.pdf",
    tags: ["ethics", "economics", "biotech", "emerging technology"],
    note: "Delaying aging will yield enormous social benefits and is under-resourced.",
  },
  {
    title: "On Being a Random Sample",
    venue: "work in progress",
    link: "/papers/OBARS.pdf",
    tags: ["probability", "bayesianism", "self-locating belief"],
    note: "Bayesian conditionalization is wrong and also too narrow: what can we replace it with?",
  },
  {
    title: "Moral Realism and Semantic Plasticity",
    venue: "work in progress",
    link: "/papers/moral+realism+and+semantic+plasticity.pdf",
    tags: ["metaethics", "deflationism", "semantics"],
    note: "Moral realists can accept semantic plasticity and explain Moral Twin Earth-style intuitions at low cost",
  },
  {
    title: "God and the Bayesian Conception of Evidence",
    venue: "forthcoming, Religious Studies",
    link: "/papers/God+and+the+Bayesian+conception.pdf",
    tags: ["bayesianism", "metaphilosophy", "philosophy of religion"],
    note: "Cognitive pitfalls are pervasive when assessing evidential arguments about the existence of God.",
  },
  {
    title: "Quantifier Variance (with Rohan Sud)",
    venue: "Routledge Handbook of Metametaphysics",
    link: "/papers/5D8AE1DE-E286-11EC-BE8A-F62EAAC88004.pdf",
    tags: ["metaontology", "semantics", "deflationism"],
    note: "An overview and limited defense of quantifier variance.",
  },
  {
    title: "Dispositions Without Teleology (with Ryan Wasserman)",
    venue: "Oxford Studies in Metaphysics, vol. 10 (2017)",
    link: "/papers/dispositions+without+teleology.pdf",
    tags: ["metaphysics", "dispositions", "teleology"],
    note: "Rejects teleological accounts of dispositions and defends our view against new objections.",
  },
  {
    title: "The Folk Probably Do Think What You Think They Think (with Billy Dunaway & Anna Edmonds)",
    venue: "Australasian Journal of Philosophy, 91(3): 421–441 (2013)",
    link: "/papers/metaxphi.pdf",
    tags: ["experimental philosophy", "metaphilosophy", "analysis"],
    note: "Philosophers predict ‘surprising’ x-phi results; clarifying the role of experiments in philosophical analysis."
  },
  {
    title: "Dispositionality: Beyond the Biconditionals",
    venue: "Australasian Journal of Philosophy, 90(2): 321–334 (2012)",
    link: "/papers/Dispositionality  Beyond The Biconditionals.pdf",
    tags: ["metaphysics", "dispositions", "analysis"],
    note: "What is it to be a disposition? Biconditional 'analyses' of dispositions don't go far enough.",
  },
  {
    title: "Dispositions, Conditionals, and Counterexamples (with Ryan Wasserman)",
    venue: "Mind, 120: 1191–1227 (2011)",
    link: "/papers/fzn003.pdf",
    tags: ["metaphysics", "philosophy of language","dispositions"],
    note: "Defends our account of dispositions; considers the nature of conditionals and centering.",
  },
  {
    title: "When Best Theories Go Bad",
    venue: "Philosophy and Phenomenological Research, 78(2): 392–405 (2009)",
    link: "/papers/when+best+theories+fixed.pdf",
    tags: ["metaontology", "metaphilosophy", "philosophy of language"],
    note: "Sometimes even realists should repudiate the ontological commitments of our best theories.",
  },
  {
    title: "A Guided Tour of Metametaphysics",
    venue: "in Metametaphysics (OUP, 2009)",
    link: "/papers/mmintro.pdf",
    tags: ["ontology", "metaphilosophy", "deflationism"],
    note: "Introduces the contemporary landscape of metaontology; offers a limited defense of ontological deflationism.",
  },
  {
    title: "A Gradable Approach to Dispositions (with Ryan Wasserman)",
    venue: "The Philosophical Quarterly, 57: 68–75 (2007)",
    link: "/papers/gad+published.pdf",
    tags: ["metaphysics", "philosophy of language", "dispositions"],
    note: "Accounts for degrees of dispositions while avoiding the problems of finks and masks.",
  },
  {
    title: "On Linking Dispositions With Conditionals (with Ryan Wasserman)",
    venue: "Mind, 117: 59–84 (2008)",
    link: "/papers/sca+published.pdf",
    tags: ["metaphysics", "philosophy of language", "dispositions"],
    note: "Raises new problems for conditional accounts of dispositions; offers a new account that solves them",
  },
];
