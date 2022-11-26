import React from 'react';
import Categories from '../Categories/Categories';
import HeroBanner from './HeroBanner/HeroBanner';
import Partner from './Partner';



const Home = () => {
    return (
        <div>
            <HeroBanner />
            <Categories />
            <Partner />
        </div>
    );
};

export default Home;
