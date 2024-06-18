import { Helmet } from "react-helmet-async";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import swal from "sweetalert";



const Register = () => {
    const { createUser, signInWithGoogle } = useContext(AuthContext);
    const [regError, setRegError] = useState('');
    const [success, setSuccess] = useState('');
    const [show, setShow] = useState(false);
    const [file, setFile] = useState();
    const navigate = useNavigate();
    const location = useLocation();

    const handleChange = e => {
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');

        setRegError('');
        setSuccess('');

        if (password.length < 6) {
            setRegError('Password should be at least 6 characters!');
            return;
        }
        else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]+/.test(password)) {
            setRegError('Your password should contain at least an upper case, lower case and number!');
            return;
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                setSuccess('Successfully Registered!');
                swal("Successfully Registered!");

                updateProfile(result.user, {
                    displayName: name,
                    photoURL: file
                })
                    .then(() => console.log('profile updated'))
                    .catch(error => console.error(error))

                e.target.reset();
                navigate(location?.state ? location.state : '/');

            })
            .catch(error => {
                console.error(error);
                setRegError(error.message);
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div>
            <Helmet>
                <title>Clay Pot || register</title>
            </Helmet>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">
                <div className=" shrink-0 w-full max-w-sm shadow-xl bg-base-100 my-10">
                    <form onSubmit={handleRegister} className="card-body bg-base-200">
                        <h2 className="border-b-2 py-2 border-[#7e532e] text-lg text-center">REGISTER</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" name="name" className="input rounded-none input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="file" onChange={handleChange} placeholder="Photo URL" name="photo" className="input rounded-none input-bordered py-2" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" name="email" className="input rounded-none input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={show ? 'text' : 'password'} placeholder="******" name="password" className="input rounded-none input-bordered" required />
                            <span className="absolute right-8 top-[54px]" onClick={() => { setShow(!show) }}>{show ? <IoIosEye /> : <IoIosEyeOff />}</span>
                            <div className="flex justify-between items-center gap-2 mt-4">
                                <button className="bg-[#69421f] w-1/2 px-6 py-3 text-white font-semibold text-lg">Register</button>
                                <a href="#" className="label-text-alt link link-hover text-center text-base font-semibold w-1/2">Forgot password?</a>
                            </div>
                        </div>
                        <div>
                            {
                                regError && <p className="text-red-700 text-center">{regError}</p>
                            }
                            {
                                success && <p className="text-green-700 text-center">{success}</p>
                            }
                        </div>
                        <div>
                            <button onClick={handleGoogleSignIn} className="bg-[#d3d3d3] w-full py-2 text-black font-semibold text-xs flex justify-center gap-2 items-center"><span className="text-xl"><FcGoogle /></span>LOG IN WITH GOOGLE</button>
                        </div>
                        <p className="text-xs text-center">Already Have an Account? Please <Link className="text-blue-800 hover:underline" to="/login">Login</Link></p>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Register;