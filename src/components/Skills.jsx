import { motion } from 'framer-motion';

const skillsData = [
  { name: 'React', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'TypeScript', level: 75 },
  { name: 'Python', level: 70 },
  { name: 'SQL', level: 85 },
];

const Skills = () => {
  return (
    <div className="min-h-screen flex items-center py-20 px-4 bg-primary">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <h2 className="text-xl md:text-3xl lg:text-6xl font-bold space-y-2 text-center relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00B4D8] via-[#48cae4] to-[#90e0ef] relative inline-block">
              My Skills
              {/* Modern animated underline */}
              <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#00B4D8] to-transparent"></span>
              <span className="absolute -bottom-2 left-1/2 w-0 h-[2px] bg-gradient-to-r from-[#00B4D8] via-[#48cae4] to-[#90e0ef] transition-all duration-300 group-hover:w-full group-hover:left-0 transform -translate-x-1/2"></span>

              {/* Decorative dots */}
              <span className="absolute -bottom-2 left-0 w-1 h-1 rounded-full bg-[#00B4D8] animate-pulse"></span>
              <span className="absolute -bottom-2 right-0 w-1 h-1 rounded-full bg-[#90e0ef] animate-pulse"></span>
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {skillsData.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-primary/50 p-6 rounded-lg backdrop-blur-sm"
              >
                <div className="flex justify-between mb-2">
                  <span className="text-text-primary font-medium">{skill.name}</span>
                  <span className="text-secondary">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="bg-secondary h-2.5 rounded-full"
                  />
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