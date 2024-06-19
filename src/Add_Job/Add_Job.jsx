import { Helmet } from "react-helmet";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";


const Add_Job = () => {
    const [startDate, setStartDate] = useState(new Date());
    const { users } = useContext(AuthContext);

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const image = form.photo.value;
        const job_name = form.job_name.value;
        const jobCategory_name = form.jobCategory_name.value;
        const salary_range = form.salary_range.value;
        const job_description = form.job_description.value;
        const job_posted_at = form.job_posted_at.value;
        const deadline = form.deadline.value;
        const applicants_number = form.applicants_number.value;

        const newJobs = { image, job_name, jobCategory_name, salary_range, job_description, job_posted_at, deadline, applicants_number }
        console.log(newJobs);

        fetch('https://ceramics-and-pottery-server-8751zqvxj.vercel.app/newItems', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newJobs)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'New Job Added Successfully!',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    form.reset();
                }
            })
    }
    
    return (
        <div>
            <Helmet>
                <title>Chakri Bazar ~ add_job</title>
            </Helmet>
            <Navbar></Navbar>
            <div className="md:p-24">
                <form onSubmit={handleSubmit} action="" className="p-10 bg-orange-200">
                    <h1 className="font-bold font-serif text-3xl text-center text-blue-950 mb-8">Add a New Job</h1>
                    <div className="md:flex gap-10">
                        <div className="md:w-1/2">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-display">Photo URL</span>
                                </label>
                                <input type="url" name="photo" placeholder="https://postimg.cc/..." className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-display">Job Title</span>
                                </label>
                                <input type="text" name="job_name" placeholder="Job Title" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-display"> Job Category</span>
                                </label>
                                <select name="jobCategory_name" className="input input-bordered" id="" required>
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
                                <input type="number" name="salary_range" placeholder="e.g - 10000 - 20000" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-display">Job Description</span>
                                </label>
                                <input type="text" name="job_description" placeholder="Job Description" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-display">Job Posted At</span>
                                </label>
                                <input type="datetime-local" name="job_posted_at" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-display">Deadline</span>
                                </label>
                                <DatePicker name="deadline" className="input input-bordered w-full" selected={startDate} onChange={(date) => setStartDate(date)} required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-display">Number of Applicants</span>
                                </label>
                                <input type="number" name="applicants_number" placeholder="0" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-display">User Email</span>
                                </label>
                                <input type="email" name="email" defaultValue={users.email} className="input input-bordered" readOnly />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-display">User Name</span>
                                </label>
                                <input type="text" name="name" defaultValue={users.displayName} className="input input-bordered" readOnly />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button className="border-2 border-blue-950 bg-blue-800 hover:bg-blue-600 rounded-sm px-4 py-2 text-white font-semibold mt-8">Add Job</button>
                    </div>
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Add_Job;