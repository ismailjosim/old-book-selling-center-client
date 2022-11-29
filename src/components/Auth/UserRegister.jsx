import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { toast } from 'react-toastify';
import useToken from '../../hooks/useToken';
import { GoogleAuthProvider } from 'firebase/auth';

const UserRegister = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { UserRegister, updateUserInfo, googleProviderLogin } = useContext(AuthContext);


    // todo: navigate user when login
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';

    // use token custom hooks
    const [newUserEmail, setNewUserEmail] = useState('')
    const [token] = useToken(newUserEmail);

    // setup navigator After Register.
    const navigateNow = () => {
        setTimeout(() => { navigate(from, { replace: true }) }, 1);
    }


    // navigate user if token found
    if (token) {
        navigateNow()
    }



    const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])");


    // section: imageBB api
    const imageHostKey = "119e7cb713a0b2cf2cc52e7f70755b58";

    // TODO: User Login Function
    const onSubmit = data => {
        const image = data.image[0];
        const formData = new FormData()
        formData.append('image', image)
        fetch(`https://api.imgbb.com/1/upload?key=${ imageHostKey }`, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    // TODO: 1. Create New User
                    UserRegister(data.email, data.password)
                        .then(result => {
                            toast.success("User Created Successfully", { autoClose: 1000 });
                            const profile = {
                                displayName: data.name,
                                photoURL: imgData.data.url,
                            }
                            // TODO: 2. Update New User
                            updateUserInfo(profile)
                                .then(() => {
                                    // TODO: 3. save user email & pass to database
                                    saveUserInfo(data.email, data.role, data.name);
                                })
                                .catch(error => console.log(error.message))
                        })
                }
            })
            .catch(error => {
                console.log(error.message);
            })
    }




    // TODO: handle Google Login
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleLogin = () => {
        googleProviderLogin(googleProvider)
            .then(result => {
                const user = result.user;
                setNewUserEmail(user?.email)

            })
            .catch(err => {
                console.log(err);
            })

    }



    // TODO: 3 : save user info to database function



    const saveUserInfo = (email, role, username) => {
        const user = {
            email,
            role,
            username,
            status: 'Not verified'
        }
        fetch('https://old-book-center-server.vercel.app/users', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setNewUserEmail(email)
            })
    }





    return (
        <div className='max-w-sm mx-auto my-28  p-5 rounded-lg shadow-md border border-primary'>
            <h3 className='text-center font-normal text-2xl mb-8'>Login Here</h3>
            <form onSubmit={handleSubmit(onSubmit)}>

                {/* TODO: input Email */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" {...register("name",
                        {
                            required: "Name is Required"
                        })}
                        className="input input-primary input-bordered w-full"
                        placeholder='Your Name'

                    />
                    {errors.name && <p className='text-error font-medium mt-1'>{errors.name?.message}</p>}
                </div>

                {/* TODO: input Email */}
                <div className="form-control w-full">

                    <label className="label">
                        <span className="label-text">Upload Your Image</span>
                    </label>

                    <input type="file" {...register("image",
                        {
                            required: "image is Required"
                        })}
                        className="file-input file-input-bordered file-input-primary w-full" />

                    {errors.image && <p className='text-error font-medium mt-1'>{errors.image?.message}</p>}

                </div>

                {/* TODO: input Email */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">select Role</span>
                    </label>
                    <select
                        defaultValue='Buyer'
                        className="select select-primary w-full"
                        {...register("role",
                            {
                                required: "Name is Required"
                            })}
                    >
                        <option>Buyer</option>
                        <option>Seller</option>
                    </select>
                    {errors.role && <p className='text-error font-medium mt-1'>{errors.role?.message}</p>}
                </div>

                {/* TODO: input Email */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" {...register("email",
                        {
                            required: "Email is Required"
                        })}
                        className="input input-primary input-bordered w-full" />
                    {errors.email && <p className='text-error font-medium mt-1'>{errors.email?.message}</p>}

                </div>
                {/* TODO: input Password */}
                <div className="form-control w-full my-5">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input {...register("password", {
                        required: 'Invalid Password',
                        minLength: { value: 6, message: "Password Must Be 6 Characters Or longer." },
                        pattern: {
                            value: strongRegex,
                            message: "Password Must Be Strong!"
                        }

                    })} type="password" className="input input-bordered w-full input-primary" />
                    {errors.password && <p className='text-error font-medium mt-1'>{errors.password?.message}</p>}

                </div>

                {/* TODO: submit button */}
                <div className="form-control w-full mt-5">
                    <button type="submit" className="btn btn-secondary text-white w-full font-normal">Sign Up</button>
                </div>

                {/* TODO: Form submit button */}
                <div className='mt-3 mb-5 text-center text-sm'>
                    <span>Already have account?</span> <Link className='text-accent hover:text-primary' to='/login'>Login</Link>
                </div>
                <div className="divider">OR</div>
            </form>
            {/* TODO: Form Google login button */}
            <div className="form-control w-full my-5">
                <button onClick={handleGoogleLogin} className="btn btn-outline hover:text-white">CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default UserRegister;
