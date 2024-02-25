import React, { useState } from 'react';

const DashboardProfilePage = () => {
    // Data contoh pengguna
    const user = {
        fullName: "John Doe",
        headline: "Software Engineer",
        location: "San Francisco Bay Area",
        connections: 500,
        profileImage: "https://via.placeholder.com/150", // URL gambar profil
        backgroundCover: "https://via.placeholder.com/1200x400", // URL gambar latar belakang
        summary: "Experienced Software Engineer with a demonstrated history of working in the computer software industry. Skilled in JavaScript, React, Node.js, and Python.",
        experience: [
            { id: 1, title: "Software Engineer", company: "ABC Inc.", duration: "2018 - Present" },
            { id: 2, title: "Frontend Developer", company: "XYZ Corp.", duration: "2015 - 2018" }
        ],
        education: [
            { id: 1, degree: "Bachelor of Science", fieldOfStudy: "Computer Science", school: "University of ABC", duration: "2011 - 2015" }
        ]
    };

    // State untuk menyimpan data formulir
    const [formData, setFormData] = useState({
        fullName: user.fullName,
        headline: user.headline,
        location: user.location,
        summary: user.summary,
        cv: null,
        experienceTitle: "", // Judul pengalaman
        experienceCompany: "", // Nama perusahaan
        experienceDuration: "", // Durasi pengalaman
        educationDegree: "", // Gelar pendidikan
        educationFieldOfStudy: "", // Bidang studi
        educationSchool: "", // Nama sekolah
        educationDuration: "" // Durasi pendidikan
    });

    // Fungsi untuk menangani perubahan pada formulir
    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: files ? files[0] : value
        }));
    };

    // Fungsi untuk menangani submit formulir
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Latar belakang profil */}
            <div className="bg-cover bg-center h-64" style={{ backgroundImage: `url(${user.backgroundCover})` }}>
                <div className="container mx-auto h-full flex items-center">
                    <img className="h-32 w-32 rounded-full border-4 border-white mr-6" src={user.profileImage} alt="Profile" />
                    <div>
                        <h1 className="text-4xl font-bold text-white">{user.fullName}</h1>
                        <p className="text-xl text-white">{user.headline}</p>
                        <p className="text-lg text-white">{user.location}</p>
                    </div>
                </div>
            </div>
            {/* Informasi profil */}
            <div className="container mx-auto py-8 px-4">
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="p-6">
                        <h2 className="text-2xl font-semibold mb-4">About</h2>
                        <p className="text-gray-700">{user.summary}</p>
                    </div>
                    <div className="border-t border-gray-300">
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold mb-4">Experience</h2>
                            <ul>
                                {user.experience.map(job => (
                                    <li key={job.id} className="mb-4">
                                        <h3 className="text-xl font-semibold">{job.title}</h3>
                                        <p className="text-gray-700">{job.company}</p>
                                        <p className="text-gray-600">{job.duration}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-300">
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold mb-4">Education</h2>
                            <ul>
                                {user.education.map(edu => (
                                    <li key={edu.id} className="mb-4">
                                        <h3 className="text-xl font-semibold">{edu.degree}</h3>
                                        <p className="text-gray-700">{edu.fieldOfStudy}</p>
                                        <p className="text-gray-600">{edu.school} ({edu.duration})</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* Formulir untuk mengedit profil dan mengunggah file CV */}
            <div className="container mx-auto py-8 px-4">
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="p-6">
                        <h2 className="text-2xl font-semibold mb-4">Edit Profile</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="fullName" className="block text-gray-700 font-medium mb-1">Full Name</label>
                                <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="headline" className="block text-gray-700 font-medium mb-1">Headline</label>
                                <input type="text" id="headline" name="headline" value={formData.headline} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="location" className="block text-gray-700 font-medium mb-1">Location</label>
                                <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="summary" className="block text-gray-700 font-medium mb-1">Summary</label>
                                <textarea id="summary" name="summary" value={formData.summary} onChange={handleChange} rows="3" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"></textarea>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="cv" className="block text-gray-700 font-medium mb-1">Upload CV</label>
                                <input type="file" id="cv" name="cv" onChange={handleChange} className="w-full" />
                            </div>
                            {/* Input untuk pengalaman kerja */}
                            <div className="mb-4">
                                <label htmlFor="experienceTitle" className="block text-gray-700 font-medium mb-1">Experience Title</label>
                                <input type="text" id="experienceTitle" name="experienceTitle" value={formData.experienceTitle} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="experienceCompany" className="block text-gray-700 font-medium mb-1">Company</label>
                                <input type="text" id="experienceCompany" name="experienceCompany" value={formData.experienceCompany} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="experienceDuration" className="block text-gray-700 font-medium mb-1">Duration</label>
                                <input type="text" id="experienceDuration" name="experienceDuration" value={formData.experienceDuration} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                            </div>
                            {/* Input untuk pendidikan */}
                            <div className="mb-4">
                                <label htmlFor="educationDegree" className="block text-gray-700 font-medium mb-1">Degree</label>
                                <input type="text" id="educationDegree" name="educationDegree" value={formData.educationDegree} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="educationFieldOfStudy" className="block text-gray-700 font-medium mb-1">Field of Study</label>
                                <input type="text" id="educationFieldOfStudy" name="educationFieldOfStudy" value={formData.educationFieldOfStudy} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="educationSchool" className="block text-gray-700 font-medium mb-1">School</label>
                                <input type="text" id="educationSchool" name="educationSchool" value={formData.educationSchool} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="educationDuration" className="block text-gray-700 font-medium mb-1">Duration</label>
                                <input type="text" id="educationDuration" name="educationDuration" value={formData.educationDuration} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                            </div>
                            <div className="flex justify-end">
                                <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardProfilePage;
