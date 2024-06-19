
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import Banner from "./Banner";
import Hired from "./Hired";
import JobCategory from "./JobCategory/JobCategory";
import Process from "./Process";
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useContext, useEffect } from 'react';
import { ThemeContext } from "../Provider/ThemeProvider";

const Home = () => {
    const { theme } = useContext(ThemeContext);
    useEffect(() => {
        AOS.init({
            duration: 10000,
            animatedClassName: 'aos-animate',
            easing: 'ease',
        });

    }, [])
    return (
        <div style={{ backgroundColor: theme === 'light' ? '#fff' : '#000' }}>
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