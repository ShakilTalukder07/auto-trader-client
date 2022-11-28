import { useEffect, useState } from 'react';

const useBuyer = () => {
    const [isBuyer, setIsBuyer] = useState(false)
    const [isBuyerLoading, setBuyerLoading] = useState(true)
    useEffect(() => {
        fetch('https://resala-server.vercel.app/allBuyers')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setIsBuyer(data[0].role === 'buyer');
                setBuyerLoading(false)
            })
    },)
    return [isBuyer, isBuyerLoading]
};

export default useBuyer;