import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import { SKILL_GROUPS } from "../data/siteContent";

const SkillsSection = () => {
  return (
    <section id="skills" className="pf-section">
      <Container>
        <h2 className="pf-section-title mb-3">Skills</h2>
        <Row className="g-4">
          {SKILL_GROUPS.map((group) => (
            <Col md={6} key={group.label}>
              <div className="pf-glass p-4 h-100">
                <h3
                  className="h6 text-uppercase pf-accent mb-3"
                  style={{ letterSpacing: "0.06em" }}
                >
                  {group.label}
                </h3>
                <div className="d-flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <Badge
                      key={skill}
                      bg="dark"
                      className="border border-secondary px-3 py-2 fw-normal"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default SkillsSection;
