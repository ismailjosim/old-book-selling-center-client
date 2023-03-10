import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Buyers = () => {
    const { data: users = [], isLoading } = useQuery({
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

    const buyer = users.filter(user => user.role === 'Buyer');


    return (

        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        buyer?.map((user, idx) => {
                            return (
                                <tr key={user._id}>
                                    <th>{idx + 1}</th>
                                    <td className='capitalize'>{user?.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user?.role}</td>
                                    <td>{user.status}</td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </div>
    );
};

export default Buyers;
