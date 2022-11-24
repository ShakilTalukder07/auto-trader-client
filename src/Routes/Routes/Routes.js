import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Blogs from "../../Pages/Shared/Blogs/Blogs";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";

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
                path:'/blogs',
                element:<Blogs></Blogs>
            }
        ]
    }
])

export default router;