# Product Requirement Document (PRD)
Proyek: Landing Page Uwangku
Teknologi Utama: Next.js (React), TailwindCSS, Lucide Icons, Framer Motion
Versi: 1.0
Target Platform: Web (Desktop & Mobile)

---

## 1. Ringkasan Eksekutif
**Uwangku** adalah aplikasi pencatatan keuangan personal yang minimalis, manusiawi (human-centric), dan didukung kecerdasan buatan (AI) untuk proses input super cepat (Quick Entry, Scan OCR, dan Natural Language Processing). 

Dokumen ini mendefinisikan kebutuhan produk untuk pembuatan **Landing Page Uwangku**. Landing Page ini dirancang untuk memperkenalkan proposisi nilai (value proposition) Uwangku, menampilkan fitur-fitur unggulannya, dan menyediakan akses pengunduhan aplikasi langsung bagi pengguna Windows dan Android, serta opsi akses web app (Coming Soon).

---

## 2. Tujuan Landing Page
1. **Meningkatkan Konversi Unduhan**: Mengarahkan pengunjung untuk mengunduh aplikasi Uwangku versi Windows (.exe/installer) dan Android (.apk/Play Store).
2. **Branding & Edukasi Fitur**: Memperkenalkan pendekatan minimalis Uwangku (bebas dari kekakuan aplikasi finansial tradisional) dan tiga pilar inputnya (Manual Quick Entry, Scan OCR, dan AI Chat/Teks).
3. **Membangun Kredibilitas**: Menampilkan keamanan data berbasis *local-first* (SQLite lokal dengan sinkronisasi PocketBase terenkripsi) sehingga pengguna merasa aman mengenai data finansial mereka.

---

## 3. Fitur Utama & Persyaratan Fungsional

### 3.1 Pusat Unduhan Multiplatform (Download Center)
* **Deskripsi**: Bagian hero dan seksi khusus unduhan yang secara dinamis mendeteksi sistem operasi (OS) pengunjung dan menampilkan tombol unduh utama yang relevan, diikuti oleh opsi unduhan platform lainnya.
* **Kebutuhan Platform**:
  * **Windows App**: Tombol unduhan langsung untuk file installer Windows (`.exe` atau `.msi`).
  * **Android App**: Tombol unduhan langsung untuk file installer Android (`.apk`) dan link ke Google Play Store (jika tersedia).
  * **Web App (Coming Soon)**: Indikator/tombol "Coba di Web Browser" dengan label *badge* **Coming Soon** yang menonjol namun estetis.
* **Metrik Deteksi OS**:
  * Jika user menggunakan Windows $\rightarrow$ Prioritaskan tombol "Unduh untuk Windows".
  * Jika user menggunakan Android/Mobile $\rightarrow$ Prioritaskan tombol "Unduh untuk Android".

### 3.2 Demonstrasi Interaktif Fitur Utama (Interactive Feature Showcase)
Menampilkan tiga pilar pencatatan keuangan Uwangku dengan animasi mikro atau tabs interaktif:
1. **Quick Entry (Custom Numpad)**: Demonstrasi visual bagaimana pengguna mengetuk nominal menggunakan numpad kustom bawaan aplikasi tanpa terganggu keyboard bawaan HP.
2. **AI Scan OCR**: Visualisasi proses mengambil foto struk belanja, ekstraksi teks instan, hingga terisi menjadi draf transaksi.
3. **NLP Teks (Natural Language)**: Simulator interaktif kecil di landing page di mana pengguna bisa mengetik contoh kalimat (misal: `"gaji masuk 5 juta"` atau `"kopi susu 35 ribu"`) dan melihat simulasi parsing data instan ke dalam skema terstruktur.

### 3.3 Penekanan Privasi & Keamanan (Local-First Architecture)
* Landing page harus mengedukasi calon pengguna tentang arsitektur data Uwangku:
  * **Data Lokal Utama**: Semua transaksi disimpan di database lokal (`SQLite`) perangkat pengguna.
  * **Sinkronisasi Realtime Aman**: Menggunakan PocketBase dengan proteksi isolasi akun (`user_id` parameter) untuk meminimalkan risiko kebocoran data.

---

## 4. Persyaratan Non-Fungsional (Performance & SEO)

### 4.1 Search Engine Optimization (SEO)
* **Meta Tags**: Ketersediaan meta tags yang komprehensif (Title: "Uwangku - Catat Keuangan dengan AI & Desain Minimalis", Meta Description: "Aplikasi pencatatan keuangan personal yang cepat, aman dengan arsitektur local-first, scan struk OCR, dan pencatatan berbasis teks AI.").
* **Open Graph (OG) & Twitter Cards**: Menyediakan aset gambar OG berkualitas tinggi agar terlihat premium saat link landing page dibagikan di media sosial.
* **Heading Hierarchy**: Menggunakan satu `<h1>` utama pada bagian hero dan struktur `<h2>` - `<h5>` yang logis di setiap seksi.

### 4.2 Performa & Kecepatan Akses
* **Skor Lighthouse**: Menargetkan skor performa $\ge 90$ untuk Mobile dan Desktop.
* **Optimasi Gambar**: Menggunakan format WebP/AVIF untuk gambar dan SVG untuk ilustrasi vektor/ikon.
* **Framer Motion Lumping**: Mengoptimalkan impor Framer Motion agar bundle size tetap kecil dan interaksi terasa instan.

---

## 5. Struktur Konten Halaman (Page Map)
1. **Navigation Bar**: Logo Uwangku, Link Fitur, Link Keamanan, Tombol Utama "Unduh Sekarang".
2. **Hero Section**: Tagline premium, deskripsi singkat, visual mockup aplikasi (menggunakan screenshot premium), tombol download utama adaptif berdasarkan OS.
3. **Pilar Fitur Utama (The 3-Way Entry)**: Grid 3 kolom (Manual Quick Entry, Scan OCR, NLP AI Teks) dengan animasi interaktif.
4. **Local-First & Sync Showcase**: Penjelasan visual arsitektur SQLite + PocketBase Realtime Sync dengan animasi aliran data yang aman.
5. **Download Grid**: Bagian khusus unduhan yang menampilkan detail versi rilis terbaru untuk Windows, Android, dan info status Web App (Coming Soon).
6. **Footer**: Link privasi, syarat ketentuan, copyright, dan tautan sosial media/GitHub.
