import React, { useState } from 'react';
import { CheckCircleIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { CurrencyDollarIcon } from '@heroicons/react/24/outline';


const JobCard = () => {
    const [showJobDetail, setShowJobDetail] = useState(false);

    const toggleJobDetail = () => {
        setShowJobDetail(!showJobDetail);
    }
    return(
        <>
         {/* Job Card */}
            <div className="bg-white w-full rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-semibold mb-2">Job Title</h2>
                    <div className="flex gap-2">
                    <CheckCircleIcon className='w-6 text-green-700'/>
                    <p className="text-gray-700 my-2">Company Name</p>
                    </div>
                    <div className="flex gap-2">
                    <CurrencyDollarIcon className='w-6 text-green-700'/>
                    <p className="text-gray-700 my-2">salary</p>
                    </div>
                    <div className="flex gap-2">
                    <MapPinIcon className='w-6 text-green-700'/>
                    <p className="text-gray-700 my-2">address</p>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded" onClick={toggleJobDetail}>
                        Detail Job
                    </button>
                    </div>
                    {showJobDetail && (
                    <div className="mt-4 border-t pt-4">
                        {/* Detail Job Content */}
                        <p>Job detail</p>
                        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                        Apply
                        </button>
                    </div>
                    )}
                </div>
                {/* Repeat similar job cards as needed */}
        </>
    )
}

export default JobCard