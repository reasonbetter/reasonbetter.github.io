// app/teaching/[slug]/page.tsx
import { COURSES } from "@/lib/courses";
import Link from "next/link";

export const dynamicParams = false; // 
export async function generateStaticParams() { // 
  return COURSES.map(c => ({ slug: c.slug }));
}

export default function CoursePage({ params }: { params: { slug: string } }) {
  const course = COURSES.find(c => c.slug === params.slug);
  if (!course) return <div className="mx-auto max-w-3xl p-6">Course not found.</div>;

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <Link href="/#teaching" className="text-sm underline">← Upcoming Courses</Link>
      <h1 className="mt-2 text-3xl font-semibold font-garamond">{course.code}: {course.name}</h1>
      <p className="mt-4 leading-7 text-slate-700 dark:text-slate-300">{course.desc}</p>
      {course.readings.length > 0 && (
        <>
          <h2 className="mt-10 text-2xl font-semibold font-garamond">Readings</h2>
          <div className="mt-4 space-y-6">
            {course.readings.map((sec, i) => (
              <section key={i} className="rounded-lg border border-slate-200 dark:border-slate-800 p-4">
                <h3 className="text-lg font-medium font-garamond">{sec.title}</h3>
                <ul className="mt-3 list-disc pl-6 space-y-1">
                  {sec.items.map((it, j) => (
                    <li key={j}>
                      {it.href ? <a className="underline" href={it.href} target="_blank" rel="noreferrer">{it.title}</a> : it.title}
                      {it.note ? <span className="text-slate-500 dark:text-slate-400"> — {it.note}</span> : null}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </>
      )}
    </main>
  );
}
