// ProjectDetails.jsx
import React from 'react';

const ProjectDetails = ({ project, onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-md overflow-y-auto">
                <div className="max-h-screen sm:max-h-full"> {/* Added max height for small screens */}
                    <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-56 object-contain mb-6 rounded-md"
                    />
                    <h3 className="text-xl md:text-2xl font-semibold mb-4">{project.name}</h3>
                    <div className="mb-6">
                        <h3 className="text-sm font-semibold mb-2">Description:</h3>
                        <p className="text-gray-700">{project.description}</p>
                    </div>
                    <div className="mb-6">
                        <h3 className="text-sm font-semibold mb-2">My Contribution:</h3>
                        <p className="text-gray-700">{project.mycontribution}</p>
                    </div>
                    {(project.android || project.ios || project.web) && (
                        <div className="mb-6">
                            <h3 className="text-sm font-semibold mb-2">Links:</h3>
                            <div className="flex items-center space-x-2">
                                {project.android && (
                                    <a
                                        href={project.android}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                                    >
                                        Android
                                    </a>
                                )}
                                {project.ios && (
                                    <a
                                        href={project.ios}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                                    >
                                        iOS
                                    </a>
                                )}
                                {project.web && (
                                    <a
                                        href={project.web}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                                    >
                                        Web
                                    </a>
                                )}
                            </div>
                        </div>
                    )}
                </div>
                <button
                    className="absolute top-0 right-0 mt-4 mr-4 text-gray-500 hover:text-gray-700 focus:outline-none"
                    onClick={onClose}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default ProjectDetails;
