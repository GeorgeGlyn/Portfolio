// About.jsx
import React from 'react';
import profilePic from '../images/profile-pic.jpg'; // Import your image here

function About() {
    return (
        <section id="about" className="mt-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-20">
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
                            Hey there! I'm George Glyn, a passionate software developer with expertise in building cross-platform applications. My journey in software development began with my love for technology and its potential to transform lives. I started coding during my college days and quickly fell in love with the art of creating applications and websites.

                            I specialize in Android and iOS development using Flutter for creating seamless and interactive mobile experiences. My hands-on experience with native Android apps using Android Studio has honed my skills in developing performant and feature-rich applications.

                            Additionally, I enjoy crafting web experiences using React.js. My focus on creating clean and efficient code ensures that the websites I build are not only visually appealing but also perform optimally across different devices and browsers.

                            I thrive in collaborative environments where I can contribute my skills and learn from others. I'm always eager to explore new technologies and stay up-to-date with the latest industry trends.

                            When I'm not coding, you can find me exploring the outdoors, reading tech blogs, or enjoying a cup of coffee with friends. If you have an exciting project in mind or just want to connect, feel free to drop me a message through the contact form below. I'd love to hear from you!

                            Let's build amazing things together!
                        </p>
                        <div className="text-center mt-6"> {/* Container for centered elements */}
                            <a
                                href="#contact"
                                className="bg-white text-pink-600 py-3 px-8 md:py-4 md:px-10 rounded-full font-semibold hover:bg-gray-200 hover:text-pink-600 transition duration-300 inline-block"
                            >
                                Get In Touch
                            </a>
                            {/* Add a decorative element below the button */}
                            <div className="mt-6">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 mx-auto text-pink-600 animate-bounce"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default About;
