import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-xl z-50 border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="text-white text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Sanuj
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-white hover:text-purple-300 transition-colors duration-300 font-medium">About</a>
            <a href="#skills" className="text-white hover:text-purple-300 transition-colors duration-300 font-medium">Skills</a>
            <a href="#projects" className="text-white hover:text-purple-300 transition-colors duration-300 font-medium">Projects</a>
            <a href="#experience" className="text-white hover:text-purple-300 transition-colors duration-300 font-medium">Experience</a>
            <a href="#contact" className="text-white hover:text-purple-300 transition-colors duration-300 font-medium">Contact</a>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-purple-300 focus:outline-none transition-colors duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-xl">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#about" className="block px-3 py-2 text-white hover:text-purple-300 transition-colors duration-300 font-medium">About</a>
              <a href="#skills" className="block px-3 py-2 text-white hover:text-purple-300 transition-colors duration-300 font-medium">Skills</a>
              <a href="#projects" className="block px-3 py-2 text-white hover:text-purple-300 transition-colors duration-300 font-medium">Projects</a>
              <a href="#experience" className="block px-3 py-2 text-white hover:text-purple-300 transition-colors duration-300 font-medium">Experience</a>
              <a href="#contact" className="block px-3 py-2 text-white hover:text-purple-300 transition-colors duration-300 font-medium">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;