import React, { useContext, useEffect, useState } from 'react';
import Loading from '../../../components/Loading/Loading';
import { AuthContext } from '../../../Context/AuthProvider';

const AllBuyers = () => {

    const { loading } = useContext(AuthContext)

    const [allBuyer, setAllBuyer] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/allBuyers')
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }, [])

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h3 className=" text-3xl font-bold"> All Buyers</h3>

        </div>
    );
};

export default AllBuyers;