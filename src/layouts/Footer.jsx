import React from 'react';
import img from '../assets/old-book-center-logo.png'

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
            <div>
                <img src={img} alt="logo" />
                <p>Old Book Ltd.<br />Providing reliable Service since 2020</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <button className="link link-hover">Branding</button>
                <button className="link link-hover">Design</button>
                <button className="link link-hover">Marketing</button>
                <button className="link link-hover">Advertisement</button>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <button className="link link-hover">About us</button>
                <button className="link link-hover">Contact</button>
                <button className="link link-hover">Jobs</button>
                <button className="link link-hover">Press kit</button>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <button className="link link-hover">Terms of use</button>
                <button className="link link-hover">Privacy policy</button>
                <button className="link link-hover">Cookie policy</button>
            </div>
        </footer>
    );
};

export default Footer;
