import { motion } from 'framer-motion';

function Experience() {
  const experiences = [
    {
      title: 'Software Engineer Intern',
      company: 'Legabyte Innovations',
      period: 'Present',
      description: 'Developing full-stack web applications using MERN stack and PostgreSQL. Working on scalable solutions and collaborating with cross-functional teams.',
      type: 'experience'
    }
  ];

  const achievements = [
    {
      title: 'Tata Imagination Challenge',
      description: 'Participated in the prestigious Tata Imagination Challenge, showcasing innovative problem-solving skills and creative thinking.',
      type: 'achievement'
    },
    {
      title: 'Coding Competition',
      description: 'Achieved top rankings in various coding competitions, demonstrating strong programming fundamentals and algorithmic skills.',
      type: 'achievement'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Experience & Achievements</h2>
          <p className="text-lg text-gray-300">My professional journey and accomplishments</p>
        </motion.div>

        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-white mb-8 text-center">Experience</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h4 className="text-xl font-semibold text-white">{exp.title}</h4>
                  <span className="text-blue-300 font-medium">{exp.company} • {exp.period}</span>
                </div>
                <p className="text-gray-300">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-semibold text-white mb-8 text-center">Achievements</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
              >
                <h4 className="text-xl font-semibold text-white mb-4">{achievement.title}</h4>
                <p className="text-gray-300">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;