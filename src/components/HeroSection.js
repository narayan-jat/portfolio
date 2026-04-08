import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Typewriter from "typewriter-effect";
import { LINKS, PROFILE } from "../data/siteContent";
import photo from "../media/image.jpg";

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const HeroSection = () => {
  return (
    <section id="hero" className="pf-section pt-4 mt-4">
      <Container className="pt-lg-3">
        <Row className="align-items-center g-5">
          <Col lg={7}>
            <Badge bg="dark" className="mb-2 mt-4 border border-secondary px-3 py-2">
              {PROFILE.headline}
            </Badge>
            <p className="text-secondary small mb-3 mb-md-2">{PROFILE.subhead}</p>
            <h1 className="pf-hero-name mb-2">{PROFILE.name}</h1>
            <div className="pf-type-line mb-3">
              <Typewriter
                options={{
                  strings: PROFILE.roles,
                  autoStart: true,
                  loop: true,
                  delay: 45,
                  deleteSpeed: 28,
                  pauseFor: 1400,
                }}
              />
            </div>
            <p className="lead text-secondary mb-4">{PROFILE.tagline}</p>
            <div className="d-flex flex-wrap gap-2 mb-4">
              <span className="pf-stat-pill">
                <FontAwesomeIcon icon={faLocationDot} />
                {PROFILE.location}
              </span>
            </div>
            <div className="d-flex flex-wrap gap-2 mb-4">
              <Button
                href={LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                as="a"
                variant="success"
                className="fw-semibold px-4"
              >
                <FontAwesomeIcon icon={faGithub} className="me-2" />
                GitHub
              </Button>
              <Button
                href={LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                as="a"
                variant="outline-light"
                className="fw-semibold px-4"
              >
                <FontAwesomeIcon icon={faLinkedin} className="me-2" />
                LinkedIn
              </Button>
              <Button
                href={LINKS.credly}
                target="_blank"
                rel="noopener noreferrer"
                as="a"
                variant="outline-light"
                className="fw-semibold px-4 border pf-cert-hero-btn"
              >
                Certifications
              </Button>
              <Button
                href={LINKS.resume}
                target="_blank"
                rel="noopener noreferrer"
                as="a"
                variant="outline-success"
                className="pf-btn-resume fw-semibold px-4"
              >
                View resume
              </Button>
            </div>
            <button
              type="button"
              className="btn btn-link text-secondary text-decoration-none p-0 d-flex align-items-center gap-2"
              onClick={() => scrollTo("about")}
            >
              <FontAwesomeIcon icon={faArrowDown} className="pf-accent" />
              About me
            </button>
          </Col>
          <Col lg={5}>
            <div className="pf-glass p-3 p-sm-4">
              <div className="pf-avatar-wrap">
                <img
                  src={photo}
                  alt={`${PROFILE.name} — profile`}
                  className="pf-avatar"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
