// app/page.tsx
import Hero from "@/components/Hero/Hero";
import ProjectsSection from "@/components/ProjectsSection/ProjectsSection";
import AboutSection from "@/components/AboutSection/AboutSection";
import SkillsSection from "@/components/SkilllsSection/SkillsSection";
import Experience from "@/components/Experience/Experience";

export default function HomePage() {
  return (
    <div className="split-container">

      {/* LEFT — static */}
      <div className="hero-left">
        <Hero />
      </div>

      {/* RIGHT — scrollable */}
      <div className="hero-right">
       
          <AboutSection />

          <Experience />

          <ProjectsSection />

          <SkillsSection />

      </div>
    </div>
  );
}
