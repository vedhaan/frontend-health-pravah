import React, { useState } from 'react';
import './CSSS/Appointment.css';
import { Toaster, toast } from 'sonner';
import axios from 'axios';


const Appointment = () => {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [location, setLocation] = useState("");
    const [conditions, setConditions] = useState("");
    const [time, setTime] = useState("");


    function handleSubmit(e) {
        e.preventDefault();

        axios.post("http://localhost:3001/appointments", {
            name,
            phone,
            location,
            conditions,
            time,
        })
            .then((response => {
                toast.success('Appointment submitted successfully!');

                setName('');
                setPhone('');
                setLocation('');
                setConditions('');
                setTime('');
            }))
            .catch((error) => {
                toast.error('Failed to submit appointment. Please try again.');
                console.error('Submit error:', error);
            })
    }

    return (
        <div>
            <div className="container mt-5 mb-5" id='appointment'>
                <Toaster richColors position="top-center" />

                <div className="row">
                    <div className="col-12">
                        <h2 className='patient-review-text text-center'>PATIENTS REVIEW</h2>
                    </div>

                    <div className="col-md-6 col-lg-6 col-sm-12 col-12 patient-review order-1 order-md-1">
                        <div className="row">
                            <div className="col-md-6 review-con px-1">
                                <div className="review-box">
                                    <div className="review-img-con">
                                        <img src="/images/review1.jpg" alt="patient-img" />
                                    </div>
                                    <h5 className='patient-name'>Ravi Sarvaiya</h5>
                                    <p className='patient-job'><b>Software Engineer</b></p>
                                    <p className='about-patient'>
                                        I had chronic back pain for years. After just a few sessions here, I feel like a new person. The care and attention to detail were exceptional!
                                    </p>

                                </div>
                            </div>

                            <div className="col-md-6 review-con px-1">
                                <div className="review-box">
                                    <div className="review-img-con">
                                        <img src="/images/review2.jpg" alt="patient-img" />
                                    </div>
                                    <h5 className='patient-name'>Pooja Mehta</h5>
                                    <p className='patient-job'><b>Teacher</b></p>
                                    <p className='about-patient'>
                                        I came in with a severe neck strain due to long working hours. The treatment was effective and staff was supportive in the process.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-6 col-sm-12 col-12 appointment-con order-2 order-md-2">
                        <h2 className='text-start appointment-heading'>MAKE AN APPOINTMENT</h2>
                        <p className='text-start appointment-text' style={{ color: "#5A5AFF" }}>We will contact you soon as possible !</p>

                        <form onSubmit={handleSubmit}>
                            <input className='input-0' type="text" name="name" id="name" placeholder='Full Name' required value={name} onChange={(e) => setName(e.target.value)} />
                            <input className='input-1' type="tel" name="phone" id="phone" placeholder='Phone' required value={phone} onChange={(e) => setPhone(e.target.value)} />
                            <input className='input-2' type="text" name="location" id="location" placeholder='Enter your location' required value={location} onChange={(e) => setLocation(e.target.value)} />

                            <select className="select-section" required value={conditions} onChange={(e) => setConditions(e.target.value)}>
                                <option value="">Select your condition</option>
                                <option value="1">Sport Injury</option>
                                <option value="2">Neurological Problem</option>
                                <option value="3">Spine Injury/Problem</option>
                                <option value="4">Geriatrci Condition</option>
                                <option value="5">Orthopedic Injury & After Surgery</option>
                                <option value="6">Cardiovascular Condition</option>
                            </select>

                            <select id="timeSelect" className="select-section" required value={time} onChange={(e) => setTime(e.target.value)}>
                                <option value="">Select a time</option>
                                <optgroup label="Morning">
                                    <option value="08">8:30 AM</option>
                                    <option value="09">9:30 AM</option>
                                    <option value="10">10:30 AM</option>
                                    <option value="11">11:30 AM</option>
                                    <option value="12">12:30 AM</option>
                                </optgroup>
                                <optgroup label="Evening">
                                    <option value="16">4:00 PM</option>
                                    <option value="17">5:00 PM</option>
                                    <option value="18">6:00 PM</option>
                                    <option value="19">7:00 PM</option>
                                    <option value="20">8:00 PM</option>
                                </optgroup>
                            </select>

                            <button className='form-btn'>Make an appointment</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Appointment;
