import { motion } from 'framer-motion';

function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg">
            SB
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white">Sanuj Bhagat</h1>
          <p className="text-xl md:text-2xl text-gray-300">Full Stack Developer (MERN + PostgreSQL)</p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Passionate about creating innovative web solutions with modern technologies and clean, efficient code.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg">
              View Projects
            </a>
            <button className="border border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg">
              Download Resume
            </button>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="border border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="border border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg">
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;