import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query';


const MyOrder = () => {
    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/orders?email=${ user?.email }`;

    const { data = [] } = useQuery({
        queryKey: ['orders', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })

    console.log(data)

    return (
        <div>
            <h3 className='text-3xl font-semibold'>My Order</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Name</th>
                            <th>email</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            data?.orders?.map((item, idx) => {
                                return (

                                    <tr key={item._id}>
                                        <th>{idx + 1}</th>
                                        <td>{item.productName}</td>
                                        <td>{item.email}</td>
                                        <td>${item.price}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;
