import React, { useState, useEffect } from "react";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { PetalBackground } from "@/components/PetalBackground";
import {CodingChallenge} from '../components/CodingChallenge';


export const  Learnings = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
  
    useEffect(() => {
      const checkTheme = () => {
        const storedTheme = localStorage.getItem("theme");
        setIsDarkMode(storedTheme === "dark");
      };
  
      checkTheme();
  
      window.addEventListener("themeChanged", checkTheme);
  
      return () => window.removeEventListener("themeChanged", checkTheme);
    }, []);
  return (
    <div className="max-w-5xl mx-auto p-6">
       <ThemeToggle />
      {isDarkMode ? <StarBackground /> : <PetalBackground />}
      <div className="flex items-center space-x-2 mb-6 m-[10px]">
      <a
        href="/#hero"
        className="flex items-center text-primary transition-colors duration-300 hover:text-xxl"
      >          
        <span className="text-xl">&#8592;</span> {/* Unicode left arrow */}
          <span className="ml-1">Back to Home</span>
        </a>
      </div>
      <h1 className="text-4xl font-extrabold mb-8 text-center">My Learnings</h1>
      <section className="mb-10">
        {/* <h2 className="text-2xl font-semibold mb-4">Coding Challenge</h2> */}
        <CodingChallenge />
      </section>

      {/* You can add more sections here for other learnings */}
      {/* <section>
        <h2 className="text-2xl font-semibold mb-4">Other Learning Section</h2>
        <p>Write about your other learnings here...</p>
      </section> */}
    </div>
  );
}