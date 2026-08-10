import React from "react";
import Container from "react-bootstrap/Container";
import { GUIDING_PRINCIPLES } from "../data/siteContent";

const GuidingPrinciplesSection = () => {
  return (
    <section id="principles" className="pf-section">
      <Container>
        <span className="pf-section-eyebrow">Guiding principles</span>
        <h2 className="pf-section-title mb-4">How I think about the work</h2>
        <div className="pf-numbered-list">
          {GUIDING_PRINCIPLES.map((principle, i) => (
            <div className="pf-numbered-item" key={i}>
              <span className="pf-numbered-index">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-muted small mb-0 lh-lg">{principle}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default GuidingPrinciplesSection;
