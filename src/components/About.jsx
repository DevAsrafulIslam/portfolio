'use client'

import { motion } from 'framer-motion';
import { FaDownload, FaCode, FaCoffee, FaLaptopCode } from 'react-icons/fa';

const About = () => {
  const stats = [
    { icon: <FaCode />, label: 'Projects Completed', value: '5+' },
    { icon: <FaLaptopCode />, label: 'Hands-on Coding Experience', value: '20+' },
    { icon: <FaCode />, label: 'Experience', value: 'Front-End Developer Since 2025 | Remote' }

  ];

  return (
    <div className="min-h-screen flex items-center py-24 px-4 bg-[#011627] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,180,216,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] opacity-20"></div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <motion.h2
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xl md:text-xl lg:text-4xl font-bold space-y-2 text-center bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300 relative"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00B4D8] via-[#48cae4] to-[#90e0ef] relative inline-block">
              About Me
              {/* Modern animated underline */}
              <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#00B4D8] to-transparent"></span>
              <span className="absolute -bottom-2 left-1/2 w-0 h-[2px] bg-gradient-to-r from-[#00B4D8] via-[#48cae4] to-[#90e0ef] transition-all duration-300 group-hover:w-full group-hover:left-0 transform -translate-x-1/2"></span>

              {/* Decorative dots */}
              <span className="absolute -bottom-2 left-0 w-1 h-1 rounded-full bg-[#00B4D8] animate-pulse"></span>
              <span className="absolute -bottom-2 right-0 w-1 h-1 rounded-full bg-[#90e0ef] animate-pulse"></span>
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-gray-300/90 text-sm md:text-lg leading-relaxed"
              >
                I'm a passionate developer with a keen eye for design and a love for creating
                seamless user experiences. With expertise in both frontend and backend technologies,
                I bring ideas to life through clean, efficient code.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="space-y-4 backdrop-blur-sm bg-white/5 p-6 rounded-xl"
              >
                <div className="flex items-center space-x-4">
                  <span className="text-[#00B4D8]">Name:</span>
                  <span className="text-gray-300">Md Asraful Islam</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-[#00B4D8]">Email:</span>
                  <span className="text-gray-300">asrafulislam.dev@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-[#00B4D8]">Location:</span>
                  <span className="text-gray-300">Gazipur Sadar, Dhaka</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="relative group w-full max-w-md mx-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00B4D8] to-[#48cae4] rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-20"></div>
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#00B4D8]/20 w-full h-[500px] mx-auto">
                <img
                  src="/images/profile.png"
                  alt="About Me"
                  className="w-full h-full object-cover object-[center_top] transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="grid grid:around-center grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={`stat-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.2 }}
                className=" backdrop-blur-sm bg-white/5 p-6 rounded-xl border border-[#00B4D8]/20 hover:border-[#00B4D8]/40 transition-all duration-300"
              >
                <div className="flex items-center justify-center space-x-4">
                  <span className="text-3xl text-[#00B4D8]">{stat.icon}</span>
                  <div className="text-center">
                    <h3 className="text-sm md:text-lg font-bold text-white">{stat.value}</h3>
                    <p className="text-gray-400">{stat.label}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;