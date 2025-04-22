'use client'

import { motion } from 'framer-motion';
import { FaDownload, FaCode, FaCoffee, FaLaptopCode } from 'react-icons/fa';

const About = () => {
  const stats = [
    { icon: <FaCode />, label: 'Projects Completed', value: '50+' },
    { icon: <FaCoffee />, label: 'Cups of Coffee', value: '1000+' },
    { icon: <FaLaptopCode />, label: 'Years Experience', value: '3+' },
  ];

  return (
    <div className="min-h-screen flex items-center py-20 px-4 bg-[#011627] relative overflow-hidden">
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
            className="text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300"
          >
            About <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00B4D8] via-[#48cae4] to-[#90e0ef]">Me</span>
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
                className="text-gray-300/90 text-lg leading-relaxed"
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

              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: '#48cae4' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-[#00B4D8] to-[#48cae4] text-white font-semibold rounded-lg 
                         shadow-lg shadow-[#00B4D8]/20 transition-all duration-300 flex items-center space-x-2"
              >
                <FaDownload />
                <span>Download CV</span>
              </motion.button>
            </motion.div>
            
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00B4D8] to-[#48cae4] rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-20"></div>
              <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-[#00B4D8]/20">
                <img 
                  src="/images/profile.png" 
                  alt="About Me" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.2 }}
                className="backdrop-blur-sm bg-white/5 p-6 rounded-xl border border-[#00B4D8]/20 hover:border-[#00B4D8]/40 transition-all duration-300"
              >
                <div className="flex items-center justify-center space-x-4">
                  <span className="text-3xl text-[#00B4D8]">{stat.icon}</span>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
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