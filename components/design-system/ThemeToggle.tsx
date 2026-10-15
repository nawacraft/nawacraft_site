"use client";

import React, { useSyncExternalStore } from "react";
import { Sun, Moon } from "lucide-react";

// SSR-safe subscription helper for checking client mount
function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getThemeSnapshot(): boolean {
  if (typeof window === "undefined") return false;
  const hasDarkClass = document.documentElement.classList.contains("dark");
  const stored = localStorage.getItem("nawacraft-theme");
  if (stored === "dark") return true;
  if (stored === "light") return false;
  return hasDarkClass || window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function getServerSnapshot(): boolean {
  return false;
}

export const ThemeToggle: React.FC = () => {
  const isClient = useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );

  const isDark = useSyncExternalStore(
    subscribe,
    getThemeSnapshot,
    getServerSnapshot
  );

  const toggleTheme = () => {
    const nextDark = !isDark;
    if (nextDark) {
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("nawacraft-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("nawacraft-theme", "light");
    }
    // Dispatch storage event so all subscribers re-evaluate
    window.dispatchEvent(new Event("storage"));
  };

  if (!isClient) {
    return (
      <div className="h-9 w-24 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-800" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme color scheme"
      className="relative flex items-center justify-center h-9 px-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors shadow-xs gap-2 text-xs font-medium cursor-pointer"
    >
      {isDark ? (
        <>
          <Sun className="h-4 w-4 text-warning-500" />
          <span>Light Mode</span>
        </>
      ) : (
        <>
          <Moon className="h-4 w-4 text-primary-600" />
          <span>Dark Mode</span>
        </>
      )}
    </button>
  );
};
