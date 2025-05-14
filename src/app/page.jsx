'use client'

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook, FaDownload, FaCode, FaWhatsapp } from 'react-icons/fa';

const Page = () => {
  return (
    <div className="h-screen w-full bg-[#011627] relative overflow-hidden flex items-center justify-center">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,180,216,0.15),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>
      <div className="absolute inset-0 animate-pulse bg-[radial-gradient(circle_at_50%_50%,rgba(0,180,216,0.05),transparent_50%)]"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          {/* Profile Section */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-32 h-32 mx-auto mb-8 rounded-full border-4 border-[#00B4D8] p-1"
          >
            <img
              src="/images/profile.png"
              alt="Asraful Islam"
              className="w-full h-full rounded-full object-cover"
            />
          </motion.div>

          {/* Title Section */}
          <motion.h1
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            className="text-6xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300"
          >
            Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00B4D8] via-[#48cae4] to-[#90e0ef]">Asraful Islam</span>
          </motion.h1>

          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <p className="text-2xl md:text-3xl text-gray-300 font-semibold">
              Frontend Developer
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Specializing in creating beautiful, responsive web applications with React & Next.js
            </p>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center gap-4 flex-wrap max-w-xl mx-auto mb-8"
          >
            {['React', 'Next.js', 'TypeScript', 'Tailwind CSS'].map((tech, index) => (
              <span
                key={tech}
                className="px-4 py-2 bg-[#00B4D8]/10 text-[#00B4D8] rounded-full border border-[#00B4D8]/20 text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center space-x-6 mb-8"
          >
            <motion.a
              href="https://github.com/DevAsrafulIslam"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              className="text-3xl text-[#00B4D8] hover:text-[#48cae4] transition-all duration-300"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/md-asrafulislam/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              className="text-3xl text-[#00B4D8] hover:text-[#48cae4] transition-all duration-300"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://wa.me/8801999870111"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              className="text-3xl text-[#00B4D8] hover:text-[#48cae4] transition-all duration-300"
            >
              <FaWhatsapp />
            </motion.a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center gap-4 flex-wrap"
          >
            <motion.a
              href="/CV/CV ASRAFUL_ISLAM.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#00B4D8] text-white rounded-lg hover:bg-[#48cae4] transition-all duration-300"
            >
              <FaDownload className="text-lg" />
              <span>Download Resume</span>
            </motion.a>
            <motion.a
              href="/projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-[#00B4D8] text-[#00B4D8] rounded-lg hover:bg-[#00B4D8]/10 transition-all duration-300"
            >
              <FaCode className="text-lg" />
              <span>View Projects</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div >
  );
};

export default Page;