import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import Banner from "./Banner";
import Hired from "./Hired";
import JobCategory from "./JobCategory/JobCategory";
import Process from "./Process";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <JobCategory></JobCategory>
            <Process></Process>
            <Hired></Hired>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;