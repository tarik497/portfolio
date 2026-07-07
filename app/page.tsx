import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import HeroSection from "@/app/components/sections/HeroSection";
import AboutSection from "@/app/components/sections/AboutSection";
import SkillsSection from "@/app/components/sections/SkillsSection";
import CertificationsSection from "@/app/components/sections/CertificationsSection";
import ProjectsSection from "@/app/components/sections/ProjectsSection";
// import GitHubSection from "@/app/components/sections/GitHubSection";
import ExperienceSection from "@/app/components/sections/ExperienceSection";
import ContactSection from "@/app/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <div className="section-divider" />
      <AboutSection />
      <div className="section-divider" />
      <SkillsSection />
      <div className="section-divider" />
      <CertificationsSection />
      <div className="section-divider" />
      <ProjectsSection />
      <div className="section-divider" />
      {/* <GitHubSection /> */}
      <div className="section-divider" />
      <ExperienceSection />
      <div className="section-divider" />
      <ContactSection />
      <Footer />
    </main>
  );
}
