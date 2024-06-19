import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Navbar = () => {
    const { users, logOut } = useContext(AuthContext);
    console.log(users);

    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error);
            })
    }

    const links = <>
        <NavLink to="/" className={({ isActive }) => (isActive && 'border-2 border-blue-900 rounded-lg p-2')}>Home</NavLink>
        <NavLink to="/all_jobs" className={({ isActive }) => (isActive && 'border-2 border-blue-900 rounded-lg p-2')}>All Jobs</NavLink>
        <NavLink to="/applied_jobs" className={({ isActive }) => (isActive && 'border-2 border-blue-900 rounded-lg p-2')}>Applied Jobs</NavLink>
        <NavLink to="/add_job" className={({ isActive }) => (isActive && 'border-2 border-blue-900 rounded-lg p-2')}>Add Job</NavLink>
        <NavLink to="/my_jobs" className={({ isActive }) => (isActive && 'border-2 border-blue-900 rounded-lg p-2')}>My Jobs</NavLink>
        <NavLink to="/blogs" className={({ isActive }) => (isActive && 'border-2 border-blue-900 rounded-lg p-2')}>Blogs</NavLink>
    </>
    return (
        <div className="flex justify-between items-center bg-gradient-to-r from-gray-200 to-gray-200 p-4 sticky top-4 mb-8">
            <div className="flex gap-3 items-center">
                <img className="w-10" src="https://i.postimg.cc/k5WHwq7j/worldwide-12041684-2.png" alt="" />
                <h2 className="font-bold text-2xl font-serif uppercase">chakri bazar</h2>
            </div>
            <div className="flex gap-3 items-center font-semibold text-gray-600">
                {links}
            </div>
            {
                users ?
                    <div className="flex gap-4 items-center">
                        <div className="tooltip tooltip-bottom" data-tip={users.displayName}>
                            <img className="w-10 h-10 rounded-full border-2 border-lime-900" src={users.photoURL} alt="" />
                        </div>
                        <Link to="/login"><button onClick={handleLogOut} className="btn btn-outline btn-info">Log Out</button></Link>
                    </div> :
                    <div className="flex gap-4">
                        <Link to="/login"><button className="btn btn-outline btn-info">Log In</button></Link>
                        <Link to="/register"><button className="btn btn-outline btn-info">Register</button></Link>
                    </div>
            }
        </div>
    );
};

export default Navbar;

