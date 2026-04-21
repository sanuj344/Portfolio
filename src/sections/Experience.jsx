
import { motion } from "framer-motion";

function Experience() {
  const experiences = [
    {
      title: "Full Stack Developer Intern",
      company: "SmartSkale (Remote)",
      period: "Apr 2026 – Present",
      description:
        "Built learner-side features for a tutor marketplace using React.js, including profile management, tutor search, filtering, and reusable UI components. Implemented location-based tutor discovery using Geolocation API and Haversine formula, while optimizing performance with modular architecture and React hooks.",
    },
    {
      title: "Software Engineer Intern",
      company: "Celeris Ventures (Remote)",
      period: "Apr 2026 – Present",
      description:
        "Refactored UI workflows by converting modal-based interactions into scalable full-page forms using React.js. Implemented dynamic routing with React Router and modularized reusable components using hooks, improving maintainability and reducing code duplication.",
    },
    {
      title: "Software Engineer Intern",
      company: "Rawyal, Jaipur (On-site)",
      period: "Jan 2026 – Feb 2026",
      description:
        "Built AIFileFlow, a scalable document-processing platform handling 100+ daily file operations. Developed 10+ RESTful APIs for PDF processing, reducing manual work by 40% and enabling concurrent processing. Also built a responsive React frontend for seamless API interaction.",
    },
    {
      title: "Software Engineer Intern",
      company: "SnackBae (Remote)",
      period: "Jan 2025 – Jul 2025",
      description:
        "Developed secure payment and inventory workflows for hospital billing systems. Optimized PostgreSQL performance by 30% through indexing and query refactoring, and implemented JWT-based authentication to enhance API security.",
    },
  ];

  const achievements = [
    {
      title: "National Semi-finalist – Tata Imagination Challenge",
      description:
        "Ranked in the top 2% among 350,000+ participants nationwide, demonstrating strong analytical thinking and problem-solving ability.",
      icon: "🏅",
    },
    {
      title: "LeetCode Problem Solving",
      description:
        "Solved 300+ Data Structures and Algorithms problems, strengthening expertise in arrays, strings, dynamic programming, and graph algorithms.",
      icon: "💻",
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
                key={exp.title + index}
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