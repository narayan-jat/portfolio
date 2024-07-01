import PersonalData from "../apis/PersonalData.js";
import "../styles/About.css";

const experience = [
  {
    name: " Chalo",
    role: "Interned at",
    period: " for 2 Months",
  },
  {
    name: "Mathisys ",
    role: "Interned at ",
    period: "for 3 Months",
  },
  {
    name: "Projects ",
    role: "Completed ",
    period: "4+ Projects",
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
      <div className="bio-container d-flex flex-row justify-content-evenly">
        <div>
          {experience.map((exp, index) => (
            <div className="d-flex flex-row justify-content-between" key={index}>
              <div className="">
                <img src="sdfd" alt="not found"></img>
              </div>
              <div>
                <h4>
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
