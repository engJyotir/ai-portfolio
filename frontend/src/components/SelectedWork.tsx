"use client";

import { motion } from "framer-motion";
import { projects } from "../data/projects";

export default function SelectedWork() {
  return (
    <section
      id="projects"
      className="
      bg-black
      text-white
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-8
        lg:px-16
        "
      >
        <div className="py-32">
          <p
            className="
            text-zinc-500
            text-lg
            mb-6
            "
          >
            Selected Work
          </p>

          <h2
            className="
            text-5xl
            md:text-7xl
            font-bold
            tracking-tight
            "
          >
            Building AI
            <br />
            products that
            <br />
            people use.
          </h2>
        </div>

        {projects.map((project) => (
          <motion.div
            key={project.number}
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.6,
            }}
            className="
            min-h-screen
            border-t
            border-zinc-900
            flex
            items-center
            "
          >
            <div
              className="
              grid
              lg:grid-cols-2
              gap-16
              w-full
              "
            >
              <div>
                <div
                  className="
                  text-zinc-800
                  text-8xl
                  md:text-9xl
                  font-bold
                  "
                >
                  {project.number}
                </div>
              </div>

              <div>
                <h3
                  className="
                  text-4xl
                  md:text-6xl
                  font-bold
                  tracking-tight
                  "
                >
                  {project.title}
                </h3>

                <p
                  className="
                  mt-6
                  text-2xl
                  text-zinc-400
                  "
                >
                  {project.subtitle}
                </p>

                <p
                  className="
                  mt-8
                  text-lg
                  leading-relaxed
                  text-zinc-500
                  max-w-2xl
                  "
                >
                  {project.description}
                </p>

                <div
                  className="
                  flex
                  flex-wrap
                  gap-3
                  mt-10
                  "
                >
                  {project.stack.map(
                    (tech) => (
                      <span
                        key={tech}
                        className="
                        px-4
                        py-2
                        rounded-full
                        border
                        border-zinc-800
                        text-sm
                        text-zinc-400
                        "
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>

                <div
                  className="
                  flex
                  gap-4
                  mt-12
                  "
                >
                  {"liveUrl" in project &&
                    project.liveUrl && (
                      <a
                        href={
                          project.liveUrl
                        }
                        target="_blank"
                        className="
                        px-6
                        py-3
                        rounded-full
                        bg-white
                        text-black
                        font-medium
                        "
                      >
                        Live Demo
                      </a>
                    )}

                  <a
                    href={
                      project.githubUrl
                    }
                    target="_blank"
                    className="
                    px-6
                    py-3
                    rounded-full
                    border
                    border-zinc-800
                    "
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}