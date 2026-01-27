import { motion } from 'framer-motion';

function About() {
  const features = [
    {
      title: 'MERN Stack',
      description: 'Proficient in MongoDB, Express.js, React, and Node.js for full-stack development.',
      icon: '⚛️'
    },
    {
      title: 'Database Management',
      description: 'Experienced with PostgreSQL and MongoDB for efficient data handling.',
      icon: '🗄️'
    },
    {
      title: 'Problem Solver',
      description: 'Analytical thinker focused on creating innovative solutions.',
      icon: '🧠'
    }
  ];

  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            I'm a passionate Full Stack Developer with expertise in MERN stack and PostgreSQL.
            Currently interning at Legabyte Innovations, I love building scalable web applications
            and solving complex problems with clean, efficient code.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-colors duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;