import { Helmet } from "react-helmet";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


const MyJobs = () => {

    const [myJobs, setMyJobs] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/addedJobs')
            .then(res => res.json())
            .then(data => setMyJobs(data))
    }, [])
    console.log(myJobs);

    return (
        <div>
            <Helmet>
                <title>Chakri Bazar ~ myJobs</title>
            </Helmet>
            <Navbar></Navbar>
            <div>
                <div className="overflow-x-auto m-16">
                    <h1 className="font-bold font-serif text-3xl text-center text-blue-950 mb-8">All Added Jobs</h1>
                    <table className="table table-xs table-pin-rows table-pin-cols">
                        <thead>
                            <tr>
                                <td>Job Name</td>
                                <td>Job Type</td>
                                <td>Salary</td>
                                <td>Posted At</td>
                                <td>Deadline</td>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myJobs?.map(myJob => <tr key={myJob._id}>
                                    <td>{myJob.job_name}</td>
                                    <td>{myJob.jobCategory_name}</td>
                                    <td>${myJob.salary_range}</td>
                                    <td>{myJob.job_posted_at}</td>
                                    <td>{myJob.deadline}</td>
                                    <td>
                                        <Link to={`/updateJobs/${myJob._id}`}><button className="btn btn-outline btn-info">Update</button></Link>
                                    </td>
                                    <td>
                                        <button className="btn btn-outline btn-error">Delete</button>
                                    </td>
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

export default MyJobs;