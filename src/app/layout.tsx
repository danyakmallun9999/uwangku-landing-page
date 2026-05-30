import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://uwangku.com"),
  title: "Uwangku - Catat Keuangan dengan AI & Desain Minimalis",
  description: "Aplikasi pencatatan keuangan personal yang cepat, aman dengan arsitektur local-first, scan struk OCR, dan pencatatan berbasis teks AI.",
  keywords: ["keuangan", "pencatatan keuangan", "AI", "finance tracker", "local first", "pocketbase", "sqlite"],
  authors: [{ name: "Uwangku Team" }],
  openGraph: {
    title: "Uwangku - Catat Keuangan dengan AI & Desain Minimalis",
    description: "Aplikasi pencatatan keuangan personal yang cepat, aman dengan arsitektur local-first, scan struk OCR, dan pencatatan berbasis teks AI.",
    url: "https://uwangku.com",
    siteName: "Uwangku",
    images: [
      {
        url: "/images/uwangku-logo.png",
        width: 512,
        height: 512,
        alt: "Uwangku Premium Logo",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Uwangku - Catat Keuangan dengan AI & Desain Minimalis",
    description: "Aplikasi pencatatan keuangan personal yang cepat, aman dengan arsitektur local-first, scan struk OCR, dan pencatatan berbasis teks AI.",
    images: ["/images/uwangku-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${outfit.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="min-h-screen font-sans antialiased selection:bg-[#c7eea9] selection:text-[#191d16]">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
