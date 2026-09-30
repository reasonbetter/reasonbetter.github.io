import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Inter } from "next/font/google";
import { COURSES, COURSE_ALIASES, getCourse } from "@/lib/courses";

const titleFont = Inter({
  subsets: ["latin"],
  weight: ["600", "700"],
  fallback: ["system-ui", "-apple-system", "Segoe UI", "Helvetica", "Arial", "sans-serif"],
});

export const dynamicParams = false;

export function generateStaticParams() {
  return [...COURSES.map(course => course.slug), ...Object.keys(COURSE_ALIASES)]
    .map(slug => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const course = getCourse(params.slug);
  if (!course) return { title: "Course not found — David Manley" };
  return {
    title: `${course.code}: ${course.name} — David Manley`,
    description: course.desc,
  };
}

export default function CoursePage({ params }: { params: { slug: string } }) {
  const course = getCourse(params.slug);
  if (!course) notFound();

  return (
    <main className="mx-auto max-w-4xl px-4 py-10 md:py-16">
      <Link
        href="/#teaching"
        className="text-sm font-medium text-[var(--accent)] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
      >
        ← All courses
      </Link>
      <div className="mt-8 border-b border-slate-200 pb-8 dark:border-slate-800">
        <p className="text-sm font-semibold tracking-wide text-[var(--accent)]">{course.code}</p>
        <h1 className={`mt-2 text-3xl font-semibold leading-tight tracking-tight md:text-4xl ${titleFont.className}`}>
          {course.name}
        </h1>
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">{course.status}</p>
        <div className="mt-6 space-y-4 leading-7 text-slate-700 dark:text-slate-300">
          <p>{course.desc}</p>
          {course.details?.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </div>

      {course.readings.length > 0 && (
        <section aria-labelledby="readings-heading" className="mt-10">
          <h2 id="readings-heading" className={`text-2xl font-semibold tracking-tight ${titleFont.className}`}>{course.readingHeading ?? "Readings"}</h2>
          {course.readingIntro && (
            <p className="mt-3 leading-6 text-slate-600 dark:text-slate-400">{course.readingIntro}</p>
          )}
          <div className="mt-6 space-y-6">
            {course.readings.map(section => (
              <section key={section.title} className="rounded-lg border border-slate-200 p-5 dark:border-slate-800 md:p-6">
                <h3 className={`text-lg font-semibold ${titleFont.className}`}>{section.title}</h3>
                {section.description && (
                  <p className="mt-3 leading-7 text-slate-700 dark:text-slate-300">{section.description}</p>
                )}
                <ul className="mt-4 list-disc space-y-3 pl-5 leading-6 text-slate-700 dark:text-slate-300">
                  {section.items.map((item, index) => (
                    <li key={`${item.title}-${index}`} className="pl-1">
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                          className="text-[var(--accent)] underline decoration-slate-300 underline-offset-4 hover:decoration-current dark:decoration-slate-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
                        >
                          {item.title}
                          <span className="sr-only"> (opens in a new tab)</span>
                        </a>
                      ) : item.title}
                      {item.optional && (
                        <span className="ml-2 inline-block rounded bg-[var(--accent-bg)] px-2 py-0.5 text-xs font-medium text-[var(--accent)]">Optional</span>
                      )}
                      {item.note && <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{item.note}</p>}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
