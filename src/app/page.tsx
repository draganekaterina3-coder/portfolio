import HeroSection from "@/components/HeroSection";
import WorksSection from "@/components/WorksSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main style={{ backgroundColor: "#010101" }}>
      <HeroSection />
      <WorksSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
