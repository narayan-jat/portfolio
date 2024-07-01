import React from "react";
import PersonalData from "../apis/PersonalData";
import "../styles/Home.css";
import Photo from "../media/image.jpg";


const goals = ["DevOps Enthusiast", "Full-stack Developer", "Data sceintist"];

const Home = () => {
  const data = PersonalData();

  if (data === null) {
    return <h1>Narayan is thinking</h1>;
  }

  return (
    <div id="home-container">
    <div className="container" >
      {/* d-flex flex-row content-container justify-content-lg-evenly flex-wrap */}
      <div className="row">
      {/* d-flex flex-column text-content */}
        <div className="col-md-6" id="text-content">
          <h2 className="">Hi, I'm </h2>
          <h1 className="">{data.name}</h1>
          <h3>{goals[0]}</h3>
          <div className="d-flex flex-column">
            <div className="about">
              <p>{data.about}</p>
            </div>
            <div className="d-flex flex-row justify-content-start">
              <button id="home-button" className="btn btn-success ">Resume</button>
              <button id="home-button" className="btn">Hire Me</button>
            </div>
          </div>
        </div>
        <div className="col-md-6" id="image-content">
          <img src={Photo} className="img-fluid" alt="Image not found"></img>
        </div>
      </div>
      <div className="direction d-flex justify-content-center">
        <p>Scroll now</p>
      </div>
    </div>
    </div>
  );
};

export default Home;
