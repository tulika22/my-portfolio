import { Monitor, Code, User, BrainCircuit, BrainCogIcon, PuzzleIcon, Building, Building2, Briefcase, Folder } from "lucide-react";
import { BiBrain } from "react-icons/bi";
import { BsSuitcase } from "react-icons/bs";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Crafting Code & Brewing Magic
            </h3>

            <p className="text-muted-foreground">
            I'm a Full-Stack Web Developer with 2.5+ years of experience building scalable, 
            maintainable, and performant applications. 
            I specialize in crafting clean front-end interfaces and robust backend systems,
            with a strong focus on code quality and development best practices.
            </p>

            <p className="text-muted-foreground">
            Driven by curiosity and a love for problem-solving, 
            I continuously explore new technologies to stay current and deliver efficient, future-ready solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/resume.pdf"   // path to your resume file in the public folder
                download="TULIKA_TIWARI.pdf"  // optional: custom name for the downloaded file
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Full-Stack Developer</h4>
                  <p className="text-muted-foreground">
                  I create dependable software solutions spanning frontend and backend 
                  that perform consistently under pressure.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <PuzzleIcon className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Adaptive Problem Solver</h4>
                  <p className="text-muted-foreground">
                  I'm passionate about diagnosing and solving complex issues, 
                  driven by a commitment to excellence and learning.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Bridging Business & Tech</h4>
                  <p className="text-muted-foreground">
                  I align software development with business objectives, 
                  ensuring impactful and measurable results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
