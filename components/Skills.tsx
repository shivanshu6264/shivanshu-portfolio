
"use client";

import {
  Code2,
  Database,
  Globe,
  Server,
  BrainCircuit,
  GitBranch,
} from "lucide-react";
import { motion } from "framer-motion";

const skillGroups = [
  {
    icon: Code2,
    title: "Programming",
    skills: ["Python", "SQL", "DSA", "OOP"],
  },
  {
    icon: Globe,
    title: "Frontend",
    skills: ["HTML", "Tailwind CSS", "React.js", "Next.js"],
  },
  {
    icon: Server,
    title: "Backend",
    skills: ["Python", "FastAPI", "Node.js", "REST APIs"],
  },
  {
    icon: Database,
    title: "Database",
    skills: ["MySQL", "DBMS"],
  },
  {
    icon: BrainCircuit,
    title: "AI / GenAI",
    skills: ["Machine Learning", "Generative AI", "LLMs", "RAG"],
  },
  {
    icon: GitBranch,
    title: "Tools & Systems",
    skills: ["Git", "GitHub", "Operating Systems"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-[#050505]">
      <div className="section-container">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-indigo-400">
            Skills
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            My technical{" "}
            <span className="text-indigo-400">toolkit.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
            A mix of programming, web development, backend engineering,
            databases, and AI technologies that I'm currently working with.
          </p>
        </motion.div>

        {/* Skill Groups */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                }}
                className="border border-white/10 bg-white/[0.02] p-6 transition-colors duration-300 hover:border-indigo-400/30"
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="border border-indigo-400/20 bg-indigo-400/[0.06] p-2">
                    <Icon size={20} className="text-indigo-400" />
                  </div>

                  <h3 className="text-lg font-semibold text-white">
                    {group.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-zinc-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Portfolio Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 border-t border-white/10 pt-10"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-zinc-500">
            This Portfolio
          </p>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-500">
            Built with a modern frontend stack, keeping the interface
            responsive, accessible, and focused on the content.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "Next.js",
              "React",
              "TypeScript",
              "Tailwind CSS",
              "Framer Motion",
              "Lucide React",
            ].map((technology) => (
              <span
                key={technology}
                className="border border-white/10 px-3 py-1.5 text-sm text-zinc-400 transition-colors duration-200 hover:border-indigo-400/30 hover:text-white"
              >
                {technology}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

