import { motion } from 'framer-motion';

function Contact() {
  const contactInfo = [
    {
      label: 'Email',
      value: 'sanuj12201@gmail.com',
      href: 'mailto: sanuj12201@gmail.com',
      icon: '📧',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      label: 'LinkedIn',
      value: 'https://www.linkedin.com/in/sanuj-bhagat-57bb24256/',
      href: 'https://www.linkedin.com/in/sanuj-bhagat-57bb24256/',
      icon: '💼',
      gradient: 'from-blue-600 to-blue-800'
    },
    {
      label: 'GitHub',
      value: 'https://github.com/sanuj344',
      href: 'https://github.com/sanuj344',
      icon: '💻',
      gradient: 'from-gray-700 to-gray-900'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-slate-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Contact</h2>
          <p className="text-xl text-gray-300">Let's get in touch</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-8">Get In Touch</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`flex items-center p-6 bg-gradient-to-r ${info.gradient} rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 group`}
                >
                  <span className="text-4xl mr-6 group-hover:scale-110 transition-transform duration-300">{info.icon}</span>
                  <div>
                    <div className="text-white font-bold text-lg">{info.label}</div>
                    <div className="text-white/80 text-sm">{info.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-8">Send a Message</h3>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-all duration-300 text-lg"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-all duration-300 text-lg"
                />
              </div>
              <div>
                <textarea
                  rows="6"
                  placeholder="Your Message"
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-all duration-300 resize-none text-lg"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;