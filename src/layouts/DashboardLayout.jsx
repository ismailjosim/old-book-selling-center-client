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
                    <ul className="menu p-4 w-80 text-base-content bg-slate-100 lg:bg-transparent">
                        <li><Link to='/dashboard'>All Buyers</Link></li>
                        <li><Link to='/dashboard/addproduct'>Add Products</Link></li>
                        <li><Link to='/dashboard'>All Sellers</Link></li>
                        <li><Link to='/dashboard/orders'>My Orders</Link></li>
                        <li><Link to='/dashboard/orders'>My Products</Link></li>
                        <li><Link to='/dashboard/reported'>Reported Items</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
