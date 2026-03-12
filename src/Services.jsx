import React, { useEffect } from 'react';
import { useState } from 'react';
import './CSSS/Services.css';
import diseases from './Diseas';
import ScrollReveal from 'scrollreveal';

const Services = () => {

    function revealFunction() {
        const sr = ScrollReveal({ distance: '80px', easing: 'ease-out' });

        sr.reveal('.service-card', {
            scale: 0.85,
            opacity: 0,
            duration: 800,
            reset: false,
            interval: 100
        });
    }


    window.addEventListener('load', () => {
        revealFunction();
    });

    const [disease, setDisease] = useState([]);

    useEffect(() => {
        setDisease(diseases);
    }, []);

    return (
        <div className="container-fluid mb-3 mt-3" id='services'>
            <div className="row">
                <div className="col-12 services-con">
                    <div className="row">
                        <div className="col-12 text-center mb-3">
                            <h1>OUR SERVICES</h1>
                            <p>Here is brief info about our services</p>
                        </div>
                    </div>

                    <div className="row services-wrapper">
                        {
                            disease.map((item) => (
                                <div className="card col-md-4 service-card ">
                                    <div className="serv-card-img" >
                                        <img src={item.image} alt="#" />
                                    </div>
                                    <h5 className='serv-card-heading'>{item.name}</h5>
                                    <p className='serv-card-text'>{item.description}</p>
                                </div>
                            ))
                        }

                        {/* <div className="card col-md-4 service-card ">
                            <div className="serv-card-img">
                                <img src="./images/joints2.png" alt="#" />
                            </div>
                            <h4 className='serv-card-heading'>Service Name</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum exercitationem magni accusantium veritatis nobis, accusamus eos dicta earum sequi iusto incidunt.</p>
                        </div>

                        <div className="card col-md-4 service-card ">
                            <div className="serv-card-img">
                                <img src="./images/joints2.png" alt="#" />
                            </div>
                            <h4 className='serv-card-heading'>Service Name</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum exercitationem magni accusantium veritatis nobis, accusamus eos dicta earum sequi iusto incidunt.</p>
                        </div>

                        <div className="card col-md-4 service-card ">
                            <div className="serv-card-img">
                                <img src="./images/joints2.png" alt="#" />
                            </div>
                            <h4 className='serv-card-heading'>Service Name</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum exercitationem magni accusantium veritatis nobis, accusamus eos dicta earum sequi iusto incidunt.</p>
                        </div>

                        <div className="card col-md-4 service-card ">
                            <div className="serv-card-img">
                                <img src="./images/joints2.png" alt="#" />
                            </div>
                            <h4 className='serv-card-heading'>Service Name</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum exercitationem magni accusantium veritatis nobis, accusamus eos dicta earum sequi iusto incidunt.</p>
                        </div>

                        <div className="card col-md-4 service-card ">
                            <div className="serv-card-img">
                                <img src="./images/joints2.png" alt="#" />
                            </div>
                            <h4 className='serv-card-heading'>Service Name</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum exercitationem magni accusantium veritatis nobis, accusamus eos dicta earum sequi iusto incidunt.</p>
                        </div> */}
                    </div>

                </div>


            </div>
        </div>
    );
}

export default Services;
