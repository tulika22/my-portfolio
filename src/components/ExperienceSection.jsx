import * as React from "react";
import { motion } from "framer-motion";


const experiences = [
  {
    id: 1,
    title: "SDE - 1 (Full Stack)",
    company: "SmartReach.io",
    duration: "Oct 2022 - Present",
    description:
    "Led full-stack development across frontend, backend, and DevOps — building reusable UI systems, optimizing API performance, and integrating third-party services (Stripe, Twilio, Slack, etc.). Increased code coverage to 100% and improved dev efficiency and scalability across the platform.",

    technologies: [
        "Java", "Scala", "React", "TypeScript", "Node.js", "Stripe", "Twilio", "Slack API",
        "Captain Data", "Docker", "GitHub Actions", "PostgreSQL", "Redis", "RabbitMQ"
      ],
  },
  {
    id: 2,
    title: "Student Intern",
    company: "INMAS, DRDO",
    duration: "July 2021 - Jan 2022",
    description:
    "Worked on the “UAV Interface Design & Cognitive Workload Estimation” project. Designed a desktop-based UAV control interface using Unity and C# for search and reconnaissance missions. Developed core UAV control functionalities to simulate real-world remote piloting scenarios and enhance human-system interaction research.",
    technologies: ["Unity", "C#", "Visual Studio Code"],
  },
  {
    id: 3,
    title: "Summer Intern",
    company: "IRDE, DRDO",
    duration: "May 2021 - July 2021",
    description:
      "Interned with the AI Group at IRDE, DRDO. Conducted a comparative study of object detection algorithms, focusing on Haar Cascade Classifier and YOLO. Implemented vehicle detection systems using both methods and evaluated performance trade-offs for real-time detection.",
    technologies: ["Python", "OpenCV", "YOLO", "Jupyter Notebook"],
  },
];
export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          <span className="text-primary">Experience</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A journey through internships and work experiences that shaped my skills, mindset, and passion for building impactful tech.
        </p>

        <div className="relative flex flex-col items-center space-y-10">
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-muted -translate-x-1/2" />
          
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="w-full max-w-2xl"
            >
              <div className="bg-card p-6 rounded-xl shadow-sm border border-border relative">
                <h3 className="text-lg font-semibold mb-1 text-center">{exp.title}</h3>
                <div className="text-sm text-muted-foreground mb-2 text-center">
                  <span className="font-bold text-primary">{exp.company} </span>• <span className="italic">{exp.duration}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4 text-center">
                  {exp.description}
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {exp.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-primary text-primary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
