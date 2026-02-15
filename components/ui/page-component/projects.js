"use client";

import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { FaArrowRight } from "react-icons/fa";

export default function FeaturedProjects() {
  const projects = [
    {
      image:
        "https://media.licdn.com/dms/image/v2/D5612AQFaII5dbQ8rEw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1706873328047?e=2147483647&v=beta&t=-Fmq9K62vYo6CwkiH1QNdcALESIP61tMs_u4EbnNL6Q",
      title: "NextSkill (LMS)",
      desc: "An interactive learning platform with live classes, course search & filtering, and student enrollment system.",
      tags: [
        "Next.js",
        "Tailwind",
        "Shadcn UI",
        "Acerternity UI",
        "Resend",
        "Payment",
        "Motion",
        "Three.js",
        "Recharts",
      ],
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD-fyMo8iYNr91PJ18assxinvRe80RGd6YLA&s",
      title: "NextCode (Software Agency)",
      desc: "A professional portfolio website for a software agency, featuring services, project showcases, and client feedback.",
      tags: ["Next.js", "Tailwind", "Resend", "Three.js", "Framer"],
    },
    {
      image:
        "https://www.shutterstock.com/image-photo/new-email-notification-concept-business-260nw-2460973799.jpg",
      title: "Business Mail USA (News Portal)",
      desc: "A dynamic business news portal providing real-time updates and financial insights with CMS integration.",
      tags: ["Next.js", "Tailwind", "Server Actions", "Zod", "React Hook Form"],
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px",
  });

  return (
    <>
      <div className="w-full py-20 dark:bg-[#0c101a] text-white">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 200 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 200 }}
          transition={{ duration: 0.8, delay : 0.5 }}
          className="container w-full max-w-4xl mx-auto px-6 text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full"></div>

          <p className="text-center text-xl lg:text-2xl md:text-xl dark:text-gray-300 text-gray-900 mb-10">
            Here are some of my recent projects that showcase my skills and
            expertise.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div ref={ref}  className="grid lg:grid-cols-2 md:grid-cols-1 gap-6 px-4">
          {projects.map((item, index) => (
            <motion.div
              key={index}
              
              initial={{ opacity: 0, y: 200 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 200 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              key={index}
              className="dark:bg-[#0c101a] bg-white  rounded-xl border border-transparent hover:border-blue-400 transition-all 
            overflow-hidden flex flex-col transform duration-700 hover:scale-105"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 transform duration-800 hover:scale-115"
              />
              <div className="p-6 rounded-xl bg-white dark:bg-[#1F2937] shadow-md dark:shadow-lg transition-colors duration-300">
                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-200">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-2 mb-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {item.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full border transition-colors duration-300
          bg-gray-200 text-gray-800 border-gray-300
          dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
              href="/projects"
              className="group inline-flex items-center gap-3
             px-6 py-3 rounded-md
             text-sm md:text-base font-medium text-white
             bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600
             border border-indigo-500/40
             shadow-md hover:shadow-xl
             transition-all duration-500
             hover:scale-105 hover:-translate-y-0.5"
            >
              View all projects
              <span className="transition-transform duration-500 group-hover:translate-x-1">
                →
              </span>
            </a>
        </div>
      </div>
    </>
  );
}
