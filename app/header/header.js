"use client";

// next link component
import { useState } from "react";
import CustomLink from "../components/CustomLink";

// Icons
import { Sun } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle the toggle click
  const handleToggleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="border-b-2 shadow-md dark:text-white bg-white sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          {/**Logo */}
          <div className="logo text-white">
            <CustomLink
              className="self-center whitespace-nowrap text-sm sm:text-xl dark:text-white"
              path="/"
            >
              <span className="px-2 py-2 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-700 rounded-l-lg font-bold">
                AMIN
              </span>
              <span className="py-2 pr-3 bg-gradient-to-l from-indigo-800 via-purple-800 to-pink-700 rounded-r-lg">
                DEV
              </span>
            </CustomLink>
          </div>

        

          {/** Navigation Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <ul className="flex gap-5">
              <li>
                <CustomLink path="/">HOME</CustomLink>
              </li>
              <li>
                <CustomLink path="/about">ABOUT</CustomLink>
              </li>
              <li>
                <CustomLink path="/projects">PROJECTS</CustomLink>
              </li>
              <li>
                <CustomLink path="/blog">BLOG</CustomLink>
              </li>
              <li>
                <CustomLink path="/contact">CONTACT</CustomLink>
              </li>
            </ul>
          </div>
          
            {/** Hamburger */}
         <div className="flex items-center space-x-2">
          <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition self-center dark:text-white cursor-pointer">
            <span className="text-sm font-semibold">Sign In</span>
          </button>
          <button className="text-white bg-blue-600 p-2 rounded hover:bg-blue-700 transition px-3 cursor-pointer">
            <Sun className="w-4 h-4"/>
          </button>
          <button
            className="md:hidden border rounded p-1"
            onClick={handleToggleClick}
          >
            ☰
          </button>

           </div>
           </nav>

          {/** Mobile Menu */}
          {isOpen && (
            <div className="md:hidden bg-white border-t border-gray-200 px-4 py-2 space-y-2">
              <ul onClick={() => setIsOpen(false)} className="block px-4 py-2 rounded hover:bg-gray-100 transition text-gray-700 ">
                <li className="dark:text-white text-gray-950 font-bold py-1">
                  < CustomLink path="/">HOME</CustomLink>
                </li>
                <li className="dark:text-white text-gray-950 font-bold py-1">
                  < CustomLink path="/about">ABOUT</CustomLink>
                </li>
                <li className="dark:text-white text-gray-950 font-bold py-1">
                  < CustomLink path="/projects">PROJECTS</CustomLink>
                </li>
                <li className="dark:text-white text-gray-950 font-bold py-1">
                  < CustomLink path="/blog">BLOG</CustomLink>
                </li>
                <li className="dark:text-white text-gray-950 font-bold py-1">
                  < CustomLink path="/contact">CONTACT</CustomLink>
                </li>
              </ul>
            </div>
          )}
        
      </header>
    </>
  );
};

export default Header;
