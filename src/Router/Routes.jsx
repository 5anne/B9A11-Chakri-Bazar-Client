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
            }
        ]
    },
]);

export default Routes;