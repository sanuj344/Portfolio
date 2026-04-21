import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "AIOFileFlow – Document Processing Platform",
      description:
        "Built a scalable document-processing platform handling 100+ daily file operations. Developed 10+ RESTful APIs for PDF tasks like compression, merging, splitting, and conversion, reducing manual work by 40%. Designed modular backend architecture supporting concurrent processing and built a responsive React frontend.",
      techStack: [
        "React",
        "Node.js",
        "Express.js",
        "REST APIs",
        "PDF Processing",
        "TailwindCSS",
      ],
      liveDemo: "https://aiofileflow.com/",
      code: "#",
      gradient: "from-indigo-500 to-blue-500",
      icon: "📄",
    },
    {
      title: "Weavy AI Clone",
      description:
        "Developed an AI-powered SaaS application inspired by Weavy, featuring chat-based interactions and AI workflows. Implemented prompt handling, API integrations, and a clean modular frontend. Focused on building a scalable and extensible architecture for AI-based applications.",
      techStack: [
        "React",
        "Node.js",
        "AI APIs",
        "TailwindCSS",
        "Framer Motion",
      ],
      liveDemo: "https://galaxy-ai-assignment-omega.vercel.app/",
      code: "https://github.com/sanuj344/galaxy.ai_assignment",
      gradient: "from-green-500 to-emerald-500",
      icon: "🤖",
    },
    {
      title: "Imagify – AI Image Generator",
      description:
        "A full-stack SaaS platform that generates AI-powered images from text prompts. Implemented secure JWT authentication, a credit-based system, and integrated Razorpay for payments. Built a responsive UI using TailwindCSS and Framer Motion.",
      techStack: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Razorpay",
        "TailwindCSS",
      ],
      liveDemo: "https://imagify-red-nine.vercel.app",
      code: "https://github.com/sanuj344/Imagify",
      gradient: "from-blue-500 to-purple-500",
      icon: "🎨",
    },
    {
      title: "Smart Interview Platform",
      description:
        "A full-stack interview scheduling platform with role-based workflows. Implemented conflict-free slot booking logic, interviewer dashboards, and admin analytics. Designed normalized PostgreSQL schemas using Prisma and prevented race conditions in scheduling.",
      techStack: [
        "React",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Prisma",
        "JWT",
        "TailwindCSS",
      ],
      liveDemo: "https://github.com/sanuj344/smart-interview-platform",
      code: "https://github.com/sanuj344/smart-interview-platform",
      gradient: "from-purple-500 to-pink-500",
      icon: "💼",
    },
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Some of my recent work and hands-on projects
          </p>
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
              <div
                className={`w-full h-48 rounded-xl bg-gradient-to-br ${project.gradient} mb-6 flex items-center justify-center text-white text-7xl shadow-md`}
              >
                {project.icon}
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                {project.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-gradient-to-r from-orange-50 to-orange-100 text-orange-700 px-4 py-2 rounded-lg text-sm font-medium border border-orange-200"
                  >
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