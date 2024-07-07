import React from "react";
import PersonalData from "../apis/PersonalData";
import "../styles/Home.css";
import Photo from "../media/image.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

const goals = [
  "Intern at Mathysis",
  "Junior at Sitare",
  "Software Engineer",
  "Data scientist",
  "Machine Learning Engineer",
  "Full Stack Developer",
];
  
const about = `Welcome to my portfolio! I am currently interning with Mathisys advisors LLP in Gurgaon. I am third year(Junior) student at Sitare University. I'm a passionate and detail-oriented developer. I have a strong understanding of technologies and enjoy applying them to solve real-world challenges. I'm proficient in building scalable and efficient solutions for various applications, from data analysis to web development and machine learning models. `;

const Home = () => {
  const data = PersonalData();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  // if (data === null) {
  //   return <h1>Narayan is thinking</h1>;
  // }

  return(
    <div id="home-container">
      <div className="container">
        <div className="row">
          <div className="col-md-6" id="text-content">
            <h2 className="greet">Hello, I'm </h2>
            <h1 className="name">{data ? data.name : "Making it Beautiful"}</h1>
            <h3 className="greet">
              <Typewriter
                options={{
                  strings: goals,
                  autoStart: true,
                  loop: true,
                  pauseFor: 1000,
                }}
              />
            </h3>
            <div className="d-flex flex-column">
              <div className="about">
                <p>{about}</p>
              </div>
              <div className="d-flex flex-row justify-content-start">
                <Link
                  to="https://drive.google.com/file/d/1JNhoViPEGQuhDiHAcBDnd1yPodSmeIWA/view?usp=sharing"
                  target="_blank"
                  id="home-button"
                  style={{
                    borderRadius: "5px",
                  }}
                >
                  <button className="btn btn-success" style={{ width: "100%" }}>
                    Resume
                  </button>
                </Link>
                <button
                  id="home-button"
                  className="btn"
                  onClick={() => scrollToSection("contact")}
                >
                  Hire Me
                </button>
              </div>
              <div
                className="direction d-flex justify-content-center "
                style={{ padding: "25px 0" }}
              >
                <Link
                  className="scroll-link"
                  to="#about"
                  onClick={() => scrollToSection("about")}
                >
                  <FontAwesomeIcon icon={faAngleDoubleDown}></FontAwesomeIcon>{" "}
                  &nbsp; Scroll now &nbsp;
                  <FontAwesomeIcon icon={faAngleDoubleDown}></FontAwesomeIcon>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6" id="image-content">
            <img src={Photo} className="img-fluid" alt="not found"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
