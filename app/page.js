"use client";

import Link from "next/link";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { Typewriter } from "react-simple-typewriter";
import {
  FaLinkedin,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import TechStack from "@/components/ui/page-component/techStack";
import FeaturedProjects from "@/components/ui/page-component/projects";
import MyServices from "@/components/ui/page-component/services";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px",
  });

  const aboutRef = useRef(null);
  const aboutInView = useInView(aboutRef, {
    once: true,
    margin: "0px",
  });

  return (
    <>
      <div className="w-full mx-auto dark:bg-[#0c101a] bg-gray-150 min-h-screen flex justify-center items-center">
        <motion.div
          ref={ref}
          initial={{ y: 200 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto lg:mt-10"
        >
          {/* Column Layout */}
          <div className="flex flex-col items-center gap-6 justify-center mx-auto">
            <button className="px-6 py-3  self-center dark:bg-[#091c4d] dark:text-amber-100 bg-gray-200 rounded-full outline-none">
              ✨ Enter My World of Innovation
            </button>

            {/* Title */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center leading-tight bg-gradient-to-r from-primary via-blue-500 to-purple-600 bg-clip-text text-transparent tracking-tight">
              <Typewriter
                words={["Full Stack MERN Developer | AI/ML-Focused"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={60}
                delaySpeed={1500}
              />
            </h1>

            {/* Subtitle */}
            <p
              className="text-center text-medium xs:text-lg lg:text-2xl md:text-xl text-muted-foreground max-w-3xl px-3 leading-relaxed"
              style={{ opacity: 1, transform: "none" }}
            >
              I build modern,{" "}
              <span
                className="font-semibold"
                style={{ color: "rgb(81, 133, 232)" }}
              >
                scalable, and production-ready
              </span>{" "}
              web applications using React, Next.js, Node.js, and
              MongoDB—focusing on clean architecture, performance, and
              real-world impact while exploring{" "}
              <span className="text-blue-500 text-md md:text-xl lg:text-2xl font-semibold uppercase">
                AI-powered experiences.
              </span>
            </p>

            <div className="flex justify-center gap-6">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 ">
                <motion.button
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="
      flex items-center justify-center
      text-white gap-3
      bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600
      hover:from-indigo-800 hover:via-purple-900 hover:to-pink-800
      px-4 py-2
      sm:px-5 sm:py-2.5
      md:px-6 md:py-3
      text-sm sm:text-base md:text-lg
      rounded-md
      transform transition duration-500
      outline-none border border-blue-500
      w-full sm:w-auto cursor-pointer
    "
                >
                  <FaArrowDown size={18} className="sm:size-[20px]" />
                  View My Work
                </motion.button>

                <motion.button
                  whileHover={{ rotate: 1, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 120 }}
                  className="
      flex items-center justify-center gap-3
      dark:bg-[#080f20]
      bg-white
      py-0 px-4
      sm:px-5 sm:py-2.5
      md:px-2 md:py-2
      text-sm sm:text-base md:text-lg
      border border-blue-400
      rounded-2xl
      cursor-pointer outline-none
      w-full sm:w-auto
    "
                >
                  <FaArrowRightLong />
                  Download CV
                </motion.button>
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex items-center gap-5 mt-2 text-gray-800 dark:text-gray-200"
            >
              <Link
                href="https://linkedin.com/in/programmeramin"
                target="_blank"
                className="text-3xl hover:text-blue-500 transition"
              >
                <FaLinkedin />
              </Link>
              <Link
                href="https://facebook.com/programmeraminislam"
                target="_blank"
                className="text-3xl hover:text-blue-500 transition"
              >
                <FaFacebook />
              </Link>
              <Link
                href="https://instagram.com/programmeramin_"
                target="_blank"
                className="text-3xl hover:text-blue-500 transition"
              >
                <FaInstagram />
              </Link>
              <Link
                href="https://instagram.com/programmer_amin"
                target="_blank"
                className="text-3xl hover:text-blue-500 transition"
              >
                <FaXTwitter />
              </Link>
              <Link
                href="https://github.com/programmeramin"
                target="_blank"
                className="text-3xl hover:text-blue-500 transition"
              >
                <FaGithub />
              </Link>

              <Link
                href="https://leetcode.com/programmeramin"
                target="_blank"
                className="text-3xl hover:text-blue-500 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={34}
                  height={34}
                  fill={"currentColor"}
                  viewBox="0 0 24 24"
                >
                  <path d="m15.42 16.94-2.25 2.17a2.1 2.1 0 0 1-1.52.56 2.1 2.1 0 0 1-1.52-.56l-3.61-3.63a2.18 2.18 0 0 1-.58-1.55 2.07 2.07 0 0 1 .58-1.52l3.6-3.65a2.1 2.1 0 0 1 1.53-.54 2.08 2.08 0 0 1 1.52.55l2.25 2.17A1.14 1.14 0 0 0 17 9.33l-2.17-2.2a4.24 4.24 0 0 0-2-1.12l2.06-2.08a1.15 1.15 0 0 0-1.62-1.62l-8.43 8.42a4.48 4.48 0 0 0-1.24 3.2 4.57 4.57 0 0 0 1.24 3.23l3.63 3.63A4.38 4.38 0 0 0 11.66 22a4.45 4.45 0 0 0 3.2-1.25L17 18.56a1.14 1.14 0 0 0-1.61-1.62z"></path>
                  <path d="M19.34 12.84h-8.45a1.12 1.12 0 0 0 0 2.24h8.45a1.12 1.12 0 0 0 0-2.24"></path>
                </svg>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* About me */}
      <div ref={aboutRef} className="w-full dark:bg-[#0c101a] bg-white py-13">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 grid-cols-1 px-4 lg:px-0 gap-12 items-center mb-5">
          {/* Section Title — CENTER & FULL WIDTH */}
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            animate={aboutInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-2 text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold dark:text-white text-gray-800 mb-2">
              About <span className="text-blue-400">Me</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>

          {/* Left Image */}
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={aboutInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="flex justify-center lg:justify-start"
          >
            <img
              src="/image/aminislambanner.png"
              alt="Profile"
              className="rounded-md w-full h-full"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={aboutInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="text-left"
          >
            <p className="dark:text-gray-300 text-gray-700 text-md font-medium leading-relaxed mb-4">
              I’m a passionate Full Stack MERN Developer with experience
              building modern, scalable, and high-performance web applications,
              combining clean frontend interfaces with robust backend systems.
            </p>

            <p className="dark:text-gray-300 text-gray-700 text-md font-medium leading-relaxed mb-8">
              When I’m not coding, I explore emerging technologies, contribute
              to open-source projects, and continuously upskill in AI and
              machine learning to create smarter web solutions.
            </p>

            {/* Stats */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mb-10">
              {[
                { icon: "</>", value: "100+", label: "Projects Completed" },
                { icon: "☕", value: "1000+", label: "Cups of Coffee" },
                { icon: "👥", value: "50+", label: "Happy Clients" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
                  className="dark:bg-[#0d1224] border dark:border-gray-700 border-gray-300 py-6 rounded-xl text-center"
                >
                  <div className="text-blue-500 text-3xl mb-2">{item.icon}</div>
                  <h3 className="dark:text-gray-300 text-gray-800 text-xl font-bold">
                    {item.value}
                  </h3>
                  <p className="text-gray-400 text-sm">{item.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center lg:justify-start">
              <a
                href="/about"
                className="group inline-flex items-center gap-3
          px-6 py-3 rounded-md
          text-sm md:text-base font-medium text-white
          bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600
          transition-all duration-500 hover:scale-105"
              >
                Learn More About Me
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Tech Stack */}

      <div>
        <TechStack />
      </div>

      <div>
        <FeaturedProjects />
      </div>

      <div>
        <MyServices />
      </div>

      {/* ready to start project */}

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 200 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 200 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="w-full bg-white dark:bg-[#0c101a] py-13 flex flex-col items-center text-center px-4 transition-colors duration-300"
      >
        {/* Heading */}
        <h1 className="text-black dark:text-white text-3xl md:text-5xl font-bold mb-4">
          Ready to Start Your{" "}
          <span className="text-blue-600 dark:text-blue-500">Project</span>?
        </h1>

        {/* Sub Text */}
        <p className="text-gray-700 dark:text-gray-400 max-w-2xl mb-8 text-sm md:text-base">
          Let's work together to bring your ideas to life. I'm always excited to
          take on new challenges and create amazing digital experiences.
        </p>

        {/* Buttons */}
        <div className="flex gap-4">
          {/* Get in Touch Button */}
          <button className="flex items-center text-white gap-5 bg-gradient-to-r via-purple-700 px-5 py-2 rounded-md to-pink-600 from-indigo-700 hover:via-purple-900 hover:from-indigo-800 hover:to-pink-800 transform transition hover:scale-105 duration-500">
            <Link href="/contact" className="">
              Get In Touch ➜
            </Link>
          </button>

          {/* Send Email Button */}
          <Link
            href="mailto:youremail@example.com"
            className="border border-gray-400 dark:border-gray-600 
                 text-gray-700 dark:text-gray-300 
                 hover:bg-gray-100 dark:hover:bg-[#0d1a33] 
                 transition px-6 py-3 rounded-xl flex items-center gap-2"
          >
            ✉️ Send Email
          </Link>
        </div>
      </motion.div>
    </>
  );
}
