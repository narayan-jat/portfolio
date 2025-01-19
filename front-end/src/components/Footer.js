import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart} from "@fortawesome/free-solid-svg-icons";
import {
  faCodepen,
  faGithub,
  faMedium,
  faHackerrank,
  faLinkedin,
  
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const socialHandles = [
  {
    name: "Github",
    logo: faGithub,
    url: "https://github.com/narayan-jat",
  },
  {
    name: "Hackerrank",
    logo: faHackerrank,
    url: "https://www.hackerrank.com/profile/narayanjat2964",
  },
  {
    name: "Medium",
    logo: faMedium,
    url: "https://medium.com/@nj223948",
  },
  {
    name: "Linkedin",
    logo: faLinkedin,
    url: "https://www.linkedin.com/in/narayan-jat-23935a255/",
  },
  {
    name: "Coding",
    logo: faCodepen,
    url: "https://leetcode.com/u/YGaufh2hy5/",
  },
];
const Footer = () => {
  return (
    <div id="footer">
      <div className="social-media">
        {socialHandles.map((handle, index) => (
          <div className="d-flex flex-column align-items-center" key={index}>
            <Link
              to={handle.url}
              target="_blank"
              rel="noopener noreferrer"
              className="handle-link"
            >
              <FontAwesomeIcon icon={handle.logo} size="2x"></FontAwesomeIcon>
            </Link>
            <p>{handle.name}</p>
          </div>
        ))}
      </div>
      <div className="tagline">
        Made with <FontAwesomeIcon className="heart" icon={faHeart}></FontAwesomeIcon> by <span style={{fontWeight: 700, }}>Narayan Jat</span>
      </div>
    </div>
  );
};

export default Footer;
