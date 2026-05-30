"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";

const WindowsIcon = () => (
  <svg viewBox="0 0 24 24" className="mr-2 h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 3.449L9.75 2.1v9.45H0V3.449zM0 12.45h9.75v9.45L0 20.551v-8.1zM11.25 1.899L24 0v11.55H11.25V1.899zM11.25 12.45H24v11.55l-12.75-1.9v-9.65z" />
  </svg>
);

const AndroidIcon = () => (
  <svg viewBox="0 0 24 24" className="mr-2 h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.523 15.3c-.551 0-1.002-.451-1.002-1.002 0-.551.451-1.002 1.002-1.002.551 0 1.002.451 1.002 1.002 0 .551-.451 1.002-1.002 1.002zm-11.046 0c-.551 0-1.002-.451-1.002-1.002 0-.551.451-1.002 1.002-1.002.551 0 1.002.451 1.002 1.002 0 .551-.451 1.002-1.002 1.002zM12 5.046c3.79 0 6.993 2.766 7.42 6.42H4.58c.427-3.654 3.63-6.42 7.42-6.42zm7.986 6.84c-.053-.418-.152-.823-.292-1.21L21.46 9.42c.28-.27.28-.71 0-.98l-.02-.02c-.27-.28-.71-.28-.98 0l-1.63 1.63c-1.63-1.42-3.81-2.28-6.19-2.28s-4.56.86-6.19 2.28L4.82 8.42c-.27-.28-.71-.28-.98 0l-.02.02c-.28.27-.28.71 0 .98l1.766 1.256c-.14.387-.239.792-.292 1.21h14.712zM2 12.45h20v6.1c0 1.1-.9 2-2 2h-16c-1.1 0-2-.9-2-2v-6.1z" />
  </svg>
);

