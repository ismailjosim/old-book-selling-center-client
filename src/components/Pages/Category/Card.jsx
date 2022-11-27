import React from 'react';

const Card = ({ book, setSelected }) => {
    const { title, condition, location, originalPrice, photo, phone, postTime, resellPrice, usedYear, sellerName
    } = book;


    return (
        <div className="card shadow-lg">
            <figure className="">
                <img src={photo} alt={title} className=" max-w-md max-h-52" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Book Name: {title}</h2>
                <div className='flex justify-between gap-3'>
                    <div className='flex items-center gap-2'>
                        <h3 className='font-bold'>Seller: <span className='uppercase'>{sellerName}</span></h3>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 text-teal-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <p>Posted Time: <strong>{postTime}</strong></p>
                </div>

                <div className='flex flex-col gap-3'>
                    <p>Original price: <strong>${originalPrice}</strong></p>
                    <p>Resale price: <strong>${resellPrice}</strong></p>
                    <p>Location: <strong>{location}</strong></p>
                    <p>Book Condition: <strong>{condition}</strong></p>
                    <p>Year of use: <strong>{usedYear}  Years</strong></p>
                    <p>Seller Phone: <strong>{phone}</strong></p>
                </div>

                <div className="card-actions pt-2">
                    <button>
                        <label onClick={() => setSelected(book)} htmlFor="book-modal" className="btn btn-secondary text-white">Book Now</label>
                    </button>
                </div>
            </div>

        </div>
    );

}
export default Card;
