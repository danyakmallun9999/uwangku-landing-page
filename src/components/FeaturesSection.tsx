"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, Scan, Bot, Sparkles, Check } from "lucide-react";

interface Preset {
  text: string;
  tipe: "masuk" | "keluar";
  nominal: string;
  kategori: string;
  catatan: string;
}

export default function FeaturesSection() {
  // --- Numpad State ---
  const [numpadValue, setNumpadValue] = useState("0");
  const [selectedCategory, setSelectedCategory] = useState("Makanan");
  const categories = ["Makanan", "Transport", "Hiburan", "Tagihan"];

  const formatRupiah = (valStr: string) => {
    const num = parseInt(valStr, 10);
    if (!valStr || valStr === "0" || isNaN(num)) return "Rp 0";
    return "Rp " + num.toLocaleString("id-ID");
  };

  const handleNumpadClick = (key: string) => {
    if (key === "C") {
      setNumpadValue("0");
    } else if (key === "DEL") {
      setNumpadValue((prev) => (prev.length > 1 ? prev.slice(0, -1) : "0"));
    } else if (key === "000") {
      setNumpadValue((prev) => (prev === "0" ? "0" : prev + "000"));
    } else {
      setNumpadValue((prev) => (prev === "0" ? key : prev + key));
    }
  };

  // --- NLP Simulator State ---
  const presets: Preset[] = [
    { text: "Gaji masuk 5 juta", tipe: "masuk", nominal: "Rp 5.000.000", kategori: "Pendapatan", catatan: "Gaji Bulanan" },
    { text: "Beli kopi starbucks 50 ribu", tipe: "keluar", nominal: "Rp 50.000", kategori: "Makanan & Minuman", catatan: "Kopi Starbucks" },
    { text: "Bayar kostan 1.5 juta", tipe: "keluar", nominal: "Rp 1.500.000", kategori: "Tagihan & Kost", catatan: "Bayar Kostan" },
  ];

  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isParsing, setIsParsing] = useState(false);
  const [parsedResult, setParsedResult] = useState<Preset | null>(null);

  const startSimulator = (index: number) => {
    if (isTyping || isParsing) return;
    setActiveIdx(index);
    setTypedText("");
    setParsedResult(null);
    setIsTyping(true);

    const fullText = presets[index].text;
    let i = 0;
    const interval = setInterval(() => {
      setTypedText((prev) => prev + fullText.charAt(i));
      i++;
      if (i >= fullText.length) {
        clearInterval(interval);
        setIsTyping(false);
        setIsParsing(true);
        setTimeout(() => {
          setIsParsing(false);
          setParsedResult(presets[index]);
        }, 700);
      }
    }, 45);
  };

  const pillVariants = [
    "bg-[var(--surface-container)] border border-[var(--outline)] text-[var(--foreground)] opacity-60",
    "bg-[var(--primary)] text-[var(--on-primary)]",
  ];

  return (
    <section id="fitur" className="py-24 md:py-32 bg-[var(--surface-container)] border-t border-b border-[var(--outline)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--primary)]">Input Engine</span>
          <h2 className="mt-3 font-heading text-4xl font-black tracking-tight text-[var(--foreground)] sm:text-5xl">
            Tiga Cara Input.<br />
            <span className="opacity-40">Satu Aplikasi.</span>
          </h2>
        </div>

        {/* Features Grid — 3 Cards */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

          {/* ─── Pillar 1: Custom Numpad ─── */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 24 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="m3-card-outlined flex flex-col bg-[var(--background)] p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[var(--outline)] bg-[var(--surface-container)]">
                <Calculator className="h-5 w-5 text-[var(--foreground)]" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-[var(--foreground)]">Quick Entry</h3>
                <p className="text-xs text-[var(--foreground)] opacity-50">Custom Numpad Bawaan</p>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-[var(--foreground)] opacity-70 mb-8">
              Input nominal tanpa keyboard HP yang menghalangi layar. Gunakan numpad bawaan yang cepat dan presisi.
            </p>

            {/* Interactive Numpad */}
            <div className="flex-1 rounded-2xl border border-[var(--outline)] bg-[var(--surface-container)] p-4">
              {/* Kategori Selector */}
              <div className="flex gap-2 mb-3 overflow-x-auto pb-1">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-[10px] font-bold px-3 py-1.5 rounded-full whitespace-nowrap transition-all ${
                      selectedCategory === cat
                        ? "bg-[var(--primary)] text-[var(--on-primary)]"
                        : "bg-[var(--background)] border border-[var(--outline)] text-[var(--foreground)] opacity-60"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Display */}
              <div className="mb-4 rounded-xl border border-[var(--outline)] bg-[var(--background)] px-4 py-3 text-right">
                <p className="text-[10px] text-[var(--foreground)] opacity-40 uppercase tracking-wider font-semibold">Nominal</p>
                <p className="font-heading text-2xl font-black text-[var(--foreground)]">
                  {formatRupiah(numpadValue)}
                </p>
                <p className="text-[10px] text-[var(--primary)] font-bold mt-1">{selectedCategory}</p>
              </div>

              {/* Keys */}
              <div className="grid grid-cols-3 gap-2 text-sm font-bold text-[var(--foreground)]">
                {["1","2","3","4","5","6","7","8","9","C","0","000"].map((key) => (
                  <button
                    key={key}
                    onClick={() => handleNumpadClick(key)}
                    className={`flex items-center justify-center rounded-xl border border-[var(--outline)] py-3 transition-all active:scale-95 hover:bg-[var(--outline)] ${
                      key === "C" ? "text-rose-500" : "bg-[var(--background)]"
                    }`}
                  >
                    {key}
                  </button>
                ))}
              </div>
              <button
                onClick={() => handleNumpadClick("DEL")}
                className="mt-2 w-full rounded-xl border border-[var(--outline)] py-2.5 text-xs font-bold text-rose-500 bg-[var(--background)] hover:bg-rose-50 active:scale-95 transition-all"
              >
                ← Hapus
              </button>
            </div>
          </motion.div>

          {/* ─── Pillar 2: Scan OCR ─── */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 24 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="m3-card-outlined flex flex-col bg-[var(--background)] p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[var(--outline)] bg-[var(--surface-container)]">
                <Scan className="h-5 w-5 text-[var(--foreground)]" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-[var(--foreground)]">Scan OCR</h3>
                <p className="text-xs text-[var(--foreground)] opacity-50">AI Ekstraksi Struk</p>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-[var(--foreground)] opacity-70 mb-8">
              Foto struk belanja Anda. AI kami mengekstrak nominal, nama toko, dan membuat draf transaksi secara otomatis.
            </p>

            {/* OCR Visualizer — Flat Design */}
            <div className="flex-1 rounded-2xl border border-[var(--outline)] bg-[var(--surface-container)] p-4 overflow-hidden relative flex flex-col justify-between">
              {/* Receipt outline mockup */}
              <div className="rounded-xl border border-dashed border-[var(--outline)] bg-[var(--background)] p-4 font-mono text-[10px] text-[var(--foreground)] relative overflow-hidden">
                <p className="font-bold text-center mb-2 opacity-70">KOPI MAKMUR</p>
                <div className="space-y-1 opacity-60">
                  <div className="flex justify-between"><span>Kopi Susu</span><span>Rp 35.000</span></div>
                  <div className="flex justify-between"><span>Croissant</span><span>Rp 25.000</span></div>
                  <div className="flex justify-between border-t border-dashed border-[var(--outline)] pt-1 font-bold opacity-100">
                    <span>TOTAL</span><span>Rp 66.000</span>
                  </div>
                </div>

                {/* Scan Progress Line — flat accent */}
                <motion.div
                  animate={{ top: ["5%", "95%", "5%"] }}
                  transition={{ repeat: Infinity, duration: 3.5, ease: "linear" }}
                  className="absolute left-0 right-0 h-[2px] bg-[var(--primary)] z-10 opacity-70"
                />

                {/* Highlight box on TOTAL row */}
                <div className="absolute bottom-4 left-3 right-3 h-[18px] border border-[var(--primary)] rounded opacity-60" />
              </div>

              {/* Extracted fields */}
              <div className="mt-4 grid grid-cols-2 gap-2">
                <div className="rounded-xl border border-[var(--outline)] bg-[var(--background)] p-2">
                  <p className="text-[9px] font-bold uppercase tracking-wider text-[var(--foreground)] opacity-40">Nominal</p>
                  <p className="text-sm font-black text-[var(--primary)] mt-0.5">Rp 66.000</p>
                </div>
                <div className="rounded-xl border border-[var(--outline)] bg-[var(--background)] p-2">
                  <p className="text-[9px] font-bold uppercase tracking-wider text-[var(--foreground)] opacity-40">Toko</p>
                  <p className="text-sm font-black text-[var(--foreground)] mt-0.5">Kopi Makmur</p>
                </div>
                <div className="col-span-2 flex items-center gap-2 rounded-xl border border-[var(--primary)] bg-[var(--background)] p-2">
                  <Check className="h-4 w-4 text-[var(--primary)] flex-shrink-0" />
                  <p className="text-[11px] font-bold text-[var(--primary)]">Siap sebagai draf transaksi</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ─── Pillar 3: NLP Chat ─── */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 24 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="m3-card-outlined flex flex-col bg-[var(--background)] p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[var(--outline)] bg-[var(--surface-container)]">
                <Bot className="h-5 w-5 text-[var(--foreground)]" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-[var(--foreground)]">AI Teks NLP</h3>
                <p className="text-xs text-[var(--foreground)] opacity-50">Natural Language Parser</p>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-[var(--foreground)] opacity-70 mb-8">
              Ketik kalimat santai. AI lokal mengurai nominal, kategori, dan deskripsi secara instan tanpa internet.
            </p>

            {/* NLP Simulator */}
            <div className="flex-1 rounded-2xl border border-[var(--outline)] bg-[var(--surface-container)] p-4 flex flex-col">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--foreground)] opacity-40 mb-3">Uji Simulator</p>

              {/* Preset Buttons */}
              <div className="flex flex-wrap gap-2 mb-4">
                {presets.map((p, i) => (
                  <button
                    key={i}
                    onClick={() => startSimulator(i)}
                    disabled={isTyping || isParsing}
                    className={`text-[10px] font-bold px-3 py-1.5 rounded-full border transition-all ${
                      activeIdx === i
                        ? "bg-[var(--primary)] text-[var(--on-primary)] border-transparent"
                        : "bg-[var(--background)] border-[var(--outline)] text-[var(--foreground)] opacity-70 hover:opacity-100"
                    }`}
                  >
                    Preset {i + 1}
                  </button>
                ))}
              </div>

              {/* Chat Bubble */}
              <div className="flex-1 flex flex-col gap-3 rounded-xl border border-[var(--outline)] bg-[var(--background)] p-3">
                <div className="flex justify-end">
                  <div className="max-w-[85%] rounded-2xl bg-[var(--primary)] px-3 py-2 text-[11px] font-semibold text-[var(--on-primary)]">
                    {typedText.length > 0 ? (
                      <span className={isTyping ? "cursor-blink" : ""}>{typedText}</span>
                    ) : (
                      <span className="opacity-40 italic">Pilih preset...</span>
                    )}
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  {isParsing && (
                    <motion.div
                      key="parsing"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2 text-[10px] font-bold text-[var(--foreground)] opacity-60"
                    >
                      <Sparkles className="h-3.5 w-3.5 text-[var(--primary)] animate-pulse" />
                      Memparsing dengan AI...
                    </motion.div>
                  )}

                  {parsedResult && (
                    <motion.div
                      key="result"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="rounded-2xl border border-[var(--outline)] bg-[var(--surface-container)] p-3 text-[10px] space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold uppercase tracking-widest text-[var(--foreground)] opacity-40 text-[9px]">Hasil Ekstraksi</span>
                        <span className={`rounded-full px-2 py-0.5 text-[9px] font-bold ${
                          parsedResult.tipe === "masuk"
                            ? "bg-[var(--primary-container)] text-[var(--on-primary-container)]"
                            : "bg-[var(--surface-high)] text-[var(--foreground-variant)]"
                        }`}>
                          {parsedResult.tipe === "masuk" ? "Pemasukan" : "Pengeluaran"}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <p className="text-[8px] opacity-40 uppercase tracking-wider font-bold">Nominal</p>
                          <p className="font-black text-[12px] text-[var(--foreground)]">{parsedResult.nominal}</p>
                        </div>
                        <div>
                          <p className="text-[8px] opacity-40 uppercase tracking-wider font-bold">Kategori</p>
                          <p className="font-bold text-[var(--primary)]">{parsedResult.kategori}</p>
                        </div>
                        <div className="col-span-2">
                          <p className="text-[8px] opacity-40 uppercase tracking-wider font-bold">Catatan</p>
                          <p className="font-semibold text-[var(--foreground)]">{parsedResult.catatan}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
