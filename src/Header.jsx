import React from 'react';
import "./CSSS/Header.css";
import logo from './Images/HPLogo.png';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-md bg-light" id='home'>
                <div className="container-fluid">
                    {/* Logo Left */}
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="logo" />
                    </a>

                    {/* Toggler Button for Mobile */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    
                    {/* Nav Links Right */}
                    <div
                        className="collapse navbar-collapse justify-content-end"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item mx-2">
                                <a className="nav-link active" aria-current="page" href="#home">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href="#about">
                                    About
                                </a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href="#services">
                                    Services
                                </a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href="#doctors">
                                    Doctors
                                </a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href="#contact">
                                    Contact
                                </a>
                            </li>
                            <li className="nav-item mx-2 nav-button">
                                <a className="nav-link " href="#appointment">
                                    BOOK APPOINTMENT
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;