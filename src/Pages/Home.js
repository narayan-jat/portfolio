import React from "react";
import NavbarMain from "../components/NavbarMain";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import WhatIDoSection from "../components/WhatIDoSection";
import ExperienceSection from "../components/ExperienceSection";
import ShippedProductsSection from "../components/ShippedProductsSection";
import ProjectsSection from "../components/ProjectsSection";
import GuidingPrinciplesSection from "../components/GuidingPrinciplesSection";
import CertificationsSection from "../components/CertificationsSection";
import SiteFooter from "../components/SiteFooter";

const Portfolio = () => {
  return (
    <div className="pf-page">
      <NavbarMain />
      <main>
        <HeroSection />
        <AboutSection />
        <WhatIDoSection />
        <ExperienceSection />
        <ShippedProductsSection />
        <ProjectsSection />
        <GuidingPrinciplesSection />
        <CertificationsSection />
      </main>
      <SiteFooter />
    </div>
  );
};

export default Portfolio;
