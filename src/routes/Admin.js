import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';


const Admin = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    // const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    const location = useLocation();

    if (loading) {
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
    }

    // if (user && isAdmin) {
    //     return children;
    // }
    if (user) {
        return children;
    }

    // return <Navigate to='/login' state={{ from: location }} replace></Navigate>

};

export default Admin;
