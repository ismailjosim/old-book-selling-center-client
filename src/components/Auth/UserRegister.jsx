import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';


const UserRegister = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { UserRegister, updateUserInfo } = useContext(AuthContext);




    const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])");

    // TODO: User Login Function
    const onSubmit = data => {
        // 1. Create New User
        UserRegister(data.email, data.password)
            .then(result => {

                // user profile
                const user = result.user;
                const profile = {
                    displayName: data.name,
                }
                // 2. Update New User
                updateUserInfo(profile)
                    .then(() => {
                        // 3. save user email & pass to database
                        // saveUserInfo(user.displayName, user.email);

                    })
                    .catch(error => console.log(error.message))
            })
            .catch(error => {
                console.log(error.message);
            })
    }





    // todo 3 : save user info to database function
    // const saveUserInfo = (name, email) => {
    //     const user = { name, email }
    //     fetch('https://doctor-portal-server-tawny.vercel.app/users', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(user)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             setNewUserEmail(email);

    //         })
    // }
    // }


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
                        className="input input-primary input-bordered w-full" />
                    {errors.name && <p className='text-error font-medium mt-1'>{errors.name?.message}</p>}

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

                {/* TODO: Form Google login button */}
                <div className="form-control w-full my-5">
                    <button className="btn btn-outline hover:text-white">CONTINUE WITH GOOGLE</button>
                </div>

            </form>
        </div>
    );
};

export default UserRegister;
