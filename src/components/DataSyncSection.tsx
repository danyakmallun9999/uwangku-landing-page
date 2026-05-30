"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wifi, WifiOff, Database, Server, Smartphone, ArrowRight, ShieldCheck, RefreshCw } from "lucide-react";

export default function DataSyncSection() {
  const [isOnline, setIsOnline] = useState(true);

  return (
    <section id="keamanan" className="py-24 md:py-32 bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-start">

          {/* Left — Copy */}
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--primary)]">Arsitektur Data</span>
            <h2 className="mt-3 font-heading text-4xl font-black tracking-tight text-[var(--foreground)] sm:text-5xl">
              Local-First.<br />
              <span className="opacity-40">Sinkronisasi Aman.</span>
            </h2>
            <p className="mt-6 text-lg text-[var(--foreground)] opacity-70 leading-relaxed max-w-lg">
              Setiap transaksi disimpan terlebih dahulu ke database SQLite lokal di perangkat Anda. Sinkronisasi ke PocketBase Cloud hanya terjadi saat koneksi tersedia — dengan enkripsi penuh.
            </p>

            {/* Properties List */}
            <div className="mt-10 space-y-4">
              {[
                { icon: Database, label: "SQLite Lokal", desc: "Data primer tersimpan di perangkat, bukan di server" },
                { icon: ShieldCheck, label: "Enkripsi Penuh", desc: "Komunikasi SSE terenkripsi, akun diisolasi by user_id" },
                { icon: RefreshCw, label: "Sinkronisasi Realtime", desc: "Realtime push ke semua device saat tersambung" },
              ].map(({ icon: Icon, label, desc }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl border border-[var(--outline)] bg-[var(--surface-container)]">
                    <Icon className="h-5 w-5 text-[var(--foreground)]" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[var(--foreground)]">{label}</p>
                    <p className="text-sm text-[var(--foreground)] opacity-60">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Simulation Toggle */}
            <div className="mt-10">
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--foreground)] opacity-40 mb-3">
                Simulasi Koneksi
              </p>
              <div className="inline-flex items-center rounded-full border border-[var(--outline)] bg-[var(--surface-container)] p-1">
                <button
                  onClick={() => setIsOnline(true)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all ${
                    isOnline ? "bg-[var(--primary)] text-[var(--on-primary)]" : "text-[var(--foreground)] opacity-60"
                  }`}
                >
                  <Wifi className="h-4 w-4" /> Online
                </button>
                <button
                  onClick={() => setIsOnline(false)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all ${
                    !isOnline ? "bg-[var(--primary)] text-[var(--on-primary)]" : "text-[var(--foreground)] opacity-60"
                  }`}
                >
                  <WifiOff className="h-4 w-4" /> Offline
                </button>
              </div>
            </div>
          </div>

          {/* Right — Architecture Diagram (Flat) */}
          <div className="m3-card-outlined bg-[var(--surface-container)] p-6 md:p-8">
            <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--foreground)] opacity-40 mb-8">Diagram Aliran Data</p>

            {/* Node: Device + SQLite */}
            <div className="rounded-2xl border border-[var(--outline)] bg-[var(--background)] p-4 mb-2">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-[var(--outline)] bg-[var(--surface-container)]">
                  <Smartphone className="h-5 w-5 text-[var(--foreground)]" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-black text-[var(--foreground)]">Perangkat Anda</p>
                  <p className="text-xs text-[var(--foreground)] opacity-50">SQLite Database Lokal (Enkripsi AES-256)</p>
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--primary)]">
                  <Database className="h-4 w-4 text-[var(--on-primary)]" />
                </div>
              </div>

              {/* Offline data note */}
              <div className="mt-3 rounded-xl border border-[var(--outline)] bg-[var(--surface-container)] px-3 py-2">
                <p className="text-[10px] font-bold text-[var(--foreground)] opacity-60">
                  ✓ Dapat dibaca secara penuh saat Offline
                </p>
              </div>
            </div>

            {/* Sync Pipe Arrow */}
            <div className="flex flex-col items-center py-3">
              <div className="flex flex-col items-center gap-1">
                <AnimatePresence mode="wait">
                  {isOnline ? (
                    <motion.div
                      key="stream"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center gap-1"
                    >
                      {/* Animated dots going down */}
                      <div className="relative h-12 w-1 rounded-full bg-[var(--outline)] overflow-hidden">
                        {[0,1,2].map(i => (
                          <motion.div
                            key={i}
                            animate={{ y: [0, 48, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.4, ease: "linear" }}
                      className="absolute w-full h-3 rounded-full bg-[var(--primary)]"
                            style={{ top: -12 }}
                          />
                        ))}
                      </div>
                      <span className="text-[9px] font-bold text-[var(--primary)] uppercase tracking-wider">SSE Realtime Sync</span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="paused"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center gap-1"
                    >
                      <div className="h-12 w-1 rounded-full border border-dashed border-[var(--outline)] bg-transparent" />
                      <span className="text-[9px] font-bold text-[var(--foreground)] opacity-40 uppercase tracking-wider">Sinkronisasi Tertunda</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Node: PocketBase Cloud */}
            <div className={`rounded-2xl border p-4 transition-all ${
              isOnline ? "border-[var(--outline)] bg-[var(--background)]" : "border-dashed border-[var(--outline)] bg-[var(--surface-container)] opacity-50"
            }`}>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-[var(--outline)] bg-[var(--surface-container)]">
                  <Server className="h-5 w-5 text-[var(--foreground)]" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-black text-[var(--foreground)]">PocketBase Cloud</p>
                  <p className="text-xs text-[var(--foreground)] opacity-50">Server Sinkronisasi Linux (Terenkripsi)</p>
                </div>
                {isOnline ? (
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--outline)] bg-[var(--surface-container)]">
                    <div className="h-2.5 w-2.5 rounded-full bg-[var(--primary)]" />
                  </div>
                ) : (
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-dashed border-[var(--outline)] bg-[var(--surface-container)]">
                    <div className="h-2.5 w-2.5 rounded-full bg-[var(--outline)]" />
                  </div>
                )}
              </div>
            </div>

            {/* Privacy Note */}
            <div className="mt-6 rounded-2xl border border-[var(--outline)] bg-[var(--background)] p-4">
              <p className="text-xs font-semibold text-[var(--foreground)] opacity-70 leading-relaxed">
                <ShieldCheck className="inline h-3.5 w-3.5 mr-1 text-[var(--primary)]" />
                Data Anda tidak pernah dijual. Sinkronisasi cloud bersifat opsional dan hanya terjadi dengan izin eksplisit Anda.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
