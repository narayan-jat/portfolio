import React from "react";
import "../styles/Achievements.css";

const milestones = [
  {
    title: "Internship at Mathisys",
    date:  "20 May 2024",
    details: "I interned with Mathisys advisors LLP for 3 months, joining their on-site team in Gurgaon. This was my second on-site internship. I worked in the team of web developer. I with my team designed and created website of Purplesigma which is subsidiary of Mathisys. I also learned back-end libraries like Spring-Boot. The work environment at Mathisys is very heart touching.",
    achievement: "Developed website for Purplesigma"
},
  {
    title: "Internship at Chalo",
    date:  "12 June 2023",
    details: "I interned with Chalo Mobility for 2 months, joining their on-site team in Bangalore. This internship was my first foray into the professional world, and it was truly transformative. During my time at Chalo, I immersed myself in the realm of software development, which significantly deepened my understanding and passion for coding. I gained hands-on experience with Python and other programming languages, fueling my enthusiasm for the field and setting a solid foundation for my future career in tech.",
    achievement: "Practiced theoretical concepts to solve pratical problems"
},
    {
        title: "Reliance Scholar",
        date:  "15 December 2022",
        details: "For undergraduate students facing economic hardship, they provide merit-based scholarships. The Reliance Foundation graduate Scholarships aim to nurture world-class talent that will help power India’s new era of growth.",
        achievement: "Scholarship for 4 year graduation"

    },
    {
        title: "Hope and Dreams Trust Scholar",
        date:  "8 October 2022",
        details: "Hope and Dream Trust provides scholarship to underpriviledged bright students to pursue their dreams after 12th. In this scholarship student gets 100% scholarship including all the tuition fees and other expenses for entire graduation duration.",
        achievement: "100% Scholarship for 4 years of graduation"

    },
    {
        title: "Senior Secondary",
        date:  "4 August 2022",
        details: "I completed senior secondary education from JNV Bagalure(Bangalore) with scoring a perfect 100 out of 100 in Computer Science in CBSE board exams. I also prepared for IIT exams in these two year period from Dakshana. I secured 98.33 percentile in JEE MAINS and AIR 11000 in JEE Advance. This remarkable accomplishment highlights my exceptional dedication, strong academic prowess, and commitment to excellence.",
        achievement: "Scored 100 out of 100 in Computer Science"

    },
    {
        title: "NDST Scholar",
        date:  "15 March 2020",
        details: "The Navodaya Dakshana Selection Test (NDST) is a test that the Dakshana Foundation uses to select students for coaching for IIT and medical entrance exams. The test is conducted at more than 77 centers across India between February and March each year. The test has four parts: Logical Reasoning, Mathematics/Biology, Physics, and Chemistry. Dakshana has admitted over 5,000 students, including 1,632 who have used their NDST scores to gain admission to IITs through the JEE Advanced",
        achievement: "Selected for free IIT coaching"

    },
    {
        title: "Higher Secondary",
        date:  "20 April 2020",
        details: "I completed high secondary education from JNV Rajsamand with scoring a perfect 100 out of 100 in Mathematics in CBSE board exams. This remarkable accomplishment highlights my exceptional dedication, strong academic prowess, and commitment to excellence. It reflects not only my mastery of mathematical concepts but also my ability to perform exceptionally well under challenging circumstances.",
        achievement: "Scored perfect score in Mathematics"

    },
]
const Achievemets = () => {
  return (
    <div
      id="achievements"
      style={{
        backgroundColor: "hsla(240,8%,12%,1)",
        padding: "100px 0",
        color: "white",
      }}
    >   

        <h2 style={{textAlign: "center", color: "green", paddingBottom: "50px"}}>Milestones</h2>
        <svg className="svg" width="100" height="3000" xmlns="http://www.w3.org/2000/svg">
        <polygon className="triangle" points="40,150 50,170 60,150" />
          <line
            x1="50"
            y1="0"
            x2="50"
            y2="2500"
            stroke="green"
            strokeWidth="5"
          />
            <line
            x1="50"
            y1="2500"
            x2="50"
            y2="3000"
            stroke="green"
            strokeWidth="5"
            className="line"
          />
            <polygon className="triangle" points="40,150 50,170 60,150" fill="white" stroke="green" strokeWidth={2}/>
            <polygon className="triangle" points="40,615 50,635 60,615" fill="white" stroke="green" strokeWidth={2}/>
            <polygon className="triangle" points="40, 1000 50,1020 60,1000" fill="white" stroke="green" strokeWidth={2}/>
            <polygon className="triangle" points="40,1395 50,1415 60,1395" fill="white" stroke="green" strokeWidth={2}/>
            <polygon className="triangle" points="40,1790 50,1810 60,1790" fill="white" stroke="green" strokeWidth={2}/>
            <polygon className="triangle" points="40,2140 50, 2160 60,2140" fill="white" stroke="green" strokeWidth={2}/>
            <polygon className="triangle" points="40,2440 50, 2460 60,2440" fill="white" stroke="green" strokeWidth={2}/>
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
