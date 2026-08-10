import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodeBranch,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FEATURED_REPOS, LINKS } from "../data/siteContent";

const ProjectsSection = () => {
  const repos = FEATURED_REPOS.filter((r) => r.featured);

  return (
    <section id="projects" className="pf-section">
      <Container>
        <span className="pf-section-eyebrow">Open source &amp; personal</span>
        <h2 className="pf-section-title mb-4">Projects</h2>

        <Row className="g-4">
          {repos.map((r) => (
            <Col md={6} xl={4} key={r.id}>
              <Card className="pf-project-card pf-card h-100 border-0">
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="h5 fw-semibold text-truncate">
                    {r.name}
                  </Card.Title>
                  <div className="text-muted small flex-grow-1">
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
                          bg="light"
                          text="dark"
                          className="fw-normal border"
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

        <div className="text-center mt-5">
          <Button
            href={LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            as="a"
            className="pf-btn-outline fw-semibold px-4"
          >
            <FontAwesomeIcon icon={faGithub} className="me-2" />
            View more on GitHub
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="ms-2"
            />
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default ProjectsSection;
