import React from 'react';
import './Main.css';
import About from './About/About';
import Hero from './Hero/Hero';
import Highlight from './Highlight/Highlight';
import Testimonials from './Testimonials/Testimonials';

const Main = () => {
    return (
        <main className='container'>
            <section id='hero-section'><Hero /></section>
            <section id='highlight-section'><Highlight /></section>
            <section id='testimonials-section'><Testimonials /></section>
            <section id='about-section'><About /></section>
        </main>
    )
}

export default Main;