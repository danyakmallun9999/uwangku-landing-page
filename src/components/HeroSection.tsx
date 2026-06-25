"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";

const Logo3D = dynamic(() => import("@/components/Logo3D"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[500px] md:h-[600px] w-full items-center justify-center">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-[var(--outline)] border-t-[var(--primary)]" />
    </div>
  ),
});

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
    android: "https://play.google.com/store/apps/details?id=app.uwangku.uwangku&pcampaignid=web_share",
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
                  target="_blank"
                  rel="noopener noreferrer"
                  className="m3-button-pill m3-button-primary w-full px-8 py-4 text-base sm:w-auto hover:-translate-y-0.5"
                >
                  <AndroidIcon />
                  Unduh di Google Play
                  <ArrowRight className="ml-2 h-5 w-5" />
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

          {/* 3D Logo Model */}
          <div className="relative flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="w-full"
            >
              <Logo3D />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
