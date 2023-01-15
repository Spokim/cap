import React from 'react';
import lemonLogo from '../../Images/logo_monochrome.png';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='Footer'>
            <div className='FooterNavLogo'>
                <a href='/'><img src={lemonLogo} alt='Little Lemon restaurants Logo'/></a>
            </div>
            <nav className='FooterNav' id='Footcontainer'>
                <div className='FooterLinks'>
                    <h4>Navigation</h4>
                    <h5><a href='/'>Home</a><br/>
                    <a href='/'>About</a><br/>
                    <a href='/'>Menu</a><br/>
                    <a href='/#reservations' key='reservations'>Reservations</a><br/>
                    <a href='/'>Order Online</a><br/>
                    <a href='/'>Login</a><br/></h5>
                </div>
            </nav>
            <div id='Footcontainer'>
                <h4>Contact</h4>
                <h5>Address<br/>Phone Number<br/>Email</h5>
            </div>
            <div id='Footcontainer'>
                <h4>Social Media Links</h4>
                <h5>
                    <a href='https://www.twitter.com'>Twatter</a><br/>
                    <a href='https://www.facebook.com'>FB</a><br/>
                    <a href='https://www.instagram.com'>Insta</a></h5>
            </div>
        </footer>
    )
}

export default Footer;