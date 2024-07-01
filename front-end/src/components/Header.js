import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  // const [isMenuLayout, setIsMenuLayout] = useState(true);
  const [isButtonCLicked, setIsButtonClicked] = useState(false);
  const buttonRef = useRef(null);


  const handleClick = () => {
   setIsButtonClicked(!isButtonCLicked);
  }

  useEffect(() => {
    const button = buttonRef.current;
    button.addEventListener('click', handleClick);

    // Cleanup function to remove the event listener
    return () => {
      button.removeEventListener('click', handleClick);
    };
  }, [isButtonCLicked]);

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
            <Link className="header-link" to="/">
              Home
            </Link>
          </li>
          <li className="list-item">
            <Link className="header-link" to="/about">
              About
            </Link>
          </li>
          <li className="list-item">
            <Link className="header-link" to="/services">
              Services
            </Link>
          </li>
          <li className="list-item">
            <Link className="header-link" to="/portfolio">
              Portfolio
            </Link>
          </li>
          <li className="list-item">
            <Link className="header-link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="button">
        <button type="button" className="btn btn-success" id="button-resume"><FontAwesomeIcon icon={faDownload} /> Resume</button>
      </div>
    </div>
  );
};

export default Header;
