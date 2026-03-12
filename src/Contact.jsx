import React from 'react';
import './CSSS/Contact.css';
import ScrollReveal from 'scrollreveal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faClock, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';



const Contact = () => {

    function revealFunction() {
        const sr = ScrollReveal({ distance: '100px', easing: 'ease-out' });

        sr.reveal('.map-con', {opacity:0, reset: false, duration: 1000 });
        sr.reveal('.i-1', {origin:'bottom', reset: false, duration: 1000 });
        sr.reveal('.i-2', {origin:'bottom', reset: false, duration: 1000 });
        sr.reveal('.i-3', {origin:'bottom', reset: false, duration: 1000 });
        sr.reveal('.i-4', {origin:'bottom', reset: false, duration: 1000 });

    }

    window.addEventListener('load', () => {
        revealFunction();
    });

    return (
        <div>
            <div className="container-fluid contact-con" id='contact'>
                <div className="row map-con">
                    <div className="col-md-12">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.7106254501305!2d72.54434296067882!3d23.107686623034937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e83b272cc451f%3A0xb05535ee8bed2199!2sHealth%20Pravaha%20Physiotherapy%20Clinic!5e0!3m2!1sen!2sus!4v1748858370939!5m2!1sen!2sus"
                            width="100%"
                            height="450"
                            style={{ border: '0' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>

                <div className="row contact-detail">
                    <div className="col-md-3 d-flex justify-content-center align-items-center contact-det i-1">
                        <div className="loc-icon-con">
                           <FontAwesomeIcon icon={faLocationDot} size="2xl" style={{ color: "#5A5AFF" }} />
                        </div>
                        <div>
                            <h6 className='contact-heading'>ADDRESS</h6>
                            <p className='contact-text'>GF/3 Westen Heights,Gota,Ahmedabad</p>
                        </div>
                    </div>

                     <div className="col-md-3 d-flex justify-content-center align-items-center contact-det contact-det2 i-2">
                        <div className="loc-icon-con">
                            <FontAwesomeIcon icon={faClock} size="2xl" style={{ color: "#5A5AFF" }} />
                        </div>
                        <div>
                            <h6 className='contact-heading'>WORKING DAYS</h6>
                            <p className='contact-text'>MONDAY - SATURDAY</p>
                        </div>
                    </div>

                     <div className="col-md-3 d-flex justify-content-center align-items-center contact-det i-3">
                        <div className="loc-icon-con">
                            <FontAwesomeIcon icon={faEnvelope} size="2xl" style={{ color: "#5A5AFF" }} />
                        </div>
                        <div>
                            <h6 className='contact-heading'>E-MAIL</h6>
                            <p className='contact-text'>Healthpravaha@gmail.com</p>
                        </div>
                    </div>

                     <div className="col-md-3 d-flex justify-content-center align-items-center contact-det contact-det2 i-4">
                        <div className="loc-icon-con">
                           <FontAwesomeIcon icon={faPhone} size="2xl" style={{ color: "#5A5AFF" }} />
                        </div>
                        <div>
                            <h6 className='contact-heading'>TELEPHONE</h6>
                            <p className='contact-text'>9408443321 & 9558231801</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
