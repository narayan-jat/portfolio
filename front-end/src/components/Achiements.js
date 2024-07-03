import React from "react";
import "../styles/Achievements.css";

const milestones = [
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
        <svg className="svg" width="100" height="500" xmlns="http://www.w3.org/2000/svg">
          <line
            x1="50"
            y1="50"
            x2="50"
            y2="450"
            stroke="green"
            strokeWidth="5"
          />

          <polygon className="triangle" points="40,455 50,475 60,455" />
          {/* <polygon className="triangle" points="40,405 50,425 60,405" />
          <polygon className="triangle" points="40,355 50,375 60,355" />
          <polygon className="triangle" points="40,305 50,325 60,305" />
          <polygon className="triangle" points="40,255 50,275 60,255" />
          <polygon className="triangle" points="40,205 50,225 60,205" />
          <polygon className="triangle" points="40,155 50,175 60,155" />
          <polygon className="triangle" points="40,105 50,125 60,105" /> */}
          <polygon className="triangle" points="40,55 50,75 60,55" />
        </svg>
        <div className="milestones">
            <ul>
                {milestones.map((milestone, index) => (
                    <li key={index} >
                        <div className="milestone">
                            <div className="milestone-title">{milestone.title}</div>
                            <div className="date">{milestone.date}</div>
                            <div className="detais">{milestone.details}</div>
                            <div className="gain">{milestone.achievement}</div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
        </div>
  );
};

export default Achievemets;
