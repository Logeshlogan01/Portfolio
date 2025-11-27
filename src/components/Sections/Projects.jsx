import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = ({ projects }) => {
  // Function to get gradient class based on project ID
  const getGradientClass = (projectId) => {
    switch (projectId) {
      case 1:
        return "bg-gradient-to-br from-purple-500 to-pink-500";
      case 2:
        return "bg-gradient-to-br from-green-500 to-blue-500";
      case 3:
        return "bg-gradient-to-br from-orange-500 to-red-500";
      case 4:
        return "bg-gradient-to-br from-teal-500 to-blue-400";
      case 5:
        return "bg-gradient-to-br from-indigo-500 to-purple-600";
      default:
        return "bg-gradient-to-br from-gray-500 to-gray-700";
    }
  };

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
            >
              {/* Project Header with Gradient */}
              <div className={`h-48 flex items-center justify-center text-white font-semibold p-4 text-center ${getGradientClass(project.id)}`}>
                {project.title}
              </div>
              
              {/* Project Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 mb-4 flex-1">{project.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => (
                    <span 
                      key={tech} 
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex gap-4 mt-auto pt-4">
                  <a 
                    href={project.demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium"
                  >
                    <ExternalLink size={16} />
                    {project.demoLink.startsWith('http') ? 'Live Demo' : 'View Demo'}
                  </a>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors duration-200 font-medium"
                  >
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
