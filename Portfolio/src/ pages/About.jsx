import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaUserAlt, FaRegSmile } from 'react-icons/fa';

function About() {
  return (
    <main
      id="about"
      className="relative px-6 py-16 text-black dark:text-white min-h-screen"
      style={{
        backgroundImage: 'url("/src/assets/subodh.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/80 dark:bg-black/70 backdrop-blur-sm z-0"></div>

      <motion.div
        className="relative z-10 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>

        <div className="flex flex-col sm:flex-row items-center gap-8 mb-8">
          <img
            src="/src/assets/profile.jpg"
            alt="Subodh"
            className="w-32 h-32 rounded-full border-4 border-indigo-500 shadow-lg object-cover"
          />
          <p className="text-center sm:text-left text-gray-800 dark:text-gray-200">
            I'm <strong>Subodh</strong>, a passionate <strong>frontend developer</strong> who loves building modern, responsive UIs with clean and accessible code.
          </p>
        </div>

        <div className="space-y-6 bg-white/30 dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-2xl backdrop-blur-md">
          <div className="flex items-start gap-3">
            <FaLaptopCode className="text-indigo-500 text-xl mt-1" />
            <p className="text-gray-700 dark:text-gray-300">
              I build projects with <strong>React</strong>, <strong>Tailwind CSS</strong>, and <strong>JavaScript</strong>. I also enjoy tools like <strong>Vite</strong>, and version control with <strong>Git</strong>.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <FaCode className="text-indigo-500 text-xl mt-1" />
            <p className="text-gray-700 dark:text-gray-300">
              I'm passionate about creating pixel-perfect interfaces, with a strong eye for UI/UX and accessibility best practices.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <FaRegSmile className="text-indigo-500 text-xl mt-1" />
            <p className="text-gray-700 dark:text-gray-300">
              Outside of coding, you'll find me watching tech content, exploring design tools, or relaxing with sci-fi movies and podcasts.
            </p>
          </div>
        </div>
      </motion.div>
    </main>
  );
}

export default About;
