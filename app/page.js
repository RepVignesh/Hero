'use client';

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { useState, useEffect } from "react";

export default function Home() {

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [themeLoaded, setThemeLoaded] = useState(false);

  // Load saved theme
  useEffect(() => {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setIsDarkMode(true);
    } 
    else {
      setIsDarkMode(false);
    }

    setThemeLoaded(true);

  }, []);


  // Save theme whenever user changes it
  useEffect(() => {

    if (!themeLoaded) return;

    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } 
    else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }

  }, [isDarkMode, themeLoaded]);


  return (
    <>
      <Navbar
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />

      <Header
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />

      <About isDarkMode={isDarkMode} />

      <Services isDarkMode={isDarkMode} />

      <Work isDarkMode={isDarkMode} />

      <Contact isDarkMode={isDarkMode} />

      <Footer isDarkMode={isDarkMode} />
    </>
  );
}