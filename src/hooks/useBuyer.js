import { useState, useEffect } from 'react';

const useBuyer = (email) => {
    const [isBuyer, setIsBuyer] = useState(true);
    const [isBuyerLoading, setIsBuyerLoading] = useState(true);

    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/buyer/${ email }`)
                .then(res => res.json())
                .then(data => {
                    setIsBuyer(data.isBuyer);
                    setIsBuyerLoading(false)
                })
        }


    }, [email])


    return [isBuyer, isBuyerLoading]


};

export default useBuyer;
