import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="AboutSection">
            <div className="AboutTextSection">
                <h2 className="AboutHeadline">Little Lemon</h2>
                <h3 className="AboutLocation">Chicago</h3>
                <p className="AboutText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare lectus elit, a luctus sem mollis sit amet. Donec et nisi auctor, porta ante at, porttitor neque. Morbi lobortis ultricies dictum. Etiam mollis arcu dui, non fringilla quam lacinia vel. Nam dapibus fermentum urna. Aenean congue feugiat volutpat.</p>
            </div>
            <div className="AboutPictureSection">
                <div className='Pic1' />
                <div className='Pic2' />
            </div>
        </div>
    )
}

export default About; 