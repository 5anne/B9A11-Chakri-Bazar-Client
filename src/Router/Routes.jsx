import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Root from "../Root/Root";
import ViewJobDetails from "../Home/JobCategory/ViewJobDetails";
import Blogs from "../Blogs/Blogs";
import Add_Job from "../Add_Job/Add_Job";
import MyJobs from "../MyJobs/MyJobs";
import UpdateJobs from "../MyJobs/UpdateJobs";
import ErrorPage from "../ErrorPage/ErrorPage";
import AllJobs from "../AllJobs/AllJobs";
import ViewDetails from "../AllJobs/ViewDetails";
import AppliedJobs from "../AppliedJobs/AppliedJobs";
import PrivateRoutes from "./PrivateRoutes";


const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
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
                path: "/view_details/:_id",
                element: <PrivateRoutes><ViewJobDetails></ViewJobDetails></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/jobsJson/${params._id}`)
            },
            {
                path: "/blogs",
                element: <Blogs></Blogs>
            },
            {
                path: "/add_job",
                element: <PrivateRoutes><Add_Job></Add_Job></PrivateRoutes>
            },
            {
                path: "/my_jobs",
                element: <PrivateRoutes><MyJobs></MyJobs></PrivateRoutes>
            },
            {
                path: "/updateJobs/:_id",
                element: <PrivateRoutes><UpdateJobs></UpdateJobs></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/addedJobs/${params._id}`)
            },
            {
                path: "/all_jobs",
                element: <AllJobs></AllJobs>,
            },
            {
                path: "/jobDetails/:_id",
                element: <PrivateRoutes><ViewDetails></ViewDetails></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/allJobs/${params._id}`)
            },
            {
                path: "/applied_jobs",
                element: <PrivateRoutes><AppliedJobs></AppliedJobs></PrivateRoutes>,
                loader: () => fetch('http://localhost:5000/appliedJobs')
            }
        ]
    },
]);

export default Routes;