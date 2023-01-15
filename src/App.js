import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main.js';
import Footer from './Components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import Reservation from './Components/Reservation/Reservation.js';

function App() {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route exact path='/' element={<Main />} />
          <Route exact path='/reservations' element={<Reservation />} />
          <Route path='/reservations/submitted' element={<Reservation />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
