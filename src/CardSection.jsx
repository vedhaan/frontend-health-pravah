import React from 'react';
import './CSSS/CardSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faClock } from '@fortawesome/free-regular-svg-icons';


const CardSection = () => {

  return (
    <div>
      <div className="container info-con" id="about">
        <div className="row">
          <div className="col-md-4 card info-card card-one">
            <h2 className="card-icon">9408443321</h2>
            <h5 className="card-heading">CONTACT DOCTOR</h5>
            <p className="card-text">
              Available 24/7 for medical emergencies. Connect instantly with certified
              doctors. Reach out for professional medical guidance with just one call.
            </p>
            <button className="card-btn">Contact</button>
          </div>

          <div className="col-md-4 card info-card card-two">
            <h2 className="card-icon">
              <FontAwesomeIcon icon={faCalendarCheck} size="xl" />
            </h2>
            <h5 className="card-heading">MAKE AN APPOINTMENT</h5>
            <p className="card-text">
              Schedule your appointment with ease and convenience. Our experienced
              healthcare professionals are here to provide personalized care tailored
              to your needs.
            </p>
            <button className="card-btn">Book Now</button>
          </div>

          <div className="col-md-4 card info-card card-three">
            <h2 className="card-icon">
              <FontAwesomeIcon icon={faClock} size="xl" />
            </h2>
            <h5 className="card-heading">OPENING HOURS</h5>
            <p className="card-text">
              <b>Morning :</b> 9:30 AM - 1:30 PM
              <br />
              <hr />
              <b>Evening :</b> 4:00 PM - 8:00 PM
            </p>
            <button className="card-btn">View More</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardSection;
