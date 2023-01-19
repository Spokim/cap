import React from "react";
import './Reservation.css';
import { Link } from 'react-router-dom';

const Reservation = (props) => {
    const { form, handleChange, onSubmit} = props;

    const isDisabled = () => {
        if(form.name && form.guests && form.date && form.time && form.phone) {
            return false
        } else {
            return true
        }
    }

    const seededRandom = function (seed) {
        var m = 2 ** 35 - 31;
        var a = 185852;
        var s = seed % m;
        return function () {
          return (s = (s * a) % m) / m;
        };
      };
    
    const fetchAPI = function (date) {
        let result = [];
        let random = seededRandom(date.getDate());
    
        for (let i = 17; i <= 23; i++) {
          if (random() < 0.5) {
            result.push(i + ":00");
          }
          if (random() < 0.5) {
            result.push(i + ":30");
          }
        }
        return result;
    };

    const initializeTimes = () => {
        const initializeTimes = fetchAPI(new Date(form.date))
        return initializeTimes.map(time => <option key={time} defaultValue={time}>{time}</option>)
    }

    const submitAPI = () => {
        return true;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(submitAPI(form)) {
            return onSubmit(e)
        }
    }

    return (
        <div className="ReservationSection">
            <div className="ReservationPic" />
            <div className="ReservationFluff" >
                <h2 className="FluffText">Reserve A Table</h2>
                <div className='StatusBar'>
                    <div className='Circle Stat Statit1'><Link to='/' >1</Link></div>
                    <div className='line Stat Statit2'></div>
                    <div className='Circle Stat Statit3'>2</div>
                    <div className='line Stat Statit4'></div>
                    <div className='Circle Stat Statit5'>3</div>
                </div>
            </div>
            <form className="Form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>What's your name?</label>
                    <input
                        className="Forminput"
                        id="name" name="name"
                        type='text'
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Enter Name"
                        required />
                </div>
                <div>
                    <label className="GuestTitle" htmlFor="guests">How many Guests?</label>
                    <input
                        className="Forminput"
                        id="guest"
                        name="guests"
                        type='number'
                        value={form.guests}
                        onChange={handleChange}
                        placeholder='Enter Guests 1-9'
                        required />
                </div>
                <div>
                    <label htmlFor="date">Date</label>
                    <input
                        className="Forminput"
                        name="date"
                        type='date'
                        value={form.date}
                        onChange={handleChange}
                        required />
                </div>
                <div>
                    <label htmlFor="time">Time</label>
                    <select name='time' onChange={handleChange}>
                        <option key='default' defaultValue=''>Pick a time</option>
                        {form.date !== '' ? initializeTimes() : <option key='select-date-first' defaultValue=''>Select date first</option>}
                    </select>
                </div>
                <div>
                    <label htmlFor="phone">Telephone number:</label>
                    <input
                        className="Forminput"
                        name="phone"
                        type='number'
                        placeholder="11 digits"
                        value={form.phone}
                        onChange={handleChange}
                        minlength="11"
                        required />
                </div>
                <div>
                    <label>Any special requests?</label>
                    <textarea
                        className="Forminput Special"
                        name="comments"
                        type='textarea'
                        value={form.comments}
                        onChange={handleChange}
                        placeholder="Additional Comments" />
                </div>
                <button aria-label="On Click" disabled={isDisabled()} id='submit' type='submit' className="ReservationButton">Reserve a Table</button>
            </form>
            <div className="ReservationPic2" />
        </div>
    )
}

export default Reservation;