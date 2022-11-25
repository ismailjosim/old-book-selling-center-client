import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/old-book-center-logo.png'
import { AuthContext } from '../contexts/AuthProvider';

const Header = () => {
    const { user, userLogout } = useContext(AuthContext)



    // handle User Log Out
    const handleUserLogout = () => {
        userLogout().then(result => { }).catch(error => console.log(error.message))
    }


    // navigation items function
    const navigationItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>about</Link></li>
        <li><Link to='/services'>Services</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        {user?.uid ?
            <>
                <li><p className='uppercase'>{user.displayName}</p></li>
                <li><Link className='hover:btn-secondary rounded-md hover:text-white' to='/dashboard'>Dashboard</Link></li>
                <li><button onClick={handleUserLogout} className='hover:btn-secondary btn-primary text-white rounded-md'>Logout</button></li>
            </> :
            <li><Link className='hover:btn-secondary rounded-md hover:text-white' to='/login'>Login</Link></li>
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
