import React from 'react';
import './Testimonials.css';
import Testimonial from './Testimonial.js';

const Testimonials = () => {
    return (
        <>
            <h1 className='TestimonialsTitle'>Testimonials</h1>
            <div className='TestimonialContainer'>
                <div className='TestimonialCard'><Testimonial rating="4.2" name="Dick Mansson" message="Great food!" /></div>
                <div className='TestimonialCard'><Testimonial rating="4.5" name="Man Dicksson" message="Stunning visuals with good taste!" /></div>
                <div className='TestimonialCard'><Testimonial rating="4.9" name="John Brow" message="Heavily." /></div>
                <div className='TestimonialCard'><Testimonial rating="4.3" name="Rick Power" message="Visually pleasing" /></div>
            </div>
        </>
    )
}

export default Testimonials; 