"use client";

import  React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { TbArrowsCross } from "react-icons/tb";
import { IoIosSunny } from "react-icons/io";
import { FaRegMoon } from "react-icons/fa";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme, resolvedTheme } = useTheme(); // use resolvedTheme

  const toggleTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-150 dark:bg-[#0c101a] backdrop-blur-md z-50 dark:border-gray-500 shadow-sm transition-colors duration-300">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
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
          <div className="hidden md:flex items-center lg:space-x-8 md:space-x-3 font-semibold text-gray-700 dark:text-gray-200">
            {["/", "/about", "/projects", "/services", "/blog", "/contact"].map(
              (link, idx) => {
                const name =
                  link === "/" ? "HOME" : link.replace("/", "").toUpperCase();
                return (
                  <Link
                    key={idx}
                    href={link}
                    className={`${
                      pathname === link
                        ? "text-blue-600 border-b-2 border-blue-600 transition delay-100"
                        : "hover:text-blue-600"
                    }`}
                  >
                    {name}
                  </Link>
                );
              }
            )}
          </div>

          {/* Theme Toggle Button */}
          <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            className="relative transition-none ml-4"
          >    
            {/* Sun Icon */}
            <IoIosSunny
              className={`h-[1.2rem] w-[1.2rem] transition-transform ${
                resolvedTheme === "dark"
                  ? "scale-0 -rotate-90"
                  : "scale-100 rotate-0"
              }`}
            />

            {/* Moon Icon */}
            <FaRegMoon
              className={`absolute h-[1.2rem] w-[1.2rem] transition-transform ${
                resolvedTheme === "dark"
                  ? "scale-100 rotate-0"
                  : "scale-0 rotate-90"
              }`}
            />

            <span className="sr-only">Toggle theme</span>
          </Button>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-100 focus:outline-none ml-2"
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
          {["/", "/about", "/projects", "/services", "/blog", "/contact"].map(
            (link, idx) => {
              const name =
                link === "/" ? "HOME" : link.replace("/", "").toUpperCase();
              return (
                <Link
                  key={idx}
                  href={link}
                  className={`${
                    pathname === link
                      ? "text-blue-600 border-b-2 hover:text-blue-800 transition delay-75"
                      : "hover:text-blue-600 transition delay-75"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {name}
                </Link>
              );
            }
          )}
        </div>
      </div>
    </nav>
  );
}
