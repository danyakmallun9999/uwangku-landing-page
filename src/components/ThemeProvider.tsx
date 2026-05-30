"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
  toggle: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "light",
  toggle: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  // On mount: read persisted preference (default = light)
  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("uwangku-theme") as Theme | null;
    const resolved: Theme = stored ?? "light";
    setTheme(resolved);
    applyTheme(resolved);
  }, []);

  const applyTheme = (t: Theme) => {
    const html = document.documentElement;
    // Temporarily disable transitions to prevent flash
    html.classList.add("no-transitions");
    if (t === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
    // Re-enable transitions after paint
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        html.classList.remove("no-transitions");
      });
    });
  };

  const toggle = () => {
    const next: Theme = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem("uwangku-theme", next);
    applyTheme(next);
  };

  // Prevent SSR mismatch — render children regardless but apply class server-side too
  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
