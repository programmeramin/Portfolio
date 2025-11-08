"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { TbArrowsCross } from "react-icons/tb";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 dark:bg-gray-900/90 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl sm:text-3xl font-bold tracking-wide"
          >
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-lg text-white">
           AMIN.DEV 
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 font-semibold text-gray-700 dark:text-gray-200">
            <Link
              href="/"
              className={`${
                pathname === "/"
                  ? "text-blue-600 border-b-2 border-blue-600 transition delay-100"
                  : "hover:text-blue-600"
              }`}
            >
              HOME
            </Link>
            <Link
              href="/about"
              className={`${
                pathname === "/about"
                  ? "text-blue-600 border-b-2 border-blue-600 transition delay-100"
                  : "hover:text-blue-600"
              }`}
            >
              ABOUT
            </Link>
            <Link
              href="/projects"
              className={`${
                pathname === "/projects"
                  ? "text-blue-600 border-b-2 border-blue-600 transition delay-100"
                  : "hover:text-blue-600"
              }`}
            >
              PROJECTS
            </Link>
            <Link
              href="/services"
              className={`${
                pathname === "/services"
                  ? "text-blue-600 border-b-2 border-blue-600 transition delay-100"
                  : "hover:text-blue-600"
              }`}
            >
              SERVICES
            </Link>
            <Link
              href="/blog"
              className={`${
                pathname === "/blog"
                  ? "text-blue-600 border-b-2 border-blue-600 transition delay-100"
                  : "hover:text-blue-600"
              }`}
            >
              BLOG
            </Link>
            <Link
              href="/contact"
              className={`${
                pathname === "/contact"
                  ? "text-blue-600 border-b-2 border-blue-600 transition delay-100"
                  : "hover:text-blue-600"
              }`}
            >
              CONTACT
            </Link>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-100 focus:outline-none"
            >
              {isOpen ? (
                <TbArrowsCross size={28} />
              ) : (
                <AiOutlineMenu size={28} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden bg-white dark:bg-gray-900 shadow-md overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pt-3 pb-6 space-y-1.5 text-gray-700 flex flex-col dark:text-gray-100 font-bold">
          <Link
            href="/"
            className={`${
              pathname === "/"
                ? "text-blue-600 border-b-2 border-blue-600 hover:text-blue-800 transition delay-100"
                : "hover:text-blue-500 transition delay-100"
            }`}
            onClick={() => setIsOpen(false)}
          >
            HOME
          </Link>
          <Link
            href="/about"
            className={`${
              pathname === "/about"
                ? "block text-blue-600 border-b-2 hover:text-blue-800 transition delay-75 "
                : "hover:text-blue-600"
            }`}
            onClick={() => setIsOpen(false)}
          >
            ABOUT
          </Link>
          <Link
            href="/projects"
            className={`${
              pathname === "/projects"
                ? "block text-blue-600 border-b-2 hover:text-blue-800 transition delay-75 "
                : "hover:text-blue-600"
            }`}
            onClick={() => setIsOpen(false)}
          >
            PROJECTS
          </Link>
          <Link
            href="/services"
            className={`${
              pathname === "/services"
                ? "block text-blue-600 border-b-2 hover:text-blue-800 transition delay-75 "
                : "hover:text-blue-600"
            }`}
            onClick={() => setIsOpen(false)}
          >
            SERVICES
          </Link>
          <Link
            href="/blog"
            className={`${
              pathname === "/blog"
                ? "block text-blue-600 border-b-2 hover:text-blue-800 transition delay-75 "
                : "hover:text-blue-600"
            }`}
            onClick={() => setIsOpen(false)}
          >
            BLOG
          </Link>
          <Link
            href="/contact"
            className={`${
              pathname === "/contact"
                ? "block text-blue-600 border-b-2 hover:text-blue-800 transition delay-75 "
                : "hover:text-blue-600"
            }`}
            onClick={() => setIsOpen(false)}
          >
            CONTACT
          </Link>

          {/* Mobile Sign In/Up */}
          {/* <div className="flex gap-3 pt-3">
            <button className="flex-1 px-4 py-2 text-sm font-medium border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 dark:hover:bg-gray-800 transition">
              Sign In
            </button>
            <button className="flex-1 px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-full hover:bg-blue-700 shadow transition">
              Sign Up
            </button>
          </div> */}
        </div>
      </div>
    </nav>
  );
}
