import Link from "next/link";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
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



export default function Home() {
  return (
    <>
      <div className="dark:bg-[#0c101a] bg-gray-150 min-h-screen flex justify-center items-center">
        <div className="max-w-7xl mx-auto mt-30">
          {/* Column Layout */}
          <div className="flex flex-col items-center gap-6 justify-center mx-auto">
            {/* Top Button */}
            <button className="px-6 py-3  self-center dark:bg-[#091c4d] dark:text-amber-100 bg-gray-200 rounded-full outline-none">
              ✨ Enter My World of Innovation
            </button>

            {/* Title */}
            <h1 className="text-5xl  md:text-6xl lg:text-7xl font-bold text-center sm:mb-2 leading-tight">
              <span className="block bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent tracking-tighter">
                Full-Stack
              </span>
              <span className="block bg-gradient-to-r from-primary via-blue-500 to-purple-600 bg-clip-text text-center text-transparent tracking-widest">
                JavaScript
              </span>
              <span className="block bg-gradient-to-r from-foreground text-center via-foreground to-foreground/80 bg-clip-text text-transparent ">
                Developer
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className="text-center text-2xl xs:text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl px-2 leading-relaxed"
              style={{ opacity: 1, transform: "none" }}
            >
              I build modern,{" "}
              <span
                className="font-semibold"
                style={{ color: "rgb(81, 133, 232)" }}
              >
                scalable, and high-performance
              </span>{" "}
              web applications using React, Next.js, Node.js, and the latest
              technologies—turning ideas into exceptional{" "}
              <span className="text-blue-500 font-semibold uppercase">
                digital experiences.
              </span>{" "}
              together.
            </p>

            <div className="flex justify-center gap-6">
              <button className="flex gap-2 items-center text-white bg-blue-600 p-2 rounded-xl overflow-hidden cursor-pointer px-4 outline-none">
                <span>
                  <FaArrowDown size={20} />
                </span>
                View My Work
              </button>
              <button className="flex items-center gap-4 dark:bg-[#080f20] p-2 px-4 border border-blue-400 rounded-2xl cursor-pointer outline-none">
                <span>
                  <FaArrowRightLong />
                </span>
                Download CV
              </button>
            </div>

            <div className="flex items-center gap-5 mt-2 mb-10 text-gray-800 dark:text-gray-200">
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
            </div>
          </div>
        </div>
      </div>

      {/* About me */}

      <div className="w-full dark:bg-[#070f22] bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="flex w-full">
            <Image
              src="/image/my-photo.png"
              alt="Profile"
              width={350}
              height={400}
              className="overflow-hidden rounded-l-2xl"
            />
            <Image
              src="/image/my-cover.png"
              alt="Profile"
              width={350}
              height={400}
              className=" overflow-hidden mr-20 rounded-r-2xl"
            />
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-4">
              About <span className="text-blue-400">Me</span>
            </h2>

            <p className="text-gray-300 leading-relaxed mb-4">
              I'm a passionate Full Stack JavaScript Developer with experience
              building modern web applications. I love turning complex problems
              into simple, beautiful, and intuitive solutions.
            </p>

            <p className="text-gray-300 leading-relaxed mb-8">
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community.
            </p>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-6 mb-10">
              <div className="bg-[#0d1224] border border-gray-700 p-6 rounded-xl text-center">
                <div className="text-blue-400 text-3xl mb-2">&lt;/&gt;</div>
                <h3 className="text-white text-xl font-bold">100+</h3>
                <p className="text-gray-400 text-sm">Projects Completed</p>
              </div>

              <div className="bg-[#0d1224] border border-gray-700 p-6 rounded-xl text-center">
                <div className="text-blue-400 text-3xl mb-2">☕</div>
                <h3 className="text-white text-xl font-bold">1000+</h3>
                <p className="text-gray-400 text-sm">Cups of Coffee</p>
              </div>

              <div className="bg-[#0d1224] border border-gray-700 p-6 rounded-xl text-center">
                <div className="text-blue-400 text-3xl mb-2">👥</div>
                <h3 className="text-white text-xl font-bold">50+</h3>
                <p className="text-gray-400 text-sm">Happy Clients</p>
              </div>
            </div>

            {/* Button */}
            <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-semibold transition">
              Learn More About Me →
            </button>
          </div>
        </div>
      </div>

      {/* Tech Stack */}

      <div>
        <TechStack />
      </div>
    </>
  );
}
