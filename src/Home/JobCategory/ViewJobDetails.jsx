import { Helmet } from "react-helmet";
import Navbar from "../../Shared/Navbar";
import Footer from "../../Shared/Footer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ViewJobDetails = () => {
    const { id } = useParams();
    const idInt = parseInt(id);
    const [jobDetails, setJobDetails] = useState([]);

    useEffect(() => {
        fetch('/jobs.json')
            .then(res => res.json())
            .then(data => {
                const tempDetails = data?.find(jobData => jobData.id === idInt);
                setJobDetails(tempDetails);
            })
    }, [idInt])
    console.log(jobDetails);
    const { name, jobTitle, jobApplicantsNumber, salaryRange, jobPostingDate, applicationDeadline, jobType, jobDescription } = jobDetails;

    return (
        <div>
            <Helmet>
                <title>Chakri Bazar ~ View_Job_Details||</title>
            </Helmet>
            <Navbar></Navbar>
            <div className="flex justify-center w-1/2 mx-auto my-20">
                <div className="flex flex-row items-center bg-base-100 shadow-2xl p-8">
                    <div className="w-1/2">
                        <h2 className="font-bold text-blue-950 text-xl">{name}</h2>
                        <p>{jobTitle}</p>
                        <p>Number of Applicants: {jobApplicantsNumber}</p>
                        <p>Estimated Salary: {salaryRange}</p>
                        <p>Posted At: {jobPostingDate}</p>
                        <p>Deadline: {applicationDeadline}</p>
                        <p>Type of the Job: {jobType}</p>
                        <div className="card-actions justify-end">
                            {/* <Link to={`/view_details/${id}`}><button className="btn btn-accent">View Details</button></Link> */}
                        </div>
                    </div>
                    <div className="w-1/2"><span className="font-bold text-blue-950 text-xl">Description:</span> {jobDescription}</div>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default ViewJobDetails;