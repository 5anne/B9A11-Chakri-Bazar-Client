import { Helmet } from "react-helmet";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import { useContext } from "react";
import { ThemeContext } from "../Provider/ThemeProvider";
import { useLoaderData } from "react-router-dom";


const AppliedJobs = () => {
    const { theme } = useContext(ThemeContext);
    const appliedJobs = useLoaderData();
    const { displayName, email, jobTitle, employerName, salaryRange, jobCategory, resume } = appliedJobs;
    return (
        <div style={{ backgroundColor: theme === 'light' ? '#fff' : '#000' }}>
            <Helmet>
                <title>Chakri Bazar ~ All Applied Jobs</title>
            </Helmet>
            <Navbar></Navbar>
            <div>
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
                                appliedJobs?.map(appliedJob => <tr key={appliedJob._id}>
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