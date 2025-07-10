import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Components Flowbite-react
import { Button, Navbar, TextInput } from "flowbite-react";
import Link from "next/link";

// Icons
import { Search } from "lucide-react";
import { Sun } from 'lucide-react';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Amin Islam Home",
  description: "Amin Islam Portfolio Home Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar className="border-b-2">
          <Link
            href="/"
            className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
          >
            <span className="px-2 py-2 bg-gradient-to-r from-indigo-800 via-purple-800 to-pink-800 rounded-l-lg text-white">
              AMIN
            </span>
            <span className="py-2 pr-2 bg-gradient-to-l from-fuchsia-700 via-purple-800 to-pink-800 dark:text-white rounded-r-lg text-white">
              DEV
            </span>
          </Link>

          <form action="">
            <TextInput
              type="text"
              placeholder="Search......"
              className="hidden lg:inline"/>
              
          </form>
   
        <div className="flex gap-2 md:order-2">
          <Button className="w-16 h-10 hidden items-center sm:inline cursor-pointer">
            <Sun className=''/>
          </Button>

          <Link className="self-center cursor-pointer" href="/signin">
            <Button gradientDuoTone="purpleToPink">
              Sign In
            </Button>
          </Link>
        </div>

        </Navbar>

        

        {children}
      </body>
    </html>
  );
}
