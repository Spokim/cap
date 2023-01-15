import React from 'react';
import lemonLogo from '../../../Images/Logo.svg';
import './Nav.css';
import { Link } from 'react-router-dom'

const Nav = () => {

    return (
            <nav className='NavBar'>
                <div className='NavLogo'>
                    <Link to='/'><img src={lemonLogo} alt='Little Lemon restaurants Logo'/></Link>
                </div>
                <div className='Links'>
                    <ul className='LinksList'>
                        <li><Link to='/' >Home</Link></li>
                        <li><Link to='/about' >About</Link></li>
                        <li><Link to='/menu' >Menu</Link></li>
                        <li><Link to='/reservations' >Reservations</Link></li>
                        <li><Link to='/order-online' >Order Online</Link></li>
                        <li><Link to='/login' >Login</Link></li>
                    </ul>
                </div>
            </nav>

    )
}

export default Nav;