import { motion } from 'framer-motion';

function Experience() {
  const experiences = [
    {
      title: 'Software Engineer Intern',
      company: 'Legabyte Innovations',
      period: 'Present',
      description: 'Developing full-stack web applications using MERN stack and PostgreSQL. Working on scalable solutions and collaborating with cross-functional teams.',
      type: 'experience',
      gradient: 'from-blue-500 to-purple-500'
    }
  ];

  const achievements = [
    {
      title: 'Tata Imagination Challenge',
      description: 'Participated in the prestigious Tata Imagination Challenge, showcasing innovative problem-solving skills and creative thinking.',
      type: 'achievement',
      gradient: 'from-purple-500 to-pink-500',
      icon: '🏆'
    },
    {
      title: 'Coding Competition',
      description: 'Achieved top rankings in various coding competitions, demonstrating strong programming fundamentals and algorithmic skills.',
      type: 'achievement',
      gradient: 'from-green-500 to-blue-500',
      icon: '💻'
    }
  ];

  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-black to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Experience & Achievements</h2>
          <p className="text-xl text-gray-300">My professional journey and accomplishments</p>
        </motion.div>

        <div className="mb-20">
          <h3 className="text-4xl font-bold text-white mb-12 text-center">Experience</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`bg-gradient-to-r ${exp.gradient} p-8 rounded-2xl shadow-xl`}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <h4 className="text-2xl font-bold text-white">{exp.title}</h4>
                  <span className="text-white/80 font-medium text-lg">{exp.company} • {exp.period}</span>
                </div>
                <p className="text-white/90 leading-relaxed text-lg">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-white mb-12 text-center">Achievements</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`bg-gradient-to-br ${achievement.gradient} p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500`}
              >
                <div className="text-6xl mb-6">{achievement.icon}</div>
                <h4 className="text-2xl font-bold text-white mb-4">{achievement.title}</h4>
                <p className="text-white/90 leading-relaxed">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;