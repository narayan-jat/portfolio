import React from "react";
import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";
import { HIGHLIGHTS } from "../data/siteContent";

const HighlightsSection = () => {
  return (
    <section id="highlights" className="pf-section">
      <Container>
        <h2 className="pf-section-title mb-3">Highlights</h2>
        <Accordion
          defaultActiveKey="0"
          flush
          className="pf-accordion pf-glass overflow-hidden"
        >
          {HIGHLIGHTS.map((h, i) => (
            <Accordion.Item
              eventKey={String(i)}
              key={h.title}
              className="bg-transparent border-secondary"
            >
              <Accordion.Header>{h.title}</Accordion.Header>
              <Accordion.Body>{h.body}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </section>
  );
};

export default HighlightsSection;
