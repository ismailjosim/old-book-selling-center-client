import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext)


    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/products?email=${ user?.email }`)
                const data = await res.json();
                return data?.products;

            } catch (error) {
                console.log(error);
            }
        }
    })



    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Advertise Now</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products?.map((product, idx) => {
                                return (
                                    <tr key={product._id}>
                                        <th>{idx + 1}</th>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={product.photo} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{product.resellPrice}</td>
                                        <td><button className='btn-sm btn-ghost btn'>Advertise Now</button></td>
                                        <td><button className='btn-sm btn-error btn text-white'>Remove</button></td>
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

export default MyProducts;
