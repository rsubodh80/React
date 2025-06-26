// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';

import { Link } from 'react-router-dom';
import myPhoto from '/src/assets/subodh.jpg';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16 px-6">
      <motion.div
        className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.6 }}
      >
        {/* Text Section */}
        <div className="text-center md:text-left flex-1 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">Hi, I’m Subodh 👋</h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
            Frontend Developer who loves building modern & responsive web experiences.
          </p>
          <a href=" /contact">
            <button 
             
            className="mt-4 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-md transition">
              Hire Me
            </button>
          </a>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center">
          <img
            src={myPhoto}
            alt="Subodh"
            className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-indigo-500 shadow-lg"
          />
        </div>
      </motion.div>
    </section>
  );
}
