
"use client";

import {
  BookOpen,
  Code2,
  BrainCircuit,
  Server,
} from "lucide-react";
import { motion } from "framer-motion";

const learningItems = [
  {
    icon: BrainCircuit,
    title: "Generative AI",
    description:
      "Building a practical understanding of LLMs and learning how to integrate them into useful applications.",
  },
  {
    icon: Code2,
    title: "RAG & LLM Applications",
    description:
      "Learning retrieval, embeddings, vector databases, and techniques for building knowledge-grounded AI systems.",
  },
  {
    icon: Server,
    title: "Python Backend",
    description:
      "Improving backend development with Python, FastAPI, REST APIs, authentication, and database integration.",
  },
  {
    icon: BookOpen,
    title: "AI System Design",
    description:
      "Studying evaluation, observability, caching, guardrails, and user feedback loops for reliable AI applications.",
  },
];

export default function CurrentlyLearning() {
  return (
    <section id="learning" className="section-padding bg-black">
      <div className="section-container">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-indigo-400">
            Currently Learning
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Learning,{" "}
            <span className="text-indigo-400">building, improving.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
            I'm continuously improving my engineering skills through hands-on
            development and focused learning in backend and Generative AI.
          </p>
        </motion.div>

        {/* Learning Areas */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {learningItems.map((item, index) => {
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
                <div className="flex items-start gap-4">
                  <div className="shrink-0 border border-indigo-400/20 bg-indigo-400/[0.06] p-2.5">
                    <Icon size={21} className="text-indigo-400" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-zinc-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

