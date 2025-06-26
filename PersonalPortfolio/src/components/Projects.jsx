function Projects() {
  const projects = [
    { title: 'E-commerce App', description: 'React + MongoDB', github: 'https://github.com/yourname/ecommerce' },
    { title: 'Todo App', description: 'Redux + LocalStorage', github: 'https://github.com/yourname/todo' },
  ];

  return (
    <section className="py-16 px-8">
      <h2 className="text-3xl font-semibold mb-6 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="text-gray-400 mt-2">{project.description}</p>
            <a
              href={project.github}
              target="_blank"
              className="inline-block mt-4 text-indigo-400 hover:underline"
              rel="noreferrer"
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
