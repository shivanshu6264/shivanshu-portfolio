
"use client";

import { Code2, BrainCircuit, Server } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  {
    icon: BrainCircuit,
    title: "AI & GenAI",
    description:
      "Building practical knowledge of Generative AI, RAG, LLM applications, Agentic AI, and AI system design.",
  },
  {
    icon: Server,
    title: "Backend Development",
    description:
      "Developing backend applications with Python, FastAPI, APIs, authentication, and database integration.",
  },
  {
    icon: Code2,
    title: "Software Development",
    description:
      "Strengthening programming fundamentals, DSA, and problem-solving while building practical applications.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-black">
      <div className="section-container">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-indigo-400">
            About Me
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            A developer focused on{" "}
            <span className="text-indigo-400">AI & software.</span>
          </h2>

          <div className="mt-7 max-w-3xl space-y-4 text-base leading-7 text-zinc-400">
            <p>
              I'm Shivanshu Tiwari, a Computer Science graduate specializing
              in Artificial Intelligence & Machine Learning.
            </p>

            <p>
              My current focus is on Python, backend development, and
              Generative AI. I learn by building applications, understanding
              how systems work, and solving programming problems along the
              way.
            </p>

            <p>
              I'm working toward an AI / GenAI Engineer role where I can
              combine software engineering fundamentals with modern AI
              technologies to build useful and reliable applications.
            </p>
          </div>
        </motion.div>

        {/* Highlights */}
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="border border-white/10 bg-white/[0.02] p-6 transition-colors duration-300 hover:border-indigo-400/30"
              >
                <div className="mb-5 inline-flex border border-indigo-400/20 bg-indigo-400/[0.06] p-2.5">
                  <Icon size={22} className="text-indigo-400" />
                </div>

                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

