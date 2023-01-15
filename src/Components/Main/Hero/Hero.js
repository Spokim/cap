import React from "react";
import './Hero.css';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

    return (
        <div className="HeroSection">
            <div className="TextSection">
                <h1 className="Lemon">Little Lemon</h1>
                <h2 className="Location">Chicago</h2>
                <p className="Text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare lectus elit, 
                a luctus sem mollis sit amet. Donec et nisi auctor, porta ante at, porttitor neque. 
                Morbi lobortis ultricies dictum. Etiam mollis arcu dui, non fringilla quam lacinia vel.</p>
                <div className="ButtonSection">
                    <button className="Button" onClick={() => navigate('/reservations')}>Reserve a Table</button>
                </div>
            </div>
            <div className="PictureSection">
                <div className="HeroImage"></div>
            </div>
        </div>
    )
}

export default Hero;
