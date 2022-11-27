import React, { useContext, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../contexts/AuthProvider';
import { toast } from 'react-toastify';
import { format } from 'date-fns';

const AddProducts = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { user } = useContext(AuthContext);
    const date = new Date();
    const time = format(date, 'PP');


    // section: imageBB api
    const imageHostKey = "119e7cb713a0b2cf2cc52e7f70755b58";

    const handleAddProduct = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);

        // TODO: upload Product Image
        fetch(`https://api.imgbb.com/1/upload?key=${ imageHostKey }`, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {

                    // TODO: get all product data
                    const productDetails = {
                        title: data.name,
                        condition: data.condition,
                        location: data.location,
                        phone: data.phone,
                        originalPrice: data.originalPrice,
                        resellPrice: data.resellPrice,
                        usedYear: data.year,
                        sellerName: user.displayName,
                        categories_id: parseInt(data.category),
                        photo: imgData.data.url,
                        postTime: time
                    }
                    fetch('http://localhost:5000/products', {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(productDetails)
                    })
                        .then(res => res.json())
                        .then(result => {
                            if (result.products.acknowledged) {
                                toast.success('Product Added SuccessFully', { autoClose: 1000 })
                                console.log(result);

                            }
                        })
                }
            })


    }

    return (
        <div>
            <h2 className='text-center text-2xl font-semibold'>Add Products Here</h2>
            <div className='rounded-lg bg-white mt-10'>
                <form onSubmit={handleSubmit(handleAddProduct)} className="p-10">
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name",
                                {
                                    required: "Name is Required"
                                })}
                                placeholder="Product Name"
                                className="input input-primary input-bordered w-full" />
                            {errors.name && <p className='text-error font-medium mt-1'>{errors.name?.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Original Price</span>
                            </label>
                            <input type="text" {...register("originalPrice",
                                {
                                    required: "Name is Required"
                                })}
                                placeholder="Original Price"
                                className="input input-primary input-bordered w-full" />
                            {errors.originalPrice && <p className='text-error font-medium mt-1'>{errors.originalPrice?.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Resell Price</span>
                            </label>
                            <input type="text" {...register("resellPrice",
                                {
                                    required: "Name is Required"
                                })}
                                placeholder="Resell Price"
                                className="input input-primary input-bordered w-full" />
                            {errors.resellPrice && <p className='text-error font-medium mt-1'>{errors.resellPrice?.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">location</span>
                            </label>
                            <input type="text" {...register("location",
                                {
                                    required: "location is Required"
                                })}
                                className="input input-primary input-bordered w-full"
                                placeholder='Enter Location'
                            />
                            {errors.location && <p className='text-error font-medium mt-1'>{errors.location?.message}</p>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Year of Use</span>
                            </label>
                            <input type="number" {...register("year",
                                {
                                    required: "year is Required"
                                })}
                                className="input input-primary input-bordered w-full"
                                placeholder='Enter Used Year'

                            />
                            {errors.year && <p className='text-error font-medium mt-1'>{errors.year?.message}</p>}
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Condition</span>
                            </label>
                            <select
                                className="select select-primary w-full"
                                {...register("condition")}
                            >
                                <option>Used</option>
                                <option>New</option>
                            </select>

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input type="number" {...register("phone",
                                {
                                    required: "phone is Required"
                                })}
                                className="input input-primary input-bordered w-full"
                                placeholder='Enter Your phone'

                            />
                            {errors?.phone && <p className='text-error font-medium mt-1'>{errors.phone?.message}</p>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Product Category</span>
                            </label>
                            <select
                                className="select select-primary w-full"
                                {...register("category")}
                            >
                                <option value="101">academic books</option>
                                <option value="102">children books</option>
                                <option value="103">comic books</option>
                                <option value="104">english novels</option>
                                <option value="105">fashion books</option>
                                <option value="106">history books</option>
                            </select>

                        </div>
                        <div className="form-control w-full">

                            <label className="label">
                                <span className="label-text">Buyer Name</span>
                            </label>

                            <input type="text" {...register("buyerName")}
                                className="input input-primary input-bordered w-full"
                                defaultValue={user?.displayName}
                                disabled
                            />
                        </div>

                        <div className="form-control w-full">

                            <label className="label">
                                <span className="label-text">Upload Product Image</span>
                            </label>

                            <input type="file" {...register("image",
                                {
                                    required: "image is Required"
                                })}
                                className="file-input file-input-bordered file-input-outline w-full" />

                            {errors.image && <p className='text-error font-medium mt-1'>{errors.image?.message}</p>}

                        </div>
                    </div>
                    <div className="form-control inline-block mt-5">
                        <button type="submit" className="btn btn-secondary text-white font-normal">Add A Product</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProducts;
