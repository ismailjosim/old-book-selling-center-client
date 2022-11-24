import React from 'react';
import BookModal from './BookModal';
import { Link } from 'react-router-dom';

const Card = ({ book }) => {
    const { _id, title, condition, location, originalPrice, photo, postTime, resalePrice, useYears } = book;


    const info = {
        name: 'demo',
        price: 500,
        email: 'example@gmail.com'
    }


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
                <p>Seller name - verified tik</p>
                <div className="card-actions">
                    <Link className="btn btn-primary">Book Now</Link>
                    <label htmlFor="book-modal" className="btn">open modal</label>
                </div>
            </div>
            {
                <BookModal info={info}></BookModal>
            }
        </div>
    );
};

export default Card;
