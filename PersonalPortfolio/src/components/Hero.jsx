import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.section
      className="h-screen flex items-center justify-center flex-col text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h1 className="text-5xl font-bold">Hi, I'm Subodh Sah</h1>
      <p className="mt-4 text-xl text-gray-400">Full Stack Developer | React | Node | MongoDB</p>
    </motion.section>
  );
}

export default Hero;
