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
    const [displayJobData, setDisplayJobData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/allJobs')
            .then(data => {
                if (!loading) {
                    setJobData(data.data);
                    setDisplayJobData(data.data);
                }
            })
    }, [loading])

    const handleSearch = e => {
        e.preventDefault();
        console.log(e.target);
        const form = e.target;
        const search = form.search.value;
        console.log(search);

        const filteredJobs = jobData?.filter((data) => {
            const value = data.jobTitle;
            const valueType = value.toUpperCase();
            const searchType = search.toUpperCase();
            console.log(typeof (valueType));
            console.log(typeof (searchType));
            return value.toUpperCase() === search.toUpperCase();
        })
        console.log(filteredJobs);
        setDisplayJobData(filteredJobs);
    }
    console.log(displayJobData);
    return (
        <div style={{ backgroundColor: theme === 'light' ? '#fff' : '#000' }}>
            <Helmet>
                <title>Chakri Bazar ~ all_jobs</title>
            </Helmet>
            <Navbar></Navbar>
            <form onSubmit={handleSearch} action="">
                <label className="input input-bordered flex items-center gap-2 w-1/2 mx-auto">
                    <input type="text" name="search" className="grow" placeholder="Search Job Title: Content Writer, Sales Manager, etc..." />
                    <button className="btn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg></button>
                </label>
            </form>
            <div>
                <h1 className="text-center text-gray-400 font-bold text-3xl mt-20 font-display">All Vacant Jobs Avilable For You</h1>
                <p className="border-2 border-gray-400 mt-8 w-28 mx-auto"></p>
                <div className="flex justify-center">
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
            <Footer></Footer>
        </div>
    );
};

export default AllJobs;