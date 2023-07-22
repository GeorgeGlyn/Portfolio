import React from 'react';

function Hero() {
    return (
        <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-20">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    Hello, I'm George Glyn
                </h2>
                <p className="text-lg md:text-xl mb-8">
                    A passionate software developer experienced in building
                    cross-platform applications and websites with React.js
                </p>
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
        </section>
    );
}

export default Hero;
