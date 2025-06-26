import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaUserAlt } from 'react-icons/fa';

function About() {
  return (
    <main
      id="about"
      className="relative px-6 py-16 bg-gray-100 dark:bg-gray-900 text-black dark:text-white"
      style={{
        backgroundImage: 'url("/src/assets/subodh.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay for dark mode readability */}
      <div className="absolute inset-0 bg-white/80 dark:bg-black/70 backdrop-blur-sm z-0"></div>

      <motion.div
        className="relative z-10 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>

        <div className="space-y-5 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <div className="flex items-start gap-3">
            <FaUserAlt className="text-indigo-500 text-xl mt-1" />
            <p className="text-gray-700 dark:text-gray-300">
              Hi, I’m <strong>Subodh</strong> — a frontend developer who loves building beautiful and responsive user interfaces. I'm all about clean code, smooth interactions, and modern tools.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <FaLaptopCode className="text-indigo-500 text-xl mt-1" />
            <p className="text-gray-700 dark:text-gray-300">
              I primarily work with <strong>React</strong>, <strong>Tailwind CSS</strong>, and <strong>JavaScript</strong>, but I also enjoy exploring modern tools like <strong>Vite</strong> and managing code with <strong>Git</strong> and <strong>GitHub</strong>.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <FaCode className="text-indigo-500 text-xl mt-1" />
            <p className="text-gray-700 dark:text-gray-300">
              I'm passionate about crafting pixel-perfect designs and turning them into clean, accessible web interfaces. I love learning, iterating, and staying up-to-date with frontend trends.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <FaUserAlt className="text-indigo-500 text-xl mt-1" />
            <p className="text-gray-700 dark:text-gray-300">
              Outside of coding, I enjoy exploring UI/UX design, watching tech videos, and sometimes just relaxing with sci-fi movies or podcasts.
            </p>
          </div>
        </div>
      </motion.div>
    </main>
  );
}

export default About;
