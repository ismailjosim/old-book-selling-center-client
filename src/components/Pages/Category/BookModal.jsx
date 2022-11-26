import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookModal = ({ book }) => {
    const { user } = useContext(AuthContext)
    const { title, resalePrice } = book;

    const handleBookModal = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const productName = form.product.value;
        const price = form.price.value;
        const meeting = form.meeting.value;
        const phone = form.number.value;
        const books = {
            name,
            email,
            productName,
            price,
            meeting,
            phone
        }
        const url = "http://localhost:5000/products";
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(books)
        })
            .then(res => res.json())
            .then(data => {
                const products = data.products.acknowledged;
                if (products) {
                    toast.success('Product Added', { autoClose: 1000 })
                }
            })
    }






    return (
        <div>
            <div>
                <input type="checkbox" id="book-modal" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className='text-2xl text-center font-semibold border-b-2 pb-3 mb-3'>Products Details</h3>
                        <form onSubmit={handleBookModal} className="space-y-6 ng-untouched ng-pristine ng-valid">
                            <div className='flex gap-5 items-center capitalize'>
                                <span className=''>Buyer Name:</span>
                                <input id="name" type="text" disabled defaultValue={user?.displayName} className="font-medium bg-transparent" />
                            </div>
                            <div className='flex gap-5 items-center capitalize'>
                                <span className=''>Buyer Email:</span>
                                <input id="email" type="text" disabled defaultValue={user?.email} className="font-medium bg-transparent" />
                            </div>
                            <div className='flex gap-5 items-center capitalize'>
                                <span className=''>Product Name:</span>
                                <input id="product" type="text" disabled defaultValue={title} className="font-medium bg-transparent" />
                            </div>
                            <div className='flex items-center capitalize'>
                                <span className='text-primary font-bold text-2xl'>price: $</span>
                                <input id="price" type="text" disabled defaultValue={resalePrice} className="bg-transparent text-primary font-bold text-2xl" />
                            </div>
                            <div>
                                <input required name="meeting" type="text" placeholder="Your Location" className="w-full p-3 rounded-md border input-primary" />
                            </div>
                            <div>
                                <input required name="number" type="number" placeholder="Your Phone Number" className="w-full p-3 rounded-md border input-primary" />
                            </div>
                            <div className="modal-action">
                                <label htmlFor="book-modal" className="btn btn-error text-white">Cancel</label>
                                <button type="submit" htmlFor="book-modal" className="btn btn-primary text-white">Submit</button>
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
