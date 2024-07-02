import React from "react";
import PersonalData from "../apis/PersonalData";
import "../styles/Home.css";
import Photo from "../media/image.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const goals = ["DevOps Enthusiast", "Full-stack Developer", "Data sceintist"];

const Home = () => {
  const data = PersonalData();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  if (data === null) {
    return <h1>Narayan is thinking</h1>;
  }

  return (
    <div id="home-container">
    <div className="container">
      <div className="row">
        <div className="col-md-6" id="text-content">
          <h2 className="greet">Hi, I'm </h2>
          <h1 className="name">{data.name}</h1>
          <h3 className="greet">{goals[0]}</h3>
          <div className="d-flex flex-column">
            <div className="about">
              <p>{data.about}</p>
            </div>
            <div className="d-flex flex-row justify-content-start">
              <button id="home-button" className="btn btn-success ">Resume</button>
              <button id="home-button" className="btn">Hire Me</button>
            </div>
          </div>
        </div>
        <div className="col-md-6" id="image-content">
          <img src={Photo} className="img-fluid" alt="Image not found"></img>
        </div>
      </div>
      <div className="direction d-flex justify-content-center " style={{paddingTop: "100px"}}>
        <Link className="scroll-link" to="#about" onClick={() => scrollToSection('about')}><FontAwesomeIcon icon={faAngleDoubleDown}></FontAwesomeIcon> &nbsp; Scroll now  &nbsp;<FontAwesomeIcon icon={faAngleDoubleDown}></FontAwesomeIcon></Link>
      </div>
    </div>
    </div>
  );
};

export default Home;
