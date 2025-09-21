// lib/talks.ts
export type Talk = {
  title: string;
  where: string;
  date: string;
  link?: string;
};

export const talks: Talk[] = [
  { title: "Paine & Pigou & George & Claude:\nSocial surplus, externalities, and an AI dividend", where: "Technical AI Governance Forum, London", date: "Aug 2025", link: "" },
  { title: "AI labor and human well-being", where: "World Bank ASA Workshop, Warsaw", date: "May 2025", link: "" },
  { title: "Reasoning education in a world of AI", where: "AI for Epistemics Workshop, San Francisco", date: "May 2024", link: "" },
  { title: "The ethics of lifespan extension", where: "Rutgers Summer Institute for Diversity in Philosophy", date: "July 2021", link: "" },
];
