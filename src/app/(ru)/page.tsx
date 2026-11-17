import HeroSection from "@/components/HeroSection";
import { FeaturedWorks, OtherWorks } from "@/components/WorksSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main style={{ backgroundColor: "#010101" }}>
      <HeroSection lang="ru" />
      <FeaturedWorks lang="ru" />
      <OtherWorks lang="ru" />
      <AboutSection lang="ru" />
      <ContactSection lang="ru" />
    </main>
  );
}
