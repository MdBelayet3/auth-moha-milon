import React, { useState } from 'react';
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

const Register = () => {

    const [showPassword, setShowPassword] = useState(false);
    
    // function to handle show password icon 
    const handleShowPassword = () =>{
        setShowPassword(!showPassword);
    }

    // function to handle register form submit
    const handleRegister = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
    }

    return (
        <div className="hero mt-12">
            <div className="hero-content flex-col">
                <h1 className="text-5xl font-bold">Register now!</h1>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className='relative'>
                                <input type={showPassword ? "text" : "password"} name='password' placeholder="password" className=" w-full py-2 px-3 border rounded-md input-bordered" required />
                                <div onClick={handleShowPassword} className='absolute top-[25%] right-3 cursor-pointer text-2xl'>
                                    {showPassword ? <IoIosEyeOff /> : <IoIosEye></IoIosEye>}
                                </div>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-secondary">Register</button>
                        </div>
                    </form>
                    <p className='ml-3 mb-3'>Have an account? Go <a className='btn btn-primary' href="/login">Login</a></p>
                </div>
            </div>
        </div>
    );
};

export default Register;