"use client";

import { SiBackendless } from "react-icons/si";
import { PiBatteryVerticalFullFill } from "react-icons/pi";
import { FaArrowRightLong } from "react-icons/fa6";
import { PiCpuFill } from "react-icons/pi";

import Link from "next/link";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";
export default function MyServices() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-50px",
  });

  return (
    <>
      <div className="w-full dark:bg-[#0c101a] bg-white justify-center items-center">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 200 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 200 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 px-4"
          >
            <h1 className="text-center text-3xl md:text-4xl font-bold mb-2">
              My {""}
              <span className="text-blue-600 ">Services</span>
            </h1>
             <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full mb-2"></div>
            <p className="text-center text-xl lg:text-2xl md:text-xl dark:text-gray-300 text-gray-900 mb-10">
              I offer comprehensive web development services to bring your ideas
              to life
            </p>
          </motion.div>

          <motion.div
            ref={ref}
            className="grid lg:grid-cols-2 md:grid-cols-2 gap-5 lg:px-0 px-4"
          >
            {/* Frontend */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="group border border-gray-200 dark:border-gray-700
             flex flex-col overflow-hidden
             bg-white dark:bg-gray-800
             rounded-md transform transition-transform duration-500 hover:scale-105"
            >
              {/* Image Section */}
              <div className="relative w-full h-52 lg:h-60 overflow-hidden">
                <img
                  src="/image/frontend.png"
                  alt="Frontend Development"
                  className="w-full h-full object-cover"
                />
                {/* subtle overlay */}
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors duration-500" />
              </div>

              {/* Content */}
              <div className="flex flex-col items-center text-center gap-3 px-5  py-6">
                <h3
                  className="text-2xl md:text-3xl font-semibold tracking-tight
                   text-gray-800 dark:text-gray-200"
                >
                  Frontend Development
                </h3>

                <p
                  className="text-sm md:text-base leading-relaxed
                  text-gray-600 dark:text-gray-300"
                >
                  High-performance modern responsive frontend experiences using
                  <span className="font-medium text-gray-800 dark:text-gray-100">
                    {" "}
                    React, Next.js,{" "}
                  </span>
                  and
                  <span className="font-medium text-gray-800 dark:text-gray-100">
                    {" "}
                    TypeScript
                  </span>
                  .
                  <br />
                  Clean, maintainable code for scalable applications.
                </p>
              </div>
            </motion.div>

            {/* Backend */}
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 200 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className=" border flex flex-col items-center gap-6 pb-10 bg-white dark:bg-gray-800 rounded-md shadow-xl hover:shadow-2xl transform transition-transform duration-500 hover:scale-105"
            >
              <div className="w-full">
                <img
                  src="/image/backend.png"
                  alt="Frontend Development"
                  className="rounded-md object-cover w-full lg:h-60 h-50"
                />
              </div>
              <div className="flex flex-col items-center text-center">
                <h1 className="lg:text-4xl md:text-2xl text-2xl mb-1 dark:text-gray-300 text-gray-700 px-2">
                  Backend Development
                </h1>
                <p
                  className="text-sm md:text-base leading-relaxed
                  text-gray-600 dark:text-gray-300"
                >
                  Scalable APIs and server-side applications with Node.js or
                  Nest.js <br /> and databases MongoDB & PostgreSQL.
                </p>
              </div>
            </motion.div>

            {/* Full-Stack */}
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 200 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className=" border flex flex-col items-center gap-6 pb-10 bg-white dark:bg-gray-800 rounded-md shadow-xl hover:shadow-2xl transform transition-transform duration-500 hover:scale-105"
            >
              <div className="w-full">
                <img
                  src="/image/full-stack.png"
                  alt="Frontend Development"
                  className="rounded-md object-cover w-full lg:h-60 h-50"
                />
              </div>
              <div className="flex flex-col items-center text-center">
                <h1 className="lg:text-4xl md:text-2xl text-2xl mb-1 dark:text-gray-300 text-gray-700 px-2">
                  Full-Stack Solutions
                </h1>
                <p
                  className="text-sm md:text-base leading-relaxed
                  text-gray-600 dark:text-gray-300"
                >
                  Seamless end-to-end web applications solutions <br /> with
                  integrated frontend and backend.
                </p>
              </div>
            </motion.div>

            {/* AI/ML Integration */}
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 200 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="border flex flex-col items-center gap-6 pb-10 bg-white dark:bg-gray-800 rounded-md shadow-xl hover:shadow-2xl transform transition-transform duration-500 hover:scale-105"
            >
              <div className="w-full">
                <img
                  src="/image/aiml.png"
                  alt="Frontend Development"
                  className="rounded-md object-cover w-full lg:h-60 h-50"
                />
              </div>
              <div className="flex flex-col items-center text-center">
                {" "}
                <h1 className="lg:text-4xl md:text-2xl text-2xl mb-1 dark:text-gray-300 text-gray-700 px-2">
                  AI / ML Integration
                </h1>
                <p
                  className="text-sm md:text-base leading-relaxed
                  text-gray-600 dark:text-gray-300"
                >
                  Build intelligent applications using AI/ML models integrated
                  <br /> with your web and backend systems.
                </p>
              </div>
            </motion.div>
          </motion.div>

          <div className="flex justify-center items-center mt-10">
             <a
              href="/services"
              className="group inline-flex items-center gap-3
             px-6 py-3 rounded-md
             text-sm md:text-base font-medium text-white
             bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600
             border border-indigo-500/40
             shadow-md hover:shadow-xl
             transition-all duration-500
             hover:scale-105 hover:-translate-y-0.5"
            >
              View all services
              <span className="transition-transform duration-500 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
