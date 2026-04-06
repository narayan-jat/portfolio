import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { PROFILE } from "../data/siteContent";
import { useGitHubPinnedRepos } from "../hooks/useGitHubPinnedRepos";

const ProjectsSection = () => {
  const { repos, loading, error } = useGitHubPinnedRepos(PROFILE.githubUsername);

  return (
    <section id="projects" className="pf-section">
      <Container>
        <h2 className="pf-section-title mb-3">Projects</h2>

        {loading ? (
          <div className="text-center py-5">
            <Spinner animation="border" variant="success" />
            <p className="text-secondary small mt-3 mb-0">Loading…</p>
          </div>
        ) : null}

        {error ? (
          <p className="text-warning">{error}</p>
        ) : null}

        {!loading && !error && repos.length === 0 ? (
          <p className="text-secondary">
            No pinned repositories on this GitHub profile.
          </p>
        ) : null}

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
                  <Card.Text className="text-secondary small flex-grow-1">
                    {r.description?.trim() ||
                      "Open-source work — see the repository for details."}
                  </Card.Text>
                  <div className="d-flex flex-wrap gap-1 mb-3">
                    {r.language ? (
                      <Badge bg="secondary" className="fw-normal">
                        {r.language}
                      </Badge>
                    ) : null}
                  </div>
                  <div className="d-flex flex-wrap gap-2 align-items-center small text-secondary mt-auto">
                    <span>★ {r.stargazers_count}</span>
                    <span className="text-secondary">·</span>
                    <span>Updated {r.pushed_at?.slice(0, 10) || "—"}</span>
                  </div>
                  <Button
                    href={r.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    as="a"
                    variant="outline-success"
                    size="sm"
                    className="pf-btn-resume mt-3 align-self-start"
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
