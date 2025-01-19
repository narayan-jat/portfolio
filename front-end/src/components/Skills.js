import React from "react";
import mongoDb from "../media/mongodb.png";
import reactJs from "../media/react-js.png";
import html5 from "../media/html-5.png";
import expressJS from "../media/express.png";
import nodeJS from "../media/node-js.png";
import javascript from "../media/javascript-1.png";
import python from "../media/python.png";
import java from "../media/java1.png";
import c from "../media/c.jpg"; 
import next from "../media/next-js.png";
import cssImage from "../media/css-3.png";
import git from "../media/git.png";
import english from "../media/lang-en.png";
import github from "../media/github.png";
import sql from "../media/sql.jpeg";
import pandas from "../media/pandas.png";
import numpy from "../media/numpy.png";
import keras from "../media/keras.png";
import plotly from "../media/plotly.png";
import matplotlib from "../media/matplotlib.png";
import scikit from "../media/scikit.png";
import "../styles/Skill.css";

const programmingSkills= [ {
    name: "Python",
    image: python
},
{
    name: "Java",
    image: java
},
{
    name: "Javascript",
    image: javascript
},
{
    name: "C",
    image: c
},
{
    name: "SQL",
    image: sql
}
];

const dataScience = [
  {
    name: "Numpy",
    image: numpy
},
{
    name: "Pandas",
    image: pandas
},
{
    name: "Scikit-learn",
    image: scikit
},
{
    name: "Keras",
    image: keras
},
{
    name: "Plotly",
    image: plotly
},
{
  name: "Matplotlib",
  image: matplotlib
},
{
  name: "Mongo DB",
  image: mongoDb
},
]

const webDevelopment = [ 
  {
    name: "HTML 5",
    image: html5
},
{
  name: "CSS",
  image: cssImage
},
{
  name: "React JS",
  image: reactJs
},
{
  name: "Javacript",
  image: javascript
},
{
  name: "Node JS",
  image: nodeJS
},
{
  name: "Next JS",
  image: next
},
{
  name: "Express",
  image: expressJS
},
{
  name: "Django",
  image: cssImage
},
]

const tools = [
  {
    name: "Git",
    image: git
},
{
  name: "Github",
  image: github
},
{
  name: "English",
  image: english
},

]
const Skills = () => {
  return (
    <div id="skills" style={{ backgroundColor: "hsla(240,8%,12%,1)", color: "white", width: "100%", padding: "100px 0"}}>
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
              <img className="skill-image" src={skill.image} alt="Skill icon for Narayan's portfolio."></img>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
        <h2 className="skill-title">ML and Data Science Skills</h2>
        <div className="skills">
          {dataScience.map((skill, index) => (
            <div key={index} className=" skill-image-box d-flex flex-column align-items-center">
              <img className="skill-image" src={skill.image} alt="Skill icon for Narayan's portfolio."></img>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
        <h2 className="skill-title">Web Development Skills</h2>
        <div className="skills">
          {webDevelopment.map((skill, index) => (
            <div key={index} className=" skill-image-box d-flex flex-column align-items-center">
              <img className="skill-image" src={skill.image} alt="Skill icon for Narayan's portfolio."></img>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
        <h2 className="skill-title">Tools and other Skills</h2>
        <div className="skills">
          {tools.map((skill, index) => (
            <div key={index} className=" skill-image-box d-flex flex-column align-items-center">
              <img className="skill-image" src={skill.image} alt="Skill icon for Narayan's portfolio."></img>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
