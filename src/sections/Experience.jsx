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
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Experience & Achievements</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">My professional journey and accomplishments</p>
        </motion.div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-10 text-center">Experience</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-orange-200 transition-all duration-500 shadow-lg hover:shadow-2xl"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <h4 className="text-2xl font-bold text-gray-900">{exp.title}</h4>
                  <span className="text-orange-600 font-semibold text-lg">{exp.company} • {exp.period}</span>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-10 text-center">Achievements</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-orange-200 transition-all duration-500 shadow-lg hover:shadow-2xl"
              >
                <div className="text-6xl mb-6">{achievement.icon}</div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">{achievement.title}</h4>
                <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;