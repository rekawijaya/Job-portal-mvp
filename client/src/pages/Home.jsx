    import React, { useState } from 'react';
    
    import Navbar from '../components/Navbar';
    

    const Home = () => {
    
    return (
        <>
        <Navbar/>
        <div className="container mx-auto py-12">
            <div className="w-full gap-4 flex">
                <div className="w-1/2">
                <img src="https://www.creative.onl/payrollindex/wp-content/uploads/2022/04/hcm-software.jpg" alt="" />
                </div>
                <div className="w-1/2">
                <h1 className="text-4xl font-bold text-center mb-3 mt-10">Welcome to Our Job Portal</h1>
                <h2 className="text-4xl font-bold text-center">Find your Deram Job 🚀</h2>
                </div>
            </div>
        </div>
        </>
    )
    }

    export default Home
