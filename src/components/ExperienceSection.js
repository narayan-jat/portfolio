import React from "react";
import Container from "react-bootstrap/Container";
import { EXPERIENCE } from "../data/siteContent";

const ExperienceSection = () => {
  return (
    <section id="experience" className="pf-section">
      <Container>
        <h2 className="pf-section-title">
          Experience <span className="pf-accent">/</span> internships
        </h2>
        <div className="pf-glass p-4 p-md-5">
          <div className="pf-timeline">
            {EXPERIENCE.map((job, i) => (
              <div className="pf-timeline-item" key={i}>
                <div className="pf-timeline-dot" aria-hidden />
                <div className="d-flex flex-wrap justify-content-between gap-2 align-items-baseline mb-2">
                  <h3 className="h5 mb-0 fw-semibold">{job.org}</h3>
                  <span className="text-secondary small">{job.period}</span>
                </div>
                <p className="pf-accent fw-medium mb-1 small">
                  {job.role} · {job.location}
                </p>
                <ul className="text-secondary small ps-3 mb-0">
                  {job.points.map((pt, j) => (
                    <li key={j} className="mb-1">
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ExperienceSection;
