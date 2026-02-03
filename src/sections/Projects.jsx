import { motion } from 'framer-motion';

function Projects() {
  const projects = [
    {
      title: 'Imagify',
      description: 'An AI-powered image generator that creates stunning visuals from text prompts using advanced machine learning algorithms.',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'AI API'],
      liveDemo: '#',
      code: '#',
      gradient: 'from-blue-500 to-purple-500',
      icon: '🎨'
    },
    {
      title: 'Smart Interview Platform',
      description: 'A comprehensive platform for conducting technical interviews with automated scoring, real-time collaboration, and detailed analytics.',
      techStack: ['React', 'PostgreSQL', 'Node.js', 'JWT', 'WebRTC'],
      liveDemo: '#',
      code: '#',
      gradient: 'from-purple-500 to-pink-500',
      icon: '💼'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">Some of my recent work</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-orange-200 transition-all duration-500 shadow-lg hover:shadow-2xl group"
            >
              <div className={`w-full h-48 rounded-xl bg-gradient-to-br ${project.gradient} mb-6 flex items-center justify-center text-white text-7xl shadow-md`}>
                {project.icon}
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">{project.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.techStack.map((tech) => (
                  <span key={tech} className="bg-gradient-to-r from-orange-50 to-orange-100 text-orange-700 px-4 py-2 rounded-lg text-sm font-medium border border-orange-200">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 text-center"
                >
                  Live Demo
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white py-3 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 text-center"
                >
                  Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;