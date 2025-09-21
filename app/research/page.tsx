// app/research/page.tsx
"use client";
import { useEffect } from "react";

export default function ResearchRedirect() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.location.replace("/#research");
    }
  }, []);
  return (
    <main className="mx-auto max-w-2xl px-4 py-16">
      <p>Redirecting to the <a className="underline" href="/#research">Research</a> section…</p>
    </main>
  );
}
