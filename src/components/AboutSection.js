import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { PROFILE, EDUCATION } from "../data/siteContent";

const AboutSection = () => {
  return (
    <section id="about" className="pf-section">
      <Container>
        <h2 className="pf-section-title">
          About <span className="pf-accent">/</span> how I work
        </h2>
        <p className="pf-section-lead">
          Grounded in my resume: how I partner with teams, what I ship, and where
          I am today.
        </p>
        <Row className="g-4 mb-4">
          {PROFILE.summary.map((paragraph, i) => (
            <Col md={4} key={i}>
              <div className="pf-glass p-4 h-100">
                <p className="text-secondary mb-0 small lh-lg">{paragraph}</p>
              </div>
            </Col>
          ))}
        </Row>
        <h3 className="h6 text-uppercase pf-accent mb-3" style={{ letterSpacing: "0.06em" }}>
          Education
        </h3>
        <Row className="g-4">
          {EDUCATION.map((edu) => (
            <Col md={6} key={edu.school}>
              <div className="pf-glass p-4 h-100">
                <h4 className="h6 fw-bold text-light mb-1">{edu.school}</h4>
                <p className="text-secondary small mb-2">{edu.detail}</p>
                <p className="text-secondary small mb-0">
                  {edu.period}
                  <span className="d-block text-secondary opacity-75">
                    {edu.location}
                  </span>
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
