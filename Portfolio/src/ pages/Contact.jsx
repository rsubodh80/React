import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { motion } from 'framer-motion';
import 'react-toastify/dist/ReactToastify.css';
import { FaUser, FaEnvelope, FaComment } from 'react-icons/fa';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Message sent successfully! 🎉', {
      position: 'top-center',
      autoClose: 3000,
    });
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <main
      id="contact"
      className="relative px-6 py-16 min-h-screen text-black dark:text-white"
      style={{
        backgroundImage: 'url("/src/assets/subodh.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay to darken/blurr the background for readability */}
      <div className="absolute inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-sm z-0"></div>

      <motion.div
        className="relative z-10 max-w-2xl mx-auto"
        initial={{ opacity: 0, scale: 0.95, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <h2 className="text-4xl font-bold mb-8 text-center">Get in Touch</h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 bg-white/30 dark:bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl"
        >
          {/* Name Field */}
          <div className="flex items-center border rounded px-3 py-2 bg-gray-50 dark:bg-gray-700 focus-within:ring-2 focus-within:ring-indigo-500 transition">
            <FaUser className="text-indigo-400 mr-2" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full bg-transparent outline-none text-black dark:text-white"
              required
            />
          </div>

          {/* Email Field */}
          <div className="flex items-center border rounded px-3 py-2 bg-gray-50 dark:bg-gray-700 focus-within:ring-2 focus-within:ring-indigo-500 transition">
            <FaEnvelope className="text-indigo-400 mr-2" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full bg-transparent outline-none text-black dark:text-white"
              required
            />
          </div>

          {/* Message Field */}
          <div className="flex items-start border rounded px-3 py-2 bg-gray-50 dark:bg-gray-700 focus-within:ring-2 focus-within:ring-indigo-500 transition">
            <FaComment className="text-indigo-400 mr-2 mt-1" />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className="w-full bg-transparent outline-none text-black dark:text-white h-32 resize-none"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 active:scale-95 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400 text-white font-semibold py-3 px-6 rounded-xl transition duration-200"
          >
            Send Message
          </button>
        </form>
      </motion.div>
      <ToastContainer />
    </main>
  );
}

export default Contact;
