import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from './Card';
import BookModal from './BookModal';
const Category = () => {
    const data = useLoaderData();
    const [selected, setSelected] = useState(null)


    return (
        <div>
            <div className='bg-black text-white py-3 font-medium pl-5'>
            </div>
            <div className='w-11/12 mx-auto grid lg:grid-cols-3 gap-5 md:grid-cols-2 grid-cols-1 my-10'>
                {
                    data?.books.map(book => <Card
                        key={book._id}
                        book={book}
                        setSelected={setSelected}
                    ></Card>)
                }
            </div>
            {selected &&
                <BookModal
                    selected={selected}
                    setSelected={setSelected}
                ></BookModal>
            }
        </div>
    );
};

export default Category;
