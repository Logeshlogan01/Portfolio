import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = ({ projects }) => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900"
        >
          Featured Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-gray-600 text-center mb-12 max-w-2xl mx-auto"
        >
          Here are some of my projects that showcase my passion for solving real-world problems through technology.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className={`h-48 flex items-center justify-center text-white font-semibold ${
                project.id === 1 ? "bg-gradient-to-br from-purple-500 to-pink-500" :
                project.id === 2 ? "bg-gradient-to-br from-green-500 to-blue-500" :
                project.id === 3 ? "bg-gradient-to-br from-orange-500 to-red-500" :
                "bg-gradient-to-br from-teal-500 to-blue-400"
              }`}>
                {project.title}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => (
                    <span key={tech} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.demoLink} className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a href={project.githubLink} className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors">
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;