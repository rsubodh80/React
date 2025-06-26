function Skills() {
  const skills = ['React', 'Redux', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Git'];

  return (
    <section className="py-16 px-8 bg-gray-800">
      <h2 className="text-3xl font-semibold mb-6 text-center">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <span key={skill} className="bg-gray-700 px-4 py-2 rounded-lg text-white shadow">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
