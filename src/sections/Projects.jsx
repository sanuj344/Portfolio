import { motion } from 'framer-motion';

function Projects() {
  const projects = [
    {
      title: 'Imagify',
      description: 'An AI-powered image generator that creates stunning visuals from text prompts using advanced machine learning algorithms.',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'AI API'],
      liveDemo: '#',
      code: '#'
    },
    {
      title: 'Smart Interview Platform',
      description: 'A comprehensive platform for conducting technical interviews with automated scoring, real-time collaboration, and detailed analytics.',
      techStack: ['React', 'PostgreSQL', 'Node.js', 'JWT', 'WebRTC'],
      liveDemo: '#',
      code: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Projects</h2>
          <p className="text-lg text-gray-300">Some of my recent work</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-colors duration-300"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">{project.title}</h3>
              <p className="text-gray-300 mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech) => (
                  <span key={tech} className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
                >
                  Live Demo
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white text-white hover:bg-white hover:text-black px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
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