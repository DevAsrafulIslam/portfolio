'use client'

import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate, FaAward } from 'react-icons/fa';

const Education = () => {
  const educationData = [
    {
      type: "Academic",
      icon: <FaGraduationCap className="text-4xl" />,
      items: [
        {
          title: "Bachelor of Science in Computer Science and Engineering",
          institution: "Uttara University",
          year: "2024 - On Going",
          description: "Building web applications with a strong foundation in Software Engineering and modern dev practices."
        },
        {
          title: "Diploma in Computer Science  Engineering",
          institution: "Model Institute of Science and Technology (MIST)",
          year: "2017 - 2021",
          description: "Comprehensive study in computer engineering fundamentals, programming, and system design."
        },
        {
          title: "Higher Secondary Certificate",
          institution: "Sonavori High School",
          year: "2017",
          description: "Completed HSC with major in Science, achieving excellent academic results."
        }
      ]
    },
    {
      type: "Certifications",
      icon: <FaCertificate className="text-4xl" />,
      items: [
        {
          title: "Web Development",
          institution: "Programming Hero",
          year: "2023",
          description: "Comprehensive training in modern web development technologies and best practices."
        },
        {
          title: "React and Next.js",
          institution: "Programming Hero",
          year: "2023",
          description: "Deep dive into advanced React patterns, Next.js, and modern frontend development."
        }
      ]
    },
    {
      type: "Achievements",
      icon: <FaAward className="text-4xl" />,
      items: [
        {
          title: "Best Web Developer Award",
          institution: "Programming Hero",
          year: "2023",
          description: "Recognized for outstanding performance and innovative project development."
        },
        // {
        //   title: "Hackathon Winner",
        //   institution: "Tech Fest 2023",
        //   year: "2023",
        //   description: "First place in national-level web development competition."
        // }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-24 px-4 bg-[#011627] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,180,216,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] opacity-20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
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
              My Education
              {/* Modern animated underline */}
              <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#00B4D8] to-transparent"></span>
              <span className="absolute -bottom-2 left-1/2 w-0 h-[2px] bg-gradient-to-r from-[#00B4D8] via-[#48cae4] to-[#90e0ef] transition-all duration-300 group-hover:w-full group-hover:left-0 transform -translate-x-1/2"></span>

              {/* Decorative dots */}
              <span className="absolute -bottom-2 left-0 w-1 h-1 rounded-full bg-[#00B4D8] animate-pulse"></span>
              <span className="absolute -bottom-2 right-0 w-1 h-1 rounded-full bg-[#90e0ef] animate-pulse"></span>
            </span>
          </motion.h2>

          <div className="space-y-12">
            {educationData.map((section, sectionIndex) => (
              <motion.div
                key={section.type}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: sectionIndex * 0.2 }}
                className="space-y-6"
              >
                <div className="flex items-center space-x-4">
                  <div className="text-[#00B4D8]">{section.icon}</div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white">{section.type}</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {section.items.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-[#00B4D8]/20 hover:border-[#00B4D8]/40 transition-all duration-300"
                    >
                      <div className="space-y-4">
                        <h4 className="text-sm md:text-lg font-semibold text-[#00B4D8]">{item.title}</h4>
                        <div className="flex justify-between text-gray-300">
                          <span>{item.institution}</span>
                          <span>{item.year}</span>
                        </div>
                        <p className="text-gray-400">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;