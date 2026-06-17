import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";

export default function TentangPage() {
  return (
    <main>
      <Navigation />

      {/* langsung pakai komponen yang sama */}
      <AboutSection />

      <Footer />
    </main>
  );
}