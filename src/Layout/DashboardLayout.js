import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useSeller from '../hooks/useSeller';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext)
    const [isSeller] = useSeller(user?.email)
    const [isAdmin] = useAdmin()
    console.log(isAdmin);
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-72 bg-base-100 text-base-content">
                        <li><Link to='/dashboard'>My Orders</Link></li>

                        <>
                            <li><Link to='/dashboard/allSellers'>All Sellers</Link></li>
                            <li><Link to='/dashboard/allBuyers'>All Buyers</Link></li>
                        </>

                        {
                            isSeller &&
                            <>
                                <li><Link to='/dashboard/addaproduct'>Add A Product</Link></li>
                                <li><Link to='/dashboard/myproducts'>My Products</Link></li>
                            </>
                        }

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;