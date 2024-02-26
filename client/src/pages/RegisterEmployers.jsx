import React from "react";
import Navbar from "../components/Navbar";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



const RegisterEmployers = () =>{

    const [firstName, setFirstname] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const handleSubmit = () => {
        const inputData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        }

        userRegister(inputData)
    }
    const userRegister = async function(inputData) {
        try {
            const userRegisterFromServer = await axios({
                method: "POST",
                url: `http://localhost:80/api/users/register`,
                data: inputData
            })
            const success = userRegisterFromServer.data.success;
            if (success) {
                navigate("/login")
            }
        } catch (error) {
            console.log(error);
        }
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
                Sign in to your Employers account
            </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6">
                <div>
                <label htmlFor="CN" className="block text-sm font-medium leading-6 text-gray-900">
                    Company Name
                </label>
                <div className="mt-2">
                    <input
                    onChange={(e) => {setFirstname(e.target.value)}}
                    id="CN"
                    name="firstname"
                    type="text"
                    autoComplete="name"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                </div>
                <div>
                <label htmlFor="CD" className="block text-sm font-medium leading-6 text-gray-900">
                Company Description
                </label>
                <div className="mt-2">
                    <input
                    onChange={(e) => {setFirstname(e.target.value)}}
                    id="CD"
                    name="firstname"
                    type="text"
                    autoComplete="name"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                </div>
                <div>
                <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">
                    Address
                </label>
                <div className="mt-2">
                    <input
                    onChange={(e) => {setFirstname(e.target.value)}}
                    id="address"
                    name="firstname"
                    type="text"
                    autoComplete="name"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                </div>

                <div>
                <label htmlFor="tlp" className="block text-sm font-medium leading-6 text-gray-900">
                    No Telphone
                </label>
                <div className="mt-2">
                    <input
                    onChange={(e) => {setLastName(e.target.value)}}
                    id="tlp"
                    name="lastName"
                    type="text"
                    autoComplete="name"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                </div>

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

                <div>
                <button
                    onClick={handleSubmit}
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Sign in as Employers
                </button>
                </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default RegisterEmployers