"use client"

import "./globals.css";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { ThemeProvider } from "next-themes";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body lang="en">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
