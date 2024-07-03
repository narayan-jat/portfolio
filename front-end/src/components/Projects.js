import Carousel from "react-bootstrap/Carousel";
import projectImage from "../media/projects-default.jpg";
import "../styles/Projects.css";

const projects = [
  {
    name: "XYZ",
    details: "lorem ispsum",
    imageUrl: projectImage,
    url: "https://codewithnarayan.com/",
  },
  {
    name: "XYZ",
    details: "lorem ispsum",
    imageUrl: projectImage,
    url: "https://codewithnarayan.com/",
  },
  {
    name: "XYZ",
    details: "lorem ispsum",
    imageUrl: projectImage,
    url: "https://codewithnarayan.com/",
  },
  {
    name: "XYZ",
    details: "lorem ispsum",
    imageUrl: projectImage,
    url: "https://codewithnarayan.com/",
  },
  {
    name: "XYZ",
    details: "lorem ispsum",
    imageUrl: projectImage,
    url: "https://codewithnarayan.com/",
  },
];
function Projects() {
  return (
    <div id="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="">
        <Carousel data-bs-theme="dark" className="project-carousel">
          {projects.map((project, index) => (
            <Carousel.Item key={index} className="project-items">
              <div className="project-item-container">
                <img
                  className="project-image"
                  src={project.imageUrl}
                  alt="First slide"
                />
                <Carousel.Caption id="project-texts">
                  <h5>{project.name}</h5>
                  <p>{project.details}</p>
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
