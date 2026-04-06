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
        <h2 className="pf-section-title mb-3">Certifications</h2>

        {loading ? (
          <div className="text-center py-4">
            <Spinner animation="border" size="sm" variant="success" />
          </div>
        ) : null}

        <Row className="g-4">
          {badges.map((c) => (
            <Col md={6} lg={4} key={c.id}>
              <a
                href={c.publicUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-light d-block h-100"
              >
                <div className="pf-cert-card pf-glass p-4 h-100 d-flex flex-column">
                  <div className="text-center mb-3">
                    {c.imageUrl ? (
                      <img
                        src={c.imageUrl}
                        alt=""
                        className="pf-cert-badge-img"
                      />
                    ) : (
                      <div className="pf-cert-icon-wrap mx-auto">
                        <FontAwesomeIcon
                          icon={faAward}
                          size="xl"
                          className="pf-accent"
                        />
                      </div>
                    )}
                  </div>
                  <p className="text-secondary small mb-1">{c.issuer}</p>
                  <h3 className="h6 fw-bold text-light mb-2">{c.title}</h3>
                  <p className="text-secondary small pf-cert-desc mb-0 flex-grow-1">
                    {c.description}
                  </p>
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
