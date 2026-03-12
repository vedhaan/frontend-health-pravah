import React from 'react';
import './CSSS/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import logo from './Images/HPLogo.png';


const Footer = () => {
    return (
        <div>
            <div className="container-fluid footer-con">
                <div className="row">
                    <div className="col-md-3">
                        <div className="footer-logo-con">
                            <a href="#">
                                <img src={logo} alt="logo" />
                            </a>
                        </div>

                        <p className="about-owner">
                            Providing expert physiotherapy care with advanced techniques tailored to you. From muscle issues and paralysis to stiff joints and rehab, we help restore movement, reduce pain, and improve everyday life with compassion and commitment.
                        </p>
                    </div>

                    <div className="col-md-6 list-pc">
                        <div className="footer-lists-wrapper" style={{ display: "flex", flexWrap: "wrap" }}>
                            <div style={{ width: "50%" }}>
                                <ul>
                                    <li className='footer-link-header'><h5>Health Pravaha</h5></li>
                                    <li className='link-text'><a href="/">Home</a></li>
                                    <li className='link-text'><a href="#about">About</a></li>
                                    <li className='link-text'><a href="#services">Services</a></li>
                                    <li className='link-text'><a href="#contact">Contact</a></li>
                                </ul>
                            </div>
                            <div style={{ width: "50%" }}>
                                <ul>
                                    <li className='footer-link-header'><h5>Services</h5></li>
                                    <li className='link-text'><a href="#services">Sports Injury</a></li>
                                    <li className='link-text'><a href="#services">Neurological Problem</a></li>
                                    <li className='link-text'><a href="#services">Spine Injury</a></li>
                                    <li className='link-text'><a href="#services">Pediatrics Condition</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* rows design for mobile version  */}

                    <div className="col-md-6 list-mob">
                        <div className="footer-lists-wrapper" style={{ display: "flex", flexWrap: "wrap" }}>
                            <div style={{ width: "50%" }}>
                                <ul>
                                    <li className='footer-link-header'><h5>Health Pravaha</h5></li>
                                    <li className='link-text'><a href="/">Home</a></li>
                                    <li className='link-text'><a href="#about">About</a></li>
                                    <li className='link-text'><a href="#services">Services</a></li>
                                    <li className='link-text'><a href="#contact">Contact</a></li>
                                </ul>
                            </div>
                            <div style={{ width: "50%" }}>
                                <ul>
                                    <li className='footer-link-header'><h5>Services</h5></li>
                                    <li className='link-text'><a href="#services">Sports Injury</a></li>
                                    <li className='link-text'><a href="#services">Neurological Problem</a></li>
                                    <li className='link-text'><a href="#services">Spine Injury</a></li>
                                    <li className='link-text'><a href="#services">Pediatrics Condition</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    {/* rows design ended for mobile  */}

                    <div className="col-md-3">
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            width: '100%'
                        }}>
                            <button className='footer-btn'>CONTACT OUR DOCTOR</button>

                            <div className='d-flex mt-3 footer-icons-con' style={{
                                gap: '10px',
                                justifyContent: 'center'
                            }}>
                                <div className='link-text-icon'>
                                    <a href="https://wa.me/919408443321" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255, 255, 255, 0.932)', textDecoration: 'none' }}>
                                        <FontAwesomeIcon icon={faWhatsapp} size="xl" />
                                    </a>
                                </div>
                                <div className='link-text-icon'>
                                    <a href="mailto:Healthpravaha@gmail.com" style={{ color: 'rgba(255, 255, 255, 0.932)', textDecoration: 'none' }}>
                                        <FontAwesomeIcon icon={faEnvelope} size="xl" />
                                    </a>
                                </div>
                                <div className='link-text-icon'>
                                    <a href="https://www.instagram.com/your_instagram" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255, 255, 255, 0.932)', textDecoration: 'none' }}>
                                        <FontAwesomeIcon icon={faInstagram} size="xl" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </div>

            <div className="container-fluid copy-con">
                <div className="row">
                    <div className="col-md-12 copy-text-con">
                        <p className='copy-text'>Copyright &#169; 2025 Health Pravaha || Developed By <a className='copy-link' href="https://www.vedhaan.com/">Vedhaan Infotech</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
