import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext)


    const { data: products = [], refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/products?email=${ user.email }`, {
                    headers: {
                        authorization: `bearer ${ localStorage.getItem('accessToken') }`
                    }
                })
                const data = await res.json();
                return data?.products;

            } catch (error) {
                console.log(error);
            }
        }
    })




    const handleDeleteProduct = productId => {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#6FBF18',
            cancelButtonColor: '#F32B42',
            confirmButtonText: 'Confirm'
        }).then((result) => {
            if (result) {
                fetch(`http://localhost:5000/product/${ productId }`, {
                    method: "DELETE",
                    headers: {
                        authorization: `bearer ${ localStorage.getItem('accessToken') }`
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        const product = data.product;
                        if (product.deletedCount > 0) {
                            Swal.fire(
                                'Delete!',
                                'Product Deleted Successfully.',
                                'success'
                            )
                            refetch()
                        }
                    })

            }
        })
    }



    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Advertise Now</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products?.map(product => {
                                return (
                                    <tr key={product._id}>
                                        <th>{product.title}</th>
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
                                        <td><button onClick={() => handleDeleteProduct(product._id)} className='btn-sm btn-error btn text-white'>Remove</button></td>
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
