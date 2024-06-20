import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { ThemeContext } from "../Provider/ThemeProvider";


const Navbar = () => {
    const { users, logOut } = useContext(AuthContext);
    // console.log(users);
    const { theme, toggleTheme } = useContext(ThemeContext);

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
        <NavLink to="/" className={({ isActive }) => (isActive ? 'border-2 border-blue-900 rounded-lg p-2' : undefined)}>Home</NavLink>
        <NavLink to="/blogs" className={({ isActive }) => (isActive ? 'border-2 border-blue-900 rounded-lg p-2' : undefined)}>Blogs</NavLink>
        <NavLink to="/all_jobs" className={({ isActive }) => (isActive ? 'border-2 border-blue-900 rounded-lg p-2' : undefined)}>All Jobs</NavLink>

        {
            users ?
                <>
                    <NavLink to="/add_job" className={({ isActive }) => (isActive ? 'border-2 border-blue-900 rounded-lg p-2' : undefined)}>Add Job</NavLink>
                    <NavLink to="/my_jobs" className={({ isActive }) => (isActive ? 'border-2 border-blue-900 rounded-lg p-2' : undefined)}>My Jobs</NavLink>
                    <NavLink to="/applied_jobs" className={({ isActive }) => (isActive ? 'border-2 border-blue-900 rounded-lg p-2' : undefined)}>Applied Jobs</NavLink>
                </> : undefined
        }

    </>
    return (
        <div className="flex justify-between items-center bg-gradient-to-r from-gray-200 to-gray-200 p-4 mb-8">
            <div className="flex gap-3 items-center">
                <img className="w-10" src="https://i.postimg.cc/k5WHwq7j/worldwide-12041684-2.png" alt="" />
                <h2 className="font-bold text-2xl font-serif uppercase">chakri bazar</h2>
            </div>
            <div className="flex gap-3 items-center font-semibold text-gray-600">
                {links}
            </div>
            <div className="flex gap-3 items-center">
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
                        </div>
                }
                <div>
                    {
                        theme ?
                            <div onClick={toggleTheme} className="text-2xl"><MdOutlineDarkMode /></div> :
                            <div onClick={toggleTheme} className="text-2xl"><MdDarkMode /></div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;

