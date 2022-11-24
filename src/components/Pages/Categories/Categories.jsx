import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => {
                const result = data?.categories;
                setCategories(result);
            })

    }, [])


    return (
        <div className='w-11/12 mx-auto mb-40'>
            <div className='mb-20'>
                <span className='text-3xl font-semibold border-b-4 pb-2 border-primary'>All Categories:</span>
            </div>
            <div className='grid lg:grid-cols-6 md:grid-cols-5'>
                {
                    categories?.map(category => {
                        return (
                            <div key={category._id} className="flex flex-col justify-center items-center">
                                <Link to={`/category/${ category.categories_id }`}
                                >
                                    <div className="bg-slate-200 w-40 h-40 flex justify-center items-center rounded-full">
                                        <img alt='' className='p-10' src={category.img} />
                                    </div>
                                    <h3 className='mt-2 text-xl font-semibold capitalize'>{category.name}</h3>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Categories;
