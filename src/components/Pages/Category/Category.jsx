import React from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
    return (
        <div className=''>
            <div className='bg-black text-white py-3 font-medium pl-5'>
                <h3 className='text-2xl'>Single Category Name</h3>
            </div>
            <div className='w-11/12 mx-auto grid lg:grid-cols-3 gap-5 md:grid-cols-2 grid-cols-1'>

                <div className="bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Book title</h2>
                        <p>Location</p>
                        <p>Address</p>
                        <p>Book Condition</p>
                        <p>Original price: 500</p>
                        <p>Resale price: 500</p>
                        <p>Year of use</p>
                        <p>posted Date</p>
                        <p>Seller name - verified tik</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Book Now</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Book title</h2>
                        <p>Location</p>
                        <p>Address</p>
                        <p>Book Condition</p>
                        <p>Original price: 500</p>
                        <p>Resale price: 500</p>
                        <p>Year of use</p>
                        <p>posted Date</p>
                        <p>Seller name - verified tik</p>
                        <div className="card-actions">
                            <Link className="btn btn-primary">Book Now</Link>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Book title</h2>
                        <p>Location</p>
                        <p>Address</p>
                        <p>Book Condition</p>
                        <p>Original price: 500</p>
                        <p>Resale price: 500</p>
                        <p>Year of use</p>
                        <p>posted Date</p>
                        <p>Seller name - verified tik</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Book Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;
