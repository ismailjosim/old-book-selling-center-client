import React from 'react';

const Advertisement = () => {
    return (
        <div className='py-10 text-center w-11/12 mx-auto'>
            <h3 className='text-3xl font-semibold'>See Our Latest Product</h3>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
                <div className="card bg-base-100 shadow-xl">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="product" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Advertisement;
