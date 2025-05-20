import * as React from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";

const projects = [
  {
    id: 1,
    title: "Dino Game \n (using Cursor AI)",
    description: "Reimagined the classic Chrome dinosaur game as a responsive, web-based application using React and TypeScript. This version introduces enhanced gameplay with smooth jump and double-jump mechanics, dynamic obstacle generation, real-time score tracking, and precise collision detection. Uniquely, the entire project was developed using Cursor AI, showcasing the potential of AI-assisted development in creating engaging browser-based games.",
    image: "/projects/dino-game.png",
    tags: ["React", "TypeScript", "Cursor AI"],
    demoUrl: undefined,
    githubUrl: "https://github.com/tulika22/dino-game",
  },
  {
    id: 2,
    title: "Pathfinding Visualizer",
    description:
      "Built a React app that lets you explore how popular pathfinding algorithms like Dijkstra\'s, A*, BFS, and DFS work. You can set start/end points, add walls, and watch the algorithms find paths in real time with smooth animations. It’s a fun, interactive way to see how these algorithms navigate a grid, perfect for learning and teaching. Features a clean, responsive design and dynamic visuals.",
    image: "/projects/pathfinding-visualizer.png",
    tags: ["React", "Algorithm", "JSX"],
    demoUrl: "https://pathfinding-visualizer-react.vercel.app/",
    githubUrl: "https://github.com/tulika22/Pathfinding-Visualizer-React",
  },
  {
    id: 3,
    title: "Text Summarizer",
    description:
      "Built a full-stack web app that uses OpenAI\'s language models to create personalized text summaries. Users can set a word limit and choose from different personas to shape the tone and style of the output. The app features a fast and responsive UI built with Vite, secure API handling with Node.js, and smooth, real-time interactions for an intuitive user experience.",
    image: "/projects/text-summarizer.png",
    tags: ["JavaScript", "Python", "OpenAI API", "Vite"],
    demoUrl: undefined,
    githubUrl: "https://github.com/tulika22/text_summaries",
  },
  
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Not just projects, but playgrounds for ideas—built to explore, 
        learn, and sometimes fail forward in the name of growth.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary text-primary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">
                  {project.title.split("\n").map((line, idx) => (
                    <React.Fragment key={idx}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.demoUrl &&
                      <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <SiGithub size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/tulika22"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
