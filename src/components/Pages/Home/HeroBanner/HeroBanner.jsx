import React from 'react';
import { Link } from 'react-router-dom';
import heroBg from '../../../../assets/hero-bg.png';

const HeroBanner = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-gray-900">Improving lives
                        <br className="hidden lg:inline-block" />through learning
                    </h1>
                    <p className="mb-8 leading-relaxed">Whatever your learning style, we have a course that fits. Coming from instructors all over the world, our courses span over 75 languages and cover just about anything you’d want to know.</p>
                    <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-0 justify-center">
                        <Link to='/courses' className="inline-flex text-white bg-violet-500 border-0 py-2 px-6 focus:outline-none hover:bg-violet-700 rounded text-lg">Explore Courses</Link>
                        <Link to='/blog' className="ml-4 inline-flex btn border-gray-300 text-gray-700 bg-gray-100 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Read More</Link>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img className="object-cover object-center rounded" alt="hero" src={heroBg} />
                </div>
            </div>
        </section>
    );
};

export default HeroBanner;
