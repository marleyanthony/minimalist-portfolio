import React from 'react';
import logo from '../assets/logo.svg';
import hamburger from '../assets/icons/hamburger.svg';

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="logo"/>
            <img src={hamburger} alt="hamburger icon"/>
        </div>
    )
}

export default Header
