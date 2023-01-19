import React from "react";
import './ConfirmedBooking.css';
import { Link } from "react-router-dom";
import Highlight from "../Main/Highlight/Highlight";
import { useNavigate } from "react-router";

const ConfirmedBooking = (props) => {
    const { name, guests, date, time, phone, comments } = props.form;

    const navigate = useNavigate();
    
    return (
        <div className="BookingSection">
            <h1>Your reservation has been submitted</h1>
            <div className='StatusBar'>
                <div className='Circle Stat Statit1'><Link to='/' >1</Link></div>
                <div className='line Stat Statit2'></div>                    <div className='Circle Stat Statit5'>2</div>
                <div className='line Stat Statit4'></div>
                <div className='Circle Stat Statit3'>3</div>
            </div>
            <div className="SpecialMessage">
                <div>
                    <h3>Name:</h3>
                    <h4 className="h4">{name}</h4>
                </div>
                <div>
                    <h3>Guests:</h3>
                    <h4 className="h4">{guests}</h4>
                </div>
                <div>
                    <h3>Date/Time:</h3>
                    <h4 className="h4">{`${date} @ ${time}`}</h4>
                </div>
                <div>
                    <h3>Phone:</h3>
                    <h4 className="h4">{phone}</h4>
                </div>
                <div className="tell">
                    <h3>Comments:</h3>
                    <h4 className="h4">{comments}</h4>
                </div>
            </div>
            <div className="Booking">
                    <button className="BookingButton" onClick={() => navigate('/')}>Home</button>
                </div>
            <div className="ReservationPic2" />
            <div className="BookingHighlight">
                <Highlight />
            </div>
        </div>

    )
}

export default ConfirmedBooking;