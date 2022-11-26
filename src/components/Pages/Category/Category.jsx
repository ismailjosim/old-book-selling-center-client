import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from './Card';

const Category = () => {
    const data = useLoaderData();



    return (
        <div className=''>
            <div className='bg-black text-white py-3 font-medium pl-5'>
            </div>
            <div className='w-11/12 mx-auto grid lg:grid-cols-3 gap-5 md:grid-cols-2 grid-cols-1'>
                {
                    data?.books.map(book => <Card key={book._id} book={book}></Card>)
                }
            </div>
        </div>
    );
};

export default Category;
