import { motion } from "framer-motion";

function Hero() {
  const socialLinks = [
    {
      icon: "linkedin",
      href: "https://www.linkedin.com/in/sanuj-bhagat-57bb24256/",
      color: "hover:bg-blue-600",
    },
    {
      icon: "github",
      href: "https://github.com/sanuj344",
      color: "hover:bg-gray-800",
    },
    {
      icon: "instagram",
      href: "https://www.instagram.com/sanuj__00",
      color: "hover:bg-pink-600",
    },
  ];

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-gray-50 pt-16 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-network-pattern opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
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
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900"
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

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex gap-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.icon}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -4 }}
                  className={`w-12 h-12 bg-gray-900 ${social.color} rounded-full flex items-center justify-center text-white transition-all duration-300 shadow-md`}
                >
                  <SocialIcon type={social.icon} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-96 h-96 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-2xl">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center text-8xl border-8 border-white">
                👨‍💻
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

/* =======================
   FIXED SVG ICONS
======================= */
function SocialIcon({ type }) {
  const icons = {
    linkedin: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M22.23 0H1.77C.79 0 0 .774 0 1.727v20.545C0 23.227.79 24 1.77 24h20.46C23.21 24 24 23.227 24 22.273V1.727C24 .774 23.21 0 22.23 0zM7.06 20.452H3.56V9h3.5v11.452zM5.31 7.433c-1.12 0-2.03-.91-2.03-2.03 0-1.12.91-2.03 2.03-2.03s2.03.91 2.03 2.03c0 1.12-.91 2.03-2.03 2.03zM20.452 20.452h-3.5v-5.605c0-1.337-.026-3.058-1.865-3.058-1.865 0-2.151 1.455-2.151 2.959v5.704h-3.5V9h3.361v1.561h.048c.468-.888 1.611-1.823 3.314-1.823 3.544 0 4.193 2.334 4.193 5.367v6.347z" />
      </svg>
    ),
    github: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577v-2.17c-3.338.724-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.085 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.93 0-1.312.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.5 11.5 0 0112 5.8c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.61-2.807 5.624-5.48 5.921.43.37.823 1.102.823 2.222v3.293c0 .32.192.694.801.576C20.565 21.796 24 17.298 24 12 24 5.37 18.63 0 12 0z" />
      </svg>
    ),
    instagram: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.848 0 3.204-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.848 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 6.838a5.162 5.162 0 100 10.324 5.162 5.162 0 000-10.324zm0 8.486a3.324 3.324 0 110-6.648 3.324 3.324 0 010 6.648zm6.406-8.845a1.44 1.44 0 11-2.881 0 1.44 1.44 0 012.881 0z" />
      </svg>
    ),
  };

  return icons[type] || null;
}

export default Hero;
