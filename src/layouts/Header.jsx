import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/old-book-center-logo.png'
import { AuthContext } from '../contexts/AuthProvider';

const Header = () => {
    const { user } = useContext(AuthContext)




    const handleUserLogout = () => {
        // userLogout().then(result => { }).catch(error => console.log(error.message))
    }





    const navigationItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>about</Link></li>
        <li><Link to='/services'>Services</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li className='list-none'><button className='select-none'>{user?.email}</button></li>
        <li className='list-none'> <button onClick={handleUserLogout} className="btn btn-md rounded-md btn-outline btn-primary">Logout</button></li>
        {user?.uid ?
            <div className='flex gap-3 items-center dropdown dropdown-bottom dropdown-end'>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li className='list-none'><button className='select-none btn-disabled'>{user.email}</button></li>
                </ul>
            </div>
            :
            <Link to='/login' className="btn btn-md rounded-md btn-outline btn-primary">Log In</Link>
        }
    </>


    return (
        <div className="navbar bg-base-100 h-20 mb-5 font-semibold w-11/12 mx-auto">
            <div className="navbar-start">
                <Link to='/'>
                    <img className='' src={logo} alt="logo" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {navigationItems}
                </ul>
            </div>
            <div className="navbar-end">

                <div className="dropdown dropdown-bottom dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </label>
                    <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navigationItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;

/*





*/
