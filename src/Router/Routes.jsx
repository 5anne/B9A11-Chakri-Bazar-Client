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
                path: "/view_details/:id",
                element: <ViewJobDetails></ViewJobDetails>,
                // loader: ({params}) => fetch(`/jobs.json/${params.id}`)
            },
            {
                path: "/blogs",
                element: <Blogs></Blogs>
            },
            {
                path: "/add_job",
                element: <Add_Job></Add_Job>
            },
            {
                path: "/my_jobs",
                element: <MyJobs></MyJobs>
            },
            {
                path: "/updateJobs/:_id",
                element: <UpdateJobs></UpdateJobs>,
                loader: ({ params }) => fetch(`http://localhost:5000/addedJobs/${params._id}`)
            },
            {
                path: "/all_jobs",
                element: <AllJobs></AllJobs>,
            },
            {
                path: "/jobDetails/:_id",
                element: <ViewDetails></ViewDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/allJobs/${params._id}`)
            }
        ]
    },
]);

export default Routes;