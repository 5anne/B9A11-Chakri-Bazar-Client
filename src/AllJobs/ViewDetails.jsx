import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import { useContext } from "react";
import { ThemeContext } from "../Provider/ThemeProvider";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";


const ViewDetails = () => {
    const { theme } = useContext(ThemeContext);
    const { users, loading } = useContext(AuthContext);
    const singleJobDetails = useLoaderData();
    const { _id, image, jobTitle, description, salaryRange, numberOfApplicants, applicationDeadline,
        employerName, jobCategory } = singleJobDetails;

    const handleApply = e => {
        e.preventDefault();
        const form = e.target;
        const resume = form.resume.value;
        console.log(resume);

        const { displayName, email } = users;
        const appliedInfo = {
            displayName, email, jobTitle, description, salaryRange, numberOfApplicants, resume,
            employerName, jobCategory
        };

        const currentDate = new Date();
        const applicationObj = new Date(applicationDeadline);
        // console.log(currentDate, applicationObj);
        // console.log(typeof (currentDate), typeof (applicationObj));
        // console.log(currentDate.getTime(), applicationObj.getTime());
        // console.log(currentDate.getDate(), applicationObj.getDate());
        // console.log(currentDate.getMonth(), applicationObj.getMonth());
        // console.log(currentDate.getFullYear(), applicationObj.getFullYear());
        // console.log(currentDate.getHours(), applicationObj.getHours());
        // console.log(currentDate.getMinutes(), applicationObj.getMinutes());
        // console.log(currentDate.getSeconds(), applicationObj.getSeconds());

        if (currentDate.getTime() < applicationObj.getTime()) {
            console.log(`${currentDate} is earlier`);

            axios.post('http://localhost:5000/appliedJobs', appliedInfo)
                .then(data => {
                    console.log(data.data);
                    if (data.data.insertedId) {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Submitted Successfully!',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        })
                        form.reset();
                    }
                })

            if (!loading) {
                const applicantObj = {
                    _id,
                    numberOfApplicants: numberOfApplicants + 1
                }

                fetch(`http://localhost:5000/allJobs/${_id}`, {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(applicantObj)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                    })
            }
        }
        else {
            Swal.fire({
                title: 'Warning!',
                text: 'Deadline Expired!',
                icon: 'warning',
                confirmButtonText: 'Close'
            })
        }
    }

    return (
        <div style={{ backgroundColor: theme === 'light' ? '#fff' : '#000' }}>
            <Helmet>
                <title>Chakri Bazar ~ Single Job Details</title>
            </Helmet>
            <Navbar></Navbar>
            <div className=" bg-slate-400 my-28 mx-40 p-20 shadow-2xl rounded-md">
                <div className="flex flex-col-reverse justify-center">
                    <img className="w-1/2 mx-auto" src={image} alt="" />
                    <div className="w-1/2 mx-auto mb-8 leading-loose">
                        <h1 className="font-bold font-display text-2xl text-blue-950">Job Name: {jobTitle}</h1>
                        <p className="text-gray-800"><span className="font-semibold text-lg text-blue-800">Job Description:</span> {description}</p>
                        <p><span className="font-semibold text-lg">Salary:</span> {salaryRange}</p>
                        <p><span className="font-semibold text-lg">Number of Applicants:</span> {numberOfApplicants}</p>
                    </div>
                </div>
                <div className="flex justify-center mt-8">
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    <button className="text-white bg-blue-950 px-12 py-2 hover:bg-blue-700" onClick={() => document.getElementById('my_modal_3').showModal()}>Apply</button>
                    <dialog id="my_modal_3" className="modal">
                        <div className="modal-box">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <form onSubmit={handleApply}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">User Name</span>
                                    </label>
                                    <input type="text" defaultValue={users?.displayName} className="input input-bordered" readOnly />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">User Email</span>
                                    </label>
                                    <input type="email" defaultValue={users?.email} className="input input-bordered" readOnly />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Resume Link</span>
                                    </label>
                                    <input type="file" name="resume" className="input input-bordered pt-2" required />
                                </div>
                                <div className="flex justify-end mt-4">
                                    <button className="text-white bg-teal-950 px-4 py-2 rounded-md hover:bg-teal-700">Submit</button>
                                </div>
                            </form>
                        </div>
                    </dialog>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ViewDetails;