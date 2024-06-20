import { Helmet } from "react-helmet";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../Provider/ThemeProvider";
import axios from "axios";
import { Link } from "react-router-dom";


const AllJobs = () => {
    const { theme } = useContext(ThemeContext);
    const [jobData, setJobData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/allJobs')
            .then(data => setJobData(data.data))
    })

    return (
        <div style={{ backgroundColor: theme === 'light' ? '#fff' : '#000' }}>
            <Helmet>
                <title>Chakri Bazar ~ all_jobs</title>
            </Helmet>
            <Navbar></Navbar>
            <div>
                <h1 className="text-center text-gray-300 font-bold text-3xl mt-20 font-display">All Vacant Jobs Avilable For You</h1>
                <p className="border-2 border-gray-400 mt-8 w-28 mx-auto"></p>
                <div className="flex justify-center">
                    <table className="table table-xs m-16">
                        <thead>
                            <tr className="bg-rose-800 text-white">
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
                                jobData?.map(job => <tr key={job._id} className="text-white bg-rose-600">
                                    <td>{job.jobTitle}</td>
                                    <td>{job.numberOfApplicants}</td>
                                    <td>{job.jobPostingDate}</td>
                                    <td>{job.applicationDeadline}</td>
                                    <td>{job.salaryRange}</td>
                                    <td><Link to={`/jobDetails/${job._id}`}><button className="btn bg-green-950 text-gray-300">View Details</button></Link></td>
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