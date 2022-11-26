import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Loading from '../../../components/Loading/Loading';
import { AuthContext } from '../../../Context/AuthProvider';

const MyOrders = () => {
    const { user, loading } = useContext(AuthContext)

    const url = (`http://localhost:5000/bookings?email=${user?.email}`)

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json()
            return data;
        }
    })

    const cars = useLoaderData()

    if (loading) {
        <Loading></Loading>
    }

    return (
        <div>
            <div>
                <h3 className="text-3xl underline mx-3 my-4">My Orders</h3>
            </div>
            <div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Car Image</th>
                                <th>Car Name</th>
                                <th>Price</th>
                                <th>Make Payment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookings.length && bookings.map((booking, i) => <tr key={booking._id}>
                                    {/* <td>{i+1}</td> */}
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="w-24 rounded">
                                                    {
                                                        cars.length && cars.map(car =>
                                                            <img src={car.image} alt='' />)
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {booking.itemName}
                                    </td>
                                    <td>
                                        <p>$<span>{booking.itemPrice}</span></p>
                                    </td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">Pay</button>
                                    </th>
                                </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );
};

export default MyOrders;