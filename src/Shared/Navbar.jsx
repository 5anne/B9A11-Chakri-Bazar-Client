import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    const links = <>
        <NavLink to="/" className={({ isActive }) => (isActive && 'border-2 border-blue-900 rounded-lg p-2')}>Home</NavLink>
        <NavLink to="/all_jobs" className={({ isActive }) => (isActive && 'border-2 border-blue-900 rounded-lg p-2')}>All Jobs</NavLink>
        <NavLink to="/applied_jobs" className={({ isActive }) => (isActive && 'border-2 border-blue-900 rounded-lg p-2')}>Applied Jobs</NavLink>
        <NavLink to="/add_job" className={({ isActive }) => (isActive && 'border-2 border-blue-900 rounded-lg p-2')}>Add Job</NavLink>
        <NavLink to="/my_jobs" className={({ isActive }) => (isActive && 'border-2 border-blue-900 rounded-lg p-2')}>My Jobs</NavLink>
        <NavLink to="/blogs" className={({ isActive }) => (isActive && 'border-2 border-blue-900 rounded-lg p-2')}>Blogs</NavLink>
    </>
    return (
        <div className="flex justify-between items-center bg-gradient-to-r from-gray-200 to-gray-200 p-4 sticky top-4">
            <div className="flex gap-3 items-center">
                <img className="w-10" src="https://i.postimg.cc/k5WHwq7j/worldwide-12041684-2.png" alt="" />
                <h2 className="font-bold text-2xl font-serif uppercase">chakri bazar</h2>
            </div>
            <div className="flex gap-3 items-center font-semibold text-gray-600">
                {links}
            </div>
            <div>
                <Link to="/login"><button className="btn btn-outline btn-info">Login</button></Link>
            </div>
        </div>
    );
};

export default Navbar;