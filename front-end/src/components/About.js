import PersonalData from "../apis/PersonalData.js";
import "../styles/About.css";
import experienceIcon from "../media/dev-experience.svg"
import projectIcon from "../media/projects-icon.svg";

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
    name: "Projects ",
    role: "Completed ",
    period: "4+ Projects",
    imageUrl: projectIcon,
  },
];

const About = () => {
  const data = PersonalData();
  if (data === null) {
    return <h1>Narayan is thinking</h1>;
  }

  return (
    <div>
      <h3 className="about-title">About me</h3>
      <div className=" " id="bio-container">
        <div className="experience-section">
          {experience.map((exp, index) => (
            <div className="d-flex flex-row justify-content-start" key={index}>
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
        <div className="bio-content">
          <h2>
            What are my strongest sides <span>and skills?</span>
          </h2>
          <p>{data.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
