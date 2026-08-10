import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCode,
  faBullseye,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  LINKS,
  PROFILE,
  EXPERIENCE,
  EDUCATION,
  QUICK_FACTS,
  HERO_PRINCIPLES,
} from "../data/siteContent";

const currentJob = EXPERIENCE[0];
const education = EDUCATION[0];
const gradYear = education.period.split("–")[1]?.trim() || education.period;
const cgpa = education.detail.match(/[\d.]+\/10/)?.[0];

const HeroSection = () => {
  return (
    <section id="hero" className="pf-section pf-hero-section">
      <Container>
        <Row className="g-5 align-items-start">
          <Col lg={7}>
            <div className="d-flex align-items-center gap-2 mb-4 flex-wrap">
              <span className="pf-eyebrow-pill">Full-stack</span>
              <h1 className="text-muted small mb-0 fw-normal">
                {PROFILE.name} · SaaS &amp; MVP builder · Production systems
              </h1>
            </div>

            <h2 className="pf-hero-headline mb-4">
              Structure over <span className="pf-accent">shortcuts</span>.
              Shipped over <span className="pf-accent">theoretical</span>.
            </h2>

            <p className="lead text-muted mb-4" style={{ maxWidth: "38rem" }}>
              {PROFILE.tagline}
            </p>

            <div className="d-flex flex-wrap gap-3 mb-4">
              <Button
                href={LINKS.resume}
                target="_blank"
                rel="noopener noreferrer"
                as="a"
                className="pf-btn-primary fw-semibold px-4"
              >
                View Resume
              </Button>
              <Button
                href={LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                as="a"
                className="pf-btn-outline fw-semibold px-4"
              >
                <FontAwesomeIcon icon={faGithub} className="me-2" />
                View My Code
              </Button>
            </div>

            <Row className="g-3">
              {HERO_PRINCIPLES.map((p) => (
                <Col sm={4} key={p.title}>
                  <div
                    className={`pf-hero-principle-tile pf-tint-${p.tint}`}
                  >
                    <h3 className="h6 fw-bold mb-1">{p.title}</h3>
                    <p className="text-muted small mb-0 lh-sm">{p.body}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>

          <Col lg={5}>
            <div className="pf-quickfacts-card">
              <h3 className="h6 fw-bold mb-1">Quick Facts</h3>

              <div className="pf-quickfact-row">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="pf-quickfact-icon"
                />
                <div>
                  <p className="pf-quickfact-label mb-0">Currently</p>
                  <p className="text-muted small mb-0">
                    {currentJob.role} at {currentJob.org}
                  </p>
                </div>
              </div>

              <div className="pf-quickfact-row">
                <FontAwesomeIcon icon={faCode} className="pf-quickfact-icon" />
                <div className="flex-grow-1">
                  <p className="pf-quickfact-label mb-2">Tech Stack</p>
                  <div className="d-flex flex-wrap gap-1">
                    {QUICK_FACTS.techStack.map((t) => (
                      <Badge
                        key={t}
                        bg="light"
                        text="dark"
                        className="fw-normal border"
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pf-quickfact-row">
                <FontAwesomeIcon
                  icon={faBullseye}
                  className="pf-quickfact-icon"
                />
                <div>
                  <p className="pf-quickfact-label mb-0">Focus Areas</p>
                  <p className="text-muted small mb-0">
                    {QUICK_FACTS.focusAreas}
                  </p>
                </div>
              </div>

              <div className="pf-quickfact-row">
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  className="pf-quickfact-icon"
                />
                <div>
                  <p className="pf-quickfact-label mb-0">Education</p>
                  <p className="text-muted small mb-0">
                    {education.school} · B.Tech CS
                    {cgpa ? ` · ${cgpa} CGPA` : ""} · {gradYear}
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
