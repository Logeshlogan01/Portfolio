import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import ContactForm from "../ContactForm";

const Footer = () => {
  return (
    <motion.footer
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Contact Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <motion.h2
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 text-center max-w-2xl mx-auto"
          >
            Ready to start your next project? Let's discuss how we can work together to bring your ideas to life!
          </motion.p>
          
          <ContactForm />
        </motion.div>

        {/* Quick Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center mb-12"
        >
          <p className="text-gray-300 text-lg mb-4">
            Prefer direct contact? 
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-gray-400">
            <p>
              Email:{" "}
              <a 
                href="mailto:logeshwaranre@email.com" 
                className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
              >
                logeshwaranre@email.com
              </a>
            </p>
            <span className="hidden sm:block">•</span>
            <p>
              Phone:{" "}
              <a 
                href="tel:+91-7540050874" 
                className="text-green-400 hover:text-green-300 transition-colors font-medium"
              >
                +91 75400XXXXX
              </a>
            </p>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center gap-8 mb-12"
        >
          {[
            {
              icon: Github,
              href: "https://github.com/Logeshlogan01",
              color: "hover:text-white",
              bgColor: "hover:bg-gray-700",
              label: "GitHub"
            },
            {
              icon: Linkedin,
              href: "https://www.linkedin.com/in/logeshwaran-renganathan",
              color: "hover:text-blue-400",
              bgColor: "hover:bg-blue-500/20",
              label: "LinkedIn"
            },
            {
              icon: Mail,
              href: "mailto:logeshwaranre@email.com",
              color: "hover:text-red-400",
              bgColor: "hover:bg-red-500/20",
              label: "Email"
            },
            {
              icon: Phone,
              href: "tel:+91-7540050874",
              color: "hover:text-green-400",
              bgColor: "hover:bg-green-500/20",
              label: "Call Me"
            }
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target={social.label === "Call Me" ? "_self" : "_blank"}
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={{ 
                scale: 1.2,
                y: -5
              }}
              whileTap={{ scale: 0.9 }}
              className={`
                p-4 bg-white/10 rounded-2xl backdrop-blur-sm 
                border border-white/20 transition-all duration-300 
                ${social.bgColor} ${social.color}
                group relative
              `}
            >
              <social.icon size={28} className="transition-transform duration-300 group-hover:scale-110" />
              
              {/* Tooltip */}
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 
                             opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-black text-white text-xs py-1 px-2 rounded whitespace-nowrap">
                  {social.label}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Signature */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mb-8 text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="text-gray-400 text-lg"
          >
            Crafted with <span className="text-red-500 animate-pulse">❤️</span> by{" "}
            <motion.span
              whileHover={{ 
                scale: 1.05,
              }}
              className="font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent 
                         transition-all duration-500 cursor-pointer"
            >
              Logeshwaran Renganathan
            </motion.span>
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="text-gray-500 mt-2 flex items-center justify-center gap-2"
          >
            <span>Powered by React ⚛️ + Tailwind CSS 🎨</span>
          </motion.p>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="border-t border-gray-700 pt-6 text-center"
        >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-sm text-gray-500"
          >
            © {new Date().getFullYear()} Logeshwaran Renganathan 
            <span className="mx-2">•</span>
            All Rights Reserved
            <span className="mx-2">•</span>
            Made with Passion 🔥
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-500 to-purple-500 
                   text-white p-3 rounded-full shadow-lg hover:shadow-xl 
                   transition-all duration-300 z-50"
      >
        <motion.svg
          whileHover={{ y: -2 }}
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </motion.svg>
      </motion.button>
    </motion.footer>
  );
};

export default Footer;
