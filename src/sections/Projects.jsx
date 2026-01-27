import { motion } from 'framer-motion';

function Projects() {
  const projects = [
    {
      title: 'Imagify',
      description: 'An AI-powered image generator that creates stunning visuals from text prompts using advanced machine learning algorithms.',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'AI API'],
      liveDemo: '#',
      code: '#',
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Smart Interview Platform',
      description: 'A comprehensive platform for conducting technical interviews with automated scoring, real-time collaboration, and detailed analytics.',
      techStack: ['React', 'PostgreSQL', 'Node.js', 'JWT', 'WebRTC'],
      liveDemo: '#',
      code: '#',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-slate-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Projects</h2>
          <p className="text-xl text-gray-300">Some of my recent work</p>
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
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 shadow-xl hover:shadow-2xl group"
            >
              <div className={`w-full h-48 rounded-xl bg-gradient-to-br ${project.gradient} mb-6 flex items-center justify-center text-white text-6xl shadow-lg`}>
                🚀
              </div>
              <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">{project.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.techStack.map((tech) => (
                  <span key={tech} className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-200 px-4 py-2 rounded-full text-sm font-medium border border-purple-500/20">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
                >
                  Live Demo
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
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