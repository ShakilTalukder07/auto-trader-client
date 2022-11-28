import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import Loading from '../../../components/Loading/Loading';
import { AuthContext } from '../../../Context/AuthProvider';
import SellerDeletingModal from './SellerDeletingModal';


const AllSellers = () => {

    const { loading } = useContext(AuthContext)
    const [deletingSeller, setDeletingSeller] = useState(null)

    const closeModal = () => {
        setDeletingSeller(null)
    }
    const [allSeller, setAllSeller] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/allSellers')
            .then(res => res.json())
            .then(data => {
                setAllSeller(data);
            })
    }, [])

    const handleDeleteSeller = seller => {
        console.log(seller);
        fetch(`http://localhost:5000/allSellers/${seller._id}`, {
            method: "DELETE",
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // if (data.deletedCount > 0) {
                //     toast.success('Seller deleted successfully')
                // }
            })
    }

    if (loading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <h3 className=" text-3xl font-bold m-4"> All Sellers</h3>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allSeller.length && allSeller.map((seller, i) => <tr>
                                <th>{i + 1}</th>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                                <th>
                                    <label onClick={() => setDeletingSeller(seller)} htmlFor="confirmationModal" className="btn  btn-ghost bg-orange-600 btn-sm">Delete</label>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingSeller && <SellerDeletingModal
                    title={`Are you sure, you want to delete?`}
                    successAction={handleDeleteSeller}
                    successButtonName="Delete"
                    modalData={deletingSeller}
                    closeModal={closeModal}
                >
                </SellerDeletingModal>
            }
        </div>
    );
};

export default AllSellers;