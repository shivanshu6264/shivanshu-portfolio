
"use client";

import {
  BrainCircuit,
  Database,
  Bot,
  Network,
  Activity,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";

const focusAreas = [
  {
    icon: BrainCircuit,
    title: "Generative AI",
    description:
      "Learning how modern LLMs work and how to build useful applications around generative AI models.",
  },
  {
    icon: Database,
    title: "RAG",
    description:
      "Working with retrieval, embeddings, vector search, and knowledge-grounded LLM applications.",
  },
  {
    icon: Bot,
    title: "Agentic AI",
    description:
      "Exploring AI agents that can use tools, follow multi-step workflows, and interact with external systems.",
  },
  {
    icon: Network,
    title: "LLM Applications",
    description:
      "Learning practical patterns for building applications that integrate LLMs with software systems and APIs.",
  },
  {
    icon: Activity,
    title: "AI Evaluation",
    description:
      "Understanding evaluation methods, observability, user feedback, and ways to measure AI application quality.",
  },
  {
    icon: ShieldCheck,
    title: "Guardrails & MCP",
    description:
      "Exploring guardrails for reliable AI applications and Model Context Protocol for connecting models with tools.",
  },
];

export default function AIFocus() {
  return (
    <section id="ai-focus" className="section-padding bg-black">
      <div className="section-container">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-indigo-400">
            AI / GenAI Focus
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            What I'm currently{" "}
            <span className="text-indigo-400">exploring.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
            I'm developing my understanding of Generative AI by studying the
            technologies and system-design concepts behind practical AI
            applications.
          </p>
        </motion.div>

        {/* Focus Areas */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {focusAreas.map((area, index) => {
            const Icon = area.icon;

            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                }}
                className="border border-white/10 bg-white/[0.02] p-6 transition-colors duration-300 hover:border-indigo-400/30"
              >
                <div className="mb-5 inline-flex border border-indigo-400/20 bg-indigo-400/[0.06] p-2.5">
                  <Icon size={22} className="text-indigo-400" />
                </div>

                <h3 className="text-lg font-semibold text-white">
                  {area.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {area.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Current Direction */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 border-l-2 border-indigo-400/50 bg-white/[0.02] px-6 py-5"
        >
          <p className="text-sm leading-6 text-zinc-400">
            <span className="font-medium text-zinc-200">
              Current direction:
            </span>{" "}
            building a strong foundation in Generative AI, RAG, Agentic AI,
            and AI system design through hands-on learning and projects.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

