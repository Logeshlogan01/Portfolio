import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-16">
      <div className="text-center max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
        >
          Hi, I'm <span className="text-blue-600">Logeshwaran Renganathan</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl md:text-2xl text-gray-600 mb-8"
        >
          Full-Stack Developer & AI Enthusiast
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto"
        >
          I build innovative web and mobile solutions that solve real-world problems. 
          Passionate about full-stack development, AI integration, and creating impactful user experiences.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg">
            View My Work
          </a>
          <a href="#contact" className="border border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}