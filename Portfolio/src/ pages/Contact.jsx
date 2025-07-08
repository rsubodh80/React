import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = 'service_031dewm';
    const templateID = 'template_08fs4km';
    const userID = 'LT6UwFsvbWMskaTIU';

    emailjs
      .send(serviceID, templateID, form, userID)
      .then(() => {
        toast.success('Message sent successfully! 🎉', {
          position: 'top-center',
          autoClose: 3000,
        });
        setForm({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        toast.error('Failed to send message 😢', {
          position: 'top-center',
          autoClose: 3000,
        });
        console.error('EmailJS Error:', err);
      });
  };

  return (
    <main
      id="contact"
      className="relative px-6 py-20 min-h-screen text-black dark:text-white flex items-center justify-center"
      style={{
        backgroundImage: 'url("/src/assets/subodh.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Subtle dark overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0" />

      <motion.div
        className="relative z-10 w-full max-w-2xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h2 className="text-4xl font-bold text-center mb-8 text-white drop-shadow-lg">
          Get in Touch
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white/20 dark:bg-white/10 backdrop-blur-xl p-10 rounded-3xl border border-white/30 shadow-2xl"
        >
          {/* Name Field */}
          <div className="relative group">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="peer w-full bg-transparent border border-gray-300 dark:border-gray-600 rounded-xl px-4 pt-6 pb-2 text-sm text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            />
            <label className="absolute left-4 top-2 text-xs text-gray-300 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
              Your Name
            </label>
          </div>

          {/* Email Field */}
          <div className="relative group">
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
              className="peer w-full bg-transparent border border-gray-300 dark:border-gray-600 rounded-xl px-4 pt-6 pb-2 text-sm text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            />
            <label className="absolute left-4 top-2 text-xs text-gray-300 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
              Your Email
            </label>
          </div>

          {/* Message Field */}
          <div className="relative group">
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              placeholder="Your Message"
              className="peer w-full bg-transparent border border-gray-300 dark:border-gray-600 rounded-xl px-4 pt-6 pb-2 text-sm text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-indigo-400 transition h-32 resize-none"
            />
            <label className="absolute left-4 top-2 text-xs text-gray-300 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
              Your Message
            </label>
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl transition duration-300"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
      <ToastContainer />
    </main>
  );
}

export default Contact;
