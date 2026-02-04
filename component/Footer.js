"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaLinkedin,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {

  const pathname = usePathname();

  return (
    <footer className="dark:bg-[#0c101a] bg-gray-150  border-t border-gray-400">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-0 lg:px-0 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Left Section */}
        <div>
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl sm:text-3xl font-bold tracking-wide"
          >
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-lg text-white">
              AMIN.DEV
            </span>
          </Link>

          <p className="text-md dark:text-gray-300 text-gray-700 leading-relaxed my-3">
            Full Stack MERN Developer passionate about creating modern,
            scalable, and interactive web applications with clean UI/UX.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-5 text-gray-800 dark:text-gray-200">
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

        {/* Middle Section - Quick Links */}
        <div>
          <h3 className="text-md font-semibold text-gray-800 dark:text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-0.75 ">
            <li className="text-sm dark:text-gray-200 text-gray-800">
              <Link
                href="/"
                className={`${
                  pathname === "/"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "hover:text-blue-500 transition"
                }`}
              >
                HOME
              </Link>
            </li>
            <li className="text-sm dark:text-gray-200 text-gray-800">
              <Link
                href="/about"
                className={`${
                  pathname === "/about"
                    ? "text-blue-600 border-b-2 border-blue-600 transition delay-100"
                    : "hover:text-blue-500 transition delay-100"
                }`}
              >
                ABOUT ME
              </Link>
            </li>
            <li className="text-sm dark:text-gray-200 text-gray-800">
              <Link
                href="/projects"
                className={`${
                  pathname === "/projects"
                    ? "text-blue-600 border-b-2 border-blue-600 transition delay-100"
                    : "hover:text-blue-500 transition delay-100"
                }`}
              >
                PROJECTS
              </Link>
            </li>
            <li className="text-sm dark:text-gray-200 text-gray-800">
              <Link
                href="/services"
                className={`${
                  pathname === "/services"
                    ? "text-blue-600 border-b-2 border-blue-600 transition delay-100"
                    : "hover:text-blue-500 transition delay-100"
                }`}
              >
                SERVICES
              </Link>
            </li>

            <li className="text-sm dark:text-gray-200 text-gray-800">
              <Link
                href="/blog"
                className={`${
                  pathname === "/blog"
                    ? "text-blue-600 border-b-2 border-blue-600 transition delay-100"
                    : "hover:text-blue-500 transition delay-100"
                }`}
              >
                BLOG
              </Link>
            </li>

            <li className="text-sm dark:text-gray-200 text-gray-800">
              <Link
                href="/contact"
                className={`${
                  pathname === "/contact"
                    ? "text-blue-600 border-b-2 border-blue-600 transition delay-100"
                    : "hover:text-blue-500 transition delay-100"
                }`}
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Section - Contact */}
        <div>
  <h3 className="text-lg font-semibold text-white mb-4">
    Get In Touch
  </h3>

  <ul className="space-y-3 text-gray-400">
    <li className="flex items-center gap-3">
      <Mail size={18} className="text-blue-500" />
      <span className="dark:text-gray-200 text-gray-800">
        programmeraminbd@gmail.com
      </span>
    </li>

    <li className="flex items-center gap-3">
      <Phone size={18} className="text-blue-500" />
      <span className="dark:text-gray-200 text-gray-800">
        +8801794861241
      </span>
    </li>

    <li className="flex items-center gap-3">
      <MapPin size={18} className="text-blue-500" />
      <span className="dark:text-gray-200 text-gray-800">
        Dhaka, Bangladesh
      </span>
    </li>
  </ul>

  {/* Social Icons */}
   <div className="flex items-center gap-4 mt-5 text-gray-800 dark:text-gray-200">
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

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()}{" "}
        <span className="text-white font-semibold">AMIN.DEV</span>. All rights
        reserved.
      </div>
    </footer>
  );
}
