// App.js
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';
import Hero from './components/Hero';

function App() {
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
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 min-h-screen text-gray-100">
     
      <Header />

      <motion.main
        className="container mx-auto p-4 mt-16" // Added mt-16 for padding
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.section
          id="hero"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Hero />
        </motion.section>

        <motion.section
          id="about"
          className="mt-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <About />
        </motion.section>

        <motion.section
          id="projects"
          className="mt-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="container mx-auto">
            <Projects />
          </div>
        </motion.section>

        <motion.section
          id="contact"
          className="mt-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Contact />
        </motion.section>
      </motion.main>
      <Footer />
    </div>
  );
}

export default App;
