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

    return (
      <div className="w-full dark:bg-[#020d27] bg-white py-20 px-4">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-6">
          Tech <span className="text-blue-400">Stack</span>
        </h2>

        <p className="text-center text-gray-400 mb-12">
          I work with modern technologies to build scalable and performant
          applications
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 md:px-20">
          {tech.map((item, index) => (
            <div
              key={index}
              className="bg-[#111827] border border-gray-800 rounded-xl py-10 flex flex-col items-center 
            hover:border-blue-400 transition duration-300"
            >
              {item.icon}
              <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.tag}</p>
            </div>
          ))}
        </div>
      </div>
    );
}
