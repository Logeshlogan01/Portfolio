import { motion } from "framer-motion";

const Header = () => {
  const navItems = ["Work", "Skills", "Contact"];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold text-gray-800 cursor-pointer"
          >
            Logeshwaran R
          </motion.div>
          
          <div className="flex gap-6">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.1,
                  color: "#2563eb"
                }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Header;