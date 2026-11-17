import HeroSection from "@/components/HeroSection";
import { FeaturedWorks, OtherWorks } from "@/components/WorksSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

export default function HomeEn() {
  return (
    <main style={{ backgroundColor: "#010101" }}>
      <HeroSection lang="en" />
      <FeaturedWorks lang="en" />
      <OtherWorks lang="en" />
      <AboutSection lang="en" />
      <ContactSection lang="en" />
    </main>
  );
}
