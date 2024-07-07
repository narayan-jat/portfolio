import Carousel from "react-bootstrap/Carousel";
import projectImage from "../media/projects-default.jpg";
import strucutre from "../media/structure.png";
import cleaning from "../media/cleaning.png";
import tic from "../media/tic.png";
import dropout from "../media/dropout.avif";

import "../styles/Projects.css";
import { Link } from "react-router-dom";

const projects = [
  {
    name: "Nice Portfolio",
    details:
      "This portfolio project showcases a collection of my work and achievements, demonstrating my skills and expertise in various domains. It includes detailed descriptions of individual projects, highlighting my proficiency in programming, data analysis, machine learning, and software development. Each project is accompanied by source code, visualizations.",
    imageUrl: projectImage,
    sourceUrl: "https://github.com/narayan-jat/portfolio",
    liveUrl: "https://github.com/narayan-jat/portfolio",
    techStack: "React, Node",
    techField: "Web Development",
  },
  {
    name: "Data Structures Repository",
    details:
      "This project contains implementations all essential data structures, including arrays, linked lists, stacks, queues, trees, graphs, hash tables, and more. Each comes with comprehensive docstrings explaining functionality, usage, and underlying algorithms. Ideal for students and developers and can be used in various projects.",
    imageUrl: strucutre,
    sourceUrl: "https://github.com/narayan-jat/Data-structures",
    liveUrl: "https://github.com/narayan-jat/Data-structures",
    techStack: "Python",
    techField: "Data strucuture and Algorithms",
  },
  {
    name: "Text Cleaner",
    details:
      "This text cleaner tool in Java designed to clean text files in XML, TXT, and JSON formats based on custom-defined rules. This tool efficiently processes and sanitizes text, ensuring consistency and accuracy by applying specific cleaning criteria tailored to various file types. It is ideal for preparing data for further analysis or use in applications where text quality is crucial.",
    imageUrl: cleaning,
    sourceUrl: "https://github.com/narayan-jat/Text-Cleaning",
    liveUrl: "https://github.com/narayan-jat/Text-Cleaning",
    techStack: "Java",
    techField: "Data cleaning",
  },
  {
    name: "Tic Tac Toe Game",
    details:
      "This is the web application for the game Tic-Tac-Toe. This is simple and user-friendly game application where a player can challenge either computer or friends online. Player can play even without logging in or can register if he wants to keep track of his winnings. I have implemented the ML algorithms Reinforcement Learning and MiniMax algorithm.",
    imageUrl: tic,
    sourceUrl: "https://github.com/narayan-jat/game-project",
    liveUrl: "https://github.com/narayan-jat/game-project",
    techStack: "Flask, MySQL, HTML, CSS, Javascript",
    techField: "Machine Learning",
  },
  {
    name: "Dropout Analysis Portal",
    details:
      "Students are dropping out their studies for the several reasons and we don't have anything to analyse all the dropout rate in a particular field and work on it. This portal will help in finding the main factors in a particular region on which a proper focus is required. It will maximize the benefits of student community and provides many predefined parameters to invets into.",
    imageUrl: dropout,
    sourceUrl: "https://github.com/narayan-jat/SUStar-HackCBS",
    liveUrl: "https://github.com/narayan-jat/SUStar-HackCBS",
    techStack: "Flask, MySQL, HTML, CSS, Javascript",
    techField: "Web development",
  },
];
function Projects() {
  return (
    <div id="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="">
        <Carousel
          data-bs-theme="dark"
          className="project-carousel"
          interval={null}
          keyboard={true}
          touch={true}
        >
          {projects.map((project, index) => (
            <Carousel.Item key={index} className="project-items">
              <div className="project-item-container">
                <Link
                  to={project.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="project-image"
                    src={project.imageUrl}
                    alt="First slide"
                  />
                </Link>
                <Carousel.Caption id="project-texts">
                  <h5 style={{ fontWeight: 700 }}>{project.name}</h5>
                  <Link
                    to={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <p className="project-details">{project.details}</p>
                  </Link>
                  <h6 style={{ fontWeight: "700" }}>{project.techField}</h6>
                  <h6 style={{ textAlign: "left", padding: "5px 0" }}>
                    Tech Stack:{" "}
                    <span style={{ fontWeight: "700" }}>
                      {project.techStack}
                    </span>
                  </h6>
                  <Link
                    to={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="project-button">See Source Code</button>
                  </Link>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Projects;
