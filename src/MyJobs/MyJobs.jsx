import { Helmet } from "react-helmet";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { ThemeContext } from "../Provider/ThemeProvider";


const MyJobs = () => {
    const { theme } = useContext(ThemeContext);
    const [myJobs, setMyJobs] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/addedJobs')
            .then(res => res.json())
            .then(data => setMyJobs(data))
    }, [])
    console.log(myJobs);

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/addedJobs/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const remainingJobs = myJobs?.filter(item => item._id !== id);
                            setMyJobs(remainingJobs);
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted. Please Reload!",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div style={{ backgroundColor: theme === 'light' ? '#fff' : '#000' }}>
            <Helmet>
                <title>Chakri Bazar ~ My Jobs</title>
            </Helmet>
            <Navbar></Navbar>
            <div>
                <div className="m-16 bg-yellow-900 p-8 overflow-x-auto">
                    <h1 className="font-bold font-serif text-3xl text-center text-blue-950 mb-8">All Added Jobs</h1>
                    <table className="table table-xs table-pin-rows table-pin-cols ">
                        <thead>
                            <tr className="bg-yellow-950 text-gray-400">
                                <td>Job Name</td>
                                <td>Job Type</td>
                                <td>Salary</td>
                                <td>Posted At</td>
                                <td>Deadline</td>
                                <th className="bg-yellow-950"></th>
                                <th className="bg-yellow-950"></th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-400">
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
                                        <button onClick={() => handleDelete(myJob._id)} className="btn btn-outline btn-error">Delete</button>
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