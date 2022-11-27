import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const AllBuyer = () => {
    const [removeUser, setRemoveUser] = useState(null);



    // section: delete User from server







    // section: Get all User from server
    const { data: users = [], isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            try {
                const res = await fetch("http://localhost:5000/users")
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

    const handleDelete = user => {
        fetch(`http://localhost:5000/user/${ user._id }`, {
            method: "DELETE",
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


    return (

        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>status</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users?.map((user, idx) => {
                            return (
                                <tr key={user._id}>
                                    <th>{idx + 1}</th>
                                    <td>{user?.username}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        {
                                            user.status === 'verified' ? <button className='btn btn-sm'>{user.status}</button>
                                                : <button>{user.status}</button>
                                        }

                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(user)} className='btn btn-sm btn-error text-white'>Remove</button>
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

export default AllBuyer;
