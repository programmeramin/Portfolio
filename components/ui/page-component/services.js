"use client"
import { SiBackendless } from "react-icons/si";
import { PiBatteryVerticalFullFill } from "react-icons/pi";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
export default function MyServices() {
    
  return (
    <>
      <div className="w-full py-20 dark:bg-[#040f2b] bg-white justify-center items-center">
        <div className="container mx-auto w-full ">
          <h1 className="text-center text-3xl font-bold mb-2">
            My {""}
            <span className="text-blue-600 text-3xl font-bold">Services</span>
          </h1>
          <p className="lg:text-xl md:text-md text-center font-medium dark:text-gray-300 text-gray-800 mb-10">
            I offer comprehensive web development services to bring your ideas
            to life
          </p>

          <div className="grid lg:grid-cols-3 md:grid-cols-1 px-5 gap-5">
            <div className="text-center py-10 items-center justify-center dark:bg-[#040f2b] bg-white border dark:border-gray-500 rounded-xl border-gray-500 mb-6 transform transition duration-700 hover:scale-105">
              <div className="text-blue-500 text-3xl mb-2">&lt;/&gt;</div>
              <h1 className="lg:text-3xl md:text-2xl sm:text-xl mb-1 dark:text-gray-300 text-gray-700">
                Frontend Development
              </h1>
              <p className="dark:text-gray-300 text-gray-800 font-medium text-md ">
                Modern, responsive web applications using React, Next.js, and
                TypeScript.
              </p>
            </div>

            <div className="text-center py-10 items-center justify-center dark:bg-[#040f2b] bg-white border dark:border-gray-500 mb-6 rounded-xl border-gray-500 transform transition duration-700 hover:scale-105">
              <div className="text-blue-500 text-3xl mb-2 flex justify-center">
                <SiBackendless size={35} />
              </div>
              <h1 className="lg:text-3xl md:text-2xl sm:text-xl mb-1">
                Backend Development
              </h1>
              <p className="dark:text-gray-300 text-gray-800 font-medium text-md ">
                Scalable APIs and server-side applications with Node.js and
                databases.
              </p>
            </div>

            <div className="text-center py-10 items-center dark:bg-[#040f2b] bg-white border dark:border-gray-500 mb-6 rounded-xl border-gray-500 transform transition duration-700 hover:scale-105">
              <div className="w-full text-blue-500 text-3xl mb-2 flex justify-center">
                <PiBatteryVerticalFullFill size={35} />
              </div>

              <h1 className="lg:text-3xl md:text-2xl sm:text-xl mb-1">
                Full-Stack Solutions
              </h1>

              <p className="dark:text-gray-300 text-gray-800 font-medium text-md ">
                End-to-end web applications with seamless frontend and backend
                integration.
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <button className="flex items-center text-white gap-5 bg-gradient-to-r via-purple-700 px-5 py-2 rounded-md to-pink-600 from-indigo-700 hover:via-purple-900 hover:from-indigo-800 hover:to-pink-800 transform transition hover:scale-105 duration-500">
              View All Services
              <Link href="#">
                <FaArrowRightLong />
              </Link>
            </button>
          </div>
        </div>
      </div>

      {/* ready to start project */}

      <div className="w-full bg-white dark:bg-[#020d23] py-20 flex flex-col items-center text-center px-4 transition-colors duration-300">
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
      </div>
    </>
  );
}
