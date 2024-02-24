    import React, { useState } from 'react';
    
    import Navbar from '../components/Navbar';
    

    const Home = () => {
    
    return (
        <>
        <Navbar/>
        <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Welcome to Our Job Portal</h1>
            <div className="w-full">
                <img src="https://www.krona.co.id/wp-content/uploads/2022/08/Krona-Blog-Header-13-1.png" alt="" />
            </div>
        </div>
        </>
    )
    }

    export default Home;
