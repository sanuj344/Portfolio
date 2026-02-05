import { motion } from "framer-motion";

function Skills() {
  const skillsData = [
    {
      category: "Frontend",
      skills: [
        "React.js",
        "Next.js",
        "Redux Toolkit",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Bootstrap",
      ],
      gradient: "from-blue-500 to-purple-500",
      icon: "💻",
    },
    {
      category: "Backend",
      skills: [
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "JWT Authentication",
      ],
      gradient: "from-green-500 to-blue-500",
      icon: "⚙️",
    },
    {
      category: "Databases",
      skills: [
        "PostgreSQL",
        "MongoDB",
        "MySQL",
        "Prisma ORM",
      ],
      gradient: "from-purple-500 to-pink-500",
      icon: "🗃️",
    },
    {
      category: "Programming & Tools",
      skills: [
        "JavaScript (ES6+)",
        "TypeScript",
        "Python",
        "SQL",
        "Git & GitHub",
        "Postman",
        "VS Code",
        "Vercel",
      ],
      gradient: "from-pink-500 to-red-500",
      icon: "🛠️",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Technologies, tools, and concepts I work with
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-orange-200 transition-all duration-500 shadow-lg hover:shadow-2xl"
            >
              <div
                className={`w-16 h-16 rounded-xl bg-gradient-to-br ${skillGroup.gradient} flex items-center justify-center text-3xl mb-6 shadow-md`}
              >
                {skillGroup.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {skillGroup.category}
              </h3>

              <div className="space-y-3">
                {skillGroup.skills.map((skill) => (
                  <div
                    key={skill}
                    className="bg-gradient-to-r from-orange-50 to-orange-100 text-orange-700 px-4 py-2 rounded-lg text-sm font-medium border border-orange-200"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
