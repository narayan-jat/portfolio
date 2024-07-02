import React from "react";
import Header from "../components/Header";
import Home from "../components/Home";
import About from "../components/About";
import Skills from "../components/Skills";
import "../styles/Pages.css";

const Portfolio = () => {

    return(
        <div>
            <Header/>
            <Home/>
            <About/>
            <Skills/>
        </div>
    )
}

export default Portfolio;