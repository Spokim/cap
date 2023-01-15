import React from 'react';
import lemonLogo from '../../../Images/Logo.svg';
import './Nav.css';

const Nav = () => {

    return (
        <nav className='NavBar'>
            <div className='NavLogo'>
                <a href='/'><img src={lemonLogo} alt='Little Lemon restaurants Logo'/></a>
            </div>
            <div className='Links'>
                <ul className='LinksList'>
                    <li><a href='/' >Home</a></li>
                    <li><a href='/' >About</a></li>
                    <li><a href='/' >Menu</a></li>
                    <li><a href='/#reservations' >Reservations</a></li>
                    <li><a href='/'>Order Online</a></li>
                    <li><a href='/'>Login</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;