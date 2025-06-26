// src/components/ResumeDownloadButton.jsx
import React from 'react';

function ResumeDownloadButton() {
  return (
    <a
      href="/resume.pdf"
      download="My_Resume.pdf"
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      target="_blank"
      rel="noopener noreferrer"
    >
      Download Resume
    </a>
  );
}

export default ResumeDownloadButton;
