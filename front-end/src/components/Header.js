import React, { useEffect, useRef, useState } from "react";
import { Link} from "react-router-dom";
import "../styles/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isButtonCLicked, setIsButtonClicked] = useState(false);
  const buttonRef = useRef(null);

  const handleClick = () => {
   setIsButtonClicked(!isButtonCLicked);
  }

  useEffect(() => {
    const button = buttonRef.current;
    button.addEventListener('click', handleClick);

    return () => {
      button.removeEventListener('click', handleClick);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isButtonCLicked]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="header">
      <div className="brand-name">
        <h1>Narayan</h1>
      </div>
      <div ref={buttonRef} className={`menu-icon ${isButtonCLicked ? "menu-icon-active" : ""}`}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className={`${isButtonCLicked ? "link-container-active" : "link-container"}`}>
        <ul className="links-list">
          <li className="list-item">
            <Link className="header-link" to="#" onClick={() => scrollToSection('home-container')}>
              Home
            </Link>
          </li>
          <li className="list-item" onClick={() => scrollToSection('about')}>
            <Link className="header-link" to="#about">
              About
            </Link>
          </li>
          <li className="list-item">
            <Link className="header-link" to="#skills" onClick={() => scrollToSection('skills')}>
              Skills
            </Link>
          </li>
          <li className="list-item">
            <Link className="header-link" to="#projects" onClick={() => scrollToSection('projects')}>
              Projects
            </Link>
          </li>
          <li className="list-item">
            <Link className="header-link" to="#achivements" onClick={() => scrollToSection('achievements')}>
              Milestones
            </Link>
          </li>
          <li className="list-item">
            <Link className="header-link" to="#contact" onClick={() => scrollToSection('contact')}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="button">
        <Link to="https://drive.google.com/file/d/1JNhoViPEGQuhDiHAcBDnd1yPodSmeIWA/view?usp=sharing" target="_blank">
        <button type="button" className="btn btn-success" id="button-resume"><FontAwesomeIcon icon={faDownload} /> Resume</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
