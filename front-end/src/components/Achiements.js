import React from "react";
import "../styles/Achievements.css";

const milestones = [
    {
        title: "Schooling",
        date:  "21 May 2020",
        details: "When writing a special milestone on your portfolio, you might want to include several key fields to effectively convey the significance and impact of that milestone. Here are some fields you can consider including",
        achievement: ""

    },
    {
        title: "Schooling",
        date:  "21 May 2020",
        details: "When writing a special milestone on your portfolio, you might want to include several key fields to effectively convey the significance and impact of that milestone. Here are some fields you can consider including",
        achievement: "Got 100 out 100 in exams"

    },
    {
        title: "Schooling",
        date:  "21 May 2020",
        details: "When writing a special milestone on your portfolio, you might want to include several key fields to effectively convey the significance and impact of that milestone. Here are some fields you can consider including",
        achievement: "Got 100 out 100 in exams"

    },
    {
        title: "Schooling",
        date:  "21 May 2020",
        details: "When writing a special milestone on your portfolio, you might want to include several key fields to effectively convey the significance and impact of that milestone. Here are some fields you can consider including",
        achievement: "Got 100 out 100 in exams"

    },
    {
        title: "Schooling",
        date:  "21 May 2020",
        details: "When writing a special milestone on your portfolio, you might want to include several key fields to effectively convey the significance and impact of that milestone. Here are some fields you can consider including",
        achievement: "Got 100 out 100 in exams"

    },
]
const Achievemets = () => {
  return (
    <div
      id="achievements"
      style={{
        backgroundColor: "black",
        padding: "100px 0",
        color: "white",
      }}
    >   

        <h2 style={{textAlign: "center", color: "green", paddingBottom: "50px"}}>Milestones</h2>
        <svg className="svg" width="100" height="1700" xmlns="http://www.w3.org/2000/svg">
        <polygon className="triangle" points="40,150 50,170 60,150" />
          <line
            x1="50"
            y1="0"
            x2="50"
            y2="1500"
            stroke="green"
            strokeWidth="5"
          />
            <line
            x1="50"
            y1="1500"
            x2="50"
            y2="2000"
            stroke="green"
            strokeWidth="5"
            className="line"
          />
            <polygon className="triangle" points="40,150 50,170 60,150" fill="white" stroke="green" strokeWidth={2}/>
            <polygon className="triangle" points="40,465 50,485 60,465" fill="white" stroke="green" strokeWidth={2}/>
            <polygon className="triangle" points="40, 800 50,820 60,800" fill="white" stroke="green" strokeWidth={2}/>
            <polygon className="triangle" points="40,1195 50,1215 60,1195" fill="white" stroke="green" strokeWidth={2}/>
        </svg>
        <div className="milestones">
            <ul style={{paddingLeft: "0"}}>
                {milestones.map((milestone, index) => (
                    <li key={index} >
                        <div className="milestone">
                            <div className="milestone-title"><h1>{milestone.title}</h1></div>
                            <div style={{border: "2px green solid"}}>
                            <div className="date"><h4>Date: {milestone.date}</h4></div>
                            <div className="details">{milestone.details}</div>
                            <div className="gain"><h5>{milestone.achievement}</h5></div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
        </div>
  );
};

export default Achievemets;
