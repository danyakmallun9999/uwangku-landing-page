"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--outline)] bg-[var(--background)] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:gap-6">

          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 rounded-md border border-[var(--outline)] bg-[var(--surface-container)] p-0.5 flex items-center justify-center">
              <Image src="/images/uwangku-logo.png" alt="Uwangku" width={20} height={20} className="object-contain" />
            </div>
            <span className="font-heading text-base font-extrabold text-[var(--foreground)]">Uwangku</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold text-[var(--foreground)] opacity-50">
            <Link href="/terms" className="hover:opacity-100 transition-opacity">Syarat & Ketentuan</Link>
            <Link href="/privacy" className="hover:opacity-100 transition-opacity">Kebijakan Privasi</Link>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">GitHub</a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-[var(--foreground)] opacity-40">
            &copy; {new Date().getFullYear()} Uwangku.
          </p>
        </div>
      </div>
    </footer>
  );
}
