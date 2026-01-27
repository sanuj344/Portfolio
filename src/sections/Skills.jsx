import { motion } from 'framer-motion';

function Skills() {
  const skillsData = [
    {
      category: 'Frontend',
      skills: ['React', 'Tailwind CSS', 'JavaScript', 'HTML', 'CSS'],
      color: 'from-blue-500 to-purple-500',
      icon: '💻'
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express.js', 'REST APIs'],
      color: 'from-green-500 to-blue-500',
      icon: '⚙️'
    },
    {
      category: 'Databases',
      skills: ['PostgreSQL', 'MongoDB'],
      color: 'from-purple-500 to-pink-500',
      icon: '🗃️'
    },
    {
      category: 'Tools',
      skills: ['JWT', 'Git', 'VS Code'],
      color: 'from-pink-500 to-red-500',
      icon: '🛠️'
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-black to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Skills</h2>
          <p className="text-xl text-gray-300">Technologies and tools I work with</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 shadow-xl hover:shadow-2xl"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${skillGroup.color} flex items-center justify-center text-3xl mb-6 shadow-lg`}>
                {skillGroup.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-6">{skillGroup.category}</h3>
              <div className="space-y-3">
                {skillGroup.skills.map((skill) => (
                  <div key={skill} className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-200 px-4 py-2 rounded-full text-sm font-medium border border-purple-500/20">
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