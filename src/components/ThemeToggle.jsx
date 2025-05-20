import { Moon, Sun, SunDim, SunMedium, Sunrise, SunriseIcon, SunSnow } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { PiMoonFill } from "react-icons/pi";
import { RiMoonFill } from "react-icons/ri";
import { BiSun } from "react-icons/bi";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
      window.dispatchEvent(new Event("themeChanged"));
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
      window.dispatchEvent(new Event("themeChanged"));
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed bottom-5 right-5 z-50 p-3 rounded-full shadow-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2",
        isDarkMode
          ? "bg-primary text-white focus:ring-secondary"
          : "bg-white text-primary focus:ring-primary"
      )}
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <BsSunFill className="h-6 w-6 !text-white" />
      ) : (
        <RiMoonFill className="h-6 w-6 text-primary" />
      )}
    </button>
  );
};
