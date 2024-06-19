import { useEffect, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';


const JobCategory = () => {
    const [jobs, setJobs] = useState([]);
    const [onSiteJobs, setOnSiteJobs] = useState([]);
    const [remoteJobs, setRemoteJobs] = useState([]);
    const [hybridJobs, setHybridJobs] = useState([]);
    const [partTimeJobs, setPartTimeJobs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch('/jobs.json')
            .then(res => res.json())
            .then(data => {
                setLoading(true);
                if (loading) {
                    setJobs(data)
                    const tempOnJobs = jobs?.filter(job => job.jobType === 'On-Site');
                    console.log(tempOnJobs);
                    setOnSiteJobs(tempOnJobs);
                    const tempRemoteJobs = jobs?.filter(job => job.jobType === 'Remote');
                    setRemoteJobs(tempRemoteJobs);
                    const tempHybridJobs = jobs?.filter(job => job.jobType === 'Hybrid');
                    setHybridJobs(tempHybridJobs);
                    const tempPartJobs = jobs?.filter(job => job.jobType === 'Part-Time');
                    setPartTimeJobs(tempPartJobs);
                }
            });
    }, [loading, jobs])

    return (
        <div className="my-16">
            <p className="text-center uppercase text-red-800 font-semibold mt-28">Category</p>
            <ScrollAnimation duration={5}
                animateIn='hinge'
                initiallyVisible={true}>
                <h1 className="font-bold text-center text-3xl font-display border-2 px-6 py-4 border-orange-800 uppercase mt-6 mb-16 w-1/2 mx-auto">All Job Categories</h1>
            </ScrollAnimation>
            <Tabs>
                <TabList>
                    <Tab>All Jobs</Tab>
                    <Tab>On-Site Jobs</Tab>
                    <Tab>Remote Jobs</Tab>
                    <Tab>Hybrid</Tab>
                    <Tab>Part-Time</Tab>
                </TabList>

                <TabPanel>

                    <div className="grid grid-cols-3 gap-10 mx-10 my-8">
                        {
                            jobs?.map(job => <div key={job.id}>
                                <div className="card w-96 bg-base-100 border-2 border-teal-800 shadow-xl">
                                    <div className="card-body">
                                        <h2 className="card-title">{job.name}</h2>
                                        <p>{job.jobTitle}</p>
                                        <p>Number of Applicants: {job.jobApplicantsNumber}</p>
                                        <p>Estimated Salary: {job.salaryRange}</p>
                                        <p>Posted At: {job.jobPostingDate}</p>
                                        <p>Deadline: {job.applicationDeadline}</p>
                                        <div className="card-actions justify-end">
                                            <Link to={`/view_details/${job.id}`}><button className="btn btn-accent">View Details</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>

                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-2 gap-10 mx-10 my-8">
                        {
                            onSiteJobs?.map(job => <div key={job.id}>
                                <div className="card w-96 bg-base-100 border-2 border-teal-800 shadow-xl">
                                    <div className="card-body">
                                        <h2 className="card-title">{job.name}</h2>
                                        <p>{job.jobTitle}</p>
                                        <p>Number of Applicants: {job.jobApplicantsNumber}</p>
                                        <p>Estimated Salary: {job.salaryRange}</p>
                                        <p>Posted At: {job.jobPostingDate}</p>
                                        <p>Deadline: {job.applicationDeadline}</p>
                                        <div className="card-actions justify-end">
                                            <Link to={`/view_details/${job.id}`}><button className="btn btn-accent">View Details</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-2 gap-10 mx-10 my-8">
                        {
                            remoteJobs?.map(job => <div key={job.id}>
                                <div className="card w-96 bg-base-100 border-2 border-teal-800 shadow-xl">
                                    <div className="card-body">
                                        <h2 className="card-title">{job.name}</h2>
                                        <p>{job.jobTitle}</p>
                                        <p>Number of Applicants: {job.jobApplicantsNumber}</p>
                                        <p>Estimated Salary: {job.salaryRange}</p>
                                        <p>Posted At: {job.jobPostingDate}</p>
                                        <p>Deadline: {job.applicationDeadline}</p>
                                        <div className="card-actions justify-end">
                                            <Link to={`/view_details/${job.id}`}><button className="btn btn-accent">View Details</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-2 gap-10 mx-10 my-8">
                        {
                            hybridJobs?.map(job => <div key={job.id}>
                                <div className="card w-96 bg-base-100 border-2 border-teal-800 shadow-xl">
                                    <div className="card-body">
                                        <h2 className="card-title">{job.name}</h2>
                                        <p>{job.jobTitle}</p>
                                        <p>Number of Applicants: {job.jobApplicantsNumber}</p>
                                        <p>Estimated Salary: {job.salaryRange}</p>
                                        <p>Posted At: {job.jobPostingDate}</p>
                                        <p>Deadline: {job.applicationDeadline}</p>
                                        <div className="card-actions justify-end">
                                            <Link to={`/view_details/${job.id}`}><button className="btn btn-accent">View Details</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-2 gap-10 mx-10 my-8">
                        {
                            partTimeJobs?.map(job => <div key={job.id}>
                                <div className="card w-96 bg-base-100 border-2 border-teal-800 shadow-xl">
                                    <div className="card-body">
                                        <h2 className="card-title">{job.name}</h2>
                                        <p>{job.jobTitle}</p>
                                        <p>Number of Applicants: {job.jobApplicantsNumber}</p>
                                        <p>Estimated Salary: {job.salaryRange}</p>
                                        <p>Posted At: {job.jobPostingDate}</p>
                                        <p>Deadline: {job.applicationDeadline}</p>
                                        <div className="card-actions justify-end">
                                            <Link to={`/view_details/${job.id}`}><button className="btn btn-accent">View Details</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default JobCategory;