import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward } from "@fortawesome/free-solid-svg-icons";
import { PROFILE } from "../data/siteContent";
import { useCredlyBadges } from "../hooks/useCredlyBadges";

const CertificationsSection = () => {
  const { badges, loading } = useCredlyBadges(PROFILE.credlyUsername);

  return (
    <section id="certifications" className="pf-section">
      <Container>
        <span className="pf-section-eyebrow">Credentials</span>
        <h2 className="pf-section-title mb-4">Certifications</h2>

        {loading ? (
          <div className="text-center py-4">
            <Spinner animation="border" size="sm" className="pf-accent" />
          </div>
        ) : null}

        <Row className="g-3">
          {badges.map((c) => (
            <Col md={6} lg={4} key={c.id}>
              <a
                href={c.publicUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-reset d-block"
              >
                <div className="pf-cert-strip-card">
                  {c.imageUrl ? (
                    <img
                      src={c.imageUrl}
                      alt=""
                      className="pf-cert-strip-img"
                    />
                  ) : (
                    <div className="pf-cert-icon-wrap">
                      <FontAwesomeIcon
                        icon={faAward}
                        className="pf-accent"
                      />
                    </div>
                  )}
                  <div className="flex-grow-1 text-truncate">
                    <p className="text-muted small mb-0 text-truncate">
                      {c.issuer}
                    </p>
                    <h3 className="h6 fw-semibold mb-0 text-truncate">
                      {c.title}
                    </h3>
                  </div>
                </div>
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default CertificationsSection;
