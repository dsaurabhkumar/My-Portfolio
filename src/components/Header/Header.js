import React from 'react';
import '../Header/Header.css';
import { Link } from 'react-router-dom';
import '../Header/Header-Custom';

function Header() {
    return (
        <header>
                <nav className="navbar navbar-expand-sm">
                    <div className="container">
                        <Link className="navbar-brand" to="/">SAURABH KUMAR</Link>
                        <button className="navbar-toggler" data-toggle="collapse" data-target="#navBarId">
                            <span><i className="fas fa-align-justify hambergerMenu"></i></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navBarId">
                            <ul className="navbar-nav ml-auto">
                                {/* <li className="nav-item"><Link className="nav-link" to="/resume">Resume</Link></li> */}
                                <li className="nav-item"><Link className="nav-link" to="/about-me">About Me</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/my-projects">My Projects</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/contact-me">Contact Me</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
        </header>
    )
}
export default Header