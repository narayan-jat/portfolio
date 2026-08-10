import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { SHIPPED_PRODUCTS } from "../data/siteContent";

const ShippedProductsSection = () => {
  return (
    <section id="work" className="pf-section">
      <Container>
        <span className="pf-section-eyebrow">Selected work</span>
        <h2 className="pf-section-title">Production, not prototypes</h2>
        <p className="pf-section-lead">
          Five SaaS products I engineered and shipped end-to-end for a private
          client — live, in production, with paying users. Codebases are
          private; the products speak for themselves.
        </p>

        <Row className="g-4">
          {SHIPPED_PRODUCTS.map((p) => (
            <Col md={6} xl={4} key={p.id}>
              <Card className="pf-work-card pf-card h-100 border-0">
                <Card.Body className="d-flex flex-column">
                  <span className="pf-tag align-self-start mb-3">
                    {p.tag}
                  </span>
                  <Card.Title className="h5 fw-semibold mb-2">
                    {p.name}
                  </Card.Title>
                  <p className="text-muted small mb-2 fst-italic">
                    {p.problem}
                  </p>
                  <p className="text-muted small mb-3">{p.description}</p>
                  <div className="d-flex flex-wrap gap-1 mb-3">
                    {p.techStack.map((tech, i) => (
                      <Badge
                        key={`${p.id}-${tech}-${i}`}
                        bg="light"
                        text="dark"
                        className="fw-normal border"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="pf-metric-chip mb-3 align-self-start">
                    {p.metric}
                  </div>
                  <Button
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    as="a"
                    className="pf-btn-primary mt-auto align-self-start"
                    size="sm"
                  >
                    View live
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      className="ms-2"
                    />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ShippedProductsSection;
