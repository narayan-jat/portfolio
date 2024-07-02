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

const programmingImages = [mongoDb, reactJs, python, html5, expressJS, nodeJS, 
    javascript, next, cssImage]

const Skills = () => {

    return (
        <div id="skills" className="skill-container">
            <h2 className="skill-title">Programming Skills</h2>
            <div className="skills">
               {programmingImages.map((image, index) => (
                <div key={index} className="d-flex flex-column">
                     <img className="skill-image" src={image} alt="not found"></img>
                     <span>React Js</span>
                </div>
               ))}
            </div>
            <h2 className="skill-title">Programming Skills</h2>
            <div className="skills">
               {programmingImages.map((image, index) => (
                <div key={index}>
                     <img className="skill-image" src={image} alt="not found"></img>
                </div>
               ))}
            </div>
            <h2 className="skill-title">Programming Skills</h2>
            <div className="skills">
               {programmingImages.map((image, index) => (
                <div key={index}>
                     <img className="skill-image" src={image} alt="not found"></img>
                </div>
               ))}
            </div>
        </div>
    )
}

export default Skills;