"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Coffee, Users, Award, Zap, Heart, Mail } from "lucide-react";
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import TechStack from "@/components/ui/page-component/techStack";

const stats = [
  {
    icon: Code2,
    value: "100+",
    label: "Projects Completed",
    color: "text-blue-500",
  },
  {
    icon: Coffee,
    value: "1000+",
    label: "Cups of Coffee",
    color: "text-orange-500",
  },
  {
    icon: Users,
    value: "50+",
    label: "Happy Clients",
    color: "text-green-500",
  },
];

const skills = [
  { name: "React & Next.js", level: 95 },
  { name: "Node.js & Express", level: 90 },
  { name: "TypeScript", level: 88 },
  { name: "Database Design", level: 85 },
  { name: "UI/UX Design", level: 80 },
  { name: "Cloud & DevOps", level: 75 },
];

const journey = [
  {
    year: "2024",
    title: "Senior Full Stack Developer",
    description: "Leading development of enterprise-scale applications",
    icon: Award,
  },
  {
    year: "2022",
    title: "Full Stack Developer",
    description: "Built 50+ production-ready web applications",
    icon: Zap,
  },
  {
    year: "2020",
    title: "Started Coding Journey",
    description: "Fell in love with JavaScript and web development",
    icon: Heart,
  },
];

const AboutMe = () => {
  const aboutRef = useRef(null);
  const aboutInView = useInView(aboutRef, { once: true, amount: 0.2 });

  // Variants for animations
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };
  const fadeRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const Social = [
    {
      icon: <FaFacebook />,
      title: "Facebook",
      url: "https://facebook.com/programmeraminislam",
    },
    {
      icon: <FaInstagram />,
      title: "Instagram",
      url: "https://instagram.com/programmer_amin",
    },

    {
      icon: <BsTwitterX />,
      title: "Twitter",
      url: "https://twitter.com/programmeramin_",
    },

    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      url: "https://linkedin.com/in/programmeramin",
    },
    {
      icon: <FaGithub />,
      title: "Github",
      url: "https://github.com/programmeramin",
    },
    {
      icon: <SiLeetcode />,
      title: "LeetCode",
      url: "https://leetcode.com/programmer_amin",
    },
    { icon: <Mail />, title: "Mail", url: "mailto:yourname@gmail.com" },
    {
      icon: <FaWhatsapp />,
      title: "Whatsapp",
      url: "https://wa.me/8801XXXXXXXX",
    },
  ];

  return (
    <div className="w-full dark:bg-[#0c101a] bg-gray-150 py-20 px-4 items-center">
      <div className="max-w-7xl mx-auto py-20">
        {/* Header */}
        <motion.div
          ref={aboutRef}
          initial="hidden"
          animate={aboutInView ? "visible" : "hidden"}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold dark:text-white text-gray-800 mb-4">
            About <span className="text-blue-400">Me</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-12 items-center mb-20">
          {/* Left Images */}
          <motion.div
            initial="hidden"
            animate={aboutInView ? "visible" : "hidden"}
            variants={fadeLeft}
            className="flex justify-center"
          >
            <div className="relative flex gap-4">
              <div className="absolute bg-gradient-to-r from-blue-300 to-purple-300 rounded-2xl blur-2xl"></div>
              <img
                src="/image/aminislambanner.png"
                alt="Profile"
                className="overflow-hidden rounded-md lg:h-90 w-full"
              />
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial="hidden"
            animate={aboutInView ? "visible" : "hidden"}
            variants={fadeRight}
          >
            <motion.h2 className="text-3xl font-bold dark:text-white text-gray-800 mb-6">
              Hello! I'm a{" "}
              <span className="text-blue-400">
                Full Stack MERN Developer | AI/ML-Focused | Open to Remote
              </span>
            </motion.h2>

            <motion.p className="dark:text-gray-300 text-gray-700 text-lg leading-relaxed mb-4">
              I’m a passionate Full Stack MERN Developer with professional
              experience building modern, scalable web applications. I work
              across the entire development stack—crafting clean, intuitive user
              interfaces and designing reliable, production-ready backend
              systems.
            </motion.p>

            <motion.p className="dark:text-gray-300 text-gray-700 text-lg leading-relaxed mb-4">
              I specialize in React, Node.js, MongoDB, and TypeScript, building
              high-performance applications that solve real-world problems. I
              focus on writing clean, maintainable code and delivering smooth,
              user-centric experiences in every project I work on.
            </motion.p>

            <motion.p className="dark:text-gray-300 text-gray-700 text-lg leading-relaxed mb-4">
              Alongside MERN, I’m actively expanding my skill set into Python
              and AI/ML, with a focus on integrating intelligent features into
              web applications. I enjoy experimenting with new ideas, pushing
              technical boundaries, and building solutions that blend
              traditional web development with emerging AI capabilities.
            </motion.p>

            <motion.p className="dark:text-gray-300 text-gray-700 text-lg leading-relaxed mb-8">
              When I’m not coding, I explore new technologies, contribute to
              open-source projects, and share knowledge with the developer
              community. I strongly believe in continuous learning,
              adaptability, and staying ahead of industry trends in a
              fast-evolving tech landscape.
            </motion.p>

            <motion.button className="flex items-center gap-3 text-white bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 px-6 py-3 rounded-lg hover:scale-105 transition duration-300 shadow-lg hover:shadow-xl">
              Download Resume →
            </motion.button>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="py-10 m-0 text-left">
            <h1 className="text-2xl md:text-3xl lg:text-4xl">
              Connect with Social Media
            </h1>

            <div className="w-25 h-[2px] bg-blue-700 text-left mt-1 text-blue-700"></div>

            <ul className="flex flex-wrap gap-4 mt-6">
              {Social.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex lg:w-[191px] md:w-[191px] w-[155px] items-center gap-3 px-4 py-2 rounded-xl
               bg-slate-300 dark:bg-white/10 backdrop-blur-md
               border dark:border-white/20
               text-sm
               hover:bg-white/20  hover:border-blue-600 dark:hover:border-blue-600
               hover:scale-105 transition-all duration-300 cursor-pointer"
                  >
                    <span
                      className="text-lg text-gray-900 dark:text-white/80
                     group-hover:text-blue-600 dark:group-hover:text-blue-600 transition-colors duration-300"
                    >
                      {item.icon}
                    </span>

                    <span
                      className="text-lg text-gray-900 dark:text-white/80
                     group-hover:text-blue-600 dark:group-hover:text-blue-600  transition-colors duration-300"
                    >
                      {item.title}
                    </span>

                    <span
                      className=" opacity-0 group-hover:opacity-100
                     text-purple-700 transition-opacity duration-300"
                    >
                      <MdArrowOutward />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <TechStack/>
        </div>

        <div className="max-w-7xl mx-auto">
          <motion.div
          ref={aboutRef}
          initial="hidden"
          animate={aboutInView ? "visible" : "hidden"}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold dark:text-white text-gray-800 mb-4">
            My <span className="text-blue-400">Journey</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>
            
        </div>

      </div>
    </div>
  );
};

export default AboutMe;
