import { motion } from 'framer-motion';

const Skills = ({ skills }) => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900"
        >
          Skills & Technologies
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-800 bg-gray-100 py-2 rounded-lg">{category}</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {items.map(skill => (
                  <span key={skill} className="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;