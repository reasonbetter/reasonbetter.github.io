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
    venue: "in <em>Essays on Longtermism</em>, eds. H. Greaves & W. MacAskill",
    link: "/papers/EEDDA.pdf",
    tags: ["bioethics", "economics"],
    note: "Delaying aging will yield enormous social benefits and is under-resourced.",
  },
  {
    title: "On Being a Random Sample",
    venue: "work in progress",
    link: "/papers/OBARS.pdf",
    tags: ["formal epistemology", "self-locating belief"],
    note: "Bayesian conditionalization is wrong and also too narrow: what can we replace it with?",
  },
  {
    title: "Moral Realism and Semantic Plasticity",
    venue: "work in progress",
    link: "/papers/moral+realism+and+semantic+plasticity.pdf",
    tags: ["metaethics", "deflationism"],
    note: "Moral realists can accept semantic plasticity and explain Moral Twin Earth-style intuitions at low cost",
  },
  {
    title: "God and the Bayesian Conception of Evidence",
    venue: "forthcoming in <em>Religious Studies</em>",
    link: "/papers/God+and+the+Bayesian+conception.pdf",
    tags: ["bayesianism", "evidentialism"],
    note: "Cognitive pitfalls are pervasive when assessing evidential arguments about the existence of God.",
  },
  {
    title: "Quantifier Variance",
    venue: "in <em>The Routledge Handbook of Metametaphysics</em>, eds. R. Bliss & J.T.M Miller",
    link: "/papers/5D8AE1DE-E286-11EC-BE8A-F62EAAC88004.pdf",
    tags: ["metaontology", "semantics"],
    note: "An overview and limited defense of quantifier variance. (Co-authored with Rohan Sud)",
  },
  {
    title: "Dispositions Without Teleology",
    venue: "<em>Oxford Studies in Metaphysics</em>, vol. 10: 47-59",
    link: "/papers/dispositions+without+teleology.pdf",
    tags: ["metaphysics", "dispositions"],
    note: "Rejects teleological accounts of dispositions and defends our view against new objections. (Co-authored with Ryan Wasserman)",
  },
  {
    title: "The Folk Probably Do Think What You Think They Think",
    venue: "<em>Australasian Journal of Philosophy</em>, 91(3): 421–441",
    link: "/papers/metaxphi.pdf",
    tags: ["x-phi", "metaphilosophy"],
    note: "We find that philosophers can predict ‘surprising’ results in experimental philosophy; we clarify the role of experiments in philosophical analysis. (Co-authored with Billy Dunaway & Anna Edmonds)",
  },
  {
    title: "Dispositionality: Beyond the Biconditionals",
    venue: "<em>Australasian Journal of Philosophy</em>, 90(2): 321–334",
    link: "/papers/Dispositionality  Beyond The Biconditionals.pdf",
    tags: ["metaphysics", "semantics"],
    note: "What is it to be a disposition? Biconditional 'analyses' of dispositions don't go far enough.",
  },
  {
    title: "Dispositions, Conditionals, and Counterexamples",
    venue: "<em>Mind</em>, 120: 1191–1227",
    link: "/papers/fzn003.pdf",
    tags: ["metaphysics", "semantics"],
    note: "Defends our account of dispositions; considers the nature of conditionals and centering. (Co-authored with Ryan Wasserman)",
  },
  {
    title: "When Best Theories Go Bad",
    venue: "<em>Philosophy and Phenomenological Research</em>, 78(2): 392–405",
    link: "/papers/when+best+theories+fixed.pdf",
    tags: ["ontology", "metaphilosophy"],
    note: "Sometimes even realists should repudiate the ontological commitments of our best theories.",
  },
  {
    title: "A Guided Tour of Metametaphysics",
    venue: "in <em>Metametaphysics</em> (Oxford University Press)",
    link: "/papers/mmintro.pdf",
    tags: ["ontology", "metaphilosophy"],
    note: "Introduces the contemporary landscape of metaontology; offers a limited defense of ontological deflationism.",
  },
  {
    title: "On Linking Dispositions With Conditionals",
    venue: "<em>Mind</em>, 117: 59–84",
    link: "/papers/On+Linking+Dispositions.pdf",
    tags: ["metaphysics", "semantics"],
    note: "Raises new problems for conditional accounts of dispositions; offers a new account that solves them. (Co-authored with Ryan Wasserman)",
  },
  {
    title: "Safety, Content, Apriority, Self-Knowledge",
    venue: "<em>Mind</em>, 117: 59–84",
    link: "/papers/sca+published.pdf",
    tags: ["epistemology", "the apriori"],
    note: "Revises the epistemic condition of 'safety'; rethinks the a priori in light of semantic externalism",
  },
    {
    title: "A Gradable Approach to Dispositions",
    venue: "<em>The Philosophical Quarterly</em>, 57: 68–75",
    link: "/papers/gad+published.pdf",
    tags: ["metaphysics", "semantics"],
    note: "Accounts for degrees of dispositions while avoiding the problems of finks and masks. (Co-authored with Ryan Wasserman) ",
  },
];
