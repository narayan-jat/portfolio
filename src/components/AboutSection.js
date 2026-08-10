import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { PROFILE, HIGHLIGHTS } from "../data/siteContent";

const AboutSection = () => {
  return (
    <section id="about" className="pf-section">
      <Container>
        <span className="pf-section-eyebrow">About</span>
        <h2 className="pf-section-title">How I work</h2>
        <p className="pf-section-lead">
          Grounded in my resume: how I partner with teams, what I ship, and
          where I am today.
        </p>

        <Row className="mb-5">
          <Col lg={9}>
            {PROFILE.summary.map((paragraph, i) => (
              <p key={i} className="text-muted lh-lg mb-3">
                {paragraph}
              </p>
            ))}
          </Col>
        </Row>

        <h3
          className="h6 text-uppercase pf-accent mb-3"
          style={{ letterSpacing: "0.06em" }}
        >
          Recognition
        </h3>
        <div className="pf-numbered-list">
          {HIGHLIGHTS.map((h, i) => (
            <div className="pf-numbered-item" key={h.title}>
              <span className="pf-numbered-index">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h4 className="h6 fw-semibold mb-1">{h.title}</h4>
                <p className="text-muted small mb-0 lh-sm">{h.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
