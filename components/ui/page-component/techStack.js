"use client";

import { FaReact, FaNodeJs, FaGitAlt, FaDocker, FaAws } from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiFramer,
} from "react-icons/si";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function TechStack() {
  const tech = [
    {
      icon: <FaReact size={40} className="text-blue-400" />,
      title: "React",
      tag: "Frontend",
    },
    {
      icon: <SiNextdotjs size={40} className="text-white" />,
      title: "Next.js",
      tag: "Framework",
    },
    {
      icon: <SiTypescript size={40} className="text-blue-500" />,
      title: "TypeScript",
      tag: "Language",
    },
    {
      icon: <FaNodeJs size={40} className="text-green-500" />,
      title: "Node.js",
      tag: "Backend",
    },

    {
      icon: <SiExpress size={40} className="text-gray-200" />,
      title: "Express",
      tag: "Backend",
    },
    {
      icon: <SiMongodb size={40} className="text-green-500" />,
      title: "MongoDB",
      tag: "Database",
    },
    {
      icon: <SiPostgresql size={40} className="text-blue-300" />,
      title: "PostgreSQL",
      tag: "Database",
    },
    {
      icon: <SiTailwindcss size={40} className="text-sky-400" />,
      title: "Tailwind CSS",
      tag: "Styling",
    },

    {
      icon: <SiFramer size={40} className="text-white" />,
      title: "Framer Motion",
      tag: "Animation",
    },
    {
      icon: <FaDocker size={40} className="text-blue-400" />,
      title: "Docker",
      tag: "DevOps",
    },
    {
      icon: <FaAws size={40} className="text-orange-300" />,
      title: "AWS",
      tag: "Cloud",
    },
    {
      icon: <FaGitAlt size={40} className="text-orange-500" />,
      title: "Git",
      tag: "Version Control",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px",
  });

  return (
    <div className="w-full py-1 dark:bg-[#0c101a] text-white">
      <div className="max-w-7xl mx-auto lg:px-0 px-4 dark:bg-[#0c101a]">
        {/* Section Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 200 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 200 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-1">
            Tech <span className="text-blue-400">Stack</span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full mb-2"></div>

           <p className="text-center text-xl lg:text-2xl md:text-xl dark:text-gray-300 text-gray-900 mb-10">
            I work with modern technologies to build scalable and performant
            applications
          </p>
        </motion.div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {tech.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 200 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="dark:bg-[#111827] bg-gray-200
        border dark:border-gray-800 border-gray-400
        rounded-xl py-5
        flex flex-col items-center
        hover:border-blue-400 hover:scale-105
        transition-all duration-500 cursor-pointer"
            >
              <span className="bg-gray-700 rounded-xl p-4 text-white text-2xl">
                {item.icon}
              </span>

              <h3 className="mt-4 text-lg font-semibold dark:text-gray-200 text-gray-800">
                {item.title}
              </h3>

              <p className="text-sm dark:text-gray-300 text-gray-700">
                {item.tag}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
