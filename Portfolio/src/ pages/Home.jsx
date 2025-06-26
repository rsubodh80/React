import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import projectImg from '/src/assets/subodh.jpg'; // Replace with your actual image



const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A responsive portfolio to showcase my skills and projects.',
    image: projectImg,
    tech: ['React', 'Tailwind CSS', 'Framer Motion'],
    liveLink: 'https://your-portfolio-demo.com',
    codeLink: 'https://github.com/rsubodh80',
  },
  {
    title: 'Todo App',
    description: 'A clean and minimal app to manage daily tasks.',
    image: projectImg,
    tech: ['React', 'LocalStorage'],
    liveLink: 'https://todo-app-demo.com',
    codeLink: 'https://github.com/rsubodh80',
  },
];

const ProjectsSection = () => (
  <motion.section
    className="max-w-6xl mx-auto px-4"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    variants={fadeInUp}
    transition={{ duration: 0.8, delay: 2.0 }}
  >
    <h2 className="text-2xl font-semibold mb-6 text-center">Projects</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      {projects.map((project, idx) => (
        <div key={idx} className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
          <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
          <div className="p-5 space-y-3">
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, index) => (
                <span key={index} className="text-xs bg-indigo-100 dark:bg-indigo-800 text-indigo-600 dark:text-white px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Live Demo
              </a>
              <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:underline">
                Source Code
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </motion.section>
);

export default function Home() {
  return (
    <>
      <Hero />

      <div className="space-y-20">
        {/* Hero Text */}
        <motion.section
          className="text-center py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h1 className="text-4xl font-bold">Hi, I’m Subodh</h1>
          <p className="mt-4 text-lg">A Frontend Developer who loves building modern UIs.</p>
        </motion.section>

        {/* About */}
        <motion.section
          className="max-w-3xl mx-auto px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p>I’m passionate about building beautiful, responsive, and accessible web apps.</p>
        </motion.section>

        {/* Skills */}
        <motion.section
          className="max-w-3xl mx-auto px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <ul className="flex flex-wrap gap-2 justify-center">
            <li className="after:content-['★'] after:mx-2 last:after:content-['']">HTML</li>
            <li className="after:content-['★'] after:mx-2 last:after:content-['']">CSS / Tailwind</li>
            <li className="after:content-['★'] after:mx-2 last:after:content-['']">JavaScript</li>
            <li className="after:content-['★'] after:mx-2 last:after:content-['']">React</li>
            <li className="after:content-['★'] after:mx-2 last:after:content-['']">Git / GitHub</li>
            <li>Vite</li>
          </ul>
        </motion.section>

        {/* ✅ Projects */}
        <ProjectsSection />
      </div>
    </>
  );
}
