import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import EveryCategories from "../../Pages/EveryCategories/EveryCategories";
import Home from "../../Pages/Home/Home/Home";
import Service from "../../Pages/Service/Service";
import Blogs from "../../Pages/Shared/Blogs/Blogs";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import LogIn from "../../Pages/Shared/LogIn/LogIn";
import SignUp from "../../Pages/Shared/SignUp/SignUp";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<DisplayError></DisplayError>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/dashboard',
                element:<Dashboard></Dashboard>
            },
            {
                path:'/serviceAndTips',
                element:<Service></Service>
            },
            {
                path:'/blogs',
                element:<Blogs></Blogs>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/login',
                element:<LogIn></LogIn>
            },
            {
                path:'/category/:id',
                element:<PrivateRoutes><EveryCategories></EveryCategories></PrivateRoutes>,
                loader: ({params})=> fetch(`http://localhost:5000/category/${params.id}`)
            }
        ]
    }
])

export default router;