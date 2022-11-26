import React, { useContext } from 'react';
import BookModal from './BookModal';
import { AuthContext } from '../../../contexts/AuthProvider';


const Card = ({ book, setSelected }) => {
    const { title, condition, location, originalPrice, photo, postTime, resalePrice, useYears } = book;
    const { user } = useContext(AuthContext);




    // const url = "http://localhost:5000/products";
    // fetch(url, {
    //     method: "POST",
    //     headers: {
    //         'content-type': 'application/json',
    //     },
    //     body: JSON.stringify(books)
    // })
    //     .then(res => res.json())
    //     .then(data => {
    //         const products = data.products.acknowledged;
    //         if (products) {
    //             toast.success('Product Added', { autoClose: 1000 })
    //         }
    //     })




    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={photo} alt={title} className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{location}</p>
                <p>Book Condition: {condition}</p>
                <p>Original price: {originalPrice}</p>
                <p>Resale price: {resalePrice}</p>
                <p>Year of use: {useYears}</p>
                <p>posted Date: {postTime}</p>
                <p className='flex items-center gap-2'>
                    <span>Seller {user.displayName}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 text-teal-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                </p>
                <div className="card-actions">
                    <button>
                        <label onClick={() => setSelected(book)} htmlFor="book-modal" className="btn btn-secondary text-white">Book Now</label>
                    </button>
                </div>
            </div>

        </div>
    );

}
export default Card;
