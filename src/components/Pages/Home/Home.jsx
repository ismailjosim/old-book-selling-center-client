import React from 'react';
import Advertisement from '../../Dashboard/Seller/Advertisement';
import Categories from '../Categories/Categories';
import HeroBanner from './HeroBanner/HeroBanner';
import Partner from './Partner';



const Home = () => {
    return (
        <div>
            <HeroBanner />
            <Categories />
            <Partner />
            <Advertisement />
        </div>
    );
};

export default Home;
