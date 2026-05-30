# Uwangku - Landing Page

Landing Page premium, minimalis, dan sangat interaktif untuk **Uwangku**—aplikasi pencatatan keuangan personal dengan arsitektur *local-first*, didukung pemindaian struk OCR, dan analisis teks AI.

## Fitur Halaman Utama

1. **Deteksi OS & Tombol Unduh Utama Adaptif**: Secara dinamis menampilkan tombol unduh sesuai sistem operasi klien (Windows atau Android) dan menyediakan tautan download installer alternatif.
2. **Custom Numpad Simulator**: Demo keyboard angka bawaan yang interaktif di mana pengguna dapat mengklik tombol dan melihat nominal rupiah terformat langsung.
3. **AI Scan OCR Simulator**: Visualisasi pemindaian struk menggunakan animasi CSS laser radar dan ekstraksi nominal.
4. **Simulator Parser Teks NLP**: Input chat simulasi dengan *typing effect* untuk memproses kalimat alami menjadi skema data transaksi JSON secara realtime.
5. **Visualisasi Aliran Data Local-First**: Diagram interaktif sync SQLite ke PocketBase Cloud dengan tombol **Online/Offline** untuk mensimulasikan penyimpanan lokal yang mandiri.

## Teknologi Utama

- **Core**: Next.js 16 (React 19)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide Icons
- **Fonts**: Outfit & Inter (Google Fonts)

## Cara Menjalankan Proyek

1. **Pasang Dependensi**:
   ```bash
   npm install
   ```

2. **Jalankan Development Server**:
   ```bash
   npm run dev
   ```
   Buka [http://localhost:3000](http://localhost:3000) di peramban Anda untuk melihat hasilnya.

3. **Kompilasi Produksi**:
   ```bash
   npm run build
   ```
