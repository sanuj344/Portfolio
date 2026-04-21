import { motion } from "framer-motion";

function About() {
  const features = [
    {
      title: "Full Stack Engineering",
      description:
        "Experienced in building scalable web applications using React.js, Node.js, and Express.js. Developed real-world platforms including tutor marketplaces and AI-based systems with a strong focus on performance and clean architecture.",
      icon: "⚛️",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Backend & Database Optimization",
      description:
        "Worked extensively with PostgreSQL, MongoDB, and Prisma ORM. Improved database performance by 30% through indexing and query optimization while building secure REST APIs with JWT authentication.",
      icon: "🗄️",
      gradient: "from-green-500 to-teal-500",
    },
    {
      title: "Problem Solving & System Design",
      description:
        "Solved 300+ DSA problems on LeetCode and built systems handling real-world constraints like concurrency, scalability, and API efficiency, including platforms processing 100+ daily operations.",
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
            I’m a{" "}
            <span className="font-semibold text-gray-800">
              Full Stack Developer
            </span>{" "}
            and Electronics & Communication Engineering undergraduate from{" "}
            <span className="font-semibold text-gray-800">
              IIIT Una
            </span>. I specialize in building scalable, production-ready web
            applications with a strong focus on performance, clean code, and user experience.
            <br />
            <br />
            Currently, I’m working as a{" "}
            <span className="font-semibold text-gray-800">
              Full Stack Developer Intern at SmartSkale
            </span>{" "}
            and{" "}
            <span className="font-semibold text-gray-800">
              Software Engineer Intern at Celeris Ventures
            </span>, where I develop real-world features like dynamic routing,
            reusable UI systems, and location-based services using the Geolocation API.
            <br />
            <br />
            Previously, I built{" "}
            <span className="font-semibold text-gray-800">
              AIFileFlow
            </span>, a scalable document-processing platform handling 100+ daily
            operations, and developed secure APIs that reduced manual effort by
            40%.
            <br />
            <br />
            I have also optimized database performance by{" "}
            <span className="font-semibold text-gray-800">
              30%
            </span>{" "}
            and built secure systems using JWT authentication. Additionally, I’m
            a{" "}
            <span className="font-semibold text-gray-800">
              National Semi-finalist in Tata Imagination Challenge (Top 2%)
            </span>{" "}
            and have solved{" "}
            <span className="font-semibold text-gray-800">
              300+ DSA problems
            </span>{" "}
            on LeetCode.
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