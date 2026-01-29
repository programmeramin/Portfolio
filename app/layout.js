"use client";

import "./globals.css";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { ThemeProvider } from "next-themes";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* ThemeProvider handles dark/light class dynamically */}
        <ThemeProvider
          attribute="class"   // adds 'dark' class to <html> automatically
          defaultTheme="light"
          enableSystem        // optional: respect system theme
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
