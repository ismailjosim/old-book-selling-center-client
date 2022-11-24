import React from 'react';

const BookModal = ({ info }) => {
    return (
        <div>
            <input type="checkbox" id="book-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{info.name}</h3>
                    <p className="py-4">{info.email}</p>
                    <div className="modal-action">
                        <label htmlFor="book-modal" className="btn btn-error text-white">Cancel</label>
                        <button type="submit" htmlFor="book-modal" className="btn btn-primary text-white">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookModal;

// <Link to='/login' state={{ from: location }} replace className="btn btn-error text-white">Please Login For Book Appointment</Link>
