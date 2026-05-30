import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import DataSyncSection from "@/components/DataSyncSection";
import DownloadGrid from "@/components/DownloadGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <DataSyncSection />
        <DownloadGrid />
      </main>
      <Footer />
    </>
  );
}

