import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main.js';
import Footer from './Components/Footer/Footer';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Reservation from './Components/Reservation/Reservation.js';
import ConfirmedBooking from './Components/Reservation/ConfirmedBooking'

function App() {
  const [form, setForm] = useState({
    name: '',
    guests: '',
    date: '',
    time: '',
    phone: '',
    comments: ''
});

const navigate = useNavigate();

const handleChange = e => {
    const { name, value } = e.target;
    setForm({...form, [name]: value });
}

const onSubmit = e => {
  e.preventDefault();
  navigate('/reservation/submitted')
}

  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route exact path='/' element={<Main />} />
          <Route exact path='/reservations' element={<Reservation form={form} setForm={setForm}  handleChange={handleChange} onSubmit={onSubmit} />}  />
          <Route path='/reservation/submitted' element={<ConfirmedBooking form={form} />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
