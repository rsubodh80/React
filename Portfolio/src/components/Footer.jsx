import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa6';
import { motion } from 'framer-motion';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-tr from-indigo-900 via-purple-800 to-fuchsia-700 text-white px-6 pt-10 pb-6 relative shadow-inner"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 text-sm">

        {/* Profile & Hire Me */}
        <div className="text-center md:text-left">
          <img
            src="/src/assets/subodh.jpg" // ✅ Replace with your image
            alt="Subodh"
            className="w-24 h-24 rounded-full mx-auto md:mx-0 border-4 border-white mb-3 shadow-lg"
          />
          <Link
            to="/contact"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-full shadow-md transition"
          >
            Hire Me
          </Link>
        </div>

        {/* About */}
        <div>
          <h3 className="text-xl font-bold mb-3">About</h3>
          <p className="text-gray-200">Frontend developer crafting modern UIs using React, Tailwind & Vite. Always open to exciting opportunities!</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-3">Quick Links</h3>
          <ul className="space-y-1 text-gray-300">
            <li><Link to="/" className="hover:text-yellow-300">Home</Link></li>
            <li><Link to="/about" className="hover:text-yellow-300">About</Link></li>
            <li><Link to="/projects" className="hover:text-yellow-300">Projects</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-300">Contact</Link></li>
          </ul>
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-xl font-bold mb-3">Skills</h3>
          <ul className="space-y-1 text-gray-300">
            <li>React / Vite</li>
            <li>Tailwind CSS</li>
            <li>JavaScript</li>
            <li>Git & GitHub</li>
            <li>node.js</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-xl font-bold mb-3">Connect</h3>
          <ul className="space-y-2 text-gray-200">
            <li className="flex items-center gap-2 hover:text-yellow-300 transition">
              <FaEnvelope className="text-lg" />
              <a href="mailto:subodh@example.com">subodh2073@gmail.com</a>
            </li>
            <li className="flex items-center gap-2 hover:text-yellow-300 transition">
              <FaGithub className="text-lg" />
              <a href="https://github.com/rsubodh80" target="_blank" rel="noreferrer">GitHub</a>
            </li>
            <li className="flex items-center gap-2 hover:text-yellow-300 transition">
              <FaLinkedin className="text-lg" />
              <a href="https://www.linkedin.com/in/subodh-raj-sah-75a164308/" target="_blank" rel="noreferrer">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-purple-600 mt-10 mb-4 opacity-30" />

      {/* Bottom Row */}
      <div className="text-xs text-center text-purple-200">
        © {new Date().getFullYear()} Subodh. All rights reserved.
      </div>

      {/* Scroll To Top */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-6 right-6 bg-yellow-400 hover:bg-yellow-500 text-black p-2 rounded-full shadow-lg transition"
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
    </motion.footer>
  );
}
