import React, { useState, useEffect } from 'react';

const useAdmin = (email) => {
    const [isAdmin, setIsAdmin] = useState(true);
    const [adminLoading, setAdminLoading] = useState(true)

    useEffect(() => {
        if (email) {
            fetch(`https://old-book-center-server.vercel.app/users/admin/${ email }`, {
                headers: {
                    authorization: `bearer ${ localStorage.getItem('accessToken') }`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setIsAdmin(data.isAdmin)
                    setAdminLoading(false)
                })
        }
    }, [email])

    return [isAdmin, adminLoading];

};

export default useAdmin;
