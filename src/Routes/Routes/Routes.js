import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import AddAProduct from "../../Pages/Dashboard/AddAProduct/AddAProduct";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import EveryCategories from "../../Pages/EveryCategories/EveryCategories";
import Home from "../../Pages/Home/Home/Home";
import Service from "../../Pages/Service/Service";
import Blogs from "../../Pages/Shared/Blogs/Blogs";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import LogIn from "../../Pages/Shared/LogIn/LogIn";
import SignUp from "../../Pages/Shared/SignUp/SignUp";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import SellersRoute from "../SellersRoute/SellersRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/serviceAndTips',
                element: <Service></Service>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/category/:id',
                element: <PrivateRoutes><EveryCategories></EveryCategories></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrders></MyOrders>,
                loader: () => fetch(`http://localhost:5000/cars`)
            },
            {
                path: '/dashboard/allusers',
                element: <AllUsers></AllUsers>,
                loader: () => fetch('http://localhost:5000/users')
            },
            {
                path: '/dashboard/myproducts',
                element: <SellersRoute><MyProducts></MyProducts></SellersRoute>
            },
            {
                path: '/dashboard/addaproduct',
                element: <SellersRoute><AddAProduct></AddAProduct></SellersRoute>
            },
        ]
    }
])

export default router;