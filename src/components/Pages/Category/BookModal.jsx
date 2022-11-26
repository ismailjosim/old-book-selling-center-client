import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookModal = ({ book }) => {
    const { user } = useContext(AuthContext)
    const { title, condition, location, originalPrice, photo, postTime, resalePrice, useYears } = book;

    const handleBookModal = event => {

    }

    return (
        <div>
            <div>
                <input type="checkbox" id="book-modal" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <div className='mb-8'>
                            <h3 className="font-bold text-lg">{title}</h3>
                        </div>

                        <form onSubmit={handleBookModal} className="space-y-6 ng-untouched ng-pristine ng-valid">
                            <div className='flex gap-5 items-center capitalize'>
                                <span className=''>Name:</span>
                                <input id="name" type="text" disabled defaultValue={title} className="font-medium bg-transparent" />
                            </div>
                            <div className='flex gap-5 items-center capitalize'>
                                <span className=''>Name:</span>
                                <input id="name" type="text" disabled defaultValue={title} className="font-medium bg-transparent" />
                            </div>
                            <div className='flex gap-3 items-center capitalize'>
                                <span>Condition:</span>
                                <input id="condition" type="text" disabled defaultValue={condition} className="w-1/2 p-3 rounded-md border font-medium" />
                            </div>
                            <div>
                                <input name="email" type="email" disabled defaultValue={user?.email} placeholder='Email' className="w-full p-3 rounded-md border input-primary" />
                            </div>
                            <div>
                                <input required name="fullName" type="text" disabled defaultValue={user?.displayName} placeholder="Full Name" className="w-full p-3 rounded-md border input-primary" />
                            </div>
                            <div>
                                <input required name="phone" type="text" placeholder='Phone Number' className="w-full p-3 rounded-md border input-primary" />
                            </div>
                            <div className="modal-action">
                                {user ?
                                    <>
                                        <label htmlFor="book-modal" className="btn btn-error text-white">Cancel</label>
                                        <button type="submit" htmlFor="book-modal" className="btn btn-primary text-white">Submit</button>
                                    </> :
                                    <Link to='/login' state={{ from: location }} replace className="btn btn-error text-white">Please Login For Book Appointment</Link>

                                }
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default BookModal;

// <Link to='/login' state={{ from: location }} replace className="btn btn-error text-white">Please Login For Book Appointment</Link>
