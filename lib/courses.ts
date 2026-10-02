import courseContent from "@/lib/course-content.json";

export type ReadingItem = {
  title: string;
  href?: string;
  note?: string;
  optional?: boolean;
  parts?: ReadingItem[];
};
export type ReadingSection = { title: string; description?: string; items: ReadingItem[]; furtherReading?: ReadingItem[] };
export type Course = {
  slug: string;
  code: string;
  name: string;
  status: string;
  summary: string;
  desc: string;
  details?: string[];
  readingHeading?: string;
  readingIntro?: string;
  readings: ReadingSection[];
};

// Sourced from Manley's syllabi and Canvas schedules. See the source notes in
// the task outputs for the offering and evidence behind each reading list.
export const COURSES: Course[] = courseContent;

// Keep existing bookmarks working after course updates.
export const COURSE_ALIASES: Record<string, string> = {
  "phil-450": "phil-421",
  "phil-611-future": "phil-611-axiology",
};

export function getCourse(slug: string) {
  return COURSES.find(course => course.slug === (COURSE_ALIASES[slug] ?? slug));
}
