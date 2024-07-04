import Carousel from "react-bootstrap/Carousel";
import projectImage from "../media/projects-default.jpg";
import "../styles/Projects.css";
import { Link } from "react-router-dom";

const projects = [
  {
    name: "XYZ",
    details:
      "In a world increasingly driven by technology, the importance of cybersecurity cannot be overstated. As more of our personal and professional lives move online, the risks associated with data breaches and cyberattacks grow exponentially. Cybercriminals are becoming more sophisticated, employing advanced techniques to exploit vulnerabilities in systems and networks.",
    imageUrl: projectImage,
    sourceUrl: "https://codewithnarayan.com/",
    liveUrl: "",
  },
  {
    name: "XYZ",
    details: "lorem ispsum",
    imageUrl: projectImage,
    sourceUrl: "https://codewithnarayan.com/",
    liveUrl: "",
  },
  {
    name: "XYZ",
    details: "lorem ispsum",
    imageUrl: projectImage,
    sourceUrl: "https://codewithnarayan.com/",
    liveUrl: "",
  },
  {
    name: "XYZ",
    details: "lorem ispsum",
    imageUrl: projectImage,
    sourceUrl: "https://codewithnarayan.com/",
    liveUrl: "",
  },
  {
    name: "XYZ",
    details: "lorem ispsum",
    imageUrl: projectImage,
    sourceUrl: "https://codewithnarayan.com/",
    liveUrl: "",
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
          interval= {null}
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
                  <h5>{project.name}</h5>
                  <Link
                    to={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <p className="project-details">{project.details}</p>
                  </Link>
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
