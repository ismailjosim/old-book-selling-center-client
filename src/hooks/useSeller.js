import React, { useState, useEffect } from 'react';


const useSeller = (email) => {
    const [isSeller, setIsSeller] = useState(true);
    const [sellerLoading, setSellerLoading] = useState(true)

    useEffect(() => {
        if (email) {
            fetch(`https://old-book-center-server.vercel.app/users/seller/${ email }`)
                .then(res => res.json())
                .then(data => {
                    setIsSeller(data.isSeller)
                    setSellerLoading(false)
                })
        }
    }, [email])


    return [isSeller, sellerLoading];
};

export default useSeller;
