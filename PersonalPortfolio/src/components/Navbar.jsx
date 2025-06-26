import { useState } from 'react';

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(!isDark);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <h1 className="text-lg sm:text-xl font-bold">Subodh's Portfolio</h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#hero" className="hover:text-indigo-400">Home</a>
          <a href="#about" className="hover:text-indigo-400">About</a>
          <a href="#skills" className="hover:text-indigo-400">Skills</a>
          <a href="#projects" className="hover:text-indigo-400">Projects</a>
          <a href="#contact" className="hover:text-indigo-400">Contact</a>

          {/* Resume Download Button */}
          <a
            href="/resume.pdf"
            download="Subodh_Resume.pdf"
            className="hover:text-indigo-400 border border-indigo-400 px-3 py-1 rounded text-sm transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>

          <button
            onClick={toggleTheme}
            className="text-sm bg-indigo-500 px-3 py-1 rounded hover:bg-indigo-600"
          >
            {isDark ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 bg-gray-800 text-center">
          <a href="#hero" className="block hover:text-indigo-400">Home</a>
          <a href="#about" className="block hover:text-indigo-400">About</a>
          <a href="#skills" className="block hover:text-indigo-400">Skills</a>
          <a href="#projects" className="block hover:text-indigo-400">Projects</a>
          <a href="#contact" className="block hover:text-indigo-400">Contact</a>

          {/* Resume Download Button - Mobile */}
          <a
            href="/resume.pdf"
            download="Subodh_Resume.pdf"
            className="block hover:text-indigo-400 border border-indigo-400 px-3 py-1 rounded text-sm transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>

          <button
            onClick={toggleTheme}
            className="text-sm bg-indigo-500 px-3 py-1 rounded hover:bg-indigo-600"
          >
            {isDark ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
