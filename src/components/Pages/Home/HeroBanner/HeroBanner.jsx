import React from 'react';
import { Link } from 'react-router-dom';
import heroBg from '../../../../assets/hero-bg.png';

const HeroBanner = () => {
    return (
        <div className="hero lg:h-[600px] mb-10" style={{ backgroundImage: `url("https://i.ibb.co/X3mcTsw/hero-bg.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 lg:text-5xl text-4xl font-bold uppercase leading-snug">Sell IT, Search IT, Buy IT</h1>
                    <p className='lg:text-xl my-4 text-center'>a huge selection of rare, collectible, and vintage books for sale from booksellers. You will find antiquarian books, out-of-print books, first editions, signed and inscribed copies, incunabula, limited editions, photography books</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;
