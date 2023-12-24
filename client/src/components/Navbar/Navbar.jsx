import React from 'react';
import './Navbar.scss';

const Navbar = () => {
    return (
        <div className='wrapper'>
            <div className="navbar">
                <div className='container'>
                    <div className='logo'>
                        Ocean<span>Shaper</span>
                    </div>
                    <ul className='menu'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Testimonials</a></li>
                        <button className='click_me'>click me</button>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Navbar