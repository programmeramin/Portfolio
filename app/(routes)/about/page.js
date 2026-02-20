"use client";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  Coffee,
  Users,
  Award,
  Zap,
  Heart,
  Mail,
  TrendingUp,
} from "lucide-react";
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import TechStack from "@/components/ui/page-component/techStack";
import Link from "next/link";

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

const journeyData = [
  {
    year: "2022",
    title: "Started Coding Journey",
    description:
      "Began my journey with programming fundamentals and JavaScript, building small projects and learning core concepts.",
  },
  {
    year: "2024",
    title: "Full Stack MERN Developer",
    description:
      "Built multiple real-world MERN stack applications with authentication, APIs, and database integrations.",
  },
  {
    year: "2025",
    title: "AI/ML Focus & Advanced Full Stack",
    description:
      "Expanding into AI/ML with Python while building scalable, production-ready full stack systems.",
  },
];

const experiences = [
  {
    role: "Software Engineer (MERN Stack)",
    company: "Bangladesh · On-site / Remote",
    duration: "2025 – Present",
    description:
      "Working as a Software Engineer specializing in the MERN stack. Building scalable, production-ready web applications with a strong focus on performance, security, and clean architecture. Collaborating with cross-functional teams to deliver real-world business solutions.",
    tech: ["React", "Next.js", "Node.js", "Express", "MongoDB", "TypeScript"],
  },
  {
    role: "Freelance MERN Stack Developer",
    company: "Remote · Global Clients",
    duration: "2024 – Present",
    description:
      "Delivered custom full-stack web solutions for international and local clients. Responsible for end-to-end development including UI design, backend APIs, database modeling, deployment, and post-launch optimization.",
    tech: [
      "React",
      "Next.js",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
      "REST APIs",
    ],
  },
];

const education = [
  {
    degree: "Bachelor of Science (B.Sc) in Computer Science & Engineering",
    institute: "Manarat International University",
    duration: "2023 – Present",
    status: "Currently Studying",
    description:
      "Studying core computer science fundamentals including data structures, algorithms, software engineering, and database systems, while actively building real-world projects alongside academic coursework.",
  },
  {
    degree: "Diploma in Engineering (Electrical & Electronics Engineering)",
    institute: "Bangladesh Technical Education Board (BTEB)",
    duration: "2019 – 2023",
    status: "Completed",
    description:
      "Completed a diploma program focused on electrical and electronics fundamentals, circuit design, industrial electronics, and practical engineering applications, building a strong technical foundation.",
  },
];