export default function HeroSection() {
  const [os, setOs] = useState<"windows" | "android" | "other">("windows");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const getOS = () => {
      const userAgent = window.navigator.userAgent.toLowerCase();
      if (userAgent.indexOf("win") !== -1) return "windows";
      if (userAgent.indexOf("android") !== -1 || userAgent.indexOf("mobi") !== -1 || userAgent.indexOf("iphone") !== -1) return "android";
      return "windows";
    };
    setOs(getOS());
  }, []);

  const downloadLinks = {
    windows: "/uwangku-apps/Uwangku-Windows.zip",
    android: "/uwangku-apps/Uwangku.apk",
  };

  return (
    <section className="relative pt-8 pb-24 md:pt-12 md:pb-32 bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          
          {/* Hero Typography & CTA */}
          <div className="flex flex-col text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mx-auto lg:mx-0"
            >
              <span className="inline-flex items-center rounded-full border border-[var(--outline)] bg-[var(--surface-container)] px-4 py-1.5 text-xs font-bold tracking-wide text-[var(--foreground)] uppercase">
                Versi 1.0 Tersedia
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 font-heading text-5xl font-black tracking-tight text-[var(--foreground)] sm:text-6xl md:text-7xl lg:leading-[1.05]"
            >
              Uang Anda.<br />
              Dalam Kendali.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg font-medium text-[var(--foreground)] opacity-75 sm:text-xl max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              Pencatatan keuangan minimalis dengan arsitektur data local-first, OCR cerdas, dan input berbasis teks AI. Aman, privat, tanpa friksi.
            </motion.p>

            {/* Dynamic M3 Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
            >
              {mounted && os === "android" ? (
                <a
                  href={downloadLinks.android}
                  download
                  className="m3-button-pill m3-button-primary w-full px-8 py-4 text-base sm:w-auto hover:-translate-y-0.5"
                >
                  <AndroidIcon />
                  Unduh .APK Android
                  <ArrowDown className="ml-2 h-5 w-5" />
                </a>
              ) : (
                <a
                  href={downloadLinks.windows}
                  download
                  className="m3-button-pill m3-button-primary w-full px-8 py-4 text-base sm:w-auto hover:-translate-y-0.5"
                >
                  <WindowsIcon />
                  Unduh untuk Windows
                  <ArrowDown className="ml-2 h-5 w-5" />
                </a>
              )}

              <a
                href="#download"
                className="m3-button-pill m3-button-outlined w-full px-8 py-4 text-base sm:w-auto bg-[var(--surface-container)] hover:-translate-y-0.5"
              >
                Pilihan Platform
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </motion.div>
          </div>

          {/* M3 Flat Line-Art Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full max-w-[380px]"
            >
              {/* Flat Device Frame */}
              <div className="m3-card-outlined p-2 bg-[var(--surface-container)]">
                
                {/* Inner Screen Area */}
                <div className="rounded-[18px] bg-[var(--background)] border border-[var(--outline)] px-5 pt-8 pb-6 flex flex-col h-[600px] overflow-hidden relative">
                  
                  {/* Top Nav Line-Art */}
                  <div className="flex justify-between items-center mb-8">
                    <div className="flex gap-2">
                      <div className="h-4 w-4 rounded-full border-2 border-[var(--primary)]" />
                      <div className="h-4 w-12 rounded-full bg-[var(--outline)]" />
                    </div>
                    <div className="h-8 w-8 rounded-full bg-[var(--outline)]" />
                  </div>

                  {/* Balance Card Flat */}
                  <div className="m3-card-filled p-5 mb-8 flex flex-col relative overflow-hidden">
                    {/* Decorative geometric accent */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-[var(--primary)] rounded-bl-[100px] opacity-10" />
                    <span className="text-[10px] font-bold text-[var(--foreground)] opacity-50 uppercase tracking-widest mb-1">
                      Total Saldo
                    </span>
                    <span className="font-heading text-3xl font-black text-[var(--foreground)]">
                      Rp 12.450.000
                    </span>
                  </div>

                  {/* Mini Chart Line-Art Representation */}
                  <div className="mb-8 border border-[var(--outline)] rounded-2xl p-4 bg-[var(--surface-container)]">
                    <div className="flex justify-between items-end h-16 gap-2">
                      {[30, 45, 25, 60, 40, 80, 50].map((height, i) => (
                        <div key={i} className="flex-1 bg-[var(--outline)] rounded-t-sm" style={{ height: `${height}%` }}>
                          {i === 5 && <div className="w-full h-full bg-[var(--accent)] rounded-t-sm" />}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Transaction List Line-Art */}
                  <div className="flex-1">
                    <h4 className="text-xs font-bold text-[var(--foreground)] mb-4">Hari Ini</h4>
                    <div className="space-y-3">
                      
                      {/* Item 1 */}
                      <div className="flex items-center justify-between pb-3 border-b border-[var(--outline)]">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-xl bg-[var(--outline)] flex items-center justify-center">
                            <div className="h-4 w-4 bg-[var(--foreground)] opacity-20 rounded-sm" />
                          </div>
                          <div className="space-y-1.5">
                            <div className="h-3 w-20 bg-[var(--primary)] rounded-full opacity-80" />
                            <div className="h-2 w-12 bg-[var(--outline)] rounded-full" />
                          </div>
                        </div>
                        <div className="h-3 w-16 bg-[var(--primary)] rounded-full" />
                      </div>

                      {/* Item 2 */}
                      <div className="flex items-center justify-between pb-3 border-b border-[var(--outline)]">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-xl bg-[var(--outline)] flex items-center justify-center">
                            <div className="h-4 w-4 bg-[var(--foreground)] opacity-20 rounded-sm" />
                          </div>
                          <div className="space-y-1.5">
                            <div className="h-3 w-24 bg-[var(--primary)] rounded-full opacity-80" />
                            <div className="h-2 w-16 bg-[var(--outline)] rounded-full" />
                          </div>
                        </div>
                        <div className="h-3 w-16 bg-[var(--foreground)] opacity-40 rounded-full" />
                      </div>

                    </div>
                  </div>

                  {/* Bottom Nav Flat */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 border-t border-[var(--outline)] bg-[var(--surface-container)] flex items-center justify-around px-4">
                    <div className="h-6 w-6 rounded-md bg-[var(--primary)]" />
                    <div className="h-6 w-6 rounded-md bg-[var(--outline)]" />
                    <div className="relative -top-5 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary)] border-4 border-[var(--surface-container)]">
                      <div className="h-4 w-4 bg-[var(--on-primary)] rounded-sm" />
                    </div>
                    <div className="h-6 w-6 rounded-md bg-[var(--outline)]" />
                    <div className="h-6 w-6 rounded-md bg-[var(--outline)]" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
