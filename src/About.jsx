import React from 'react'
import CardSection from './CardSection'
import './CSSS/About.css';
import PravahImage from './Images/PravahCarousel1.jpg';
import PravahImage2 from './Images/PravahCarousel.jpg';
import PravahImage3 from './Images/PraavahCarousel2.jpg';
import ScrollReveal from 'scrollreveal';

const About = () => {

    function revealFunction() {
        const sr = ScrollReveal({ distance: '80px', easing: 'ease-out' });

        sr.reveal('.clinic-det-1', { origin: 'right', reset: false, duration: 500 });
        sr.reveal('.clinic-det-2', { origin: 'left', reset: false, duration: 800 });
        sr.reveal('.clinic-det-3', { origin: 'right', reset: false, duration: 1000 });
        sr.reveal('.clinic-det-4', { origin: 'left', reset: false, duration: 1200 });
    }


    window.addEventListener('load', () => {
        revealFunction();
    });

    return (
        <div>
            <div className="container-fluid about-con" id='about'>
                <div className="row">

                    {/* Left: Carousel */}
                    <div className="col-md-6 slider-con">
                        <div
                            id="carouselExampleIndicators"
                            className="carousel slide"
                            data-bs-ride="carousel"
                            data-bs-interval="3000"
                        >
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" />
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" />
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" />
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={PravahImage} className="d-block w-100 carousel-img" alt="Slide 1" />
                                </div>
                                <div className="carousel-item">
                                    <img src={PravahImage2} className="d-block w-100 carousel-img" alt="Slide 2" />
                                </div>
                                <div className="carousel-item">
                                    <img src={PravahImage3} className="d-block w-100 carousel-img" alt="Slide 3" />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true" />
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true" />
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>

                    {/* Right: Text (Visible in all sizes) */}
                    <div className="col-md-6 clinic-det-con">
                        <h1 style={{ color: "black" }}>HEALTH PRAVAHA</h1>
                        <p className='my-3 me-3 clinic-det-text'>
                            We specialize in diagnosing and treating a wide range of conditions including muscle disorders, paralysis, stiff joints, and cardiovascular and pulmonary rehabilitation. Our expert team of physiotherapists uses personalized treatment plans designed to restore mobility, improve strength, reduce pain, and enhance overall quality of life. Here are some of the problems in which we are specialized:
                        </p>

                        {/* DESKTOP & MOBILE view only */}
                        <div className="div clinic-det mb-0 clinic-det-1">
                            <button className="clinic-det-btn1 mb-3 d-flex align-items-center" type="button">
                                <div className="icon-img mx-3">
                                    <img src="./images/pain-in-joints.png" alt="joints" />
                                </div>
                                Stiff Joints & Muscle Disorders
                            </button>
                        </div>
                        <div className="div clinic-det mb-0 clinic-det-2">
                            <button className="clinic-det-btn2 mb-3 d-flex align-items-center" type="button">
                                <div className="icon-img mx-3">
                                    <img src="./images/patient.png" alt="patient" />
                                </div>
                                Accidents & Burn Injuries
                            </button>
                        </div>
                        <div className="div clinic-det mb-0 clinic-det-3">
                            <button className="clinic-det-btn1 mb-3 d-flex align-items-center" type="button">
                                <div className="icon-img mx-3">
                                    <img src="./images/brain.png" alt="brain" />
                                </div>
                                Brain Related Problems Like Paralysis
                            </button>
                        </div>
                        <div className="div clinic-det mb-0 clinic-det-4">
                            <button className="clinic-det-btn2 mb-3 d-flex align-items-center" type="button">
                                <div className="icon-img mx-3">
                                    <img src="./images/lungs.png" alt="lungs" />
                                </div>
                                Breathing Problems
                            </button>
                        </div>
                    </div>
                </div>

                {/* TABLET ONLY row */}
                <div className="row tablet-clinic-det-row d-none d-md-flex d-xl-none justify-content-center mt-4">
                    <div className="col-md-10 d-flex flex-wrap justify-content-center">
                        <div className="clinic-det clinic-det-1 mx-2">
                            <button className="clinic-det-btn1 mb-3 d-flex align-items-center" type="button">
                                <div className="icon-img mx-3">
                                    <img src="./images/pain-in-joints.png" alt="joints" />
                                </div>
                                Stiff Joints & Muscle Disorders
                            </button>
                        </div>
                        <div className="clinic-det clinic-det-2 mx-2">
                            <button className="clinic-det-btn2 mb-3 d-flex align-items-center" type="button">
                                <div className="icon-img mx-3">
                                    <img src="./images/patient.png" alt="patient" />
                                </div>
                                Accidents & Burn Injuries
                            </button>
                        </div>
                        <div className="clinic-det clinic-det-3 mx-2">
                            <button className="clinic-det-btn1 mb-3 d-flex align-items-center" type="button">
                                <div className="icon-img mx-3">
                                    <img src="./images/brain.png" alt="brain" />
                                </div>
                                Brain Related Problems Like Paralysis
                            </button>
                        </div>
                        <div className="clinic-det clinic-det-4 mx-2">
                            <button className="clinic-det-btn2 mb-3 d-flex align-items-center" type="button">
                                <div className="icon-img mx-3">
                                    <img src="./images/lungs.png" alt="lungs" />
                                </div>
                                Breathing Problems
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About
