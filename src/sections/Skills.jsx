import { motion } from 'framer-motion';

function Skills() {
  const skillsData = [
    {
      category: 'Frontend',
      skills: ['React', 'Tailwind CSS', 'JavaScript', 'HTML', 'CSS']
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express.js', 'REST APIs']
    },
    {
      category: 'Databases',
      skills: ['PostgreSQL', 'MongoDB']
    },
    {
      category: 'Tools',
      skills: ['JWT', 'Git', 'VS Code']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Skills</h2>
          <p className="text-lg text-gray-300">Technologies and tools I work with</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-colors duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-4">{skillGroup.category}</h3>
              <div className="space-y-2">
                {skillGroup.skills.map((skill) => (
                  <div key={skill} className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;