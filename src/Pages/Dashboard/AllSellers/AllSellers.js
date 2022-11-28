import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Loading from '../../../components/Loading/Loading';
import { AuthContext } from '../../../Context/AuthProvider';


const AllSellers = () => {

    const { loading } = useContext(AuthContext)

    const [allSeller, setAllSeller] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/allSellers')
            .then(res => res.json())
            .then(data => {
                setAllSeller(data);
            })
    }, [])

    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h3 className=" text-3xl font-bold"> All Sellers</h3>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Favorite Color</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allSeller.length && allSeller.map((user, i) => <tr>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td><button className='btn btn-ghost bg-red-500'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;