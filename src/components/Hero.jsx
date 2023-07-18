import React from 'react';

function Hero() {
    return (
        <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-20">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-4">Hello, I'm John Doe</h2>
                <p className="text-lg mb-8">
                    A passionate software developer experienced in building cross-platform applications and websites with React.js
                </p>
                <a
                    href="#contact"
                    className="bg-white text-pink-600 py-2 px-6 rounded-full font-semibold hover:bg-gray-200 hover:text-pink-600 transition duration-300"
                >
                    Get In Touch
                </a>
            </div>
        </section>
    );
}

export default Hero;
