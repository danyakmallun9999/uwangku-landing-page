"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggle } = useTheme();

  return (
    <nav className="sticky top-0 z-50 w-full bg-[var(--background)] border-b border-[var(--outline)] transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo Brand — logo only, no background container */}
          <div className="flex items-center gap-2.5">
            <Link href="/" className="flex items-center gap-2.5 transition-opacity hover:opacity-85">
              <Image
                src="/images/uwangku-logo.png"
                alt="Uwangku Logo"
                width={32}
                height={32}
                className="object-contain"
              />
              <span className="font-heading text-xl font-extrabold tracking-tight text-[var(--foreground)]">
                Uwangku
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="/#fitur"
              className="text-sm font-semibold text-[var(--foreground)] opacity-70 transition-opacity hover:opacity-100"
            >
              Fitur Utama
            </a>
            <a
              href="/#keamanan"
              className="text-sm font-semibold text-[var(--foreground)] opacity-70 transition-opacity hover:opacity-100"
            >
              Arsitektur Data
            </a>
            <a
              href="/#download"
              className="text-sm font-semibold text-[var(--foreground)] opacity-70 transition-opacity hover:opacity-100"
            >
              Unduhan
            </a>
          </div>

          {/* Right: Theme Toggle + CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Dark/Light Mode Toggle */}
            <button
              id="theme-toggle-btn"
              onClick={toggle}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--outline)] bg-[var(--surface-container)] text-[var(--foreground)] opacity-70 transition-all hover:opacity-100 hover:bg-[var(--surface-high)]"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>

            {/* Download CTA */}
            <a
              href="/#download"
              id="navbar-cta-btn"
              className="m3-button-pill m3-button-primary px-5 py-2.5 text-sm"
            >
              Unduh Gratis
            </a>
          </div>

          {/* Mobile: Theme Toggle + Hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--outline)] bg-[var(--surface-container)] text-[var(--foreground)] opacity-70 transition-all hover:opacity-100"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-full p-2 text-[var(--foreground)] hover:bg-[var(--surface-container)] transition-colors focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Buka menu utama</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden border-b border-[var(--outline)] bg-[var(--surface-container)] px-4 py-3">
          <div className="space-y-2">
            <a
              href="/#fitur"
              onClick={() => setIsOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-base font-semibold text-[var(--foreground)] hover:bg-[var(--outline)] transition-colors"
            >
              Fitur Utama
            </a>
            <a
              href="/#keamanan"
              onClick={() => setIsOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-base font-semibold text-[var(--foreground)] hover:bg-[var(--outline)] transition-colors"
            >
              Arsitektur Data
            </a>
            <a
              href="/#download"
              onClick={() => setIsOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-base font-semibold text-[var(--foreground)] hover:bg-[var(--outline)] transition-colors"
            >
              Unduhan
            </a>
            <a
              href="/#download"
              onClick={() => setIsOpen(false)}
              className="m3-button-pill m3-button-primary mt-4 w-full py-3 text-base"
            >
              Unduh Gratis
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
