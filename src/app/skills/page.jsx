'use client'

import { motion } from 'framer-motion';
import { FaCode, FaServer, FaTools, FaPalette } from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FaCode className="text-4xl" />,
      skills: [
        { name: "React.js", level: 90 },
        { name: "Next.js", level: 75 },
        { name: "JavaScript", level: 60 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 90 }
      ]
    },
    {
      title: "Backend Development",
      icon: <FaServer className="text-4xl" />,
      skills: [
        { name: "Node.js", level: 45 },
        { name: "Express.js", level: 50 },
        { name: "MongoDB", level: 55 },
        { name: "RESTful APIs", level: 40 },
        { name: "Firebase", level: 85 }
      ]
    },
    {
      title: "Tools & Methods",
      icon: <FaTools className="text-4xl" />,
      skills: [
        { name: "Git", level: 90 },
        { name: "VS Code", level: 95 },
        // { name: "Webpack", level: 80 },
        { name: "npm/yarn", level: 90 },
        // { name: "Agile/Scrum", level: 85 }
      ]
    },
    {
      title: "Design",
      icon: <FaPalette className="text-4xl" />,
      skills: [
        // { name: "Figma", level: 85 },
        { name: "Adobe XD", level: 70 },
        // { name: "UI/UX", level: 85 },
        { name: "Responsive Design", level: 90 },
        { name: "Web Design", level: 85 }
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
              My Skills
              {/* Modern animated underline */}
              <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#00B4D8] to-transparent"></span>
              <span className="absolute -bottom-2 left-1/2 w-0 h-[2px] bg-gradient-to-r from-[#00B4D8] via-[#48cae4] to-[#90e0ef] transition-all duration-300 group-hover:w-full group-hover:left-0 transform -translate-x-1/2"></span>

              {/* Decorative dots */}
              <span className="absolute -bottom-2 left-0 w-1 h-1 rounded-full bg-[#00B4D8] animate-pulse"></span>
              <span className="absolute -bottom-2 right-0 w-1 h-1 rounded-full bg-[#90e0ef] animate-pulse"></span>
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.2 }}
                className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-[#00B4D8]/20 hover:border-[#00B4D8]/40 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="text-[#00B4D8]">{category.icon}</div>
                  <h3 className="text-sm md:text-lg font-semibold text-white">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between text-gray-300">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                          className="h-full bg-gradient-to-r from-[#00B4D8] to-[#48cae4] rounded-full"
                        />
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

export default Skills;