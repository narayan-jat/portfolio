import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { WHAT_I_DO } from "../data/siteContent";

const WhatIDoSection = () => {
  return (
    <section id="what-i-do" className="pf-section">
      <Container>
        <span className="pf-section-eyebrow">What I do</span>
        <h2 className="pf-section-title mb-4">Three things, mostly</h2>
        <Row className="g-4">
          {WHAT_I_DO.map((item, i) => (
            <Col md={4} key={item.title}>
              <div className="pf-card p-4 h-100">
                <span className="pf-pillar-index">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="h5 fw-semibold mb-2">{item.title}</h3>
                <p className="text-muted small mb-0 lh-lg">{item.body}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default WhatIDoSection;
