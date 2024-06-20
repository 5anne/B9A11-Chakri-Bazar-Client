import { Helmet } from "react-helmet";
import Navbar from "../../Shared/Navbar";
import Footer from "../../Shared/Footer";
import { useLoaderData } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../Provider/ThemeProvider";


const ViewJobDetails = () => {
    const { theme } = useContext(ThemeContext);
    const jobDetails = useLoaderData();

    console.log(jobDetails);
    const { name, jobTitle, jobApplicantsNumber, salaryRange, jobPostingDate, applicationDeadline, jobType, jobDescription } = jobDetails;

    return (
        <div style={{ backgroundColor: theme === 'light' ? '#fff' : '#000' }}>
            <Helmet>
                <title>Chakri Bazar ~ View_Job_Details|| {jobTitle}</title>
            </Helmet>
            <Navbar></Navbar>
            <div className="flex justify-center lg:w-1/2 mx-8 lg:mx-auto my-20">
                <div className="md:flex flex-row items-center bg-base-100 shadow-2xl p-8">
                    <div className="md:w-1/2 mb-4">
                        <h2 className="font-bold text-blue-950 text-xl">{name}</h2>
                        <p>{jobTitle}</p>
                        <p>Number of Applicants: {jobApplicantsNumber}</p>
                        <p>Estimated Salary: {salaryRange}</p>
                        <p>Posted At: {jobPostingDate}</p>
                        <p>Deadline: {applicationDeadline}</p>
                        <p>Type of the Job: {jobType}</p>
                    </div>
                    <div className="md:w-1/2"><span className="font-bold text-blue-950 text-xl">Description:</span> {jobDescription}</div>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default ViewJobDetails;