import React from "react";
import NavbarMain from "../components/NavbarMain";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ExperienceSection from "../components/ExperienceSection";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import CertificationsSection from "../components/CertificationsSection";
import HighlightsSection from "../components/HighlightsSection";
import SiteFooter from "../components/SiteFooter";

const Portfolio = () => {
  return (
    <div className="pf-page">
      <NavbarMain />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <CertificationsSection />
        <HighlightsSection />
      </main>
      <SiteFooter />
    </div>
  );
};

export default Portfolio;
