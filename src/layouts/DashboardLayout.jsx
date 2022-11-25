import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import Header from './Header';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <Header />
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        <li><Link to='/dashboard'>My Appointment</Link></li>
                        <li><link to='/dashboard/users'>All Users</link></li>
                        <li><Link to='/dashboard/addadoctor'>Add A Doctor</Link></li>
                        <li><Link to='/dashboard/managedoctors'>Manage Doctors</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
