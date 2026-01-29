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
      <div className="w-full py-20 dark:bg-[#040f2b] bg-white justify-center items-center">
        <div className="container mx-auto w-full ">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 200 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 200 }}
            transition={{ duration: 0.8 }}
            className="container text-center mx-auto max-w-2xl"
          >
            <h1 className=" text-3xl font-bold mb-2">
              My {""}
              <span className="text-blue-600 text-3xl font-bold">Services</span>
            </h1>
            <p className="lg:text-xl md:text-md text-center font-medium dark:text-gray-300 text-gray-800 mb-10">
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
              <div className="text-blue-500 text-3xl mb-2">&lt;/&gt;</div>
              <h1 className="lg:text-3xl md:text-2xl sm:text-xl mb-1 dark:text-gray-300 text-gray-700">
                Frontend Development
              </h1>
              <p className="dark:text-gray-300 text-gray-800 font-medium text-md">
                Modern, responsive web applications using React, Next.js, and
                TypeScript.
              </p>
            </motion.div>

            {/* Backend */}
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 200 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center py-10 items-center justify-center dark:bg-[#040f2b] bg-white border dark:border-gray-500 mb-6 rounded-xl border-gray-500 transform transition duration-700 hover:scale-105"
            >
              <div className="text-blue-500 text-3xl mb-2 flex justify-center">
                <SiBackendless size={35} />
              </div>
              <h1 className="lg:text-3xl md:text-2xl sm:text-xl mb-1 dark:text-gray-300 text-gray-700">
                Backend Development
              </h1>
              <p className="dark:text-gray-300 text-gray-800 font-medium text-md">
                Scalable APIs and server-side applications with Node.js and
                databases.
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
              <h1 className="lg:text-3xl md:text-2xl sm:text-xl mb-1 dark:text-gray-300 text-gray-700">
                Full-Stack Solutions
              </h1>
              <p className="dark:text-gray-300 text-gray-800 font-medium text-md">
                End-to-end web applications with seamless frontend and backend
                integration.
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
              <h1 className="lg:text-3xl md:text-2xl sm:text-xl mb-1 dark:text-gray-300 text-gray-700">
                AI / ML Integration
              </h1>
              <p className="dark:text-gray-300 text-gray-800 font-medium text-md">
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
