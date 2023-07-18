import React from 'react';
import profilePic from '../images/profile-pic.jpg'; // Import your image here

function About() {
    return (
        <section id="about" className="mt-16">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-4">About Me</h2>
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2">
                        <img src={profilePic} alt="Profile" className="w-full h-auto rounded-lg mb-6 md:mb-0" />
                    </div>
                    <div className="md:w-1/2 md:pl-8">
                        <p className="text-gray-700">
                            I am a software developer with a strong focus on developing cross-platform applications and websites using
                            React.js. I have a passion for creating clean and efficient code and constantly expanding my knowledge in the
                            field of web development.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
