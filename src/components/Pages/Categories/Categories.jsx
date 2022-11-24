import React from 'react';
import img1 from '../../../assets/books-categories/book-academic.png';
import { Link } from 'react-router-dom';



const Categories = () => {













    return (
        <div className='w-11/12 mx-auto mb-40'>
            <div className='mb-20'>
                <span className='text-3xl font-semibold border-b-4 pb-2 border-primary'>All Categories</span>
            </div>
            <div className='grid lg:grid-cols-6 md:grid-cols-5'>

                <div className="flex flex-col justify-center items-center">
                    <div className="bg-slate-200 w-40 h-40 flex justify-center items-center rounded-full">
                        <img alt='' className='p-10' src={img1} />
                    </div>
                    <h3 className='mt-2 text-xl font-semibold'>Academic Books</h3>
                </div>

                <div className="flex flex-col justify-center items-center">
                    <div className="bg-slate-200 w-40 h-40 flex justify-center items-center rounded-full">
                        <img alt='' className='p-10' src={img1} />
                    </div>
                    <h3 className='mt-2 text-xl font-semibold'>Academic Books</h3>
                </div>

                <div className="flex flex-col justify-center items-center">
                    <div className="bg-slate-200 w-40 h-40 flex justify-center items-center rounded-full">
                        <img alt='' className='p-10' src={img1} />
                    </div>
                    <h3 className='mt-2 text-xl font-semibold'>Academic Books</h3>
                </div>

                <div className="flex flex-col justify-center items-center">
                    <div className="bg-slate-200 w-40 h-40 flex justify-center items-center rounded-full">
                        <img alt='' className='p-10' src={img1} />
                    </div>
                    <h3 className='mt-2 text-xl font-semibold'>Academic Books</h3>
                </div>

                <div className="flex flex-col justify-center items-center">
                    <div className="bg-slate-200 w-40 h-40 flex justify-center items-center rounded-full">
                        <img alt='' className='p-10' src={img1} />
                    </div>
                    <h3 className='mt-2 text-xl font-semibold'>Academic Books</h3>
                </div>

                <div className="flex flex-col justify-center items-center">
                    <Link to='/categories/:id'>
                        <div className="bg-slate-200 w-40 h-40 flex justify-center items-center rounded-full">
                            <img alt='' className='p-10' src={img1} />
                        </div>
                        <h3 className='mt-2 text-xl font-semibold'>Academic Books</h3>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Categories;
