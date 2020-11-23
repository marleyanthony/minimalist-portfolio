import React from 'react';
import { Link } from 'react-router-dom';
import logoFooter from '../assets/logo-footer.svg';
import githubFooter from '../assets/icons/github-footer.svg';
import instagramFooter from '../assets/icons/instagram-footer.svg';
import linkedinFooter from '../assets/icons/linkedin-footer.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <img src={logoFooter} alt="logo" className="footer__logo"/>
            <div className="footer__nav">
                <Link to="/" className="footer__nav-item">Home</Link> 
                <Link to="/portfolio" className="footer__nav-item">Portfolio</Link>
                <Link to="/photography" className="footer__nav-item">Photography</Link>
                <Link to="/contact" className="footer__nav-item">Contact Me</Link>
            </div>
            <div className="footer__social-wrapper">
                <a href="https://www.github.com/marleyanthony" target="_blank" className="footer__social-icon-link">
                    <img src={githubFooter} alt="github" className="footer__social-icon" />
                </a>
                <a href="https://www.instagram.com/marleyanth0ny" target="_blank" className="footer__social-icon-link">
                    <img src={instagramFooter} alt="instagram" className="footer__social-icon" />
                </a>
                <a href="https://www.linkedin.com/in/marleyanthony" target="_blank" className="footer__social-icon-link">
                    <img src={linkedinFooter} alt="linkedin" className="footer__social-icon" />
                </a>
            </div>
        </footer> 
    )
}

export default Footer
