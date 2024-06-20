import { Helmet } from "react-helmet";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../Provider/ThemeProvider";
import { AuthContext } from "../Provider/AuthProvider";
// import { useLoaderData } from "react-router-dom";


const AppliedJobs = () => {
    const { theme } = useContext(ThemeContext);
    const { users, loading } = useContext(AuthContext);
    // const appliedJobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/appliedJobs')
            .then(res => res.json())
            .then(data => {
                if (!loading) {
                    const listedJobs = data?.filter(job => job.email === users.email)
                    setAppliedJobs(listedJobs);
                    setDisplayJobs(listedJobs);
                }

            })
    }, [loading, users])
    // const { displayName, email, jobTitle, employerName, salaryRange, jobCategory, resume } = appliedJobs;
    const handleFilter = e => {
        console.log(e.target.value);
        const filter = e.target.value;
        if (filter === 'All') {
            setDisplayJobs(appliedJobs);
        }
        else if (filter === 'On-site') {
            const filteredJobs = appliedJobs?.filter(jobs => jobs.jobCategory === filter);
            setDisplayJobs(filteredJobs);
        }
        else if (filter === 'Remote') {
            const filteredJobs = appliedJobs?.filter(jobs => jobs.jobCategory === filter);
            setDisplayJobs(filteredJobs);
        }
        else if (filter === 'Hybrid') {
            const filteredJobs = appliedJobs?.filter(jobs => jobs.jobCategory === filter);
            setDisplayJobs(filteredJobs);
        }
        else if (filter === 'Part-time') {
            const filteredJobs = appliedJobs?.filter(jobs => jobs.jobCategory === filter);
            setDisplayJobs(filteredJobs);
        }
    }
    
    return (
        <div style={{ backgroundColor: theme === 'light' ? '#fff' : '#000' }}>
            <Helmet>
                <title>Chakri Bazar ~ All Applied Jobs</title>
            </Helmet>
            <Navbar></Navbar>
            <div>
                <div className="flex gap-4 w-20 mx-auto text-gray-300 mt-8">
                    <p>Filter</p>
                    <select onChange={handleFilter} className="text-black" name="" id="">
                        <option value="All">All</option>
                        <option value="On-site">On-site</option>
                        <option value="Remote">Remote</option>
                        <option value="Hybrid">Hybrid</option>
                        <option value="Part-time">Part-time</option>
                    </select>
                </div>
                <div className="m-20 bg-blue-900">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-blue-950 text-gray-100">
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>User Info</th>
                                <th>Job Title</th>
                                <th>Employer</th>
                                <th>Salary</th>
                                <th>Job Type</th>
                                <th>Resume</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-300">
                            {/* row 1 */}
                            {
                                displayJobs?.map(appliedJob => <tr key={appliedJob._id}>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div>
                                                <div className="font-bold">{appliedJob.displayName}</div>
                                                <div className="text-sm opacity-50">{appliedJob.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {appliedJob.jobTitle}
                                    </td>
                                    <td>{appliedJob.employerName}</td>
                                    <td>{appliedJob.salaryRange}</td>
                                    <td>{appliedJob.jobCategory}</td>
                                    <td itemType="file">{appliedJob.resume}</td>
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

export default AppliedJobs;