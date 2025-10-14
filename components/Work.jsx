import { assets, workData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { FaEye, FaGithub } from 'react-icons/fa';

const Work = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="projects"
      className="w-full px-[10%] py-10 scroll-mt-20"
    >
      {/* Heading */}
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo dark:text-gray-300"
      >
        My Portfolio
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-4xl font-Ovo dark:text-white"
      >
        My Projects
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-xl mx-auto mt-4 mb-10 font-Ovo dark:text-gray-400"
      >
        Explore my projects showcasing my full-stack development expertise.
      </motion.p>

      {/* Projects Grid */}
      <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ delay: 0.9, duration: 0.6 }}
  className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center items-center gap-9 w-max mx-auto"

>

        {workData.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 w-[280px] h-[350px] mx-auto"
          >
            {/* Background Image */}
            <div
              className="w-full h-44 bg-cover bg-center transition-all duration-300"
              style={{ backgroundImage: `url(${project.bgImage})` }}
            ></div>

            {/* Content */}
            <div className="p-4">
              <h2 className="text-lg font-semibold dark:text-white">{project.title}</h2>
              <div className="flex flex-wrap mt-2 gap-1">
                {project.techstack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-200 text-gray-800 text-xs font-medium px-2 py-1 rounded-full dark:bg-gray-700 dark:text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-300 mt-2">{project.description}</p>
            </div>

            {/* Hover Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-white px-4 text-center"
            >
              <h2 className="text-lg font-semibold">{project.title}</h2>
              <p className="text-xs text-gray-300 mt-2">{project.description}</p>

              {/* Icons */}
              <div className="flex space-x-3 mt-3">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black p-2 rounded-full hover:bg-lime-300 transition"
                >
                  <FaEye size={18} />
                </a>
                <a
                  href={project.gitubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black p-2 rounded-full hover:bg-lime-300 transition"
                >
                  <FaGithub size={18} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Work;