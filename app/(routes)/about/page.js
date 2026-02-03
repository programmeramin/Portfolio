"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Coffee, Users, Award, Zap, Heart } from "lucide-react";
import Image from "next/image";

const stats = [
  { icon: Code2, value: "100+", label: "Projects Completed", color: "text-blue-500" },
  { icon: Coffee, value: "1000+", label: "Cups of Coffee", color: "text-orange-500" },
  { icon: Users, value: "50+", label: "Happy Clients", color: "text-green-500" },
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
  { year: "2024", title: "Senior Full Stack Developer", description: "Leading development of enterprise-scale applications", icon: Award },
  { year: "2022", title: "Full Stack Developer", description: "Built 50+ production-ready web applications", icon: Zap },
  { year: "2020", title: "Started Coding Journey", description: "Fell in love with JavaScript and web development", icon: Heart },
];

const AboutMe = () => {
  const aboutRef = useRef(null);
  const aboutInView = useInView(aboutRef, { once: true, amount: 0.2 });

  // Variants for animations
  const fadeUp = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };
  const fadeLeft = { hidden: { opacity: 0, x: -100 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } };
  const fadeRight = { hidden: { opacity: 0, x: 100 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } };

  return (
    <section ref={aboutRef} className="min-h-screen dark:bg-[#070f22] bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
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
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-2xl opacity-30 animate-pulse"></div>
              <Image src="/image/my-photo.png" alt="Profile" width={300} height={400} className="rounded-l-2xl" />
              <Image src="/image/my-cover.png" alt="Profile" width={300} height={400} className="rounded-r-2xl" />
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial="hidden"
            animate={aboutInView ? "visible" : "hidden"}
            variants={fadeRight}
          >
            <motion.h2 className="text-3xl font-bold dark:text-white text-gray-800 mb-6">
              Hello! I'm a <span className="text-blue-400">Full Stack MERN Developer | AI/ML-Focused | Open to Remote</span>
            </motion.h2>

            <motion.p className="dark:text-gray-300 text-gray-700 text-lg leading-relaxed mb-4">
              I’m a passionate Full Stack MERN Developer with professional experience building modern, scalable web applications. I work across the entire development stack—crafting clean, intuitive user interfaces and designing reliable, production-ready backend systems.
            </motion.p>

            <motion.p className="dark:text-gray-300 text-gray-700 text-lg leading-relaxed mb-4">
              I specialize in React, Node.js, MongoDB, and TypeScript, building high-performance applications that solve real-world problems. I focus on writing clean, maintainable code and delivering smooth, user-centric experiences in every project I work on.
            </motion.p>

            <motion.p className="dark:text-gray-300 text-gray-700 text-lg leading-relaxed mb-4">
              Alongside MERN, I’m actively expanding my skill set into Python and AI/ML, with a focus on integrating intelligent features into web applications. I enjoy experimenting with new ideas, pushing technical boundaries, and building solutions that blend traditional web development with emerging AI capabilities.
            </motion.p>

            <motion.p className="dark:text-gray-300 text-gray-700 text-lg leading-relaxed mb-8">
              When I’m not coding, I explore new technologies, contribute to open-source projects, and share knowledge with the developer community. I strongly believe in continuous learning, adaptability, and staying ahead of industry trends in a fast-evolving tech landscape.
            </motion.p>

            <motion.button className="flex items-center gap-3 text-white bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 px-6 py-3 rounded-lg hover:scale-105 transition duration-300 shadow-lg hover:shadow-xl">
              Download Resume →
            </motion.button>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={aboutInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 + i * 0.15 }}
              className="dark:bg-[#0d1224] bg-gray-50 border dark:border-gray-700 border-gray-300 p-8 rounded-xl text-center hover:scale-105 transition duration-500 shadow-lg hover:shadow-2xl group"
            >
              <stat.icon className={`${stat.color} w-12 h-12 mx-auto mb-4 group-hover:animate-bounce`} />
              <h3 className="dark:text-white text-gray-800 text-3xl font-bold mb-2">{stat.value}</h3>
              <p className="dark:text-gray-400 text-gray-600 text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills */}
        <motion.div className="mb-20">
          <h2 className="text-4xl font-bold dark:text-white text-gray-800 mb-8 text-center">
            Technical <span className="text-blue-400">Skills</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="dark:text-gray-300 text-gray-700 font-medium">{skill.name}</span>
                  <span className="dark:text-gray-400 text-gray-600 text-sm">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={aboutInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-full rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Journey Timeline */}
        <motion.div className="mb-20">
          <h2 className="text-4xl font-bold dark:text-white text-gray-800 mb-12 text-center">
            My <span className="text-blue-400">Journey</span>
          </h2>
          <div className="space-y-8">
            {journey.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }} animate={aboutInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 1.9 + i * 0.2 }} className="flex items-start gap-6 group">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition duration-300">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1 dark:bg-[#0d1224] bg-gray-50 p-6 rounded-xl border dark:border-gray-700 border-gray-300 hover:shadow-xl transition duration-300">
                  <span className="text-blue-400 font-bold text-lg">{item.year}</span>
                  <h3 className="dark:text-white text-gray-800 text-xl font-bold mt-2 mb-2">{item.title}</h3>
                  <p className="dark:text-gray-400 text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutMe;
