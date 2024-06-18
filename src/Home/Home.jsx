import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Footer></Footer>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;