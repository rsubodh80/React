// src/pages/ContactPage.jsx
import { motion } from "framer-motion";

function ContactPage() {
  return (
    <motion.section
      className="min-h-screen py-16 px-8 bg-gray-800 text-center text-white"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-semibold mb-4">Contact</h2>
      <p className="text-gray-300">Email: yourname@example.com</p>
      <div className="mt-4 flex justify-center gap-4">
        <a href="https://github.com/yourname" target="_blank" rel="noreferrer" className="text-indigo-400">GitHub</a>
        <a href="https://linkedin.com/in/yourname" target="_blank" rel="noreferrer" className="text-indigo-400">LinkedIn</a>
      </div>
    </motion.section>
  );
}

export default ContactPage;
