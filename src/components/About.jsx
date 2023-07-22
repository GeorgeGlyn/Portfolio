import React from 'react';
import profilePic from '../images/profile-pic.jpg'; // Import your image here

function About() {
    return (
        <section id="about" className="mt-16 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-20">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold mb-6 text-center">About Me</h2>
                <div className="flex flex-col md:flex-row justify-center items-center">
                    <div className="md:w-1/3">
                        <img
                            src={profilePic}
                            alt="Profile"
                            className="w-full h-auto rounded-lg shadow-lg mb-6 md:mb-0"
                        />
                    </div>
                    <div className="md:w-2/3 md:pl-8">
                        <p className="text-lg leading-relaxed text-center md:text-left">
                            I am a passionate software developer with a strong focus on
                            building cross-platform applications and websites using React.js.
                            My expertise lies in creating clean and efficient code, and I am
                            constantly expanding my knowledge in the field of web
                            development.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
