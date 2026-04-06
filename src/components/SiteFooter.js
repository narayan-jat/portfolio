import React from "react";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faAward } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faHackerrank,
} from "@fortawesome/free-brands-svg-icons";
import { LINKS, PROFILE } from "../data/siteContent";

const social = [
  { name: "GitHub", icon: faGithub, href: LINKS.github },
  { name: "LinkedIn", icon: faLinkedin, href: LINKS.linkedin },
  { name: "Credly", icon: faAward, href: LINKS.credly },
  { name: "Medium", icon: faMedium, href: LINKS.medium },
  { name: "HackerRank", icon: faHackerrank, href: LINKS.hackerrank },
  { name: "LeetCode", icon: faCode, href: LINKS.leetcode },
];

const SiteFooter = () => {
  return (
    <footer className="pf-footer mt-3">
      <Container className="text-center">
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
          {social.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="pf-social-btn"
              aria-label={s.name}
              title={s.name}
            >
              <FontAwesomeIcon icon={s.icon} size="lg" />
            </a>
          ))}
        </div>
        <p className="text-secondary small mb-0">
          Built with React & Bootstrap · {PROFILE.name} · Software Development
        </p>
      </Container>
    </footer>
  );
};

export default SiteFooter;
