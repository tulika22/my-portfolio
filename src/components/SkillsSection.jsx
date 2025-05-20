import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiVite,
  SiNodedotjs,
  SiFirebase,
  SiPostgresql,
  SiRedis,
  SiRabbitmq,
  SiSqlite,
  SiScala,
  SiFlutter,
  SiDocker,
  SiGooglecloud,
  SiIntellijidea,
  SiGit,
  SiAndroidstudio,
  SiUnity,
  SiCplusplus,
  SiDart,
} from "react-icons/si";

import { VsCodeIcon, JavaIcon } from "./ui/icons";


const skills = [
  // Frontend
  { name: "React", icon: SiReact, category: "frontend" },
  { name: "TypeScript", icon: SiTypescript, category: "frontend" },
  { name: "Tailwind CSS", icon: SiTailwindcss, category: "frontend" },
  { name: "Flutter", icon: SiFlutter, category: "frontend" },
  { name: "HTML/CSS", icon: SiHtml5, category: "frontend" },
  { name: "JavaScript", icon: SiJavascript, category: "frontend" },
  { name: "Vite", icon: SiVite, category: "frontend" }, 

  // Backend
  { name: "Scala", icon: SiScala, category: "backend" },
  { name: "PostgreSQL", icon: SiPostgresql, category: "backend" },
  { name: "Redis", icon: SiRedis, category: "backend" },
  { name: "RabbitMQ", icon: SiRabbitmq, category: "backend" },
  { name: "Dart", icon: SiDart, category: "backend" },
  { name: "C/C++", icon: SiCplusplus, category: "backend" },
  { name: "Java", icon: JavaIcon, category: "backend" },
  { name: "Node.js", icon: SiNodedotjs, category: "backend" },
  { name: "Firebase", icon: SiFirebase, category: "backend" },
  { name: "SQLite", icon: SiSqlite, category: "backend" },
  

  // Tools
  { name: "VS Code", icon: VsCodeIcon, category: "tools / technologies" },
  { name: "IntelliJ IDEA", icon: SiIntellijidea, category: "tools / technologies" },
  { name: "Git", icon: SiGit, category: "tools / technologies" },
  { name: "Android Studio", icon: SiAndroidstudio, category: "tools / technologies" },
  { name: "Unity", icon: SiUnity, category: "tools / technologies" },
  { name: "Google Cloud", icon: SiGooglecloud, category: "tools / technologies" },
  { name: "Docker", icon: SiDocker, category: "tools / technologies" },

];

const categories = ["all", "frontend", "backend", "tools / technologies"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map((skill, key) => {
          const Icon = skill.icon;
          return (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover flex flex-col items-center"
            >
              <div className="mb-4 bg-primary/10 p-4 rounded-full">
                <Icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg text-center">{skill.name}</h3>
            </div>
          );
        })}
          {/* {filteredSkills.map((skill, key) => (

            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </section>
  );
};
