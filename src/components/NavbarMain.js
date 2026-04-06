import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { LINKS, PROFILE } from "../data/siteContent";

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const NavbarMain = () => {
  const [expanded, setExpanded] = useState(false);

  const link = (id, label) => (
    <Nav.Link
      className="pf-nav-link"
      href={`#${id}`}
      onClick={(e) => {
        e.preventDefault();
        scrollTo(id);
        setExpanded(false);
      }}
    >
      {label}
    </Nav.Link>
  );

  return (
    <Navbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      className="pf-navbar"
    >
      <Container>
        <Navbar.Brand
          href="#hero"
          className="fw-bold text-light"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("hero");
            setExpanded(false);
          }}
        >
          {PROFILE.name.split(" ")[0]}
          <span className="pf-accent">.</span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="pf-nav"
          className="border-secondary text-light"
        />
        <Navbar.Collapse id="pf-nav">
          <Nav className="ms-auto align-items-lg-center gap-lg-1">
            {link("about", "About")}
            {link("experience", "Experience")}
            {link("projects", "Projects")}
            {link("skills", "Skills")}
            {link("certifications", "Certs")}
            {link("highlights", "Highlights")}
            <Button
              as="a"
              href={LINKS.resume}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline-success"
              className="ms-lg-3 mt-2 mt-lg-0 pf-btn-resume"
              size="sm"
            >
              <FontAwesomeIcon icon={faDownload} className="me-2" />
              Resume
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarMain;
