import React from "react";
import mongoDb from "../media/mongodb.png";
import reactJs from "../media/react-js.png";
import html5 from "../media/html-5.png";
import expressJS from "../media/express.png";
import nodeJS from "../media/node-js.png";
import javascript from "../media/js.png";
import python from "../media/python.png";
import next from "../media/next-js.png";
import cssImage from "../media/css-3.png";
import git from "../media/git.png";
import devOps from "../media/devops.png";
import english from "../media/lang-en.png";
import hindi from "../media/lang-en.png";
import "../styles/Skill.css";

const programmingSkills= [ {
    name: "Mongo DB",
    image: mongoDb
},
{
    name: "React JS",
    image: reactJs
},
{
    name: "Python",
    image: python
},
{
    name: "Mongo DB",
    image: mongoDb
},
{
    name: "HTML 5",
    image: html5
},
{
    name: "Express",
    image: expressJS
},
{
    name: "NodeJs",
    image: nodeJS
},
{
    name: "Javacript",
    image: javascript
},
{
    name: "Next",
    image: next
},
{
    name: "CSS",
    image: cssImage
},
];

const Skills = () => {
  return (
    <div id="skills" style={{ backgroundColor: "black", color: "white", width: "100%", paddingTop: "100px"}}>
      <h2
        style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          color: "green",
          padding: "50px 0",
        }}
      >
        Skills
      </h2>
      <div className="skill-container">
        <h2 className="skill-title">Programming Skills</h2>
        <div className="skills">
          {programmingSkills.map((skill, index) => (
            <div key={index} className="skill-image-box d-flex flex-column align-items-center">
              <img className="skill-image" src={skill.image} alt="not found"></img>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
        <h2 className="skill-title">Tools and Other Skills</h2>
        <div className="skills">
          {programmingSkills.map((skill, index) => (
            <div key={index} className=" skill-image-box d-flex flex-column align-items-center">
              <img className="skill-image" src={skill.image} alt="not found"></img>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
        <h2 className="skill-title">Programming Skills</h2>
        <div className="skills">
          {programmingSkills.map((skill, index) => (
            <div key={index} className=" skill-image-box d-flex flex-column align-items-center">
              <img className="skill-image" src={skill.image} alt="not found"></img>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
