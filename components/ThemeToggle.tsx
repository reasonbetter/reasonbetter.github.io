// components/ThemeToggle.tsx
"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const saved = localStorage.getItem("dm-theme");
    const isDark = saved === "dark";
    document.documentElement.classList.toggle("dark", isDark);
    setDark(isDark);
  }, []);
  return (
    <button
      aria-label="Toggle theme"
      className="rounded-md border px-2 py-1 text-[1.05rem] md:text-[0.95rem] font-medium"
      onClick={() => {
        const next = !dark;
        document.documentElement.classList.toggle("dark", next);
        localStorage.setItem("dm-theme", next ? "dark" : "light");
        setDark(next);
      }}
    >
      {dark ? "Light" : "Dark"}
    </button>
  );
}
