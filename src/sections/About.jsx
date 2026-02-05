import { motion } from "framer-motion";

function About() {
  const features = [
    {
      title: "Full Stack Development",
      description:
        "Experienced in building end-to-end web applications using React, Node.js, Express.js, and modern frontend tools, with a strong focus on performance and scalability.",
      icon: "⚛️",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Databases & Backend Systems",
      description:
        "Hands-on experience with PostgreSQL, MongoDB, and Prisma ORM for designing efficient schemas, optimizing queries, and building reliable backend systems.",
      icon: "🗄️",
      gradient: "from-green-500 to-teal-500",
    },
    {
      title: "Problem Solving & Engineering",
      description:
        "Strong foundation in data structures, algorithms, and system design, with a passion for solving real-world problems through clean and maintainable code.",
      icon: "🧠",
      gradient: "from-purple-500 to-pink-500",
    },
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-6"></div>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I’m a <span className="font-semibold text-gray-800">Full Stack Developer</span>{" "}
            and Electronics & Communication Engineering undergraduate from{" "}
            <span className="font-semibold text-gray-800">
              IIIT Una
            </span>. I enjoy building scalable, real-world web applications and
            transforming ideas into reliable products.
            <br />
            <br />
            Currently, I’m working as a <span className="font-semibold text-gray-800">
              Web Developer Intern (Founding Engineer)
            </span>, where I’m developing an AI-powered document processing platform
            similar to iLovePDF. My work spans backend API development, frontend
            experiences, database optimization, and secure authentication systems.
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
              <div
                className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-3xl mb-6 shadow-md`}
              >
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
