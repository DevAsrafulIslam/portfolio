'use client'

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Muslim's Corner",
      description: "Muslims Corner 25% off handcrafted watches, accessories, and new items like mugs and clothing, $12.99-$150, easy to buy.",
      image: "/projects/mulsims.png",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/DevAsrafulIslam/Muslims-Corner",
      live: "https://muslims-corner.vercel.app/",
    },
    {
      title: "FoodCart",
      description: "Premium halal e-commerce site, open 11:00 AM-10:00 PM, offering dishes like tuna, chicken salad, and fish, with easy online ordering.",
      image: "/projects/foodcart.png",
      tags: ["Next.js", "Firebase", "Tailwind CSS"],
      github: "https://github.com/DevAsrafulIslam/foodcart-client",
      live: "https://foodcart-client-i1b6.vercel.app/",
    },
    {
      title: "MediCare",
      description: "Healthcare platform for booking appointments with expert doctors, offering quick scheduling, advanced technology, and cardiac care services for a healthy family.",
      image: "/projects/medicare.png",
      tags: ["React", "D3.js", "Material-UI"],
      github: "https://github.com/DevAsrafulIslam/medicare",
      live: "https://medicare-red-two.vercel.app/",
    },
    {
      title: "Car Doctor",
      description: "Auto service platform with qualified experts, offering affordable car servicing like oil changes, battery charges, and full repairs, with easy booking.",
      image: "/projects/cardoctor.png",
      tags: ["Next.js", "OpenAI API", "TailwindCSS", "TypeScript"],
      github: "https://github.com/DevAsrafulIslam/car-doctor-client-with-jwt",
      live: "https://car-doctor-client-with-jwt.vercel.app/",
    },
    {
      title: "Bootcamp",
      description: "Online learning platform teaching web development fundamentals (HTML, CSS, JS) through virtual, hybrid, and in-person courses, with enrollment and newsletter sign-up options.",
      image: "/projects/bootcamp.png",
      tags: ["React", "Socket.io", "WebRTC", "Express"],
      github: "https://github.com/DevAsrafulIslam/bootcamp",
      live: "https://devasrafulislam.github.io/bootcamp/",
    },
    {
      title: "Task Management App",
      description: "Simple web tool for adding, checking, and deleting tasks with an intuitive interface.",
      image: "/projects/task.png",
      tags: ["React Native", "Redux", "Node.js", "MongoDB"],
      github: "https://github.com/DevAsrafulIslam/todo",
      live: "https://todo-32r7.vercel.app/",
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

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
            className="text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300"
          >
            My <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00B4D8] via-[#48cae4] to-[#90e0ef]">Projects</span>
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="group relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-[#00B4D8]/20 hover:border-[#00B4D8]/40 transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#011627] via-transparent to-transparent z-10"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-white group-hover:text-[#00B4D8] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-[#00B4D8]/10 text-[#00B4D8] border border-[#00B4D8]/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex justify-between items-center pt-4">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-400 hover:text-[#00B4D8] transition-colors duration-300"
                    >
                      <FaGithub className="text-xl" />
                      <span>Code</span>
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-400 hover:text-[#00B4D8] transition-colors duration-300"
                    >
                      <FaExternalLinkAlt className="text-lg" />
                      <span>Live Demo</span>
                    </motion.a>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#011627]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;