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
        <li><Link to='/blog'>Blog</Link></li>
        {user?.uid ?
            <>
                <li><Link className='hover:btn-secondary rounded-md hover:text-white' to='/dashboard'>Dashboard</Link></li>
                <li>
                    <div className="avatar tooltip tooltip-bottom" data-tip={user.displayName}>
                        <div className="w-10 rounded-full">
                            <img alt={user.displayName} src={user.photoURL} />
                        </div>
                    </div>
                </li>
                <li><button onClick={handleUserLogout} className='hover:btn-secondary btn-md btn-primary text-white rounded-md'>Logout</button></li>
            </> :
            <li><Link className='hover:btn-secondary rounded-md hover:text-white' to='/login'>Login</Link></li>
        }
    </>


    return (
        <div className="navbar bg-base-100 h-20 mb-5 font-semibold w-11/12 mx-auto">
            <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </label>
            <div className="navbar-start">
                <Link to='/'>
                    <img className='w-24' src={logo} alt="logo" />
                </Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0 items-center">
                    {navigationItems}
                </ul>
            </div>
            <div className="navbar-end lg:hidden flex">
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
