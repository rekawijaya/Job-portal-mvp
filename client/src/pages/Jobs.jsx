import React, { useState } from 'react';
import Jobcard from "../components/JobCard"
import Navbar from '../components/Navbar';


const Home = () => {

return (
    <>
    <Navbar/>
    <div className="bg-gray-100">
    <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold text-center mb-6">Welcome to Our Job Portal</h1>
        <p className="text-lg text-gray-700 text-center mb-12">Find your dream job here!</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Jobcard/>
        </div>
    </div>
    </div>
    </>
)
}

export default Home;
