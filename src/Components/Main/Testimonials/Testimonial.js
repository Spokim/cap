import React from 'react';
import './Testimonial.css';

const Testimonial = (props) => {
    return (
        <div className='TestimonialSection'>
            <h3 className='TestimonialRatingHeadline'>Rating</h3>
            <div className='TestimonialRating'>{props.rating}</div>
            <div className='TestimonialName'>{props.name}</div>
            <div className='TestimonialMessage'>{props.message}</div>
        </div>
    )
}

export default Testimonial;