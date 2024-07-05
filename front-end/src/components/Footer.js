import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFacebook, faInstagram, faGithub, faMedium, faHackerrank, faLinkedin, faDiscord, faSlack} from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div id="footer">
      <div className="social-media">
        <Link to="" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x"></FontAwesomeIcon>
        </Link>
        <Link to="" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faMedium} size="2x"></FontAwesomeIcon>
        </Link>
        <Link to="" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faHackerrank} size="2x"></FontAwesomeIcon>
        </Link>
        <Link to="" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x"></FontAwesomeIcon>
        </Link>
      </div>
      <div className="tagline">Made with <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon> by Narayan Jat</div>
    </div>
  );
};

export default Footer;