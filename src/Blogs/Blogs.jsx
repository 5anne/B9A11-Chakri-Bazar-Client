import { Helmet } from "react-helmet";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import { useEffect, useState } from "react";
import BlogsDetails from "./BlogsDetails";


const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('/blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    console.log(blogs)

    return (
        <div>
            <Helmet>
                <title>Chakri Bazar ~ blogs</title>
            </Helmet>
            <Navbar></Navbar>
            <div>
                <h1 className="font-bold text-center text-3xl font-display uppercase my-12 w-1/2 mx-auto">All Latest Blogs</h1>
                {
                    blogs.map(blog => <BlogsDetails key={blog.id} blog={blog}></BlogsDetails>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blogs;