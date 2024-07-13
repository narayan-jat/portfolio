import "../styles/About.css";
import experienceIcon from "../media/dev-experience.svg"
import projectIcon from "../media/projects-icon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const experience = [
  {
    name: " Chalo",
    role: "Interned at",
    period: " for 2 Months",
    imageUrl: experienceIcon
  },
  {
    name: "Mathisys ",
    role: "Interned at ",
    period: "for 3 Months",
    imageUrl: experienceIcon
  },
  {
    name: "",
    role: "Completed ",
    period: "5+ Projects",
    imageUrl: projectIcon,
  },
];

const bio = `I have a solid foundation in programming languages such as Java, Python, C, and in other fields Artificial Intelligence, Machine Learning, Data Structures & Algorithms. I am also proficient in web development. I have created websites with help of React framework for front-end and Django for back-end. I excel in problem-solving and logical thinking, which is crucial for debugging and developing efficient algorithms. I have solid understanding of data structures and algorithms which help me to tackle complex computational problems effectively. I have hands-on experience with software development tools like Postman, developer tool, Node.js and version control systems like Git. I learn the new technologies quickly and adapt to them. I analyze the problems by paying close attention to essential details, this makes me the best code optimizer and system designer. I am a clear communicator who excels at conveying complex ideas to diverse teams and clients, ensuring that everyone is on the same page. As a proven team player, I am dedicated to driving shared goals, fostering collaboration, and contributing to the overall success of the team.`

const About = () => {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="about">
      <h3 className="about-title">About me</h3>
      <div className="d-flex justify-content-center" id="bio-container">
      <div className="top-button">
          <Link
            className="scroll-link"
            to="#about"
            onClick={() => scrollToSection("home-container")}
            style={{
              color: "green",
            }}
          >
            <FontAwesomeIcon icon={faAngleDoubleUp} size="2x"></FontAwesomeIcon>
          </Link>
        </div>
        <div className="experience-section">
          {experience.map((exp, index) => (
            <div id="experience-inner"className="d-flex flex-row justify-content-start" key={index}>
              <div>
                <img className="experience-svgs" src={exp.imageUrl}alt="not found"></img>
              </div>
              <div>
                <h4 id="experience-title">
                  {exp.role} {exp.name}{" "}
                  <span className="period">{exp.period}</span>
                </h4>
              </div>
            </div>
          ))}
        </div>
        <div className="about-line"></div>
        <div className="bio-content">
          <h2>
            What are my strongest sides <span className="period">and skills?</span>
          </h2>
          <p id="bio">{bio}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
