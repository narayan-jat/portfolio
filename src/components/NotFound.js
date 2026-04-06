import React from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div
      className="pf-page d-flex align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <Container className="text-center py-5">
        <p className="pf-accent text-uppercase small fw-semibold mb-2">404</p>
        <h1 className="display-4 fw-bold text-light mb-3">Page not found</h1>
        <p className="text-secondary mx-auto mb-4" style={{ maxWidth: 420 }}>
          That route does not exist. Head back to the portfolio home.
        </p>
        <Button variant="success" onClick={() => navigate("/")}>
          Back home
        </Button>
      </Container>
    </div>
  );
};

export default NotFound;
