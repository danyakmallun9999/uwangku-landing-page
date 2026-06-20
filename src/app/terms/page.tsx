import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  FileText,
  Scale,
  ShieldAlert,
  AlertTriangle,
  UserCheck,
  Globe,
  Mail,
  ArrowLeft,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Syarat dan Ketentuan - Uwangku",
  description: "Syarat dan Ketentuan penggunaan aplikasi Uwangku. Ketahui hak dan kewajiban Anda saat menggunakan aplikasi pencatatan keuangan kami.",
};

export default function TermsPage() {
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
              Syarat & Ketentuan
            </h1>
            <p className="text-lg text-[var(--foreground)] opacity-70">
              Terakhir diperbarui: 20 Juni 2026. Harap baca dokumen ini dengan saksama sebelum menggunakan aplikasi Uwangku.
            </p>
          </div>

          {/* Quick Summary Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
            <div className="m3-card-outlined p-6 flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 rounded-xl bg-[var(--primary-container)] text-[var(--on-primary-container)] flex items-center justify-center mb-4">
                  <UserCheck className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold mb-2">Tanggung Jawab</h3>
                <p className="text-xs text-[var(--foreground)] opacity-70 leading-relaxed">
                  Anda bertanggung jawab secara penuh atas keamanan data lokal dan cadangan akun Anda sendiri.
                </p>
              </div>
            </div>

            <div className="m3-card-outlined p-6 flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 rounded-xl bg-[var(--primary-container)] text-[var(--on-primary-container)] flex items-center justify-center mb-4">
                  <AlertTriangle className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold mb-2">Batasan Klaim</h3>
                <p className="text-xs text-[var(--foreground)] opacity-70 leading-relaxed">
                  Uwangku adalah alat pencatatan keuangan personal, bukan penasihat finansial atau investasi berlisensi.
                </p>
              </div>
            </div>

            <div className="m3-card-outlined p-6 flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 rounded-xl bg-[var(--primary-container)] text-[var(--on-primary-container)] flex items-center justify-center mb-4">
                  <Scale className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold mb-2">Penggunaan Adil</h3>
                <p className="text-xs text-[var(--foreground)] opacity-70 leading-relaxed">
                  Dilarang memodifikasi biner secara ilegal, meretas infrastruktur sinkronisasi, atau menyalahgunakan API kami.
                </p>
              </div>
            </div>
          </div>

          {/* Detailed Terms Sections */}
          <div className="space-y-12">
            
            {/* Section 1 */}
            <section className="scroll-mt-24" id="penerimaan">
              <h2 className="text-xl sm:text-2xl font-heading font-extrabold mb-4 flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--primary)] text-[var(--on-primary)] text-sm font-bold">1</span>
                Penerimaan Ketentuan
              </h2>
              <div className="pl-10 space-y-4 text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed">
                <p>
                  Dengan mengunduh, menginstal, atau menggunakan aplikasi Uwangku (baik versi Android maupun Windows), Anda setuju untuk terikat oleh Syarat dan Ketentuan ini. Jika Anda tidak menyetujui bagian mana pun dari ketentuan ini, Anda tidak diperkenankan untuk menggunakan aplikasi ini.
                </p>
                <p>
                  Kami berhak mengubah atau memperbarui ketentuan ini kapan saja. Kami akan mengumumkan perubahan tersebut melalui pembaruan aplikasi atau di situs web ini. Penggunaan berkelanjutan setelah perubahan menandakan persetujuan Anda atas ketentuan yang baru.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="scroll-mt-24" id="lisensi">
              <h2 className="text-xl sm:text-2xl font-heading font-extrabold mb-4 flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--primary)] text-[var(--on-primary)] text-sm font-bold">2</span>
                Lisensi & Hak Kekayaan Intelektual
              </h2>
              <div className="pl-10 space-y-4 text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed">
                <p>
                  Uwangku memberikan Anda lisensi terbatas, non-eksklusif, tidak dapat dialihkan, dan dapat ditarik kembali untuk mengunduh, menginstal, dan menggunakan aplikasi hanya untuk kebutuhan pribadi dan non-komersial Anda sesuai dengan ketentuan dokumen ini.
                </p>
                <p>
                  Seluruh kode sumber (kecuali komponen open-source pihak ketiga), aset visual, desain antarmuka, logo, merek dagang, dan materi promosi Uwangku adalah milik eksklusif Tim Pengembang Uwangku. Anda dilarang melakukan rekayasa balik (reverse engineering), mendekompilasi, atau mendistribusikan ulang biner aplikasi tanpa izin tertulis dari kami.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section className="scroll-mt-24" id="penggunaan-aplikasi">
              <h2 className="text-xl sm:text-2xl font-heading font-extrabold mb-4 flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--primary)] text-[var(--on-primary)] text-sm font-bold">3</span>
                Kebijakan Penggunaan yang Diperbolehkan
              </h2>
              <div className="pl-10 space-y-4 text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed">
                <p>
                  Anda setuju untuk menggunakan Uwangku secara bertanggung jawab dan sah menurut hukum. Anda dilarang keras untuk:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Menggunakan aplikasi untuk tindakan melanggar hukum, penipuan, atau pencucian uang.</li>
                  <li>Mencoba mengeksploitasi, meretas, atau mengganggu server sinkronisasi PocketBase kami.</li>
                  <li>Mengirimkan data palsu, berbahaya, atau malware melalui layanan sinkronisasi cloud.</li>
                  <li>Menyalahgunakan fitur OCR struk dengan memindai gambar yang tidak senonoh atau tidak sah.</li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section className="scroll-mt-24" id="batasan-tanggung-jawab">
              <h2 className="text-xl sm:text-2xl font-heading font-extrabold mb-4 flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--primary)] text-[var(--on-primary)] text-sm font-bold">4</span>
                Batasan Tanggung Jawab (Disclaimer)
              </h2>
              <div className="pl-10 space-y-4 text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed">
                <p>
                  <strong>Uwangku disediakan "sebagaimana adanya" dan "sebagaimana tersedia"</strong> tanpa jaminan apa pun, baik yang tersurat maupun tersirat. 
                </p>
                
                <div className="m-4 p-4 rounded-xl border border-[var(--outline)] bg-[var(--surface-container)] flex gap-3">
                  <ShieldAlert className="h-6 w-6 text-[var(--primary)] shrink-0 mt-0.5" />
                  <p className="text-sm leading-relaxed text-[var(--foreground)]">
                    Uwangku dirancang murni sebagai alat bantu visualisasi dan pencatatan keuangan personal. Kami tidak memberikan nasihat keuangan, perpajakan, atau investasi hukum. Keputusan finansial apa pun yang Anda ambil berdasarkan data di aplikasi ini adalah tanggung jawab pribadi Anda secara penuh.
                  </p>
                </div>

                <p>
                  Kami tidak bertanggung jawab atas kerugian finansial, kehilangan data lokal akibat kegagalan sistem OS perangkat Anda, atau kebocoran kredensial akun akibat kelalaian Anda sendiri dalam mengamankan perangkat atau akun sinkronisasi cloud Anda.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section className="scroll-mt-24" id="penghentian-layanan">
              <h2 className="text-xl sm:text-2xl font-heading font-extrabold mb-4 flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--primary)] text-[var(--on-primary)] text-sm font-bold">5</span>
                Penghentian & Modifikasi Layanan
              </h2>
              <div className="pl-10 space-y-4 text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed">
                <p>
                  Kami berhak untuk mengubah, menangguhkan, atau menghentikan fitur apa pun dari aplikasi Uwangku (terutama layanan cloud sync gratis) sewaktu-waktu dengan atau tanpa pemberitahuan terlebih dahulu.
                </p>
                <p>
                  Karena arsitektur utama kami adalah <em>local-first</em>, penghentian layanan cloud sync tidak akan menghapus data keuangan Anda yang tersimpan di dalam database lokal SQLite di perangkat Anda. Anda masih dapat mengekspor data tersebut ke format eksternal secara mandiri kapan saja.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section className="scroll-mt-24" id="hukum">
              <h2 className="text-xl sm:text-2xl font-heading font-extrabold mb-4 flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--primary)] text-[var(--on-primary)] text-sm font-bold">6</span>
                Hukum yang Berlaku
              </h2>
              <div className="pl-10 space-y-4 text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed">
                <p>
                  Syarat dan Ketentuan ini diatur dan ditafsirkan sesuai dengan hukum yang berlaku di Negara Republik Indonesia, tanpa mempertentangkan pertentangan aturan hukumnya. Setiap perselisihan yang timbul sehubungan dengan penggunaan aplikasi ini akan diselesaikan secara musyawarah mufakat atau melalui yurisdiksi pengadilan yang berwenang di Indonesia.
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section className="scroll-mt-24" id="kontak-syarat">
              <h2 className="text-xl sm:text-2xl font-heading font-extrabold mb-4 flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--primary)] text-[var(--on-primary)] text-sm font-bold">7</span>
                Pertanyaan & Kontak
              </h2>
              <div className="pl-10 space-y-4 text-sm sm:text-base text-[var(--foreground)] opacity-80 leading-relaxed">
                <p>
                  Jika Anda memiliki pertanyaan, keberatan, atau saran mengenai Syarat dan Ketentuan penggunaan Uwangku ini, silakan hubungi tim kami melalui:
                </p>
                <div className="flex items-center gap-3 mt-2">
                  <div className="h-9 w-9 rounded-full bg-[var(--surface-container)] flex items-center justify-center text-[var(--primary)]">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-xs text-[var(--foreground)] opacity-60 block">Email Kontak</span>
                    <a href="mailto:legal@uwangku.com" className="font-semibold hover:underline">
                      legal@uwangku.com
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
