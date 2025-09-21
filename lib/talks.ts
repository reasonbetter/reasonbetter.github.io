// lib/talks.ts
export type Talk = {
  title: string;
  where: string;
  date: string;
  link?: string;
};

export const talks: Talk[] = [
  { title: "AI labor and human well-being", where: "World Bank ASA Workshop, Warsaw", date: "May 2025", link: "" },
  { title: "Reasoning education in a world of AI", where: "AI for Epistemics Workshop, San Francisco", date: "May 2024", link: "" },
  { title: "The ethics of lifespan extension", where: "Rutgers Summer Institute for Diversity in Philosophy", date: "July 2021", link: "" },
  { title: "A gentle introduction to Bayesian updating", where: "EA Global", date: "Oct 2020", link: "" },
  { title: "Decoupling: A technique for reducing bias", where: "EA Global", date: "Oct 2020", link: "" },
  { title: "Axiology, identity, and lifespan", where: "Global Priorities Institute (Oxford)", date: "Mar 2019", link: "" },
  { title: "On being a random sample", where: "U. Toronto & Oakland University", date: "2016", link: "" },
  { title: "Moral realism and semantic plasticity", where: "University of Oxford", date: "May 2016", link: "" },
  { title: "Fine-tuning and confirmation theory: Some complications", where: "Ohio State; Calvin College", date: "2015", link: "" },
];
