import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Root from "../Root/Root";


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
            }
        ]
    },
]);

export default Routes;