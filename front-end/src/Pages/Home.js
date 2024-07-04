import React from "react";
import Header from "../components/Header";
import Home from "../components/Home";
import About from "../components/About";
import Skills from "../components/Skills";
import "../styles/Pages.css";
import Projects from "../components/Projects";
import Achievemets from "../components/Achiements";
import Contact from "../components/Contact";

const Portfolio = () => {

    return(
        <div>
            <Header/>
            <Home/>
            <About/>
            <Skills/>
            <Projects/>
            <Achievemets/>
            <Contact/>
        </div>
    )
}

export default Portfolio;