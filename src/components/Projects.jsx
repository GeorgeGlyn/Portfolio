import React from 'react';
import project1Image from '../images/profile-pic.jpg'; // Import your image here
import project2Image from '../images/profile-pic.jpg';

const projects = [
    {
        name: 'Project 1',
        image: project1Image,
        year: '2022',
    },
    {
        name: 'Project 2',
        image: project2Image,
        year: '2023',
    },
    // Add more projects as needed
];

function Projects() {
    return (
        <section id="projects" className="mt-16">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-8">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
                                <p className="text-gray-700">Year: {project.year}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
