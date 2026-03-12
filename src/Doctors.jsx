import React from 'react';
import './CSSS/Doctors.css';
import ScrollReveal from 'scrollreveal';

const Doctors = () => {

    function revealFunction() {
        const sr = ScrollReveal({ distance: '250px', easing: 'ease-out' });

        sr.reveal('.first-doc-img', { origin: 'left', reset: false, duration: 1000 });
        sr.reveal('.first-doc-info', { origin: 'right', reset: false, duration: 1000 });
        sr.reveal('.sec-doc-img', { origin: 'right', reset: false, duration: 1000 });
        sr.reveal('.sec-doc-info', { origin: 'left', reset: false, duration: 1000 });

    }


    window.addEventListener('load', () => {
        revealFunction();
    });

    return (
        <div>
            <div className="container mt-5" id='doctors'>
                <div className="row mb-3">
                    <div className="col-md-12">
                        <h1 className='text-center'>OUR DOCTORS</h1>
                        <p className='text-center'>Here are our trusted doctors of HEALTH PRAVAHA</p>
                        <hr />
                    </div>
                </div>



                <div className="row doc-row">

                    <div className="col-md-6 first-doc-img">
                        <div className="doc-img-wrapper">
                            <img src="/images/doc.jpg" alt="#" />
                        </div>
                    </div>

                    <div className="col-md-6 doctor-info1 first-doc-info">
                        <h3 className='doctor-head'>Dr. Navdeep Dave</h3>
                        <p className='doctor-degree'>B.P.T | M.P.T | MIAP</p>

                        {/* NOTE-REMOVE JUSTIFY CSS WHENEVER WE HAVE TO ADD ABOUT DOC  */}
                        {/* <p className='doctor-text'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, odit harum vero corrupti a Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, ea. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, perferendis.
                        </p> */}

                        <button className='doctor-btn'>CONTACT DOCTOR</button>
                    </div>
                </div>

                <div className="row doc-row">
                    <div className="col-md-6 sec-doc-img order-1 order-md-2" style={{ margin: 'auto' }}>
                        <div className="doc-img-wrapper">
                            <img src="/images/doc.jpg" alt="#" />
                        </div>
                    </div>

                    <div className="col-md-6 doctor-info2 sec-doc-info order-2 order-md-1">
                        <h3 className='doctor-head'>Dr. Dipen Thakor</h3>
                        <p className='doctor-degree'>B.P.T | MIAP</p>
                        {/* <p className='doctor-text'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, odit harum vero corrupti a nemo molestiae Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, commodi. Rem, culpa. Ducimus aperiam est doloribus cumque assumenda maiores quis. ! ...
                        </p> */}
                        <button className='doctor-btn'>CONTACT DOCTOR</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Doctors;
