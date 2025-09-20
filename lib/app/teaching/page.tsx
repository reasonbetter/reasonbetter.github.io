// app/teaching/page.tsx
import Link from "next/link";
import { COURSES } from "@/lib/courses";

export default function TeachingIndex() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-semibold">Teaching</h1>
      <p className="mt-3 max-w-3xl text-slate-700 dark:text-slate-300">
        Current and recurring courses with brief descriptions and reading lists.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {COURSES.map(c => (
          <Link key={c.slug} href={`/teaching/${c.slug}`} className="rounded-xl border border-slate-200 dark:border-slate-800 p-5 hover:shadow">
            <h2 className="text-xl font-medium">{c.code}: {c.name}</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 line-clamp-4">{c.desc}</p>
            <span className="mt-3 inline-block text-sm underline">View details →</span>
          </Link>
        ))}
      </div>

      <div className="mt-10 text-sm">
        <p className="text-slate-600 dark:text-slate-400">
          Full teaching blurbs adapted from your Squarespace <em>Teaching</em> page. :contentReference[oaicite:7]{index=7}
        </p>
      </div>
    </main>
  );
}
