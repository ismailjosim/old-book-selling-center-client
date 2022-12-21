import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';




const AllSellers = () => {

    // section: Get all User from server
    const { data: users = [], isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            try {
                const res = await fetch("https://old-book-center-server.vercel.app/users", {
                    headers: {
                        authorization: `bearer ${ localStorage.getItem('accessToken') }`
                    }
                })
                const data = await res.json();
                return data?.users;

            } catch (error) {
                console.log(error);
            }
        }
    })


    if (isLoading) {
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-primary"></div>
    }

    // TODO: Delete User From Database
    const handleDelete = id => {
        fetch(`https://old-book-center-server.vercel.app/user/${ id }`, {
            method: "DELETE",
            headers: {
                authorization: `bearer ${ localStorage.getItem('accessToken') }`
            }
        })
            .then(res => res.json())
            .then(data => {
                const user = data.user;
                if (user.deletedCount > 0) {
                    toast.success("Doctor Removed!", { autoClose: 1000 })
                    refetch()
                }
            })

    }


    const handleBuyerVerify = (id, name, email) => {
        Swal.fire({
            title: 'Are you sure?',
            text: `${ name }`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#6FBF18',
            cancelButtonColor: '#F32B42',
            confirmButtonText: 'Confirm'
        }).then((result) => {
            if (result) {
                fetch(`https://old-book-center-server.vercel.app/users/verify/${ id }`, {
                    method: "PATCH",
                    headers: {
                        authorization: `bearer ${ localStorage.getItem('accessToken') }`
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.result.modifiedCount > 0) {
                            Swal.fire(
                                'Verified!',
                                'Verification Successfully.',
                                'success'
                            )
                            refetch()
                        }
                    })
            }

        })

    }



    // Show Only Buyer
    const seller = users.filter(user => user.role === 'Seller');






    return (

        <div className="overflow-x-auto">
            <h2 className='text-3xl font-semibold text-center mb-5'>See All sellers Here: {seller.length}</h2>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Type</th>
                        <th>status</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        seller?.map((user, idx) => {
                            return (
                                <tr key={user._id}>
                                    <th>{idx + 1}</th>
                                    <td>{user?.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user?.role}</td>
                                    <td>
                                        {
                                            user.status !== 'verified' ?
                                                <button onClick={() => handleBuyerVerify(user._id, user?.username)} className='btn btn-sm'>{user.status}</button>
                                                :
                                                <div className='flex gap-1 items-center text-accent font-bold'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                                    </svg>
                                                    <span className="uppercase">{user.status}</span>
                                                </div>
                                        }

                                    </td>
                                    <td>
                                        {

                                            user?.role === 'admin' ? <button></button> :
                                                <button onClick={() => handleDelete(user._id, user?.username, user.email)} className='btn btn-sm btn-error text-white'>Remove</button>

                                        }

                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </div>
    );
};

export default AllSellers;
