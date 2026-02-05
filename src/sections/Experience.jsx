import { motion } from "framer-motion";

function Experience() {
  const experiences = [
    {
      title: "Web Developer Intern (Founding Engineer)",
      company: "Rawyal, Jaipur",
      period: "Jan 2026 – Present",
      description:
        "Developing AIFileFlow, a full-stack document processing platform similar to iLovePDF with enhanced features. Building scalable RESTful APIs using Node.js and Express.js for PDF operations such as compress, merge, split, rotate, extract pages, and file conversion. Creating responsive and user-friendly interfaces with React.js and collaborating closely with founders to define MVP scope and prioritize features.",
    },
    {
      title: "Software Engineer Intern",
      company: "Legabyte Innovations",
      period: "Jan 2025 – Jul 2025",
      description:
        "Worked on backend-heavy full-stack systems integrating secure payment processing and inventory management for hospital billing and kitchen order fulfillment. Optimized PostgreSQL database operations with schema validation, indexing, and query refactoring, improving API response times by 30–40%. Implemented JWT-based authentication, robust error handling, and unit testing to ensure secure and scalable systems.",
    },
  ];

  const achievements = [
    {
      title: "3rd Place – Run Code Run (IIIT Una)",
      description:
        "Secured 3rd position out of 25 teams in an intra-college coding competition by solving real-time algorithmic challenges under strict time constraints, demonstrating strong problem-solving skills and teamwork.",
      icon: "🥉",
    },
    {
      title: "National Semi-finalist – Tata Imagination Challenge",
      description:
        "Ranked in the top 2% nationwide among 350,000+ participants in the Tata Imagination Challenge, showcasing analytical thinking, innovation, and business problem-solving skills.",
      icon: "🏅",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Experience & Achievements
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            My professional journey and key accomplishments
          </p>
        </motion.div>

        {/* Experience Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Experience
          </h3>
          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-orange-200 transition-all duration-500 shadow-lg hover:shadow-2xl"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <h4 className="text-2xl font-bold text-gray-900">
                    {exp.title}
                  </h4>
                  <span className="text-orange-600 font-semibold text-lg">
                    {exp.company} • {exp.period}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Achievements
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-orange-200 transition-all duration-500 shadow-lg hover:shadow-2xl"
              >
                <div className="text-6xl mb-6">{achievement.icon}</div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  {achievement.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
