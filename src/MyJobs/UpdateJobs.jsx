import { useLoaderData } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import DatePicker from "react-datepicker";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import { ThemeContext } from "../Provider/ThemeProvider";
import { Helmet } from "react-helmet";


const UpdateJobs = () => {
    const { theme } = useContext(ThemeContext);
    const { users } = useContext(AuthContext);
    const [startDate, setStartDate] = useState(new Date());
    const addedJobs = useLoaderData();
    const { image, job_name, jobCategory_name, salary_range, job_description, job_posted_at, deadline, applicants_number } = addedJobs;

    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        // console.log(form);
        const image = form.photo.value;
        const job_name = form.job_name.value;
        const jobCategory_name = form.jobCategory_name.value;
        const salary_range = form.salary_range.value;
        const job_description = form.job_description.value;
        const job_posted_at = form.job_posted_at.value;
        const deadline = form.deadline.value;
        const applicants_number = form.applicants_number.value;

        const updateJobs = {
            image,
            job_name,
            jobCategory_name,
            salary_range,
            job_description,
            job_posted_at,
            deadline,
            applicants_number
        }
        console.log(updateJobs);

        fetch(`http://localhost:5000/addedJobs/${addedJobs._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateJobs)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Job Updated Successfully!',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    form.reset();
                }
            })
    }

    return (
        <div style={{ backgroundColor: theme === 'light' ? '#fff' : '#000' }}>
            <Helmet>
                <title>Chakri Bazar ~ Update Jobs || {job_name}</title>
            </Helmet>
            <Navbar></Navbar>
            <div className="md:p-24">
                <form onSubmit={handleUpdate} action="" className="p-10 bg-orange-200">
                    <h1 className="font-bold font-serif text-3xl text-center text-blue-950 mb-8">Update Job</h1>
                    <div className="md:flex gap-10">
                        <div className="md:w-1/2">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-display">Photo URL</span>
                                </label>
                                <input type="url" name="photo" defaultValue={image} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-display">Job Title</span>
                                </label>
                                <input type="text" name="job_name" defaultValue={job_name} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-display"> Job Category</span>
                                </label>
                                <select name="jobCategory_name" defaultValue={jobCategory_name} className="input input-bordered" id="" required>
                                    <option value="On Site">On Site</option>
                                    <option value="Remote">Remote</option>
                                    <option value="Part-Time">Part-Time</option>
                                    <option value="Hybrid">Hybrid</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-display">Salary Range ($)</span>
                                </label>
                                <input type="number" name="salary_range" defaultValue={salary_range} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-display">Job Description</span>
                                </label>
                                <input type="text" name="job_description" defaultValue={job_description} className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-display">Job Posted At</span>
                                </label>
                                <input type="datetime-local" name="job_posted_at" defaultValue={job_posted_at} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-display">Deadline</span>
                                </label>
                                <DatePicker name="deadline" defaultValue={deadline} className="input input-bordered w-full" selected={startDate} onChange={(date) => setStartDate(date)} required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-display">Number of Applicants</span>
                                </label>
                                <input type="number" name="applicants_number" defaultValue={applicants_number} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-display">User Email</span>
                                </label>
                                <input type="email" name="email" defaultValue={users?.email} className="input input-bordered" readOnly />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-display">User Name</span>
                                </label>
                                <input type="text" name="name" defaultValue={users?.displayName} className="input input-bordered" readOnly />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button className="border-2 border-blue-950 bg-blue-800 hover:bg-blue-600 rounded-sm px-4 py-2 text-white font-semibold mt-8">Update Job</button>
                    </div>
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default UpdateJobs;