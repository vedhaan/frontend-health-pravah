import React from 'react';
import Header from './Header';
import "./CSSS/MainPart.css";
import ScrollReveal from 'scrollreveal';

const MainPart = () => {

    function revealFunction() {
        const sr = ScrollReveal({ distance: '100px', easing: 'ease-out' });

        sr.reveal('.main-text-part h1', { origin: 'left', reset: false, duration: 1000 });
        sr.reveal('.main-text-part p', { origin: 'left', reset: false, duration: 800 });
        sr.reveal('.main-text-part button', { origin: 'left', reset: false, duration: 600 });
    }


    window.addEventListener('load', () => {
        revealFunction();
    });

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 main-banner-part">
                        <div className="row">
                            <div className="com-md-6 main-text-part">
                                <h1>PROFFESIONAL <br />PHYSIOTHERAPY CLINIC</h1>
                                <p className='main-small-text'>"Caring Hands, Healing Hearts."</p>
                                <p className='main-small-text2'>Dr. Navdeep Dave <br />
                                    Dr. Dipen Thakor</p>
                                <button className="btn whatsapp-btn d-flex align-items-center justify-content-center">
                                    <i
                                        className="fa-brands fa-whatsapp fa-2x mx-1"
                                        style={{ color: "white", paddingRight: "8px" }}
                                    ></i>
                                    CONNECT ON WHATSAPP
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPart;
