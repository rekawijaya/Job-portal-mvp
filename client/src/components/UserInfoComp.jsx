import React, { useState } from 'react';

const DashboardProfilePage = () => {
    // Data contoh pengguna
    const user = {
        fullName: "John Doe",
        headline: "Software Engineer",
        location: "San Francisco Bay Area",
        connections: 500,
        profileImage: "https://cdn3.iconfinder.com/data/icons/web-design-and-development-2-6/512/87-1024.png", // URL gambar profil
        backgroundCover: "https://marketplace.canva.com/EAENvpM8lg0/1/0/1600w/canva-clean-work-place-linkedin-banner-ENugiXwwVkE.jpg", // URL gambar latar belakang
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
        experienceDuration1: "", // Durasi pengalaman
        experienceDuration: "", // Durasi pengalaman
        educationDegree: "", // Gelar pendidikan
        educationFieldOfStudy: "", // Bidang studi
        educationSchool: "", // Nama sekolah
        educationDuration1: "" ,// Durasi pendidikan
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
                    <input className='absolute w-32 h-32 rounded-full opacity-0 bg-slate-400' type="file" />
                    <div>
                        <h1 className="text-4xl font-bold text-indigo-600">{user.fullName}</h1>
                        <p className="text-xl text-indigo-600">{user.headline}</p>
                        <p className="text-lg text-indigo-600">{user.location}</p>
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
                                <label htmlFor="headline" className="block text-gray-700 font-medium mb-1">Contact</label>
                                <input type="text" id="headline" name="headline" value={formData.headline} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="location" className="block text-gray-700 font-medium mb-1">Location</label>
                                <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="birthday" className="block text-gray-700 font-medium mb-1">Birthday</label>
                                <input type='date' id="birthday" name="birthday" value={formData.summary} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"></input>
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
                            <div className="mb-4 flex gap-4">
                                <label htmlFor="experienceDuration1" className="block text-gray-700 font-medium mb-1">Start Date</label>
                                <input type="date" id="experienceDuration1" name="experienceDuration1" value={formData.experienceDuration1} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />

                                <label htmlFor="experienceDuration" className="block text-gray-700 font-medium mb-1">End Date</label>
                                <input type="date" id="experienceDuration" name="experienceDuration" value={formData.experienceDuration} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
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
                            <div className="mb-4 flex gap-4">
                                <label htmlFor="educationDuration1" className="block text-gray-700 font-medium mb-1">Satart Date</label>
                                <input type="date" id="educationDuration1" name="educationDuration1" value={formData.educationDuration1} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />

                                <label htmlFor="educationDuration" className="block text-gray-700 font-medium mb-1">End Date</label>
                                <input type="date" id="educationDuration" name="educationDuration" value={formData.educationDuration} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
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
