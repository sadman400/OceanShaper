import React, { useRef } from 'react';
import { FaTimes } from "react-icons/fa";
import { FaHamburger } from "react-icons/fa";
import './Navbar.css';

const Navbar = () => {

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

    return (
        <div className='wrapper'>
            <div className="navbar">
                <div className='container'>
                    <h3>Logo</h3>
                    <ul className='menu' ref={navRef}>
                        <a href="#">Home</a>
                        <a href="#">Services</a>
                        <a href="#">About</a>
                        <a href="#">Portfolio</a>
                        <a href="#">Testimonials</a>
                        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                            <FaTimes />
                        </button>
                    </ul>
                    <button className='nav-btn' onClick={showNavbar} >
                        <FaHamburger />
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Navbar;