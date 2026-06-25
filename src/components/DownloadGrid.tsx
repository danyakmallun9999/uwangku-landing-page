"use client";

import React from "react";
import { Download, Clock, ExternalLink } from "lucide-react";
import Image from "next/image";

interface Platform {
  platform: string;
  tag: string;
  format: string;
  version: string;
  icon: string;
  actionLabel: string;
  actionUrl: string;
  isAvailable: boolean;
  isExternal?: boolean;
}

export default function DownloadGrid() {
  const platforms: Platform[] = [
    {
      platform: "Play Store",
      tag: "Android",
      format: "Google Play Store",
      version: "v1.0.0 Stable",
      icon: "/images/playstore-icon.png",
      actionLabel: "Temukan di Play Store",
      actionUrl: "https://play.google.com/store/apps/details?id=app.uwangku.uwangku&pcampaignid=web_share",
      isAvailable: true,
      isExternal: true,
    },
    {
      platform: "Windows",
      tag: "Desktop",
      format: ".zip — Portable",
      version: "v1.0.0 Stable",
      icon: "/images/windows-icon.png",
      actionLabel: "Unduh untuk Windows",
      actionUrl: "/uwangku-apps/Uwangku-Windows.zip",
      isAvailable: true,
      isExternal: false,
    },
    {
      platform: "Android",
      tag: "Mobile Direct",
      format: ".apk — Direct Install",
      version: "v1.0.0 Stable",
      icon: "/images/android-icon.png",
      actionLabel: "Unduh .APK Android",
      actionUrl: "https://github.com/danyakmallun9999/uwangku-landing-page/releases/download/v2.0.6/app-release.apk",
      isAvailable: true,
      isExternal: false,
    },
  ];

  return (
    <section id="download" className="py-24 md:py-32 bg-[var(--surface-container)] border-t border-[var(--outline)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--primary)]">Unduh Sekarang</span>
          <h2 className="mt-3 font-heading text-4xl font-black tracking-tight text-[var(--foreground)] sm:text-5xl">
            Tersedia di Semua<br />
            <span className="opacity-40">Platform Anda.</span>
          </h2>
        </div>

        {/* Platform Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {platforms.map((p) => (
            <div
              key={p.platform}
              className={`m3-card-outlined flex flex-col bg-[var(--background)] p-6 transition-all ${
                !p.isAvailable ? "opacity-50" : "hover:-translate-y-1"
              }`}
            >
              {/* Icon & Tag */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--outline)] bg-[var(--surface-container)] p-2">
                  <Image
                    src={p.icon}
                    alt={p.platform}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <span className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${
                  p.isAvailable
                    ? "bg-[var(--surface-container)] border border-[var(--outline)] text-[var(--foreground)] opacity-70"
                    : "bg-[var(--surface-container)] border border-dashed border-[var(--outline)] text-[var(--foreground)] opacity-40"
                }`}>
                  {p.tag}
                </span>
              </div>

              {/* Platform Info */}
              <h3 className="font-heading text-xl font-black text-[var(--foreground)]">{p.platform}</h3>
              <p className="mt-1 text-xs font-semibold text-[var(--foreground)] opacity-50 uppercase tracking-wider">
                {p.format}
              </p>
              <p className="mt-4 text-sm text-[var(--foreground)] opacity-60">{p.version}</p>

              {/* Spacer */}
              <div className="flex-1" />

              {/* Action Button */}
              <div className="mt-8">
                {p.isAvailable ? (
                  <a
                    href={p.actionUrl}
                    download={p.isExternal ? undefined : true}
                    target={p.isExternal ? "_blank" : undefined}
                    rel={p.isExternal ? "noopener noreferrer" : undefined}
                    className="m3-button-pill m3-button-primary w-full py-3 text-sm"
                  >
                    {p.actionLabel}
                    {p.isExternal ? (
                      <ExternalLink className="ml-2 h-4 w-4" />
                    ) : (
                      <Download className="ml-2 h-4 w-4" />
                    )}
                  </a>
                ) : (
                  <div className="m3-button-pill w-full py-3 text-sm border border-dashed border-[var(--outline)] text-[var(--foreground)] opacity-40 flex items-center justify-center gap-2 cursor-not-allowed">
                    <Clock className="h-4 w-4" />
                    Coming Soon
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Installation Notes */}
        <div className="mt-12 m3-card-outlined bg-[var(--background)] p-6 md:p-8">
          <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--foreground)] opacity-40 mb-6">Catatan Instalasi</h4>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 text-sm text-[var(--foreground)]">
            <div>
              <p className="font-bold mb-1">Windows (.exe)</p>
              <p className="opacity-60 leading-relaxed">
                Unduh dan jalankan installer. Jika muncul peringatan SmartScreen, klik "More Info" → "Run Anyway". Aplikasi belum ditandatangani sertifikat komersial.
              </p>
            </div>
            <div>
              <p className="font-bold mb-1">Android (.apk)</p>
              <p className="opacity-60 leading-relaxed">
                Unduh berkas APK ke ponsel. Aktifkan "Install dari sumber tidak dikenal" di pengaturan browser atau manajer berkas Anda untuk melanjutkan.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
