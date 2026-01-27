import { motion } from 'framer-motion';

function About() {
  const features = [
    {
      title: 'MERN Stack',
      description: 'Proficient in MongoDB, Express.js, React, and Node.js for full-stack development.',
      icon: '⚛️',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Database Management',
      description: 'Experienced with PostgreSQL and MongoDB for efficient data handling.',
      icon: '🗄️',
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Problem Solver',
      description: 'Analytical thinker focused on creating innovative solutions.',
      icon: '🧠',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-slate-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">About Me</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
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
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 shadow-xl hover:shadow-2xl"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-3xl mb-6 shadow-lg`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;