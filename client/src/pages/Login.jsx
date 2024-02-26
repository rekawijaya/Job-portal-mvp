import React from "react";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../utility/Auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () =>{

        const navigate = useNavigate();
        const { login } = useAuth();
    
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
    
        const handleSubmit = async () => {
        const result = await login(email, password);
        
        console.log(result, `ini result`);
        console.log(result.success);
            const success = result.success
        if (success) {
            toast.success("Login berhasil!");
            setTimeout(() => {
            navigate("/home");
            }, 1000)
        } else {
            console.error("Login failed:", result.error);
        }
        };
    
        const handleRegister = () => {
        navigate("/register");
        }
        const handleLoginEmployers = () => {
        navigate("/login/employers");
        }


    return(
        <>
        <Navbar/>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h1 className="align-center text-center text-2xl text-cyan-600 font-bold">
                JobPortal
            </h1>
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Login to your account
            </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <div className="space-y-6">
                <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email address
                </label>
                <div className="mt-2">
                    <input
                    onChange={(e) => {setEmail(e.target.value)}}
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                </div>

                <div>
                <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                    </label>
                </div>
                <div className="mt-2">
                    <input
                    onChange={(e) => {setPassword(e.target.value)}}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                </div>

                <div className="flex gap-4">
                <button
                    onClick={handleSubmit}
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Login
                </button>
                <button
                    onClick={handleRegister}
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Sign in
                </button>
                </div>

                <button
                    onClick={handleLoginEmployers}
                    className="flex w-full justify-center rounded-md bg-violet-600 px-3 py-1.5 -mt-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Login or Sig in as employers
                </button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Login