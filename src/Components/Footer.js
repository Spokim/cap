import React from 'react';
import lemonLogo from '../Images/Logo.svg';

const Footer = () => {
    return (
        <footer>
            <nav>
                <img src={lemonLogo} alt='Little Lemon restaurants Logo'/>
                <ul>
                    <li><a href='/#home' key='home'>Home</a></li>
                    <li><a href='/#about' key='about'>About</a></li>
                    <li><a href='/#menu' key='menu'>Menu</a></li>
                    <li><a href='/#reservations' key='reservations'>Reservations</a></li>
                    <li><a href='/#order-online' key='order-online'>Order Online</a></li>
                    <li><a href='/#login' key='login'>Login</a></li>
                </ul>
            </nav>
            <div>
                <h3>Contact</h3>
                <ul>
                    <li>Address</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>
            </div>
            <div>
                <h3>Social Media Links</h3>
                <ul>
                    <li>Twatter</li>
                    <li>FB</li>
                    <li>Insta</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;