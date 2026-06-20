import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Shield,
  Database,
  Lock,
  Camera,
  FolderOpen,
  Globe,
  Trash2,
  Mail,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Kebijakan Privasi - Uwangku",
  description: "Kebijakan Privasi aplikasi Uwangku. Ketahui bagaimana kami menjaga keamanan data keuangan personal Anda dengan arsitektur local-first dan enkripsi cloud.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)] transition-colors">
      <Navbar />

      <main className="flex-1 py-12 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          
          {/* Back Navigation */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)] hover:opacity-80 transition-opacity mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali ke Beranda
          </Link>

          {/* Page Header */}
          <div className="mb-12">
            <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 text-[var(--foreground)]">
              Kebijakan Privasi
            </h1>
            <p className="text-lg text-[var(--foreground)] opacity-70">
              Terakhir diperbarui: 20 Juni 2026. Kepercayaan Anda adalah prioritas kami. Pelajari bagaimana kami melindungi data keuangan Anda di Uwangku.
            </p>
          </div>

          {/* Quick Summary Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
            <div className="m3-card-outlined p-6 flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 rounded-xl bg-[var(--primary-container)] text-[var(--on-primary-container)] flex items-center justify-center mb-4">
                  <Database className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold mb-2">Local-First</h3>
                <p className="text-xs text-[var(--foreground)] opacity-70 leading-relaxed">
                  Data transaksi Anda disimpan di database lokal SQLite pada perangkat Anda secara penuh. Kami tidak memilikinya.
                </p>
              </div>
            </div>

            <div className="m3-card-outlined p-6 flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 rounded-xl bg-[var(--primary-container)] text-[var(--on-primary-container)] flex items-center justify-center mb-4">
                  <Lock className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold mb-2">Sinkronisasi Aman</h3>
                <p className="text-xs text-[var(--foreground)] opacity-70 leading-relaxed">
                  Pencadangan cloud bersifat opsional (opt-in). Data disinkronkan ke PocketBase secara realtime dengan enkripsi SSL/TLS.
                </p>
              </div>
            </div>

            <div className="m3-card-outlined p-6 flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 rounded-xl bg-[var(--primary-container)] text-[var(--on-primary-container)] flex items-center justify-center mb-4">
                  <Shield className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold mb-2">Tanpa Pelacakan Iklan</h3>
                <p className="text-xs text-[var(--foreground)] opacity-70 leading-relaxed">
                  Kami tidak menjual data Anda atau membagikannya dengan broker data mana pun. Aplikasi ini 100% bebas dari iklan.
                </p>
              </div>
            </div>
          </div>

          {/* Detailed Policy Sections */}
          <div className="space-y-12">
            
            {/* Section 1 */}
            <section className="scroll-mt-24" id="pengantar">
              <h2 className="text-xl sm:text-2xl font-heading font-extrabold mb-4 flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--primary)] text-[var(--on-primary)] text-sm font-bold">1</span>
                Pengantar
              </h2>
              <div className="pl-10 space-y-4 text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed">
                <p>
                  Uwangku berkomitmen penuh untuk melindungi privasi Anda. Kami merancang Uwangku dengan prinsip <strong>Privacy by Design</strong>. Pendekatan arsitektur utama kami adalah <em>local-first</em>, yang berarti kendali penuh atas data keuangan ada di tangan Anda sendiri, bukan di server kami.
                </p>
                <p>
                  Kebijakan Privasi ini menjelaskan jenis data apa yang dikumpulkan, bagaimana data tersebut diproses, dan hak-hak yang Anda miliki saat menggunakan aplikasi Uwangku di platform Windows maupun Android.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="scroll-mt-24" id="pengumpulan-data">
              <h2 className="text-xl sm:text-2xl font-heading font-extrabold mb-4 flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--primary)] text-[var(--on-primary)] text-sm font-bold">2</span>
                Data yang Kami Kumpulkan & Cara Penggunaannya
              </h2>
              <div className="pl-10 space-y-6 text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed">
                
                <div>
                  <h3 className="text-base font-bold mb-2 flex items-center gap-2 text-[var(--foreground)]">
                    <Database className="h-4 w-4 text-[var(--primary)]" />
                    Data Keuangan Personal (SQLite & PocketBase)
                  </h3>
                  <p className="mb-2">
                    Semua transaksi, anggaran, kategori, dan pengaturan yang Anda buat dalam aplikasi Uwangku akan disimpan di dalam database lokal (SQLite) pada perangkat fisik Anda. 
                  </p>
                  <p>
                    Jika Anda mengaktifkan fitur <strong>Sinkronisasi Cloud</strong> (PocketBase), data tersebut akan diunggah ke server cloud kami agar Anda dapat mengakses data yang sama dari perangkat lain. Sinkronisasi ini dilindungi secara ketat menggunakan isolasi ID akun (hanya Anda yang dapat membaca dan menulis data Anda sendiri).
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-bold mb-2 flex items-center gap-2 text-[var(--foreground)]">
                    <Camera className="h-4 w-4 text-[var(--primary)]" />
                    Data Kamera & Gambar (Scan OCR)
                  </h3>
                  <p>
                    Saat Anda menggunakan fitur <strong>Scan OCR</strong> untuk memindai struk belanja, aplikasi memerlukan akses ke kamera Anda. Foto struk diolah secara instan dan temporer untuk diekstrak menjadi teks draf transaksi. Kami tidak menyimpan salinan foto struk Anda di server kami; ekstraksi dilakukan langsung di perangkat Anda atau melalui API pemrosesan aman yang segera menghapus gambar tersebut setelah ekstraksi selesai.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-bold mb-2 flex items-center gap-2 text-[var(--foreground)]">
                    <CheckCircle2 className="h-4 w-4 text-[var(--primary)]" />
                    Analisis Input Teks AI (NLP)
                  </h3>
                  <p>
                    Fitur pencatatan berbasis kecerdasan buatan (NLP) kami memproses teks alami yang Anda ketikkan (misalnya: <em>"kopi susu 35 ribu"</em>) untuk mengubahnya menjadi struktur transaksi formal. Teks input ini hanya diproses untuk mengidentifikasi nominal, kategori, dan catatan secara langsung, tanpa merekam identitas pribadi Anda.
                  </p>
                </div>

              </div>
            </section>

            {/* Section 3 */}
            <section className="scroll-mt-24" id="izin-perangkat">
              <h2 className="text-xl sm:text-2xl font-heading font-extrabold mb-4 flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--primary)] text-[var(--on-primary)] text-sm font-bold">3</span>
                Izin Perangkat yang Diperlukan
              </h2>
              <div className="pl-10 space-y-4 text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed">
                <p>
                  Untuk memastikan fitur-fitur aplikasi berfungsi secara optimal, Uwangku dapat meminta izin akses ke beberapa fitur sistem pada perangkat Android atau Windows Anda:
                </p>
                
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="h-5 w-5 rounded-full bg-[var(--surface-container)] flex items-center justify-center mt-1 text-[var(--primary)]">
                      <Camera className="h-3 w-3" />
                    </div>
                    <div>
                      <strong>Izin Kamera:</strong> Digunakan secara eksklusif untuk fitur pemindaian struk belanja (Scan OCR).
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-5 w-5 rounded-full bg-[var(--surface-container)] flex items-center justify-center mt-1 text-[var(--primary)]">
                      <FolderOpen className="h-3 w-3" />
                    </div>
                    <div>
                      <strong>Izin Penyimpanan/File:</strong> Dibutuhkan ketika Anda ingin mengekspor data laporan keuangan (seperti CSV/Excel) atau membuat file pencadangan database lokal secara manual.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-5 w-5 rounded-full bg-[var(--surface-container)] flex items-center justify-center mt-1 text-[var(--primary)]">
                      <Globe className="h-3 w-3" />
                    </div>
                    <div>
                      <strong>Izin Internet:</strong> Diperlukan hanya jika Anda mengaktifkan sinkronisasi awan opsional untuk menghubungkan database lokal dengan server PocketBase Anda.
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section className="scroll-mt-24" id="keamanan-data">
              <h2 className="text-xl sm:text-2xl font-heading font-extrabold mb-4 flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--primary)] text-[var(--on-primary)] text-sm font-bold">4</span>
                Keamanan & Perlindungan Data
              </h2>
              <div className="pl-10 space-y-4 text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed">
                <p>
                  Kami mengambil langkah-langkah keamanan yang serius untuk melindungi data Anda:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Isolasi Sandbox Aplikasi:</strong> Pada platform mobile Android, database SQLite lokal dilindungi oleh sandbox OS, mencegah aplikasi lain mengakses file database Uwangku.</li>
                  <li><strong>Komunikasi Terenkripsi:</strong> Semua transfer data antara aplikasi Anda dengan server PocketBase disalurkan melalui protokol HTTPS terenkripsi SSL/TLS tingkat tinggi.</li>
                  <li><strong>Isolasi Pengguna:</strong> Data di cloud dilindungi oleh aturan keamanan PocketBase (API rules) yang menjamin hanya pemilik akun yang memiliki akses baca/tulis.</li>
                </ul>
              </div>
            </section>

            {/* Section 5 */}
            <section className="scroll-mt-24" id="penghapusan-data">
              <h2 className="text-xl sm:text-2xl font-heading font-extrabold mb-4 flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--primary)] text-[var(--on-primary)] text-sm font-bold">5</span>
                Penyimpanan & Penghapusan Data Anda
              </h2>
              <div className="pl-10 space-y-4 text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed">
                <p>
                  Karena data Anda adalah milik Anda, Anda memiliki hak penuh untuk menghapusnya kapan saja:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="h-5 w-5 rounded-full bg-[var(--surface-container)] flex items-center justify-center mt-1 text-[var(--error)]">
                      <Trash2 className="h-3 w-3" />
                    </div>
                    <div>
                      <strong>Data Lokal:</strong> Anda dapat menghapus seluruh data keuangan lokal Anda dengan menghapus data aplikasi melalui pengaturan sistem Android (Clear Data) atau cukup dengan menghapus (uninstall) aplikasi Uwangku dari perangkat Anda.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-5 w-5 rounded-full bg-[var(--surface-container)] flex items-center justify-center mt-1 text-[var(--error)]">
                      <Trash2 className="h-3 w-3" />
                    </div>
                    <div>
                      <strong>Data Cloud:</strong> Jika Anda menggunakan Sinkronisasi Cloud, Anda dapat melakukan penghapusan akun secara mandiri langsung dari menu Pengaturan aplikasi Uwangku. Langkah ini akan menghapus seluruh catatan transaksi Anda dari database server PocketBase secara permanen.
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 6 */}
            <section className="scroll-mt-24" id="kontak">
              <h2 className="text-xl sm:text-2xl font-heading font-extrabold mb-4 flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--primary)] text-[var(--on-primary)] text-sm font-bold">6</span>
                Hubungi Kami
              </h2>
              <div className="pl-10 space-y-4 text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed">
                <p>
                  Jika Anda memiliki pertanyaan mengenai Kebijakan Privasi ini atau masalah keamanan data pada aplikasi Uwangku, silakan hubungi tim pengembang kami melalui:
                </p>
                <div className="flex items-center gap-3 mt-2">
                  <div className="h-9 w-9 rounded-full bg-[var(--surface-container)] flex items-center justify-center text-[var(--primary)]">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-xs text-[var(--foreground)] opacity-60 block">Email Dukungan</span>
                    <a href="mailto:support@uwangku.com" className="font-semibold hover:underline">
                      support@uwangku.com
                    </a>
                  </div>
                </div>
              </div>
            </section>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
