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
      <div className="container mx-auto w-full py-20 dark:bg-[#0c101a] bg-white justify-center items-center">
        <div className="container mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 200 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 200 }}
            transition={{ duration: 0.8 }}
            
          >
            <h1 className="text-center text-3xl md:text-4xl font-bold mb-6">
              My {""}
              <span className="text-blue-600 ">Services</span>
            </h1>
            <p className="text-center text-xl lg:text-2xl md:text-xl dark:text-gray-300 text-gray-900 mb-12">
              I offer comprehensive web development services to bring your ideas
              to life
            </p>
          </motion.div>

          <motion.div
            ref={ref}
            className="grid lg:grid-cols-2 md:grid-cols-2 px-5 gap-5"
          >
            {/* Frontend */}
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 200 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center py-10 items-center justify-center dark:bg-[#040f2b] bg-white border dark:border-gray-500 rounded-xl border-gray-500 mb-6 transform transition duration-700 hover:scale-105"
            >
              <div className="text-blue-500 text-3xl mb-2 px-2">&lt;/&gt;</div>
              <h1 className="lg:text-4xl md:text-2xl text-2xl mb-1 dark:text-gray-300 text-gray-700 px-2">
                Frontend Development
              </h1>
              <p className="dark:text-gray-300 text-gray-800 font-medium text-md px-1">
                High-performance modern responsive frontend experiences using React, Next.js, and TypeScript.
              </p>
            </motion.div>

            {/* Backend */}
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 200 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center py-10 items-center justify-center dark:bg-[#040f2b] bg-white border dark:border-gray-500 mb-6 rounded-xl border-gray-500 transform transition duration-700 hover:scale-105"
            >
              <div className="text-blue-500 text-3xl mb-2 flex justify-center ">
                <SiBackendless size={35} />
              </div>
              <h1 className="lg:text-4xl md:text-2xl text-2xl mb-1 dark:text-gray-300 text-gray-700 px-2">
                Backend Development
              </h1>
              <p className="dark:text-gray-300 text-gray-800 font-medium text-md px-2">
                Scalable APIs and server-side applications with Node.js or Nest.js and
                databases MongoDB & PostgreSQL.
              </p>
            </motion.div>

            {/* Full-Stack */}
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 200 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center py-10 items-center dark:bg-[#040f2b] bg-white border dark:border-gray-500 mb-6 rounded-xl border-gray-500 transform transition duration-700 hover:scale-105"
            >
              <div className="w-full text-blue-500 text-3xl mb-2 flex justify-center">
                <PiBatteryVerticalFullFill size={35} />
              </div>
              <h1 className="lg:text-4xl md:text-2xl text-2xl mb-1 dark:text-gray-300 text-gray-700 px-2">
                Full-Stack Solutions
              </h1>
              <p className="dark:text-gray-300 text-gray-800 font-medium text-md px-1">
                Seamless end-to-end web applications solutions with integrated frontend and backend.
              </p>
            </motion.div>

            {/* AI/ML Integration */}
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 200 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center py-10 items-center dark:bg-[#040f2b] bg-white border dark:border-gray-500 mb-6 rounded-xl border-gray-500 transform transition duration-700 hover:scale-105"
            >
              <div className="text-blue-500 text-3xl mb-2 flex justify-center">
                <PiCpuFill size={35} />
              </div>
              <h1 className="lg:text-4xl md:text-2xl text-2xl mb-1 dark:text-gray-300 text-gray-700 px-2">
                AI / ML Integration
              </h1>
              <p className="dark:text-gray-300 text-gray-800 font-medium text-md px-2">
                Build intelligent applications using AI/ML models integrated
                with your web and backend systems.
              </p>
            </motion.div>
          </motion.div>

          <div
            className="flex justify-center items-center"
          >
            <button className="flex items-center text-white gap-5 bg-gradient-to-r via-purple-700 px-5 py-2 rounded-md to-pink-600 from-indigo-700 hover:via-purple-900 hover:from-indigo-800 hover:to-pink-800 transform transition hover:scale-105 duration-500">
              View All Services
              <Link href="#">
                <FaArrowRightLong />
              </Link>
            </button>
          </div>
        </div>
      </div>

     
    </>
  );
}
