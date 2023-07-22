import React, { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement your logic to send the email using the formData
        console.log(formData);
        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };

    return (
        <section id="contact" className="mt-16 bg-gradient-to-r from-blue-400 to-blue-600 text-white py-20">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold mb-8 text-center">Contact Me</h2>
                <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-200 font-bold mb-2">
                            Name:
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full bg-gray-200 text-gray-800 rounded-md p-3 focus:outline-none focus:ring focus:border-blue-500"
                            required
                            autoComplete="off"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-200 font-bold mb-2">
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-gray-200 text-gray-800 rounded-md p-3 focus:outline-none focus:ring focus:border-blue-500"
                            required
                            autoComplete="off"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-200 font-bold mb-2">
                            Message:
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full bg-gray-200 text-gray-800 rounded-md p-3 focus:outline-none focus:ring focus:border-blue-500"
                            rows="5"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-white text-blue-500 py-2 px-4 rounded-md hover:bg-blue-200 transition duration-300"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
