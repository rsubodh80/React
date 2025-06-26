import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

function Header() {
  const { darkMode, setDarkMode } = useTheme();
  const location = useLocation();

  return (
    <header className="p-4 shadow-md dark:shadow-white dark:bg-purple-900 bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link to="/" className="hover:underline">Subodh's Portfolio</Link>
        </h1>
        <nav className="flex items-center space-x-4">
          <Link
            to="/"
            className={`hover:underline ${location.pathname === '/' ? 'font-semibold text-blue-500' : ''}`}
          >
            Home
          </Link>
           <Link
         to="/about"
          className={`hover:underline ${location.pathname === '/about' ? 'font-semibold text-blue-500' : ''}`}
           >
            About
          </Link>

          <Link
            to="/contact"
            className={`hover:underline ${location.pathname === '/contact' ? 'font-semibold text-blue-500' : ''}`}
          >
            Contact
          </Link>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 p-2 border rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? '☀️ Light' : '🌙 Dark'}
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
