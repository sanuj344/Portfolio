import { motion } from 'framer-motion';

function About() {
  const features = [
    {
      title: 'MERN Stack',
      description: 'Proficient in MongoDB, Express.js, React, and Node.js for full-stack development.',
      icon: '⚛️',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Database Management',
      description: 'Experienced with PostgreSQL and MongoDB for efficient data handling.',
      icon: '🗄️',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      title: 'Problem Solver',
      description: 'Analytical thinker focused on creating innovative solutions.',
      icon: '🧠',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
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
              className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-orange-200 transition-all duration-500 shadow-lg hover:shadow-2xl"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-3xl mb-6 shadow-md`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;