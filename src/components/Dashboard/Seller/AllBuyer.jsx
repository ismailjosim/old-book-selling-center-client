import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllBuyer = () => {

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



    return (

        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users?.map((user, idx) => {
                            return (
                                <tr key={user._id}>
                                    <th>{idx + 1}</th>
                                    <td>Cy Ganderton</td>
                                    <td>{user.email}</td>
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

export default AllBuyer;
