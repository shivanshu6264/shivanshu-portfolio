
"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "WorkTrack",
    subtitle: "Employee Productivity & Task Tracker",
    description:
      "A full-stack application for assigning and tracking employee tasks, monitoring productivity, and generating performance reports.",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "MySQL",
      "JWT Authentication",
    ],
  },
  {
    title: "PlacementReady",
    subtitle: "Placement Preparation Platform",
    description:
      "A platform that brings coding practice and aptitude preparation together to help students prepare for technical placement opportunities.",
    technologies: ["Next.js", "Tailwind CSS", "MySQL"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-[#050505]">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-indigo-400">
            Projects
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Things I've{" "}
            <span className="text-indigo-400">built.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
            Projects I've developed to apply my skills in full-stack
            development, databases, authentication, and problem solving.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="flex flex-col border border-white/10 bg-white/[0.02] p-7 transition-colors duration-300 hover:border-indigo-400/30"
            >
              <span className="text-xs font-medium tracking-widest text-zinc-600">
                PROJECT 0{index + 1}
              </span>

              <div className="mt-8">
                <h3 className="text-2xl font-semibold tracking-tight text-white">
                  {project.title}
                </h3>

                <p className="mt-1 text-sm font-medium text-indigo-300">
                  {project.subtitle}
                </p>

                <p className="mt-5 text-sm leading-7 text-zinc-400">
                  {project.description}
                </p>
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="border border-white/10 px-3 py-1.5 text-xs text-zinc-400"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-8">
                <div className="h-px w-full bg-white/10" />
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 border border-dashed border-white/10 px-6 py-5"
        >
          <p className="text-sm text-zinc-500">
            <span className="text-zinc-300">Next:</span> adding hands-on
            Generative AI projects as I continue building my AI engineering
            skills.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

