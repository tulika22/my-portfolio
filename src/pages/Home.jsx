import React, { useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { PetalBackground } from "@/components/PetalBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { ExperienceSection } from "../components/ExperienceSection";

export const Home = () => {
  // const { theme } = useTheme();
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
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background Effects */}
      {isDarkMode ? <StarBackground /> : <PetalBackground />}

      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection/>
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
