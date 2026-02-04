import { motion } from "framer-motion";

function Hero() {
  const socialLinks = [
    { icon: "linkedin", href: "https://www.linkedin.com/in/sanuj-bhagat-57bb24256/", color: "hover:bg-blue-600" },
    { icon: "github", href: "https://github.com/sanuj344", color: "hover:bg-gray-800" },
    { icon: "instagram", href: "#", color: "hover:bg-pink-600" },
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center bg-gray-50 pt-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-network-pattern opacity-30"></div>

      <div className="absolute top-20 left-10 w-2 h-2 bg-gray-400 rounded-full"></div>
      <div className="absolute top-40 left-1/4 w-2 h-2 bg-gray-400 rounded-full"></div>
      <div className="absolute top-60 right-1/4 w-2 h-2 bg-gray-400 rounded-full"></div>
      <div className="absolute bottom-40 left-1/3 w-2 h-2 bg-gray-400 rounded-full"></div>

      <svg className="absolute top-20 left-20 w-64 h-64 opacity-10" viewBox="0 0 200 200">
        <line x1="10" y1="10" x2="50" y2="50" stroke="#9CA3AF" strokeWidth="1" />
        <line x1="50" y1="50" x2="100" y2="30" stroke="#9CA3AF" strokeWidth="1" />
        <line x1="100" y1="30" x2="150" y2="80" stroke="#9CA3AF" strokeWidth="1" />
        <circle cx="10" cy="10" r="3" fill="#9CA3AF" />
        <circle cx="50" cy="50" r="3" fill="#9CA3AF" />
        <circle cx="100" cy="30" r="3" fill="#9CA3AF" />
        <circle cx="150" cy="80" r="3" fill="#9CA3AF" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight"
            >
              Hi There,
              <br />
              I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                Sanuj Bhagat
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-700 font-medium"
            >
              Full Stack Developer specializing in{" "}
              <span className="text-red-600">React, Node.js</span> & scalable systems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pt-4"
            >
              <a
                href="#about"
                className="inline-flex items-center bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                About Me
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex gap-4 pt-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.icon}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className={`w-12 h-12 bg-gray-900 ${social.color} rounded-full flex items-center justify-center text-white transition-all duration-300 shadow-md hover:shadow-lg`}
                >
                  <SocialIcon type={social.icon} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center text-blue-900 text-8xl font-bold border-8 border-white shadow-xl">
                  👨‍💻
                </div>
              </div>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="absolute bottom-8 -left-4 w-16 h-16 bg-red-500 rounded-full flex items-center justify-center shadow-lg border-4 border-white"
              >
                <span className="text-white font-bold text-xs">NEW</span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// Social Icon Component
function SocialIcon({ type }) {
  const icons = {
    linkedin: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5z" />
      </svg>
    ),
    github: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12z" />
      </svg>
    ),
    instagram: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07z" />
      </svg>
    ),
  };

  return icons[type] || null;
}

export default Hero;
