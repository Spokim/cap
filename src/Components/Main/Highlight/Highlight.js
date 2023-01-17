import React from "react";
import Card from './Card';
import greeksalad from '../../../Images/greeksalad.jpg';
import bruchetta from '../../../Images/bruchetta.svg';
import lemondesert from '../../../Images/lemondessert.jpg';
import './Highlight.css';


const Highlight = () => {
    return (
        <div className="HighlightSection">
            <div className="Headline">
                <h1 className="HighlightHeadline">Our specials of the week!</h1> 
            </div>
            <div className="CardSection">
                <div className="CardBox"><Card name="Greek Salad" image={greeksalad} description="A delicious salad" price="$8" /></div>
                <div className="CardBox"><Card name="Bruchetta" image={bruchetta} description="A fantastic bruchetta" price="$9.95" /></div>
                <div className="CardBox"><Card name="Lemon Dessert" image={lemondesert} description="Taste of real lemon and unexpectedly sweet!" price="$7.50" /></div>
            </div>
        </div>
    )
}

export default Highlight;