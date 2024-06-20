import { Helmet } from "react-helmet";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../Provider/ThemeProvider";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const AllJobs = () => {
    const { theme } = useContext(ThemeContext);
    const { loading } = useContext(AuthContext);
    const [jobData, setJobData] = useState([])
    const [displayJobData, setDisplayJobData] = useState([]);
    const [count, setCount] = useState(0);
    const [jobsPerPage, setJobsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(0);
    const numberOfPages = Math.ceil(count / jobsPerPage);
    const pages = [...Array(numberOfPages).keys()];

    const handlePage = e => {
        console.log(e.target.value);
        const value = parseInt(e.target.value);
        console.log(value);
        setJobsPerPage(value);
        setCurrentPage(0);
    }

    const handlePrevious = e => {
        e.preventDefault();
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    }
    const handleNext = e => {
        e.preventDefault();
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    }

    useEffect(() => {
        axios.get('https://chakri-bazar-server-side.vercel.app/allJobsCount')
            .then(data => {
                if (!loading) {
                    setCount(data.data.count);
                }
            })
    }, [loading])
    console.log(count);

    useEffect(() => {
        fetch(`https://chakri-bazar-server-side.vercel.app/allJobs?page=${currentPage}&size=${jobsPerPage}`)
            .then(res => res.json())
            .then(data => {
                console.log(currentPage, jobsPerPage);
                setJobData(data);
                setDisplayJobData(data);

            })
    }, [currentPage, jobsPerPage])

    const handleSearch = e => {
        e.preventDefault();
        console.log(e.target);
        const form = e.target;
        const search = form.search.value;
        // console.log(search);

        const filteredJobs = jobData?.filter((data) => {
            const value = data.jobTitle;
            return value.toUpperCase() === search.toUpperCase();
        })
        // console.log(filteredJobs);
        setDisplayJobData(filteredJobs);
    }
    console.log(displayJobData);
    return (
        <div style={{ backgroundColor: theme === 'light' ? '#fff' : '#000' }}>
            <Helmet>
                <title>Chakri Bazar ~ All Jobs</title>
            </Helmet>
            <Navbar></Navbar>
            <form onSubmit={handleSearch} action="">
                <label className="input input-bordered flex items-center gap-2 md:w-1/2 mx-auto">
                    <input type="text" name="search" className="grow" placeholder="Search Job Title: Content Writer, Sales Manager, etc..." />
                    <button className=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg></button>
                </label>
            </form>
            <div>
                <h1 className="text-center text-gray-400 font-bold text-xl md:text-3xl mt-20 font-display">All Vacant Jobs Avilable For You</h1>
                <p className="border-2 border-gray-400 mt-8 w-28 mx-auto"></p>
                <div className="flex justify-center overflow-x-auto">
                    <table className="table table-xs m-16">
                        <thead>
                            <tr className="bg-rose-800 text-white">
                                <th>Employer</th>
                                <th>Job Title</th>
                                <th>Number of Applicants</th>
                                <th>Job Posting Date</th>
                                <th>Application Deadline</th>
                                <th>Salary range</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                displayJobData?.map(job => <tr key={job._id} className="text-black bg-rose-300">
                                    <td>{job.employerName}</td>
                                    <td>{job.jobTitle}</td>
                                    <td>{job.numberOfApplicants}</td>
                                    <td>{job.jobPostingDate}</td>
                                    <td>{job.applicationDeadline}</td>
                                    <td>{job.salaryRange}</td>
                                    <td><Link to={`/jobDetails/${job._id}`}><button className="btn bg-rose-900 text-gray-300">View Details</button></Link></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="flex justify-center items-center gap-2 mb-8">
                <button onClick={handlePrevious} className='btn'>Prev</button>
                {
                    pages.map(page => <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={currentPage === page ? 'bg-black rounded-full text-white btn' : undefined}>{page}</button>)
                }
                <button onClick={handleNext} className='btn'>Next</button>
                <select value={jobsPerPage} onChange={handlePage} name="" id="">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="10">20</option>
                </select>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllJobs;