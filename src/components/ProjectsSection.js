import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { FEATURED_REPOS } from "../data/siteContent";

const ProjectsSection = () => {
  const repos = FEATURED_REPOS;

  return (
    <section id="projects" className="pf-section">
      <Container>
        <h2 className="pf-section-title mb-3">Projects</h2>

        <Row className="g-4">
          {repos.map((r) => (
            <Col md={6} xl={4} key={r.id}>
              <Card
                bg="dark"
                text="light"
                className="pf-project-card border-secondary h-100"
              >
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="h5 fw-semibold text-truncate">
                    {r.name}
                  </Card.Title>
                  <div className="text-secondary small flex-grow-1">
                    {r.descriptionLines?.length ? (
                      r.descriptionLines.map((line, i) => (
                        <p key={i} className="mb-2 lh-sm">
                          {line}
                        </p>
                      ))
                    ) : (
                      <p className="mb-0">
                        Open-source work — see the repository for details.
                      </p>
                    )}
                  </div>
                  {r.techStack?.length ? (
                    <div
                      className="d-flex flex-wrap gap-1 mb-2"
                      aria-label="Tech stack"
                    >
                      {r.techStack.map((tech, i) => (
                        <Badge
                          key={`${r.id}-${tech}-${i}`}
                          bg="secondary"
                          className="fw-normal"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  ) : null}
                  <Button
                    href={r.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    as="a"
                    variant="outline-success"
                    size="sm"
                    className="pf-btn-resume mt-auto align-self-start"
                  >
                    <FontAwesomeIcon icon={faCodeBranch} className="me-1" />
                    Open repository
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

export default ProjectsSection;
