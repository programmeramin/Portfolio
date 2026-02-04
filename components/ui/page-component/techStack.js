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
    once: true, // একবারই animate হবে
    margin: "-50px", // একটু আগে থেকেই trigger
  });

  return (
    <div className="w-full dark:bg-[#0c101a] bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 200 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 200 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-6">
            Tech <span className="text-blue-400">Stack</span>
          </h2>

          <p className="text-center text-xl lg:text-2xl md:text-xl dark:text-gray-300 text-gray-900 mb-12">
            I work with modern technologies to build scalable and performant
            applications
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-3 gap-6">
          {tech.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="dark:bg-[#111827] border dark:border-gray-800 bg-gray-200 border-gray-400 rounded-xl py-10 flex flex-col items-center hover:border-blue-400 transition transform-gpu hover:scale-105 duration-800 cursor-pointer"
            >
              <span className="bg-gray-700 rounded-xl p-4">{item.icon}</span>
              <h3 className="mt-4 text-lg font-semibold dark:text-gray-200 text-gray-800">
                {item.title}
              </h3>
              <p className="text-sm dark:text-gray-300 text-gray-800">
                {item.tag}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
