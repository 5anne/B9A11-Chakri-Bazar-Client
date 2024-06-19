import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Root from "../Root/Root";
import ViewJobDetails from "../Home/JobCategory/ViewJobDetails";
import Blogs from "../Blogs/Blogs";


const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/view_details/:id",
                element: <ViewJobDetails></ViewJobDetails>,
                // loader: ({params}) => fetch(`/jobs.json/${params.id}`)
            },
            {
                path: "/blogs",
                element: <Blogs></Blogs>
            }
        ]
    },
]);

export default Routes;