const AboutMe = () => {
  const aboutRef = useRef(null);
  const aboutInView = useInView(aboutRef, { once: true, amount: 0.2 });

  const socialRef = useRef(null);
  const socialIconRef = useInView(socialRef, {
    once: true,
    amount: 0.2,
  });

  const myref = useRef(null);
  const journeyRef = useInView(myref, {
    once: true,
    amount: 0.2,
  });

  const myexref = useRef(null);
  const experienceRef = useInView(myexref, {
    once: true,
    amount: 0.2,
  });

  // Variants for animations
  const fadeUp = {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
  const fadeLeft = {
    hidden: { opacity: 0, x: 0 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };
  const fadeRight = {
    hidden: { opacity: 0, x: 0 },
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
    <>
      <div className="w-full dark:bg-[#0c101a] bg-gray-150 py-10 px-4 items-center">
        <div
          ref={aboutRef}
          className="max-w-7xl mx-auto dark:bg-[#0c101a] bg-white py-20"
        >
          {/* Section Title */}
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h2 className="text-4xl font-bold dark:text-white text-gray-800 mb-4">
              About <span className="text-blue-400">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full" />
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 items-center">
            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, x: -150 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
              <img
                src="/image/aminislambanner.png"
                alt="Profile"
                className="rounded-md"
              />
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, x: 150 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="text-left"
            >
              <h2 className="text-3xl font-bold dark:text-white text-gray-800 mb-6">
                Hello! I'm a{" "}
                <span className="text-blue-400">
                  Full Stack MERN Developer | AI/ML-Focused | Open to Remote
                </span>
              </h2>

              <p className="dark:text-gray-300 text-gray-700 text-lg leading-relaxed mb-4">
                I’m a passionate Full Stack MERN Developer with professional
                experience building modern, scalable web applications. I work
                across the entire development stack—crafting clean, intuitive
                user interfaces and designing reliable backend systems.
              </p>

              <p className="dark:text-gray-300 text-gray-700 text-lg leading-relaxed mb-4">
                I specialize in React, Node.js, MongoDB, and TypeScript,
                building high-performance applications that solve real-world
                problems.
              </p>

              <p className="dark:text-gray-300 text-gray-700 text-lg leading-relaxed mb-4">
                Alongside MERN, I’m expanding into Python and AI/ML, focusing on
                integrating intelligent features into web applications.
              </p>

              <p className="dark:text-gray-300 text-gray-700 text-lg leading-relaxed mb-8">
                When I’m not coding, I explore new technologies, contribute to
                open-source, and share knowledge with the developer community.
              </p>

              <button
                className="
      flex items-center justify-center gap-3
      dark:bg-[#080f20]
      bg-white
      py-2.5 px-4
      sm:px-5 sm:py-2.5
      md:px-2 md:py-2
      text-sm sm:text-base md:text-lg
      rounded-md
      cursor-pointer outline-none
      w-full sm:w-auto
    "
              >
                <Link
                  href="/cv.pdf"
                  target="_blank"
                  download
                  className="
    inline-flex items-center justify-center gap-2
    bg-white dark:bg-[#0f172a]
    text-gray-800 dark:text-white
    px-6 py-3
    text-sm sm:text-base
    font-medium
    border border-gray-300 dark:border-gray-700
    rounded-xl
    shadow-sm hover:shadow-md
    hover:bg-gray-50 dark:hover:bg-[#1e293b]
    transition-all duration-300 ease-in-out
    active:scale-95
    focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2
    w-full sm:w-auto
  "
                >
                  Download CV
                  <FaArrowRightLong size={16} />
                </Link>
              </button>
            </motion.div>
          </div>
        </div>

        <div ref={socialRef} className="max-w-7xl mx-auto">
          <div className="py-10 m-0 text-left mb-10">
            <motion.h1
              initial={{ opacity: 0, y: 200 }}
              animate={
                socialIconRef ? { opacity: 1, y: 0 } : { opacity: 0, y: 200 }
              }
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-2xl md:text-3xl lg:text-4xl"
            >
              Connect with Social Media
              <div className="w-25 h-[2px] bg-blue-700 text-left mt-1 text-blue-700"></div>
            </motion.h1>

            <ul className="flex flex-wrap gap-4 mt-6">
              {Social.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 100 }}
                  animate={
                    socialIconRef
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 200 }
                  }
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
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
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
        {/* TECK STACK */}
        <div>
          <TechStack />
        </div>

        {/* MY JOURNEY */}
        <div ref={myref} className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate={journeyRef ? "visible" : "hidden"}
            variants={fadeUp}
            className="text-center pt-15 py-5"
          >
            <h1 className="text-5xl md:text-6xl font-bold dark:text-white text-gray-800 mb-4">
              My <span className="text-blue-400">Journey</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-8 mt-12">
            {journeyData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 200 }}
                animate={
                  journeyRef ? { opacity: 1, y: 0 } : { opacity: 0, y: 200 }
                }
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group p-6 rounded-2xl
      bg-white dark:bg-white/10 backdrop-blur-md
      border border-gray-200 dark:border-white/20
      hover:border-blue-500 dark:hover:border-blue-500
      shadow-md hover:shadow-xl transition-all duration-300"
              >
                <span
                  className="inline-block mb-4 px-4 py-1 text-sm font-semibold
        rounded-full bg-blue-100 text-blue-600
        dark:bg-blue-500/10 dark:text-blue-400"
                >
                  {item.year}
                </span>

                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.description}
                </p>

                {/* Hover Glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
        bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-pink-400/10
        transition-opacity duration-300 pointer-events-none"
                ></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* MY EXPERIENCE */}
        <section ref={myexref} className="max-w-7xl mx-auto pt-15 px-2 lg:px-0">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={
              experienceRef ? { opacity: 1, y: 0 } : { opacity: 0, y: 200 }
            }
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold dark:text-white text-gray-800">
              Professional <span className="text-blue-400">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mt-4 rounded-full" />
          </motion.div>

          {/* Cards */}
          <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-4 ">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: index % 2 === 0 ? -200 : 200 }}
                animate={experienceRef ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="dark:bg-[#0d1224] bg-gray-50 border dark:border-gray-700 border-gray-300 rounded-xl p-6 md:p-8 hover:shadow-xl transition duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold dark:text-white text-gray-800">
                      {exp.role}
                    </h3>
                    <p className="text-blue-400 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-sm dark:text-gray-400 text-gray-600 mt-2 md:mt-0">
                    {exp.duration}
                  </span>
                </div>

                <p className="dark:text-gray-300 text-gray-700 leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/*  MY EDUCATION */}
        <motion.div className="max-w-7xl mx-auto pt-15">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl md:text-5xl font-bold dark:text-white text-gray-800">
              Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mt-3 rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-4">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: index % 2 === 0 ? -80 : 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="dark:bg-[#0d1224] bg-gray-50 border dark:border-gray-700 border-gray-300 rounded-xl p-6 hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold dark:text-white text-gray-800">
                  {edu.degree}
                </h3>

                <p className="text-blue-400 font-medium mt-1">
                  {edu.institute}
                </p>

                <p className="text-sm dark:text-gray-400 text-gray-600 mt-1">
                  {edu.duration} · {edu.status}
                </p>

                <p className="dark:text-gray-300 text-gray-700 mt-4">
                  {edu.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default AboutMe;
