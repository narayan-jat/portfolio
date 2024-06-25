import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="d-flex flex-row justify-content-evenly align-items-center">
            <div>
                <h1>Narayan</h1>
            </div>
            <div>
                <ul className="d-flex flex-row list-unstyled m-0">
                    <li className="mx-2">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="mx-2">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="mx-2">
                        <Link to="/services">Services</Link>
                    </li>
                    <li className="mx-2">
                        <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li className="mx-2">
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
            <div>
                <button className="btn btn-primary">Resume</button>
            </div>
        </div>
    );
}

export default Header;
